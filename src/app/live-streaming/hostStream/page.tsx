"use client";

import { Header } from "@/components/instantly/header";
import { Footer } from "@/components/instantly/footer";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

interface BroadcastState {
  isActive: boolean;
  pin: string | null;
}

function LocalCameraPreview() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const streamRef = useRef<MediaStream | null>(null);

  useEffect(() => {
    const startCamera = async () => {
      try {
        console.log("Requesting camera access...");
        const stream = await navigator.mediaDevices.getUserMedia({
          video: { width: 1280, height: 720 },
          audio: true,
        });

        console.log("Camera access granted, stream:", stream);
        streamRef.current = stream;

        if (videoRef.current) {
          videoRef.current.srcObject = stream;
          console.log("Video srcObject set");
        }
      } catch (err: any) {
        console.error("Failed to access camera:", err);
      }
    };

    startCamera();

    return () => {
      console.log("Cleaning up camera stream");
      if (streamRef.current) {
        streamRef.current.getTracks().forEach(track => track.stop());
      }
    };
  }, []);

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      muted
      onLoadedMetadata={() => console.log("Video metadata loaded")}
      onPlay={() => console.log("Video playing")}
      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
    />
  );
}

export default function HostStreamPage() {
  const router = useRouter();
  const [pin, setPin] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [broadcastState, setBroadcastState] = useState<BroadcastState>(() => {
    if (typeof window !== 'undefined') {
      const cached = localStorage.getItem('broadcast_state');
      if (cached) {
        try {
          return JSON.parse(cached);
        } catch {
          return { isActive: false, pin: null };
        }
      }
    }
    return { isActive: false, pin: null };
  });

  const isBroadcasting = broadcastState.isActive;

  useEffect(() => {
    localStorage.setItem('broadcast_state', JSON.stringify(broadcastState));
  }, [broadcastState]);

  const startBroadcast = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BACKEND_URL}/api/v1/livestream/create`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to start stream");
      }
    } catch (err: any) {
      // Silently continue with local preview
      console.log("Backend unavailable, showing local preview only");
    } finally {
      // Always show camera preview for demo purposes
      setBroadcastState({
        isActive: true,
        pin: pin,
      });
      setPin("");
      setLoading(false);
    }
  };

  const endBroadcast = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BACKEND_URL}/api/v1/livestream/end`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: broadcastState.pin }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to end stream");
      }
    } catch (err: any) {
      // Still end local preview even if backend fails
      console.warn("Backend error on end stream:", err.message);
    } finally {
      // Always end the local preview
      localStorage.removeItem('broadcast_state');
      setBroadcastState({ isActive: false, pin: null });
      setLoading(false);
      router.push('/live-streaming');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--instantly-bg-light))]">
      <Header />

      <div className="instantly-container py-6 md:py-8">
        <div className="mb-6 md:mb-8">
          <h1 className="text-[hsl(var(--instantly-text-dark))] mb-2">Host Live Stream</h1>
          <p className="text-sm md:text-base text-[hsl(var(--instantly-text-muted))]">
            Start broadcasting to your audience
          </p>
        </div>

        {error && (
          <div className="mb-4 md:mb-6 p-3 md:p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm md:text-base">
            {error}
          </div>
        )}

        {!isBroadcasting ? (
          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <h2 className="text-xl font-bold text-[hsl(var(--instantly-text-dark))] mb-4">
                Start Broadcasting
              </h2>
              <form onSubmit={startBroadcast} className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-[hsl(var(--instantly-text-dark))]">
                    Broadcaster PIN
                  </label>
                  <input
                    type="text"
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="Enter your PIN (e.g., 1234)"
                    className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 placeholder-gray-400 border border-gray-300 focus:ring-2 focus:ring-[hsl(var(--instantly-orange))] focus:outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading || !pin}
                  className="w-full bg-[hsl(var(--instantly-orange))] text-white py-3 rounded-lg font-semibold hover:bg-[hsl(var(--instantly-orange))]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Starting..." : "Start Broadcasting"}
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="bg-white rounded-xl overflow-hidden instantly-card-shadow">
              <div className="relative aspect-video bg-black">
                <LocalCameraPreview />
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-xl p-4 md:p-6 instantly-card-shadow">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <span className="flex h-3 w-3 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-[hsl(var(--instantly-text-dark))] mb-1">
                      Broadcasting Live (Preview)
                    </h3>
                    <p className="text-xs md:text-sm text-[hsl(var(--instantly-text-muted))]">
                      Local camera preview for demo purposes
                    </p>
                  </div>
                </div>
                <button
                  onClick={endBroadcast}
                  disabled={loading}
                  className="w-full sm:w-auto flex-shrink-0 bg-red-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? "Ending..." : "End Stream"}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
