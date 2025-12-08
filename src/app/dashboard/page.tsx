"use client";

import { Header } from "@/components/instantly/header";
import { Footer } from "@/components/instantly/footer";
import { DollarSign, Users, Clock, TrendingUp, Video, MessageSquare, User, Briefcase, BarChart3 } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function ProviderDashboard() {
  const [activeTab, setActiveTab] = useState<'overview' | 'streaming' | 'jobs'>('overview');

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--instantly-bg-light))]">
      <Header />

      <div className="instantly-container py-8">
        {/* Dashboard Header */}
        <div className="mb-8">
          <h1 className="text-[hsl(var(--instantly-text-dark))] mb-2">Provider Dashboard</h1>
          <p className="text-[hsl(var(--instantly-text-muted))]">Welcome back, Sarah! Here's your performance overview.</p>
        </div>

        {/* Quick Navigation */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Link
            href="/dashboard/profile"
            className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg p-4 instantly-card-shadow hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <User className="text-purple-600" size={20} />
              </div>
              <div>
                <div className="font-semibold text-[hsl(var(--instantly-text-dark))]">Profile</div>
                <div className="text-xs text-[hsl(var(--instantly-text-muted))]">Manage your info</div>
              </div>
            </div>
          </Link>

          <Link
            href="/dashboard/jobs"
            className="bg-gradient-to-br from-orange-100 to-red-100 rounded-lg p-4 instantly-card-shadow hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Briefcase className="text-[hsl(var(--instantly-orange))]" size={20} />
              </div>
              <div>
                <div className="font-semibold text-[hsl(var(--instantly-text-dark))]">Jobs</div>
                <div className="text-xs text-[hsl(var(--instantly-text-muted))]">Manage deliveries</div>
              </div>
            </div>
          </Link>

          <Link
            href="/dashboard/streaming"
            className="bg-gradient-to-br from-red-100 to-pink-100 rounded-lg p-4 instantly-card-shadow hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <Video className="text-red-600" size={20} />
              </div>
              <div>
                <div className="font-semibold text-[hsl(var(--instantly-text-dark))]">Streaming</div>
                <div className="text-xs text-[hsl(var(--instantly-text-muted))]">Go live now</div>
              </div>
            </div>
          </Link>

          <Link
            href="/dashboard/earnings"
            className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg p-4 instantly-card-shadow hover:shadow-lg transition-all group"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <BarChart3 className="text-green-600" size={20} />
              </div>
              <div>
                <div className="font-semibold text-[hsl(var(--instantly-text-dark))]">Earnings</div>
                <div className="text-xs text-[hsl(var(--instantly-text-muted))]">Cash out anytime</div>
              </div>
            </div>
          </Link>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 instantly-card-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--instantly-feature-green))] flex items-center justify-center">
                <DollarSign className="text-[hsl(var(--instantly-navy))]" size={24} />
              </div>
              <TrendingUp className="text-green-500" size={20} />
            </div>
            <div className="text-3xl font-bold text-[hsl(var(--instantly-text-dark))] mb-1">$2,847</div>
            <div className="text-sm text-[hsl(var(--instantly-text-muted))]">This Week</div>
          </div>

          <div className="bg-white rounded-xl p-6 instantly-card-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--instantly-feature-blue))] flex items-center justify-center">
                <Users className="text-[hsl(var(--instantly-navy))]" size={24} />
              </div>
            </div>
            <div className="text-3xl font-bold text-[hsl(var(--instantly-text-dark))] mb-1">127</div>
            <div className="text-sm text-[hsl(var(--instantly-text-muted))]">Completed Jobs</div>
          </div>

          <div className="bg-white rounded-xl p-6 instantly-card-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--instantly-feature-green))] flex items-center justify-center">
                <Clock className="text-[hsl(var(--instantly-navy))]" size={24} />
              </div>
            </div>
            <div className="text-3xl font-bold text-[hsl(var(--instantly-text-dark))] mb-1">32</div>
            <div className="text-sm text-[hsl(var(--instantly-text-muted))]">Hours This Week</div>
          </div>

          <div className="bg-white rounded-xl p-6 instantly-card-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-[hsl(var(--instantly-orange))] text-white flex items-center justify-center">
                <span className="text-xl font-bold">4.9</span>
              </div>
            </div>
            <div className="text-3xl font-bold text-[hsl(var(--instantly-text-dark))] mb-1">★★★★★</div>
            <div className="text-sm text-[hsl(var(--instantly-text-muted))]">Average Rating</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('overview')}
            className={`pb-4 px-2 font-semibold transition-colors ${
              activeTab === 'overview'
                ? 'text-[hsl(var(--instantly-navy))] border-b-2 border-[hsl(var(--instantly-navy))]'
                : 'text-[hsl(var(--instantly-text-muted))] hover:text-[hsl(var(--instantly-text-dark))]'
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab('streaming')}
            className={`pb-4 px-2 font-semibold transition-colors ${
              activeTab === 'streaming'
                ? 'text-[hsl(var(--instantly-navy))] border-b-2 border-[hsl(var(--instantly-navy))]'
                : 'text-[hsl(var(--instantly-text-muted))] hover:text-[hsl(var(--instantly-text-dark))]'
            }`}
          >
            Live Streaming
          </button>
          <button
            onClick={() => setActiveTab('jobs')}
            className={`pb-4 px-2 font-semibold transition-colors ${
              activeTab === 'jobs'
                ? 'text-[hsl(var(--instantly-navy))] border-b-2 border-[hsl(var(--instantly-navy))]'
                : 'text-[hsl(var(--instantly-text-muted))] hover:text-[hsl(var(--instantly-text-dark))]'
            }`}
          >
            Job Queue
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {[
                  { type: 'delivery', title: 'Fresh groceries delivered', time: '15 minutes ago', amount: '$28' },
                  { type: 'stream', title: 'Kitchen repair tutorial', time: '2 hours ago', viewers: '23 viewers' },
                  { type: 'delivery', title: 'Restaurant takeout', time: '4 hours ago', amount: '$18' },
                  { type: 'stream', title: 'Tech support session', time: 'Yesterday', viewers: '45 viewers' },
                ].map((activity, i) => (
                  <div key={i} className="flex items-start gap-3 pb-3 border-b border-gray-100 last:border-0">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      activity.type === 'stream'
                        ? 'bg-[hsl(var(--instantly-feature-blue))]'
                        : 'bg-[hsl(var(--instantly-feature-green))]'
                    }`}>
                      {activity.type === 'stream' ? (
                        <Video className="text-[hsl(var(--instantly-navy))]" size={20} />
                      ) : (
                        <DollarSign className="text-[hsl(var(--instantly-navy))]" size={20} />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-[hsl(var(--instantly-text-dark))]">{activity.title}</div>
                      <div className="text-sm text-[hsl(var(--instantly-text-muted))]">{activity.time}</div>
                    </div>
                    <div className="font-semibold text-[hsl(var(--instantly-navy))]">
                      {'amount' in activity ? activity.amount : activity.viewers}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Interaction */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-4">Community Highlights</h3>
              <div className="space-y-4">
                {[
                  { user: 'Mike C.', message: 'Great delivery service! Always on time.', rating: 5 },
                  { user: 'Lisa T.', message: 'Your live stream tutorials are so helpful!', rating: 5 },
                  { user: 'Carlos M.', message: 'Professional and efficient. Highly recommend!', rating: 5 },
                  { user: 'Emma W.', message: 'Best handywoman in the area. Thank you!', rating: 5 },
                ].map((review, i) => (
                  <div key={i} className="pb-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-[hsl(var(--instantly-text-dark))]">{review.user}</div>
                      <div className="text-[hsl(var(--instantly-orange))]">{'★'.repeat(review.rating)}</div>
                    </div>
                    <p className="text-sm text-[hsl(var(--instantly-text-muted))]">{review.message}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'streaming' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Live Stream Interface */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-4">Start Live Stream</h3>
              <div className="bg-[hsl(var(--instantly-navy))] rounded-lg aspect-video mb-4 flex items-center justify-center text-white">
                <div className="text-center">
                  <Video size={48} className="mx-auto mb-2" />
                  <p>Camera Preview</p>
                </div>
              </div>
              <div className="space-y-3">
                <input
                  type="text"
                  placeholder="Stream Title"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                />
                <textarea
                  placeholder="Stream Description"
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                />
                <button className="w-full bg-[hsl(var(--instantly-orange))] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                  <Video size={20} />
                  Go Live
                </button>
              </div>
            </div>

            {/* Stream Chat */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-4">Live Chat</h3>
              <div className="bg-gray-50 rounded-lg h-64 mb-4 p-4 overflow-y-auto">
                <div className="space-y-3">
                  {[
                    { user: 'Viewer1', msg: 'Great tutorial!' },
                    { user: 'Viewer2', msg: 'Can you show that step again?' },
                    { user: 'Viewer3', msg: 'This is so helpful, thank you!' },
                  ].map((chat, i) => (
                    <div key={i} className="text-sm">
                      <span className="font-semibold text-[hsl(var(--instantly-navy))]">{chat.user}: </span>
                      <span className="text-[hsl(var(--instantly-text-dark))]">{chat.msg}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                />
                <button className="bg-[hsl(var(--instantly-navy))] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  <MessageSquare size={20} />
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'jobs' && (
          <div className="bg-white rounded-xl p-6 instantly-card-shadow">
            <h3 className="text-[hsl(var(--instantly-text-dark))] mb-6">Available Jobs</h3>
            <div className="space-y-4">
              {[
                { title: 'Fresh groceries delivery', location: '2.3 miles away', pay: '$28', time: '15 min' },
                { title: 'Restaurant takeout pickup', location: '1.1 miles away', pay: '$18', time: '10 min' },
                { title: 'Pharmacy prescription', location: '0.8 miles away', pay: '$12', time: '8 min' },
                { title: 'Hardware store supplies', location: '3.2 miles away', pay: '$35', time: '20 min' },
              ].map((job, i) => (
                <div key={i} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[hsl(var(--instantly-navy))] transition-colors">
                  <div>
                    <h4 className="font-semibold text-[hsl(var(--instantly-text-dark))] mb-1">{job.title}</h4>
                    <div className="flex items-center gap-4 text-sm text-[hsl(var(--instantly-text-muted))]">
                      <span>📍 {job.location}</span>
                      <span>⏱️ {job.time}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-2xl font-bold text-[hsl(var(--instantly-orange))]">{job.pay}</div>
                    <button className="bg-[hsl(var(--instantly-navy))] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                      Accept
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
