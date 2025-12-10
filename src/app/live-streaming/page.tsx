"use client";

import { Header } from "@/components/instantly/header";
import { Footer } from "@/components/instantly/footer";
import { useState, useEffect } from "react";
import { LiveKitRoom, VideoConference, RoomAudioRenderer } from "@livekit/components-react";
import Link from "next/link";

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000";

export default function LiveStreamingPage() {
  const [viewerToken, setViewerToken] = useState<string | null>(null);
  const [livekitUrl, setLivekitUrl] = useState<string | null>(null);
  const [roomName, setRoomName] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Auto-join as viewer on mount
  useEffect(() => {
    const joinAsViewer = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/v1/livestream/join`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        });

        if (!response.ok) {
          throw new Error("Failed to join stream");
        }

        const data = await response.json();
        setViewerToken(data.token);
        setLivekitUrl(data.url);
        setRoomName(data.roomName);
      } catch (err: any) {
        console.error("Failed to join as viewer:", err);
        setError("Could not connect to stream.");
      }
    };

    joinAsViewer();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--instantly-bg-light))]">
      <Header />

      <div className="instantly-container py-6 md:py-8">
        {/* Page Header */}
        <div className="mb-6 md:mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-[hsl(var(--instantly-text-dark))] mb-2">Live Streaming</h1>
            <p className="text-sm md:text-base text-[hsl(var(--instantly-text-muted))]">
              Watch live demonstrations and skills
            </p>
          </div>
          <Link
            href="/live-streaming/hostStream"
            className="bg-[hsl(var(--instantly-orange))] text-white px-4 md:px-6 py-2 md:py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-sm md:text-base"
          >
            Start Streaming
          </Link>
        </div>

        {error && (
          <div className="mb-4 md:mb-6 p-3 md:p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg text-sm md:text-base">
            {error}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          {/* Main Stream Player */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl overflow-hidden instantly-card-shadow">
              {viewerToken && livekitUrl && roomName ? (
                <div className="relative aspect-video bg-black">
                  <LiveKitRoom
                    token={viewerToken}
                    serverUrl={livekitUrl}
                    connect={true}
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
                    <VideoConference />
                    <RoomAudioRenderer />
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
                      No Active Stream
                    </h3>
                    <p className="text-white/70 text-sm max-w-md mx-auto mb-4">
                      Waiting for a broadcaster to start streaming.
                    </p>
                    <Link
                      href="/live-streaming/hostStream"
                      className="inline-block bg-[hsl(var(--instantly-orange))] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity"
                    >
                      Start Broadcasting
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Info Sidebar */}
          <div className="space-y-4">
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
