"use client";

import { Header } from "@/components/instantly/header";
import { Footer } from "@/components/instantly/footer";
import { Video, Users, Eye, MessageSquare, Heart } from "lucide-react";
import { useState } from "react";

const liveStreams = [
  {
    id: 1,
    provider: "Sarah Johnson",
    title: "Kitchen Cabinet Installation Tutorial",
    category: "Home Repair",
    viewers: 23,
    likes: 45,
    duration: "28:15",
    thumbnail: "🔧"
  },
  {
    id: 2,
    provider: "Mike Chen",
    title: "Professional Meal Prep Tips",
    category: "Cooking",
    viewers: 67,
    likes: 89,
    duration: "15:42",
    thumbnail: "🍳"
  },
  {
    id: 3,
    provider: "Lisa Thompson",
    title: "Smartphone Repair Demonstration",
    category: "Tech Support",
    viewers: 45,
    likes: 72,
    duration: "22:33",
    thumbnail: "💻"
  },
  {
    id: 4,
    provider: "Carlos Rodriguez",
    title: "Furniture Assembly Tips & Tricks",
    category: "Moving Services",
    viewers: 12,
    likes: 28,
    duration: "19:08",
    thumbnail: "📦"
  },
];

export default function LiveStreamingPage() {
  const [selectedStream, setSelectedStream] = useState(liveStreams[0]);
  const [chatMessage, setChatMessage] = useState('');

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--instantly-bg-light))]">
      <Header />

      <div className="instantly-container py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-[hsl(var(--instantly-text-dark))] mb-2">Live Streaming</h1>
          <p className="text-[hsl(var(--instantly-text-muted))]">
            Watch service providers showcase their skills in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Stream Player */}
          <div className="lg:col-span-2 space-y-4">
            {/* Video Player */}
            <div className="bg-white rounded-xl overflow-hidden instantly-card-shadow">
              <div className="relative bg-[hsl(var(--instantly-navy))] aspect-video flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-8xl mb-4">{selectedStream.thumbnail}</div>
                  <div className="flex items-center justify-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full mb-4">
                    <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                    <span className="font-semibold">LIVE</span>
                  </div>
                  <p className="text-xl font-semibold">{selectedStream.title}</p>
                </div>
              </div>

              {/* Stream Info */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-[hsl(var(--instantly-text-dark))] mb-2">
                      {selectedStream.title}
                    </h2>
                    <p className="text-[hsl(var(--instantly-text-muted))]">
                      by <span className="font-semibold text-[hsl(var(--instantly-navy))]">{selectedStream.provider}</span>
                    </p>
                  </div>
                  <button className="bg-[hsl(var(--instantly-orange))] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Follow
                  </button>
                </div>

                <div className="flex items-center gap-6 text-sm text-[hsl(var(--instantly-text-muted))]">
                  <div className="flex items-center gap-2">
                    <Eye size={18} />
                    <span>{selectedStream.viewers} watching</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart size={18} />
                    <span>{selectedStream.likes} likes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Video size={18} />
                    <span>{selectedStream.duration}</span>
                  </div>
                  <span className="px-3 py-1 bg-[hsl(var(--instantly-feature-blue))] text-[hsl(var(--instantly-navy))] rounded-full font-semibold text-xs">
                    {selectedStream.category}
                  </span>
                </div>
              </div>
            </div>

            {/* Live Chat */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-4 flex items-center gap-2">
                <MessageSquare size={20} />
                Live Chat
              </h3>

              <div className="bg-[hsl(var(--instantly-bg-light))] rounded-lg h-64 mb-4 p-4 overflow-y-auto">
                <div className="space-y-3">
                  {[
                    { user: 'John D.', message: 'This is really helpful!', time: '2 min ago' },
                    { user: 'Maria S.', message: 'Can you show that step again?', time: '3 min ago' },
                    { user: 'David K.', message: 'Great tutorial! Following along.', time: '5 min ago' },
                    { user: 'Emma W.', message: 'What tools do you recommend?', time: '7 min ago' },
                    { user: 'Alex T.', message: 'Very professional work!', time: '10 min ago' },
                  ].map((chat, i) => (
                    <div key={i} className="text-sm">
                      <div className="flex items-baseline gap-2">
                        <span className="font-semibold text-[hsl(var(--instantly-navy))]">{chat.user}</span>
                        <span className="text-xs text-[hsl(var(--instantly-text-muted))]">{chat.time}</span>
                      </div>
                      <p className="text-[hsl(var(--instantly-text-dark))] ml-2">{chat.message}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <input
                  type="text"
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                />
                <button className="bg-[hsl(var(--instantly-navy))] text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Send
                </button>
              </div>
            </div>
          </div>

          {/* Live Streams Sidebar */}
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-4 flex items-center gap-2">
                <Users size={20} />
                Other Live Streams
              </h3>

              <div className="space-y-3">
                {liveStreams.map((stream) => (
                  <button
                    key={stream.id}
                    onClick={() => setSelectedStream(stream)}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedStream.id === stream.id
                        ? 'bg-[hsl(var(--instantly-feature-blue))] border-2 border-[hsl(var(--instantly-navy))]'
                        : 'bg-[hsl(var(--instantly-bg-light))] hover:bg-gray-200'
                    }`}
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center text-3xl flex-shrink-0">
                        {stream.thumbnail}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
                          <span className="text-xs font-semibold text-red-500">LIVE</span>
                        </div>
                        <h4 className="font-semibold text-sm text-[hsl(var(--instantly-text-dark))] line-clamp-2 mb-1">
                          {stream.title}
                        </h4>
                        <p className="text-xs text-[hsl(var(--instantly-text-muted))] mb-1">
                          {stream.provider}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-[hsl(var(--instantly-text-muted))]">
                          <span className="flex items-center gap-1">
                            <Eye size={12} />
                            {stream.viewers}
                          </span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Benefits Card */}
            <div className="bg-[hsl(var(--instantly-navy))] text-white rounded-xl p-6 instantly-card-shadow">
              <h3 className="text-xl font-bold mb-3">Start Live Streaming</h3>
              <p className="text-white/90 text-sm mb-4">
                Share your skills, build your audience, and earn while you stream.
              </p>
              <ul className="space-y-2 text-sm mb-4">
                <li className="flex items-start gap-2">
                  <span className="text-[hsl(var(--instantly-orange))]">✓</span>
                  <span>Showcase your expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[hsl(var(--instantly-orange))]">✓</span>
                  <span>Connect with customers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[hsl(var(--instantly-orange))]">✓</span>
                  <span>Earn tips and followers</span>
                </li>
              </ul>
              <button className="w-full bg-[hsl(var(--instantly-orange))] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Start Streaming
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
