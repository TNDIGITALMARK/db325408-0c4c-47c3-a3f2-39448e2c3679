"use client";

import { Header } from "@/components/instantly/header";
import { Footer } from "@/components/instantly/footer";
import { Search, MapPin, Star, Clock, Video, MessageCircle } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const serviceProviders = [
  {
    id: 1,
    name: "Sarah Johnson",
    username: "sarah_handywoman",
    specialty: "Home Repairs & Maintenance",
    rating: 4.9,
    jobs: 127,
    isLive: true,
    viewers: 23,
    distance: "1.2 miles",
    price: "$45/hr",
    image: "🔧"
  },
  {
    id: 2,
    name: "Mike Chen",
    username: "mike_chef_delivery",
    specialty: "Meal Delivery & Catering",
    rating: 5.0,
    jobs: 89,
    isLive: false,
    viewers: 0,
    distance: "0.8 miles",
    price: "$25/delivery",
    image: "🍳"
  },
  {
    id: 3,
    name: "Lisa Thompson",
    username: "lisa_tech_support",
    specialty: "Remote Tech Support",
    rating: 4.8,
    jobs: 234,
    isLive: true,
    viewers: 45,
    distance: "Remote",
    price: "$60/hr",
    image: "💻"
  },
  {
    id: 4,
    name: "Carlos Rodriguez",
    username: "carlos_moving_pro",
    specialty: "Moving & Furniture Setup",
    rating: 4.9,
    jobs: 156,
    isLive: false,
    viewers: 0,
    distance: "2.5 miles",
    price: "$80/hr",
    image: "📦"
  }
];

const activeDeliveries = [
  { id: 1, type: "groceries", status: "On the way", eta: "15 min", provider: "Mike Chen" },
  { id: 2, type: "restaurant", status: "Preparing", eta: "22 min", provider: "Sarah Johnson" },
  { id: 3, type: "pharmacy", status: "Picked up", eta: "8 min", provider: "Carlos Rodriguez" },
];

export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'live' | 'delivery'>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProviders = serviceProviders.filter(provider => {
    if (activeCategory === 'live') return provider.isLive;
    if (activeCategory === 'delivery') return provider.specialty.includes('Delivery');
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--instantly-bg-light))] relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <Image
          src="/generated/pattern-background.png"
          alt=""
          fill
          className="object-cover"
        />
      </div>

      <Header />

      <div className="instantly-container py-8 relative z-10">
        {/* Page Header */}
        <div className="mb-8 text-center">
          <h1 className="text-[hsl(var(--instantly-text-dark))] mb-2">Find Service Providers</h1>
          <p className="text-[hsl(var(--instantly-text-muted))] max-w-2xl mx-auto">
            Connect with verified local providers for live streaming services and instant delivery
          </p>
        </div>

        {/* Search Bar */}
        <div className="bg-white rounded-xl p-4 instantly-card-shadow mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[hsl(var(--instantly-text-muted))]" size={20} />
              <input
                type="text"
                placeholder="Search for services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
              />
            </div>
            <div className="relative">
              <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-[hsl(var(--instantly-text-muted))]" size={20} />
              <input
                type="text"
                placeholder="Location"
                className="w-full md:w-48 pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
              />
            </div>
            <button className="bg-[hsl(var(--instantly-orange))] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
              Search
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex gap-4 mb-8 overflow-x-auto pb-2">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
              activeCategory === 'all'
                ? 'bg-[hsl(var(--instantly-navy))] text-white'
                : 'bg-white text-[hsl(var(--instantly-text-dark))] hover:bg-gray-100'
            }`}
          >
            All Services
          </button>
          <button
            onClick={() => setActiveCategory('live')}
            className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
              activeCategory === 'live'
                ? 'bg-[hsl(var(--instantly-navy))] text-white'
                : 'bg-white text-[hsl(var(--instantly-text-dark))] hover:bg-gray-100'
            }`}
          >
            🔴 Live Now
          </button>
          <button
            onClick={() => setActiveCategory('delivery')}
            className={`px-6 py-2 rounded-full font-semibold whitespace-nowrap transition-colors ${
              activeCategory === 'delivery'
                ? 'bg-[hsl(var(--instantly-navy))] text-white'
                : 'bg-white text-[hsl(var(--instantly-text-dark))] hover:bg-gray-100'
            }`}
          >
            Instant Delivery
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Service Providers List */}
          <div className="lg:col-span-2 space-y-4">
            {filteredProviders.map((provider) => (
              <div key={provider.id} className="bg-white rounded-xl p-6 instantly-card-shadow hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  {/* Provider Avatar */}
                  <div className="w-20 h-20 bg-[hsl(var(--instantly-feature-blue))] rounded-xl flex items-center justify-center text-4xl flex-shrink-0">
                    {provider.image}
                  </div>

                  {/* Provider Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-[hsl(var(--instantly-text-dark))]">{provider.name}</h3>
                        <p className="text-sm text-[hsl(var(--instantly-text-muted))]">@{provider.username}</p>
                      </div>
                      {provider.isLive && (
                        <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                          LIVE
                        </span>
                      )}
                    </div>

                    <p className="text-[hsl(var(--instantly-text-dark))] font-semibold mb-3">{provider.specialty}</p>

                    <div className="flex flex-wrap items-center gap-4 text-sm mb-4">
                      <div className="flex items-center gap-1 text-[hsl(var(--instantly-orange))]">
                        <Star size={16} fill="currentColor" />
                        <span className="font-semibold">{provider.rating}</span>
                      </div>
                      <div className="text-[hsl(var(--instantly-text-muted))]">
                        {provider.jobs} completed jobs
                      </div>
                      <div className="text-[hsl(var(--instantly-text-muted))] flex items-center gap-1">
                        <MapPin size={16} />
                        {provider.distance}
                      </div>
                      {provider.isLive && (
                        <div className="text-[hsl(var(--instantly-text-muted))] flex items-center gap-1">
                          <Video size={16} />
                          {provider.viewers} watching
                        </div>
                      )}
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="text-2xl font-bold text-[hsl(var(--instantly-navy))]">{provider.price}</div>
                      <div className="flex gap-2">
                        {provider.isLive && (
                          <button className="bg-red-500 text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                            <Video size={18} />
                            Watch Live
                          </button>
                        )}
                        <button className="bg-[hsl(var(--instantly-navy))] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                          <MessageCircle size={18} />
                          Contact
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Active Deliveries Sidebar */}
          <div className="space-y-6">
            {/* Tracking Widget */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow sticky top-24">
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-4 flex items-center gap-2">
                <Clock size={20} />
                Active Deliveries
              </h3>
              <div className="space-y-4">
                {activeDeliveries.map((delivery) => (
                  <div key={delivery.id} className="p-4 bg-[hsl(var(--instantly-bg-light))] rounded-lg">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <div className="font-semibold text-[hsl(var(--instantly-text-dark))] capitalize">
                          {delivery.type}
                        </div>
                        <div className="text-xs text-[hsl(var(--instantly-text-muted))]">
                          {delivery.provider}
                        </div>
                      </div>
                      <div className="text-[hsl(var(--instantly-orange))] font-bold">{delivery.eta}</div>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-[hsl(var(--instantly-orange))]"
                          style={{ width: delivery.status === 'Picked up' ? '80%' : '40%' }}
                        ></div>
                      </div>
                      <span className="text-xs text-[hsl(var(--instantly-text-muted))] whitespace-nowrap">
                        {delivery.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Order */}
              <button className="w-full mt-4 bg-[hsl(var(--instantly-orange))] text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Request Instant Delivery
              </button>
            </div>

            {/* Community Reviews */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-4">Recent Reviews</h3>
              <div className="space-y-4">
                {[
                  { name: "John D.", rating: 5, comment: "Outstanding service!" },
                  { name: "Maria S.", rating: 5, comment: "Very professional and quick." },
                  { name: "David K.", rating: 4, comment: "Great experience overall." },
                ].map((review, i) => (
                  <div key={i} className="pb-3 border-b border-gray-100 last:border-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-semibold text-sm text-[hsl(var(--instantly-text-dark))]">{review.name}</span>
                      <span className="text-[hsl(var(--instantly-orange))]">{'★'.repeat(review.rating)}</span>
                    </div>
                    <p className="text-xs text-[hsl(var(--instantly-text-muted))]">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
