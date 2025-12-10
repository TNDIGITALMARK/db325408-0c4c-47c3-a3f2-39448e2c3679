"use client";

import { Header } from "@/components/instantly/header";
import { Footer } from "@/components/instantly/footer";
import { useState, useEffect } from "react";
import {
  LiveKitRoom,
  VideoConference,
  RoomAudioRenderer,
  useParticipants,
  useLocalParticipant,
  useRoomContext,
} from "@livekit/components-react";
import { useStreamState } from "@/hooks/useStreamState";
import { Track, ConnectionState } from "livekit-client";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

function StreamViewer({ isBroadcaster }: { isBroadcaster: boolean }) {
  const { localParticipant } = useLocalParticipant();
  const room = useRoomContext();
  const [cameraEnabled, setCameraEnabled] = useState(false);

  // Enable camera and mic for broadcaster after room is connected
  useEffect(() => {
    if (!isBroadcaster || !localParticipant || !room) return;

    const enableBroadcasting = async () => {
      // Check if room is connected
      if (room.state !== ConnectionState.Connected) {
        console.log("Waiting for room connection...");
        return;
      }

      // Check if already enabled
      if (cameraEnabled) return;

      try {
        console.log("Enabling camera and microphone...");
        await localParticipant.setCameraEnabled(true);
        await localParticipant.setMicrophoneEnabled(true);
        setCameraEnabled(true);
        console.log("Camera and mic enabled successfully");
      } catch (error) {
        console.error("Failed to enable camera/mic:", error);
      }
    };

    // Try immediately if connected
    if (room.state === ConnectionState.Connected) {
      enableBroadcasting();
    }

    // Also listen for connection state changes
    const handleStateChange = (state: ConnectionState) => {
      console.log("Room state changed:", state);
      if (state === ConnectionState.Connected) {
        enableBroadcasting();
      }
    };

    room.on('connectionStateChanged', handleStateChange);

    return () => {
      room.off('connectionStateChanged', handleStateChange);
    };
  }, [isBroadcaster, localParticipant, room, cameraEnabled]);

  return (
    <div className="w-full h-full">
      <VideoConference />
      <RoomAudioRenderer />
    </div>
  );
}

export default function LiveStreamingPage() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const streamState = useStreamState();

  // Auto-join as viewer on mount
  useEffect(() => {
    const joinAsViewer = async () => {
      // Skip if already have a token
      if (streamState.token) return;

      try {
        const response = await fetch(`${BACKEND_URL}/api/v1/livestream/join`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("Failed to join stream");
        }

        const data = await response.json();
        streamState.setStreamData({
          token: data.token,
          roomName: data.roomName,
          url: data.url,
          isBroadcaster: false,
        });
      } catch (err: any) {
        console.error("Failed to join as viewer:", err);
        setError("Could not connect to stream. Please try again later.");
      }
    };

    joinAsViewer();
  }, []);

  // Start broadcasting with PIN
  const startBroadcasting = async (e: React.FormEvent) => {
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

      const data = await response.json();
      streamState.setStreamData({
        token: data.token,
        roomName: data.roomName,
        url: data.url,
        isBroadcaster: true,
        pin: pin,
      });
      setPin(""); // Clear the input
    } catch (err: any) {
      setError(err.message || "Failed to start broadcasting");
    } finally {
      setLoading(false);
    }
  };

  // End broadcast
  const endBroadcast = async () => {
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${BACKEND_URL}/api/v1/livestream/end`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pin: streamState.pin }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to end stream");
      }

      // Clear broadcaster state
      streamState.clearStream();

      // Rejoin as viewer
      const viewerResponse = await fetch(`${BACKEND_URL}/api/v1/livestream/join`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
      });

      if (viewerResponse.ok) {
        const data = await viewerResponse.json();
        streamState.setStreamData({
          token: data.token,
          roomName: data.roomName,
          url: data.url,
          isBroadcaster: false,
        });
      }
    } catch (err: any) {
      setError(err.message || "Failed to end broadcast");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--instantly-bg-light))]">
      <Header />

      <div className="instantly-container py-6 md:py-8">
        {/* Page Header */}
        <div className="mb-6 md:mb-8 text-center lg:text-left">
          <h1 className="text-[hsl(var(--instantly-text-dark))] mb-2">Live Streaming</h1>
          <p className="text-sm md:text-base text-[hsl(var(--instantly-text-muted))]">
            Watch service providers showcase their skills in real-time
          </p>
        </div>

        {error && (
          <div className="mb-4 md:mb-6 p-3 md:p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm md:text-base">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Main Stream Player */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-white rounded-xl overflow-hidden instantly-card-shadow">
              {streamState.token && streamState.url && streamState.roomName ? (
                <div className="relative aspect-video bg-black">
                  <LiveKitRoom
                    token={streamState.token}
                    serverUrl={streamState.url}
                    connect={true}
                    audio={true}
                    video={true}
                    data-lk-theme="default"
                    style={{ height: '100%' }}
                    onError={(error) => {
                      console.error("LiveKit error:", error);
                      setError(`Connection error: ${error.message}`);
                    }}
                    onDisconnected={() => {
                      console.log("Disconnected from room");
                    }}
                    onConnected={() => {
                      console.log("Successfully connected to room!");
                    }}
                  >
                    <StreamViewer isBroadcaster={streamState.isBroadcaster} />
                  </LiveKitRoom>
                </div>
              ) : (
                <div className="relative bg-[hsl(var(--instantly-navy))] aspect-video flex items-center justify-center">
                  <div className="text-center text-white px-4">
                    <div className="mb-4">
                      <svg className="w-20 h-20 mx-auto text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Connecting...
                    </h3>
                    <p className="text-white/70 text-sm max-w-md mx-auto">
                      Setting up stream connection
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Stream Controls for Broadcaster */}
            {streamState.isBroadcaster && (
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
                        Broadcasting Live
                      </h3>
                      <p className="text-xs md:text-sm text-[hsl(var(--instantly-text-muted))]">
                        Your stream is live to all viewers
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
            )}
          </div>

          {/* Broadcaster Controls Sidebar */}
          <div className="space-y-4">
            {!streamState.isBroadcaster && (
              <div className="bg-[hsl(var(--instantly-navy))] text-white rounded-xl p-5 md:p-6 instantly-card-shadow">
                <h3 className="text-lg md:text-xl font-bold mb-2">Start Broadcasting</h3>
                <p className="text-white/80 text-xs md:text-sm mb-4 md:mb-6">
                  Enter your PIN to start streaming
                </p>

                <form onSubmit={startBroadcasting} className="space-y-3 md:space-y-4">
                  <div>
                    <label className="block text-xs md:text-sm font-semibold mb-2 text-white">
                      Broadcaster PIN
                    </label>
                    <input
                      type="text"
                      value={pin}
                      onChange={(e) => setPin(e.target.value)}
                      placeholder="Enter your PIN (e.g., 1234)"
                      className="w-full px-3 md:px-4 py-2.5 md:py-3 text-base rounded-lg bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-[hsl(var(--instantly-orange))] focus:outline-none border-0"
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading || !pin}
                    className="w-full bg-[hsl(var(--instantly-orange))] text-white py-2.5 md:py-3 rounded-lg font-semibold hover:bg-[hsl(var(--instantly-orange))]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? "Starting..." : "Start Streaming"}
                  </button>
                </form>

                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-white/20">
                  <p className="text-xs text-white/60 mb-2 md:mb-3">What you'll get:</p>
                  <ul className="space-y-1.5 md:space-y-2 text-xs md:text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(var(--instantly-orange))] mt-0.5">✓</span>
                      <span>Share your camera and audio</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(var(--instantly-orange))] mt-0.5">✓</span>
                      <span>Reach up to 10 viewers</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[hsl(var(--instantly-orange))] mt-0.5">✓</span>
                      <span>Simple and secure</span>
                    </li>
                  </ul>
                </div>
              </div>
            )}

            {/* Info Card */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100 rounded-xl p-5 md:p-6 instantly-card-shadow">
              <div className="flex items-center gap-2 mb-3">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-[hsl(var(--instantly-navy))]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-base md:text-lg font-bold text-[hsl(var(--instantly-text-dark))]">
                  About Live Streaming
                </h3>
              </div>
              <p className="text-xs md:text-sm text-[hsl(var(--instantly-text-muted))] mb-3 md:mb-4">
                Watch or broadcast live demonstrations of services and skills.
              </p>
              <div className="space-y-2 md:space-y-2.5 text-xs md:text-sm">
                <div className="flex items-center gap-3 text-[hsl(var(--instantly-text-dark))]">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  </div>
                  <span>Real-time video streaming</span>
                </div>
                <div className="flex items-center gap-3 text-[hsl(var(--instantly-text-dark))]">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  </div>
                  <span>Low latency connection</span>
                </div>
                <div className="flex items-center gap-3 text-[hsl(var(--instantly-text-dark))]">
                  <div className="flex-shrink-0 w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  </div>
                  <span>Secure streaming</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
