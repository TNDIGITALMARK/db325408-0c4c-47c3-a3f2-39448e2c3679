"use client";

import { Header } from "@/components/instantly/header";
import { Footer } from "@/components/instantly/footer";
import { Video, Users, Eye, Heart, MessageSquare, Settings, MonitorPlay, Mic, MicOff, VideoOff, Radio, TrendingUp, DollarSign, Clock, BarChart3 } from "lucide-react";
import { useState } from "react";

export default function StreamingStudioPage() {
  const [isLive, setIsLive] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const [activeTab, setActiveTab] = useState<'studio' | 'analytics' | 'schedule'>('studio');

  const [streamSettings, setStreamSettings] = useState({
    title: "",
    description: "",
    category: "Home Repair",
    quality: "1080p",
  });

  const chatMessages = [
    { id: 1, user: "John D.", message: "Great tutorial!", timestamp: "Just now", isTip: false },
    { id: 2, user: "Maria S.", message: "sent you $5", timestamp: "1 min ago", isTip: true },
    { id: 3, user: "David K.", message: "Can you show that again?", timestamp: "2 min ago", isTip: false },
    { id: 4, user: "Emma W.", message: "This is so helpful!", timestamp: "3 min ago", isTip: false },
    { id: 5, user: "Alex T.", message: "sent you $10", timestamp: "5 min ago", isTip: true },
  ];

  const pastStreams = [
    { id: 1, title: "Kitchen Cabinet Installation", views: 234, duration: "1:23:45", earnings: "$47", date: "2 days ago" },
    { id: 2, title: "Bathroom Plumbing Basics", views: 456, duration: "0:58:12", earnings: "$68", date: "5 days ago" },
    { id: 3, title: "Electrical Panel Safety", views: 189, duration: "1:05:33", earnings: "$34", date: "1 week ago" },
    { id: 4, title: "Deck Building Tips", views: 321, duration: "1:45:20", earnings: "$82", date: "2 weeks ago" },
  ];

  const upcomingStreams = [
    { id: 1, title: "Advanced Plumbing Techniques", date: "Tomorrow, 2:00 PM", followers: 45 },
    { id: 2, title: "Home Electrical Q&A", date: "Friday, 6:00 PM", followers: 67 },
  ];

  const liveStats = {
    viewers: 127,
    likes: 234,
    tips: "$47",
    duration: "00:28:15",
    peakViewers: 145,
    engagement: "92%",
  };

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--instantly-bg-light))]">
      <Header />

      <div className="instantly-container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[hsl(var(--instantly-text-dark))] mb-2">Streaming Studio</h1>
          <p className="text-[hsl(var(--instantly-text-muted))]">
            Go live, share your expertise, and earn while you stream
          </p>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('studio')}
            className={`pb-4 px-2 font-semibold transition-colors ${
              activeTab === 'studio'
                ? 'text-[hsl(var(--instantly-navy))] border-b-2 border-[hsl(var(--instantly-navy))]'
                : 'text-[hsl(var(--instantly-text-muted))] hover:text-[hsl(var(--instantly-text-dark))]'
            }`}
          >
            Live Studio
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`pb-4 px-2 font-semibold transition-colors ${
              activeTab === 'analytics'
                ? 'text-[hsl(var(--instantly-navy))] border-b-2 border-[hsl(var(--instantly-navy))]'
                : 'text-[hsl(var(--instantly-text-muted))] hover:text-[hsl(var(--instantly-text-dark))]'
            }`}
          >
            Analytics
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`pb-4 px-2 font-semibold transition-colors ${
              activeTab === 'schedule'
                ? 'text-[hsl(var(--instantly-navy))] border-b-2 border-[hsl(var(--instantly-navy))]'
                : 'text-[hsl(var(--instantly-text-muted))] hover:text-[hsl(var(--instantly-text-dark))]'
            }`}
          >
            Schedule
          </button>
        </div>

        {/* Studio Tab */}
        {activeTab === 'studio' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Stream Area */}
            <div className="lg:col-span-2 space-y-6">
              {/* Camera Preview */}
              <div className="bg-white rounded-xl overflow-hidden instantly-card-shadow">
                <div className="relative bg-[hsl(var(--instantly-navy))] aspect-video flex items-center justify-center">
                  {isCameraOn ? (
                    <div className="text-center text-white">
                      <div className="text-8xl mb-4">👩‍🔧</div>
                      {isLive && (
                        <div className="absolute top-4 left-4 flex items-center gap-2 bg-red-500 text-white px-4 py-2 rounded-full">
                          <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
                          <span className="font-semibold">LIVE</span>
                        </div>
                      )}
                      {isLive && (
                        <div className="absolute top-4 right-4 bg-black/70 text-white px-4 py-2 rounded-full flex items-center gap-2">
                          <Eye size={16} />
                          <span className="font-semibold">{liveStats.viewers}</span>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="text-center text-white">
                      <VideoOff size={64} className="mx-auto mb-4 opacity-50" />
                      <p className="text-lg opacity-75">Camera Off</p>
                    </div>
                  )}
                </div>

                {/* Controls */}
                <div className="p-6 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => setIsCameraOn(!isCameraOn)}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                          isCameraOn
                            ? 'bg-[hsl(var(--instantly-navy))] text-white'
                            : 'bg-red-500 text-white'
                        }`}
                      >
                        {isCameraOn ? <Video size={20} /> : <VideoOff size={20} />}
                      </button>
                      <button
                        onClick={() => setIsMicOn(!isMicOn)}
                        className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                          isMicOn
                            ? 'bg-[hsl(var(--instantly-navy))] text-white'
                            : 'bg-red-500 text-white'
                        }`}
                      >
                        {isMicOn ? <Mic size={20} /> : <MicOff size={20} />}
                      </button>
                      <button className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                        <Settings size={20} className="text-[hsl(var(--instantly-text-dark))]" />
                      </button>
                      <button className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition-colors">
                        <MonitorPlay size={20} className="text-[hsl(var(--instantly-text-dark))]" />
                      </button>
                    </div>

                    <button
                      onClick={() => setIsLive(!isLive)}
                      className={`px-8 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 ${
                        isLive
                          ? 'bg-red-500 text-white hover:bg-red-600'
                          : 'bg-[hsl(var(--instantly-orange))] text-white hover:opacity-90'
                      }`}
                    >
                      {isLive ? (
                        <>
                          <Radio size={20} />
                          End Stream
                        </>
                      ) : (
                        <>
                          <Video size={20} />
                          Go Live
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* Stream Info */}
              {!isLive && (
                <div className="bg-white rounded-xl p-6 instantly-card-shadow">
                  <h3 className="text-[hsl(var(--instantly-text-dark))] mb-4">Stream Information</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                        Stream Title
                      </label>
                      <input
                        type="text"
                        value={streamSettings.title}
                        onChange={(e) => setStreamSettings({ ...streamSettings, title: e.target.value })}
                        placeholder="e.g., Advanced Kitchen Renovation Tips"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                        Description
                      </label>
                      <textarea
                        value={streamSettings.description}
                        onChange={(e) => setStreamSettings({ ...streamSettings, description: e.target.value })}
                        placeholder="Tell viewers what they'll learn in this stream..."
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                          Category
                        </label>
                        <select
                          value={streamSettings.category}
                          onChange={(e) => setStreamSettings({ ...streamSettings, category: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                        >
                          <option>Home Repair</option>
                          <option>Plumbing</option>
                          <option>Electrical</option>
                          <option>Carpentry</option>
                          <option>Tech Support</option>
                          <option>Cooking</option>
                          <option>Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                          Quality
                        </label>
                        <select
                          value={streamSettings.quality}
                          onChange={(e) => setStreamSettings({ ...streamSettings, quality: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                        >
                          <option>720p</option>
                          <option>1080p</option>
                          <option>1440p</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Live Stats */}
              {isLive && (
                <div className="bg-white rounded-xl p-6 instantly-card-shadow">
                  <h3 className="text-[hsl(var(--instantly-text-dark))] mb-4">Live Statistics</h3>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-[hsl(var(--instantly-feature-blue))] rounded-lg text-center">
                      <Eye className="mx-auto mb-2 text-[hsl(var(--instantly-navy))]" size={24} />
                      <div className="text-2xl font-bold text-[hsl(var(--instantly-text-dark))]">{liveStats.viewers}</div>
                      <div className="text-sm text-[hsl(var(--instantly-text-muted))]">Current Viewers</div>
                    </div>
                    <div className="p-4 bg-[hsl(var(--instantly-feature-green))] rounded-lg text-center">
                      <Heart className="mx-auto mb-2 text-[hsl(var(--instantly-navy))]" size={24} />
                      <div className="text-2xl font-bold text-[hsl(var(--instantly-text-dark))]">{liveStats.likes}</div>
                      <div className="text-sm text-[hsl(var(--instantly-text-muted))]">Likes</div>
                    </div>
                    <div className="p-4 bg-[hsl(var(--instantly-orange))] text-white rounded-lg text-center">
                      <DollarSign className="mx-auto mb-2" size={24} />
                      <div className="text-2xl font-bold">{liveStats.tips}</div>
                      <div className="text-sm">Tips Earned</div>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4 mt-4">
                    <div className="text-center">
                      <div className="text-sm text-[hsl(var(--instantly-text-muted))] mb-1">Duration</div>
                      <div className="font-semibold text-[hsl(var(--instantly-text-dark))]">{liveStats.duration}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-[hsl(var(--instantly-text-muted))] mb-1">Peak Viewers</div>
                      <div className="font-semibold text-[hsl(var(--instantly-text-dark))]">{liveStats.peakViewers}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm text-[hsl(var(--instantly-text-muted))] mb-1">Engagement</div>
                      <div className="font-semibold text-green-600">{liveStats.engagement}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Live Chat */}
              <div className="bg-white rounded-xl p-6 instantly-card-shadow">
                <h3 className="text-[hsl(var(--instantly-text-dark))] mb-4 flex items-center gap-2">
                  <MessageSquare size={20} />
                  {isLive ? 'Live Chat' : 'Chat Preview'}
                </h3>
                <div className="bg-[hsl(var(--instantly-bg-light))] rounded-lg h-96 mb-4 p-4 overflow-y-auto">
                  <div className="space-y-3">
                    {chatMessages.map((chat) => (
                      <div
                        key={chat.id}
                        className={`text-sm p-2 rounded ${
                          chat.isTip ? 'bg-yellow-100 border border-yellow-300' : ''
                        }`}
                      >
                        <div className="flex items-baseline justify-between mb-1">
                          <span className="font-semibold text-[hsl(var(--instantly-navy))]">
                            {chat.user}
                          </span>
                          <span className="text-xs text-[hsl(var(--instantly-text-muted))]">
                            {chat.timestamp}
                          </span>
                        </div>
                        <p className={`text-[hsl(var(--instantly-text-dark))] ${chat.isTip ? 'font-semibold flex items-center gap-1' : ''}`}>
                          {chat.isTip && <DollarSign size={14} className="text-green-600" />}
                          {chat.message}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Type a message..."
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                  />
                  <button className="bg-[hsl(var(--instantly-navy))] text-white px-6 py-3 rounded-lg hover:opacity-90 transition-opacity">
                    Send
                  </button>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="bg-[hsl(var(--instantly-feature-blue))] rounded-xl p-6">
                <h4 className="font-semibold text-[hsl(var(--instantly-text-dark))] mb-3">Streaming Tips</h4>
                <ul className="space-y-2 text-sm text-[hsl(var(--instantly-text-dark))]">
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--instantly-orange))]">✓</span>
                    <span>Test your equipment before going live</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--instantly-orange))]">✓</span>
                    <span>Engage with viewers in chat regularly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--instantly-orange))]">✓</span>
                    <span>Use good lighting and clear audio</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[hsl(var(--instantly-orange))]">✓</span>
                    <span>Share your expertise generously</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="space-y-6">
            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 instantly-card-shadow">
                <div className="flex items-center justify-between mb-4">
                  <Users className="text-[hsl(var(--instantly-navy))]" size={24} />
                  <TrendingUp className="text-green-500" size={20} />
                </div>
                <div className="text-3xl font-bold text-[hsl(var(--instantly-text-dark))] mb-1">1,247</div>
                <div className="text-sm text-[hsl(var(--instantly-text-muted))]">Total Followers</div>
              </div>

              <div className="bg-white rounded-xl p-6 instantly-card-shadow">
                <Eye className="text-[hsl(var(--instantly-navy))] mb-4" size={24} />
                <div className="text-3xl font-bold text-[hsl(var(--instantly-text-dark))] mb-1">12.4K</div>
                <div className="text-sm text-[hsl(var(--instantly-text-muted))]">Total Views</div>
              </div>

              <div className="bg-white rounded-xl p-6 instantly-card-shadow">
                <Clock className="text-[hsl(var(--instantly-navy))] mb-4" size={24} />
                <div className="text-3xl font-bold text-[hsl(var(--instantly-text-dark))] mb-1">42.5h</div>
                <div className="text-sm text-[hsl(var(--instantly-text-muted))]">Watch Time</div>
              </div>

              <div className="bg-white rounded-xl p-6 instantly-card-shadow">
                <DollarSign className="text-[hsl(var(--instantly-navy))] mb-4" size={24} />
                <div className="text-3xl font-bold text-[hsl(var(--instantly-orange))] mb-1">$847</div>
                <div className="text-sm text-[hsl(var(--instantly-text-muted))]">Stream Earnings</div>
              </div>
            </div>

            {/* Performance Chart */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-6 flex items-center gap-2">
                <BarChart3 size={20} />
                Performance Overview
              </h3>
              <div className="h-64 flex items-end justify-around gap-2 border-l-2 border-b-2 border-gray-200 pl-4 pb-4">
                {[65, 80, 45, 90, 75, 85, 70].map((height, index) => (
                  <div key={index} className="flex-1 flex flex-col items-center justify-end">
                    <div
                      className="w-full bg-gradient-to-t from-[hsl(var(--instantly-orange))] to-[hsl(var(--instantly-feature-blue))] rounded-t-lg transition-all hover:opacity-80"
                      style={{ height: `${height}%` }}
                    ></div>
                    <span className="text-xs text-[hsl(var(--instantly-text-muted))] mt-2">
                      {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][index]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Past Streams */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-6">Past Streams</h3>
              <div className="space-y-3">
                {pastStreams.map((stream) => (
                  <div
                    key={stream.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[hsl(var(--instantly-navy))] transition-colors"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-[hsl(var(--instantly-text-dark))] mb-1">
                        {stream.title}
                      </h4>
                      <div className="flex items-center gap-4 text-sm text-[hsl(var(--instantly-text-muted))]">
                        <span className="flex items-center gap-1">
                          <Eye size={14} />
                          {stream.views} views
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} />
                          {stream.duration}
                        </span>
                        <span>{stream.date}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[hsl(var(--instantly-orange))] mb-1">
                        {stream.earnings}
                      </div>
                      <button className="text-sm text-[hsl(var(--instantly-navy))] hover:underline">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Schedule Tab */}
        {activeTab === 'schedule' && (
          <div className="space-y-6">
            {/* Schedule New Stream */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-6">Schedule New Stream</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                    Stream Title
                  </label>
                  <input
                    type="text"
                    placeholder="Enter stream title"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                    Category
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent">
                    <option>Home Repair</option>
                    <option>Plumbing</option>
                    <option>Electrical</option>
                    <option>Carpentry</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                    Time
                  </label>
                  <input
                    type="time"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                  Description
                </label>
                <textarea
                  placeholder="Describe what viewers will learn..."
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                />
              </div>
              <div className="mt-6 flex gap-3">
                <button className="bg-[hsl(var(--instantly-orange))] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Schedule Stream
                </button>
                <button className="border-2 border-gray-300 text-[hsl(var(--instantly-text-dark))] px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                  Save as Draft
                </button>
              </div>
            </div>

            {/* Upcoming Streams */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-6">Upcoming Streams</h3>
              {upcomingStreams.length > 0 ? (
                <div className="space-y-4">
                  {upcomingStreams.map((stream) => (
                    <div
                      key={stream.id}
                      className="flex items-center justify-between p-4 bg-[hsl(var(--instantly-feature-blue))] rounded-lg"
                    >
                      <div>
                        <h4 className="font-semibold text-[hsl(var(--instantly-text-dark))] mb-1">
                          {stream.title}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-[hsl(var(--instantly-text-muted))]">
                          <span>{stream.date}</span>
                          <span className="flex items-center gap-1">
                            <Users size={14} />
                            {stream.followers} followers notified
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="px-4 py-2 bg-[hsl(var(--instantly-navy))] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                          Edit
                        </button>
                        <button className="px-4 py-2 border border-gray-300 text-[hsl(var(--instantly-text-dark))] rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                          Cancel
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <Video className="mx-auto text-[hsl(var(--instantly-text-muted))] mb-4" size={48} />
                  <p className="text-[hsl(var(--instantly-text-muted))]">
                    No upcoming streams scheduled
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
