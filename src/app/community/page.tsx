"use client";

import { Header } from "@/components/instantly/header";
import { Footer } from "@/components/instantly/footer";
import { Trophy, TrendingUp, Users, MessageSquare, Calendar, Award, Star, DollarSign, Video } from "lucide-react";
import { useState } from "react";

export default function CommunityPage() {
  const [activeTab, setActiveTab] = useState<'leaderboard' | 'discussions' | 'events'>('leaderboard');

  const topProviders = [
    { rank: 1, name: "Sarah Johnson", avatar: "👩‍🔧", earnings: 15420, jobs: 340, rating: 4.9, streak: 45 },
    { rank: 2, name: "Mike Chen", avatar: "👨‍🍳", earnings: 14850, jobs: 312, rating: 5.0, streak: 38 },
    { rank: 3, name: "Lisa Thompson", avatar: "👩‍💻", earnings: 14200, jobs: 428, rating: 4.8, streak: 52 },
    { rank: 4, name: "Carlos Rodriguez", avatar: "👷‍♂️", earnings: 13890, jobs: 289, rating: 4.9, streak: 41 },
    { rank: 5, name: "Emily Davis", avatar: "👩‍🔧", earnings: 13420, jobs: 267, rating: 5.0, streak: 33 },
    { rank: 6, name: "James Wilson", avatar: "🚴‍♂️", earnings: 12980, jobs: 521, rating: 4.7, streak: 28 },
    { rank: 7, name: "Amanda Brown", avatar: "👩‍🍳", earnings: 12450, jobs: 245, rating: 4.8, streak: 36 },
    { rank: 8, name: "David Kim", avatar: "👨‍💻", earnings: 12100, jobs: 298, rating: 4.9, streak: 42 },
  ];

  const discussions = [
    {
      id: 1,
      author: "Sarah Johnson",
      avatar: "👩‍🔧",
      title: "Best practices for home repair live streams",
      preview: "I've been streaming for 6 months and wanted to share what works...",
      replies: 23,
      likes: 45,
      category: "Tips & Tricks",
      timeAgo: "2 hours ago",
    },
    {
      id: 2,
      author: "Mike Chen",
      avatar: "👨‍🍳",
      title: "How to handle difficult delivery situations?",
      preview: "Had a challenging delivery today and learned some valuable lessons...",
      replies: 18,
      likes: 32,
      category: "Discussion",
      timeAgo: "5 hours ago",
    },
    {
      id: 3,
      author: "Lisa Thompson",
      avatar: "👩‍💻",
      title: "Tax preparation tips for independent contractors",
      preview: "Tax season is coming! Here's what I've learned after 3 years...",
      replies: 56,
      likes: 89,
      category: "Finance",
      timeAgo: "Yesterday",
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: "Monthly Providers Meetup",
      date: "Tomorrow, 6:00 PM",
      location: "San Francisco Community Center",
      attendees: 45,
      type: "In-Person",
    },
    {
      id: 2,
      title: "Live Streaming Best Practices Webinar",
      date: "Friday, 2:00 PM",
      location: "Online",
      attendees: 128,
      type: "Virtual",
    },
    {
      id: 3,
      title: "Financial Planning Workshop",
      date: "Next Monday, 7:00 PM",
      location: "Online",
      attendees: 92,
      type: "Virtual",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--instantly-bg-light))]">
      <Header />

      <div className="instantly-container py-6 md:py-8">
        {/* Header */}
        <div className="mb-6 md:mb-8 text-center lg:text-left">
          <h1 className="text-[hsl(var(--instantly-text-dark))] mb-2">Community Hub</h1>
          <p className="text-sm md:text-base text-[hsl(var(--instantly-text-muted))]">
            Connect with fellow providers, share knowledge, and celebrate success together
          </p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-8">
          <div className="bg-gradient-to-br from-[hsl(var(--instantly-orange))] to-[hsl(var(--instantly-navy))] text-white rounded-xl p-4 md:p-6 instantly-card-shadow col-span-2 md:col-span-1">
            <Users className="mb-2 md:mb-3" size={20} />
            <div className="text-2xl md:text-3xl font-bold mb-1">10,247</div>
            <div className="text-xs md:text-sm opacity-90">Active Providers</div>
          </div>

          <div className="bg-white rounded-xl p-4 md:p-6 instantly-card-shadow">
            <MessageSquare className="text-[hsl(var(--instantly-feature-blue))] mb-2 md:mb-3" size={20} />
            <div className="text-2xl md:text-3xl font-bold text-[hsl(var(--instantly-text-dark))] mb-1">1,842</div>
            <div className="text-xs md:text-sm text-[hsl(var(--instantly-text-muted))]">Discussions</div>
          </div>

          <div className="bg-white rounded-xl p-4 md:p-6 instantly-card-shadow">
            <Calendar className="text-[hsl(var(--instantly-feature-green))] mb-2 md:mb-3" size={20} />
            <div className="text-2xl md:text-3xl font-bold text-[hsl(var(--instantly-text-dark))] mb-1">24</div>
            <div className="text-xs md:text-sm text-[hsl(var(--instantly-text-muted))]">Upcoming Events</div>
          </div>

          <div className="bg-white rounded-xl p-4 md:p-6 instantly-card-shadow">
            <Award className="text-[hsl(var(--instantly-orange))] mb-2 md:mb-3" size={20} />
            <div className="text-2xl md:text-3xl font-bold text-[hsl(var(--instantly-text-dark))] mb-1">5.2M</div>
            <div className="text-xs md:text-sm text-[hsl(var(--instantly-text-muted))]">Total Earnings</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-3 md:gap-4 mb-4 md:mb-6 border-b border-gray-200 overflow-x-auto -mx-4 px-4 md:mx-0 md:px-0">
          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`pb-3 md:pb-4 px-2 text-sm md:text-base font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'leaderboard'
                ? 'text-[hsl(var(--instantly-navy))] border-b-2 border-[hsl(var(--instantly-navy))]'
                : 'text-[hsl(var(--instantly-text-muted))] hover:text-[hsl(var(--instantly-text-dark))]'
            }`}
          >
            🏆 Leaderboard
          </button>
          <button
            onClick={() => setActiveTab('discussions')}
            className={`pb-3 md:pb-4 px-2 text-sm md:text-base font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'discussions'
                ? 'text-[hsl(var(--instantly-navy))] border-b-2 border-[hsl(var(--instantly-navy))]'
                : 'text-[hsl(var(--instantly-text-muted))] hover:text-[hsl(var(--instantly-text-dark))]'
            }`}
          >
            💬 Discussions
          </button>
          <button
            onClick={() => setActiveTab('events')}
            className={`pb-3 md:pb-4 px-2 text-sm md:text-base font-semibold whitespace-nowrap transition-colors ${
              activeTab === 'events'
                ? 'text-[hsl(var(--instantly-navy))] border-b-2 border-[hsl(var(--instantly-navy))]'
                : 'text-[hsl(var(--instantly-text-muted))] hover:text-[hsl(var(--instantly-text-dark))]'
            }`}
          >
            📅 Events
          </button>
        </div>

        {/* Leaderboard Tab */}
        {activeTab === 'leaderboard' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            {/* Top 3 Podium */}
            <div className="lg:col-span-3 mb-4 md:mb-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {topProviders.slice(0, 3).map((provider, index) => {
                  const positions = [2, 1, 3]; // Center the #1
                  const colors = ['#C0C0C0', '#FFD700', '#CD7F32'];
                  const bgColors = ['bg-gray-100', 'bg-yellow-50', 'bg-orange-100'];
                  const actualPosition = positions[index];
                  const actualIndex = actualPosition - 1;

                  return (
                    <div
                      key={provider.rank}
                      className={`${bgColors[actualIndex]} rounded-xl p-6 text-center relative ${
                        provider.rank === 1 ? 'md:order-2 transform md:scale-105' : provider.rank === 2 ? 'md:order-1' : 'md:order-3'
                      }`}
                    >
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-xl"
                          style={{ backgroundColor: colors[actualIndex] }}
                        >
                          {provider.rank}
                        </div>
                      </div>
                      <div className="text-6xl mb-4 mt-4">{topProviders[actualIndex].avatar}</div>
                      <h3 className="text-xl font-bold text-[hsl(var(--instantly-text-dark))] mb-2">
                        {topProviders[actualIndex].name}
                      </h3>
                      <div className="flex items-center justify-center gap-2 text-[hsl(var(--instantly-orange))] mb-3">
                        <Star size={16} fill="currentColor" />
                        <span className="font-semibold">{topProviders[actualIndex].rating}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <div className="font-bold text-[hsl(var(--instantly-text-dark))]">
                            ${topProviders[actualIndex].earnings.toLocaleString()}
                          </div>
                          <div className="text-[hsl(var(--instantly-text-muted))]">Earned</div>
                        </div>
                        <div>
                          <div className="font-bold text-[hsl(var(--instantly-text-dark))]">
                            {topProviders[actualIndex].jobs}
                          </div>
                          <div className="text-[hsl(var(--instantly-text-muted))]">Jobs</div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Full Leaderboard */}
            <div className="lg:col-span-2 bg-white rounded-xl p-4 md:p-6 instantly-card-shadow">
              <h3 className="text-base md:text-lg text-[hsl(var(--instantly-text-dark))] mb-4 md:mb-6 flex items-center gap-2 font-bold">
                <Trophy size={18} className="md:w-5 md:h-5 text-[hsl(var(--instantly-orange))]" />
                Top Providers This Month
              </h3>
              <div className="space-y-2 md:space-y-3">
                {topProviders.map((provider) => (
                  <div
                    key={provider.rank}
                    className="flex items-center justify-between p-4 bg-[hsl(var(--instantly-bg-light))] rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 bg-[hsl(var(--instantly-navy))] text-white rounded-full flex items-center justify-center font-bold">
                        {provider.rank}
                      </div>
                      <div className="text-3xl">{provider.avatar}</div>
                      <div>
                        <div className="font-semibold text-[hsl(var(--instantly-text-dark))]">
                          {provider.name}
                        </div>
                        <div className="flex items-center gap-3 text-sm text-[hsl(var(--instantly-text-muted))]">
                          <span className="flex items-center gap-1">
                            <Star size={12} fill="currentColor" className="text-[hsl(var(--instantly-orange))]" />
                            {provider.rating}
                          </span>
                          <span>•</span>
                          <span>{provider.jobs} jobs</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            🔥 {provider.streak} day streak
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-[hsl(var(--instantly-orange))]">
                        ${provider.earnings.toLocaleString()}
                      </div>
                      <div className="text-xs text-[hsl(var(--instantly-text-muted))]">
                        This month
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements */}
            <div className="bg-white rounded-xl p-4 md:p-6 instantly-card-shadow">
              <h3 className="text-base md:text-lg text-[hsl(var(--instantly-text-dark))] mb-4 md:mb-6 font-bold">Achievements</h3>
              <div className="space-y-3 md:space-y-4">
                {[
                  { icon: "🏆", name: "Top Earner", desc: "Top 10 this month", color: "bg-yellow-100" },
                  { icon: "⭐", name: "5-Star Pro", desc: "100+ perfect ratings", color: "bg-blue-100" },
                  { icon: "🔥", name: "Hot Streak", desc: "30 consecutive days", color: "bg-red-100" },
                  { icon: "💪", name: "Workhorse", desc: "500+ jobs completed", color: "bg-green-100" },
                  { icon: "🎥", name: "Stream Star", desc: "50+ live streams", color: "bg-purple-100" },
                ].map((achievement, i) => (
                  <div key={i} className={`${achievement.color} rounded-lg p-4`}>
                    <div className="flex items-center gap-3">
                      <div className="text-3xl">{achievement.icon}</div>
                      <div>
                        <div className="font-semibold text-[hsl(var(--instantly-text-dark))]">
                          {achievement.name}
                        </div>
                        <div className="text-sm text-[hsl(var(--instantly-text-muted))]">
                          {achievement.desc}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Discussions Tab */}
        {activeTab === 'discussions' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="lg:col-span-2 space-y-3 md:space-y-4">
              <button className="w-full bg-[hsl(var(--instantly-orange))] text-white py-2.5 md:py-3 text-sm md:text-base rounded-lg font-semibold hover:opacity-90 transition-opacity">
                + Start New Discussion
              </button>

              {discussions.map((discussion) => (
                <div
                  key={discussion.id}
                  className="bg-white rounded-xl p-4 md:p-6 instantly-card-shadow hover:shadow-lg transition-shadow cursor-pointer"
                >
                  <div className="flex items-start gap-4">
                    <div className="text-4xl">{discussion.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-[hsl(var(--instantly-text-dark))]">
                          {discussion.author}
                        </span>
                        <span className="text-sm text-[hsl(var(--instantly-text-muted))]">
                          • {discussion.timeAgo}
                        </span>
                        <span className="px-2 py-1 bg-[hsl(var(--instantly-feature-blue))] text-[hsl(var(--instantly-navy))] text-xs font-semibold rounded-full">
                          {discussion.category}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-[hsl(var(--instantly-text-dark))] mb-2">
                        {discussion.title}
                      </h3>
                      <p className="text-[hsl(var(--instantly-text-muted))] mb-4">
                        {discussion.preview}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-[hsl(var(--instantly-text-muted))]">
                        <span className="flex items-center gap-1">
                          <MessageSquare size={16} />
                          {discussion.replies} replies
                        </span>
                        <span className="flex items-center gap-1">
                          ❤️ {discussion.likes} likes
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trending Topics */}
            <div className="space-y-4 md:space-y-6">
              <div className="bg-white rounded-xl p-5 md:p-6 instantly-card-shadow">
                <h3 className="text-base md:text-lg text-[hsl(var(--instantly-text-dark))] mb-3 md:mb-4 flex items-center gap-2 font-bold">
                  <TrendingUp size={18} className="md:w-5 md:h-5" />
                  Trending Topics
                </h3>
                <div className="space-y-2 md:space-y-3">
                  {['#StreamingTips', '#TaxAdvice', '#SafetyFirst', '#CustomerService', '#EarningGoals'].map((tag, i) => (
                    <button
                      key={i}
                      className="w-full text-left px-4 py-2 bg-[hsl(var(--instantly-bg-light))] rounded-lg hover:bg-gray-200 transition-colors font-semibold text-[hsl(var(--instantly-navy))]"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Events Tab */}
        {activeTab === 'events' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
            {upcomingEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl p-5 md:p-6 instantly-card-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-[hsl(var(--instantly-text-dark))] mb-2">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm text-[hsl(var(--instantly-text-muted))]">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} />
                        {event.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={16} className="text-[hsl(var(--instantly-text-muted))]" />
                        {event.location}
                      </div>
                      <div className="flex items-center gap-2">
                        <Users size={16} />
                        {event.attendees} attending
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    event.type === 'Virtual'
                      ? 'bg-purple-100 text-purple-700'
                      : 'bg-[hsl(var(--instantly-feature-green))] text-[hsl(var(--instantly-navy))]'
                  }`}>
                    {event.type}
                  </span>
                </div>
                <button className="w-full bg-[hsl(var(--instantly-navy))] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
