"use client";

import { Header } from "@/components/instantly/header";
import { Footer } from "@/components/instantly/footer";
import { Camera, MapPin, DollarSign, Calendar, Award, Briefcase, Star, Upload, Check } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

export default function ProviderProfilePage() {
  const [activeTab, setActiveTab] = useState<'profile' | 'portfolio' | 'availability' | 'pricing'>('profile');
  const [profileData, setProfileData] = useState({
    name: "Sarah Johnson",
    bio: "Professional handywoman and home repair specialist with 8+ years of experience. Certified in electrical work and plumbing. I love helping homeowners with their repair needs and sharing my knowledge through live streams.",
    location: "San Francisco, CA",
    serviceRadius: 15,
    categories: ["Home Repair", "Plumbing", "Electrical", "Carpentry"],
    certifications: ["Licensed Electrician", "Certified Plumber", "OSHA Safety"],
  });

  const skills = [
    "Home Repair", "Plumbing", "Electrical", "Carpentry", "Painting", "Drywall",
    "Flooring", "Appliance Repair", "HVAC", "Roofing", "Landscaping", "Welding"
  ];

  const portfolioItems = [
    { id: 1, title: "Kitchen Cabinet Installation", category: "Carpentry", before: "🏚️", after: "✨" },
    { id: 2, title: "Bathroom Plumbing Repair", category: "Plumbing", before: "💧", after: "✅" },
    { id: 3, title: "Electrical Panel Upgrade", category: "Electrical", before: "⚠️", after: "⚡" },
    { id: 4, title: "Deck Construction", category: "Carpentry", before: "🌲", after: "🏡" },
  ];

  const availability = [
    { day: "Monday", available: true, hours: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", available: true, hours: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", available: true, hours: "9:00 AM - 6:00 PM" },
    { day: "Thursday", available: true, hours: "9:00 AM - 6:00 PM" },
    { day: "Friday", available: true, hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", available: true, hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", available: false, hours: "Unavailable" },
  ];

  const pricingServices = [
    { service: "Basic Home Repair", rate: "$65/hour", description: "General repairs and maintenance" },
    { service: "Plumbing Work", rate: "$85/hour", description: "Pipe repairs, fixture installation" },
    { service: "Electrical Work", rate: "$95/hour", description: "Wiring, panel work, lighting" },
    { service: "Carpentry", rate: "$75/hour", description: "Custom woodwork, installation" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--instantly-bg-light))]">
      <Header />

      <div className="instantly-container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[hsl(var(--instantly-text-dark))] mb-2">Provider Profile</h1>
          <p className="text-[hsl(var(--instantly-text-muted))]">
            Manage your professional profile, portfolio, and service offerings
          </p>
        </div>

        {/* Profile Summary Card */}
        <div className="bg-white rounded-xl p-8 instantly-card-shadow mb-6">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Profile Photo */}
            <div className="relative">
              <div className="w-32 h-32 bg-[hsl(var(--instantly-feature-blue))] rounded-full flex items-center justify-center text-5xl">
                👩‍🔧
              </div>
              <button className="absolute bottom-0 right-0 w-10 h-10 bg-[hsl(var(--instantly-orange))] text-white rounded-full flex items-center justify-center hover:opacity-90 transition-opacity">
                <Camera size={20} />
              </button>
            </div>

            {/* Profile Info */}
            <div className="flex-1">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h2 className="text-2xl font-bold text-[hsl(var(--instantly-text-dark))] mb-1">
                    {profileData.name}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-[hsl(var(--instantly-text-muted))] mb-2">
                    <span className="flex items-center gap-1">
                      <MapPin size={16} />
                      {profileData.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star size={16} className="fill-[hsl(var(--instantly-orange))] text-[hsl(var(--instantly-orange))]" />
                      4.9 (127 reviews)
                    </span>
                  </div>
                </div>
                <button className="bg-[hsl(var(--instantly-navy))] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Save Changes
                </button>
              </div>

              {/* Verification Badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Check size={14} />
                  ID Verified
                </span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Check size={14} />
                  Background Check
                </span>
                <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Check size={14} />
                  License Verified
                </span>
              </div>

              {/* Categories */}
              <div className="flex flex-wrap gap-2">
                {profileData.categories.map((category) => (
                  <span
                    key={category}
                    className="px-3 py-1 bg-[hsl(var(--instantly-feature-blue))] text-[hsl(var(--instantly-navy))] rounded-full text-sm font-semibold"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('profile')}
            className={`pb-4 px-2 font-semibold transition-colors ${
              activeTab === 'profile'
                ? 'text-[hsl(var(--instantly-navy))] border-b-2 border-[hsl(var(--instantly-navy))]'
                : 'text-[hsl(var(--instantly-text-muted))] hover:text-[hsl(var(--instantly-text-dark))]'
            }`}
          >
            Profile Details
          </button>
          <button
            onClick={() => setActiveTab('portfolio')}
            className={`pb-4 px-2 font-semibold transition-colors ${
              activeTab === 'portfolio'
                ? 'text-[hsl(var(--instantly-navy))] border-b-2 border-[hsl(var(--instantly-navy))]'
                : 'text-[hsl(var(--instantly-text-muted))] hover:text-[hsl(var(--instantly-text-dark))]'
            }`}
          >
            Portfolio
          </button>
          <button
            onClick={() => setActiveTab('availability')}
            className={`pb-4 px-2 font-semibold transition-colors ${
              activeTab === 'availability'
                ? 'text-[hsl(var(--instantly-navy))] border-b-2 border-[hsl(var(--instantly-navy))]'
                : 'text-[hsl(var(--instantly-text-muted))] hover:text-[hsl(var(--instantly-text-dark))]'
            }`}
          >
            Availability
          </button>
          <button
            onClick={() => setActiveTab('pricing')}
            className={`pb-4 px-2 font-semibold transition-colors ${
              activeTab === 'pricing'
                ? 'text-[hsl(var(--instantly-navy))] border-b-2 border-[hsl(var(--instantly-navy))]'
                : 'text-[hsl(var(--instantly-text-muted))] hover:text-[hsl(var(--instantly-text-dark))]'
            }`}
          >
            Pricing
          </button>
        </div>

        {/* Tab Content */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            {/* Bio Section */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-4 flex items-center gap-2">
                <Briefcase size={20} />
                Professional Bio
              </h3>
              <textarea
                value={profileData.bio}
                onChange={(e) => setProfileData({ ...profileData, bio: e.target.value })}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                placeholder="Tell customers about your experience and expertise..."
              />
              <p className="text-sm text-[hsl(var(--instantly-text-muted))] mt-2">
                {profileData.bio.length}/500 characters
              </p>
            </div>

            {/* Skills Section */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-4 flex items-center gap-2">
                <Award size={20} />
                Skills & Specialties
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {skills.map((skill) => {
                  const isSelected = profileData.categories.includes(skill);
                  return (
                    <button
                      key={skill}
                      onClick={() => {
                        if (isSelected) {
                          setProfileData({
                            ...profileData,
                            categories: profileData.categories.filter(c => c !== skill)
                          });
                        } else {
                          setProfileData({
                            ...profileData,
                            categories: [...profileData.categories, skill]
                          });
                        }
                      }}
                      className={`px-4 py-3 rounded-lg font-semibold transition-all ${
                        isSelected
                          ? 'bg-[hsl(var(--instantly-navy))] text-white'
                          : 'bg-gray-100 text-[hsl(var(--instantly-text-dark))] hover:bg-gray-200'
                      }`}
                    >
                      {skill}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-4 flex items-center gap-2">
                <Award size={20} />
                Certifications & Licenses
              </h3>
              <div className="space-y-3 mb-4">
                {profileData.certifications.map((cert, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-[hsl(var(--instantly-feature-green))] rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                        <Award className="text-[hsl(var(--instantly-navy))]" size={20} />
                      </div>
                      <span className="font-semibold text-[hsl(var(--instantly-text-dark))]">{cert}</span>
                    </div>
                    <button className="text-red-500 hover:text-red-700 font-semibold text-sm">
                      Remove
                    </button>
                  </div>
                ))}
              </div>
              <button className="w-full py-3 border-2 border-dashed border-gray-300 rounded-lg text-[hsl(var(--instantly-text-muted))] hover:border-[hsl(var(--instantly-navy))] hover:text-[hsl(var(--instantly-navy))] transition-colors flex items-center justify-center gap-2">
                <Upload size={20} />
                Upload New Certification
              </button>
            </div>

            {/* Service Area */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-4 flex items-center gap-2">
                <MapPin size={20} />
                Service Area
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                    Base Location
                  </label>
                  <input
                    type="text"
                    value={profileData.location}
                    onChange={(e) => setProfileData({ ...profileData, location: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                    Service Radius: {profileData.serviceRadius} miles
                  </label>
                  <input
                    type="range"
                    min="5"
                    max="50"
                    value={profileData.serviceRadius}
                    onChange={(e) => setProfileData({ ...profileData, serviceRadius: parseInt(e.target.value) })}
                    className="w-full"
                  />
                  <div className="flex justify-between text-xs text-[hsl(var(--instantly-text-muted))] mt-1">
                    <span>5 miles</span>
                    <span>50 miles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'portfolio' && (
          <div className="space-y-6">
            {/* Portfolio Grid */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[hsl(var(--instantly-text-dark))] flex items-center gap-2">
                  <Camera size={20} />
                  Work Portfolio
                </h3>
                <button className="bg-[hsl(var(--instantly-orange))] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center gap-2">
                  <Upload size={18} />
                  Add Project
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {portfolioItems.map((item) => (
                  <div key={item.id} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="bg-gradient-to-r from-[hsl(var(--instantly-feature-blue))] to-[hsl(var(--instantly-feature-green))] p-8">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white rounded-lg p-6 text-center">
                          <div className="text-5xl mb-2">{item.before}</div>
                          <div className="text-sm font-semibold text-[hsl(var(--instantly-text-muted))]">Before</div>
                        </div>
                        <div className="bg-white rounded-lg p-6 text-center">
                          <div className="text-5xl mb-2">{item.after}</div>
                          <div className="text-sm font-semibold text-[hsl(var(--instantly-text-muted))]">After</div>
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-semibold text-[hsl(var(--instantly-text-dark))] mb-1">{item.title}</h4>
                      <span className="text-sm text-[hsl(var(--instantly-text-muted))]">{item.category}</span>
                      <div className="flex gap-2 mt-3">
                        <button className="text-sm text-[hsl(var(--instantly-navy))] hover:underline">Edit</button>
                        <button className="text-sm text-red-500 hover:underline">Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upload Instructions */}
            <div className="bg-[hsl(var(--instantly-feature-blue))] rounded-xl p-6">
              <h4 className="font-semibold text-[hsl(var(--instantly-text-dark))] mb-3">Portfolio Tips</h4>
              <ul className="space-y-2 text-sm text-[hsl(var(--instantly-text-dark))]">
                <li className="flex items-start gap-2">
                  <span className="text-[hsl(var(--instantly-orange))] mt-1">✓</span>
                  <span>Upload high-quality before and after photos of your best work</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[hsl(var(--instantly-orange))] mt-1">✓</span>
                  <span>Add detailed descriptions to showcase your expertise</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[hsl(var(--instantly-orange))] mt-1">✓</span>
                  <span>Include a variety of projects to demonstrate your range</span>
                </li>
              </ul>
            </div>
          </div>
        )}

        {activeTab === 'availability' && (
          <div className="space-y-6">
            {/* Weekly Schedule */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-6 flex items-center gap-2">
                <Calendar size={20} />
                Weekly Schedule
              </h3>
              <div className="space-y-3">
                {availability.map((day) => (
                  <div
                    key={day.day}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
                  >
                    <div className="flex items-center gap-4">
                      <input
                        type="checkbox"
                        checked={day.available}
                        className="w-5 h-5"
                        readOnly
                      />
                      <span className="font-semibold text-[hsl(var(--instantly-text-dark))] w-28">
                        {day.day}
                      </span>
                    </div>
                    {day.available ? (
                      <div className="flex items-center gap-4">
                        <input
                          type="time"
                          defaultValue="09:00"
                          className="px-3 py-2 border border-gray-300 rounded-lg"
                        />
                        <span className="text-[hsl(var(--instantly-text-muted))]">to</span>
                        <input
                          type="time"
                          defaultValue="18:00"
                          className="px-3 py-2 border border-gray-300 rounded-lg"
                        />
                      </div>
                    ) : (
                      <span className="text-[hsl(var(--instantly-text-muted))]">Unavailable</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Settings */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-4">Quick Settings</h3>
              <div className="space-y-4">
                <label className="flex items-center justify-between p-4 bg-[hsl(var(--instantly-bg-light))] rounded-lg cursor-pointer">
                  <div>
                    <div className="font-semibold text-[hsl(var(--instantly-text-dark))] mb-1">
                      Accept Jobs Instantly
                    </div>
                    <div className="text-sm text-[hsl(var(--instantly-text-muted))]">
                      Automatically accept jobs that match your criteria
                    </div>
                  </div>
                  <input type="checkbox" className="w-12 h-6" />
                </label>

                <label className="flex items-center justify-between p-4 bg-[hsl(var(--instantly-bg-light))] rounded-lg cursor-pointer">
                  <div>
                    <div className="font-semibold text-[hsl(var(--instantly-text-dark))] mb-1">
                      Show as Online
                    </div>
                    <div className="text-sm text-[hsl(var(--instantly-text-muted))]">
                      Display your online status to customers
                    </div>
                  </div>
                  <input type="checkbox" defaultChecked className="w-12 h-6" />
                </label>

                <label className="flex items-center justify-between p-4 bg-[hsl(var(--instantly-bg-light))] rounded-lg cursor-pointer">
                  <div>
                    <div className="font-semibold text-[hsl(var(--instantly-text-dark))] mb-1">
                      Emergency Services
                    </div>
                    <div className="text-sm text-[hsl(var(--instantly-text-muted))]">
                      Accept urgent jobs with premium pay
                    </div>
                  </div>
                  <input type="checkbox" className="w-12 h-6" />
                </label>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'pricing' && (
          <div className="space-y-6">
            {/* Service Pricing */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-[hsl(var(--instantly-text-dark))] flex items-center gap-2">
                  <DollarSign size={20} />
                  Service Rates
                </h3>
                <button className="bg-[hsl(var(--instantly-orange))] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Add Service
                </button>
              </div>

              <div className="space-y-4">
                {pricingServices.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[hsl(var(--instantly-navy))] transition-colors"
                  >
                    <div className="flex-1">
                      <h4 className="font-semibold text-[hsl(var(--instantly-text-dark))] mb-1">
                        {service.service}
                      </h4>
                      <p className="text-sm text-[hsl(var(--instantly-text-muted))]">
                        {service.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <input
                        type="text"
                        defaultValue={service.rate}
                        className="w-32 px-3 py-2 border border-gray-300 rounded-lg text-right font-semibold"
                      />
                      <button className="text-[hsl(var(--instantly-navy))] hover:underline text-sm">
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Pricing Strategy */}
            <div className="bg-[hsl(var(--instantly-feature-green))] rounded-xl p-6">
              <h4 className="font-semibold text-[hsl(var(--instantly-text-dark))] mb-4">Pricing Tips</h4>
              <div className="space-y-3 text-sm text-[hsl(var(--instantly-text-dark))]">
                <div className="flex items-start gap-2">
                  <span className="text-[hsl(var(--instantly-navy))] mt-1">💡</span>
                  <p>Research local rates to stay competitive while valuing your expertise</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[hsl(var(--instantly-navy))] mt-1">💡</span>
                  <p>Consider offering package deals or bundle services for larger projects</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-[hsl(var(--instantly-navy))] mt-1">💡</span>
                  <p>Adjust your rates based on demand, experience, and customer feedback</p>
                </div>
              </div>
            </div>

            {/* Earnings Projections */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-4">Earnings Projection</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-[hsl(var(--instantly-feature-blue))] rounded-lg text-center">
                  <div className="text-3xl font-bold text-[hsl(var(--instantly-navy))] mb-1">$2,600</div>
                  <div className="text-sm text-[hsl(var(--instantly-text-dark))]">Estimated Weekly</div>
                </div>
                <div className="p-4 bg-[hsl(var(--instantly-feature-green))] rounded-lg text-center">
                  <div className="text-3xl font-bold text-[hsl(var(--instantly-navy))] mb-1">$11,200</div>
                  <div className="text-sm text-[hsl(var(--instantly-text-dark))]">Estimated Monthly</div>
                </div>
                <div className="p-4 bg-[hsl(var(--instantly-orange))] text-white rounded-lg text-center">
                  <div className="text-3xl font-bold mb-1">$134,400</div>
                  <div className="text-sm">Estimated Yearly</div>
                </div>
              </div>
              <p className="text-xs text-[hsl(var(--instantly-text-muted))] mt-4 text-center">
                Based on your current rates and average 32 hours/week
              </p>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
