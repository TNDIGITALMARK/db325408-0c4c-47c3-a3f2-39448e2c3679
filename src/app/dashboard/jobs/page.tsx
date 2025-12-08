"use client";

import { Header } from "@/components/instantly/header";
import { Footer } from "@/components/instantly/footer";
import { Package, MapPin, Clock, DollarSign, Navigation, CheckCircle, AlertCircle, MessageSquare, Camera, FileText, User } from "lucide-react";
import { useState } from "react";

type JobStatus = 'available' | 'accepted' | 'in-progress' | 'completed';

export default function JobsPage() {
  const [activeTab, setActiveTab] = useState<'available' | 'active' | 'history'>('available');
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const availableJobs = [
    {
      id: 1,
      title: "Fresh groceries delivery",
      description: "Deliver groceries from Whole Foods to customer's home",
      location: "2.3 miles away",
      distance: "2.3 mi",
      pay: 28,
      estimatedTime: "15 min",
      pickupAddress: "Whole Foods Market, 123 Main St",
      deliveryAddress: "456 Oak Ave, Apt 2B",
      items: "3 bags",
      priority: "standard",
      customerRating: 4.8,
    },
    {
      id: 2,
      title: "Restaurant takeout pickup",
      description: "Pick up dinner order from Italian restaurant",
      location: "1.1 miles away",
      distance: "1.1 mi",
      pay: 18,
      estimatedTime: "10 min",
      pickupAddress: "Mario's Italian Restaurant, 789 Elm St",
      deliveryAddress: "234 Pine Blvd",
      items: "2 orders",
      priority: "urgent",
      customerRating: 5.0,
    },
    {
      id: 3,
      title: "Pharmacy prescription",
      description: "Urgent prescription delivery needed",
      location: "0.8 miles away",
      distance: "0.8 mi",
      pay: 12,
      estimatedTime: "8 min",
      pickupAddress: "CVS Pharmacy, 567 Market St",
      deliveryAddress: "890 Maple Dr",
      items: "1 package",
      priority: "urgent",
      customerRating: 4.9,
    },
    {
      id: 4,
      title: "Hardware store supplies",
      description: "Deliver tools and building materials",
      location: "3.2 miles away",
      distance: "3.2 mi",
      pay: 35,
      estimatedTime: "20 min",
      pickupAddress: "Home Depot, 321 Industrial Way",
      deliveryAddress: "654 Cedar Ln",
      items: "Heavy items",
      priority: "standard",
      customerRating: 4.7,
    },
  ];

  const activeJobs = [
    {
      id: 101,
      title: "Pet supplies delivery",
      status: "in-progress" as JobStatus,
      progress: 65,
      pay: 22,
      pickupAddress: "Petco, 111 Commerce St",
      deliveryAddress: "222 Birch Ave",
      customerName: "Michael Chen",
      customerPhone: "(555) 123-4567",
      startedAt: "15 minutes ago",
      estimatedCompletion: "5 min",
    },
  ];

  const jobHistory = [
    { id: 201, title: "Office supplies delivery", completedAt: "2 hours ago", earnings: 25, rating: 5, review: "Excellent service!" },
    { id: 202, title: "Lunch delivery", completedAt: "4 hours ago", earnings: 15, rating: 5, review: "Very fast!" },
    { id: 203, title: "Flowers delivery", completedAt: "Yesterday", earnings: 20, rating: 4, review: "Great job" },
    { id: 204, title: "Book delivery", completedAt: "Yesterday", earnings: 12, rating: 5, review: "Perfect!" },
  ];

  const handleAcceptJob = (jobId: number) => {
    setSelectedJob(jobId);
    // Simulation of accepting job
  };

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--instantly-bg-light))]">
      <Header />

      <div className="instantly-container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[hsl(var(--instantly-text-dark))] mb-2">Job Management</h1>
          <p className="text-[hsl(var(--instantly-text-muted))]">
            Accept jobs, track deliveries, and manage your earnings
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 instantly-card-shadow">
            <Package className="text-[hsl(var(--instantly-navy))] mb-3" size={24} />
            <div className="text-3xl font-bold text-[hsl(var(--instantly-text-dark))] mb-1">12</div>
            <div className="text-sm text-[hsl(var(--instantly-text-muted))]">Available Jobs</div>
          </div>

          <div className="bg-white rounded-xl p-6 instantly-card-shadow">
            <Clock className="text-[hsl(var(--instantly-feature-blue))] mb-3" size={24} />
            <div className="text-3xl font-bold text-[hsl(var(--instantly-text-dark))] mb-1">1</div>
            <div className="text-sm text-[hsl(var(--instantly-text-muted))]">Active Jobs</div>
          </div>

          <div className="bg-white rounded-xl p-6 instantly-card-shadow">
            <CheckCircle className="text-green-500 mb-3" size={24} />
            <div className="text-3xl font-bold text-[hsl(var(--instantly-text-dark))] mb-1">127</div>
            <div className="text-sm text-[hsl(var(--instantly-text-muted))]">Completed Today</div>
          </div>

          <div className="bg-white rounded-xl p-6 instantly-card-shadow">
            <DollarSign className="text-[hsl(var(--instantly-orange))] mb-3" size={24} />
            <div className="text-3xl font-bold text-[hsl(var(--instantly-orange))] mb-1">$284</div>
            <div className="text-sm text-[hsl(var(--instantly-text-muted))]">Earned Today</div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-4 mb-6 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('available')}
            className={`pb-4 px-2 font-semibold transition-colors ${
              activeTab === 'available'
                ? 'text-[hsl(var(--instantly-navy))] border-b-2 border-[hsl(var(--instantly-navy))]'
                : 'text-[hsl(var(--instantly-text-muted))] hover:text-[hsl(var(--instantly-text-dark))]'
            }`}
          >
            Available Jobs ({availableJobs.length})
          </button>
          <button
            onClick={() => setActiveTab('active')}
            className={`pb-4 px-2 font-semibold transition-colors ${
              activeTab === 'active'
                ? 'text-[hsl(var(--instantly-navy))] border-b-2 border-[hsl(var(--instantly-navy))]'
                : 'text-[hsl(var(--instantly-text-muted))] hover:text-[hsl(var(--instantly-text-dark))]'
            }`}
          >
            Active Jobs ({activeJobs.length})
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`pb-4 px-2 font-semibold transition-colors ${
              activeTab === 'history'
                ? 'text-[hsl(var(--instantly-navy))] border-b-2 border-[hsl(var(--instantly-navy))]'
                : 'text-[hsl(var(--instantly-text-muted))] hover:text-[hsl(var(--instantly-text-dark))]'
            }`}
          >
            History
          </button>
        </div>

        {/* Available Jobs Tab */}
        {activeTab === 'available' && (
          <div className="space-y-4">
            {availableJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-xl p-6 instantly-card-shadow hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        job.priority === 'urgent'
                          ? 'bg-red-100'
                          : 'bg-[hsl(var(--instantly-feature-blue))]'
                      }`}>
                        <Package className={job.priority === 'urgent' ? 'text-red-600' : 'text-[hsl(var(--instantly-navy))]'} size={24} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-semibold text-lg text-[hsl(var(--instantly-text-dark))]">
                            {job.title}
                          </h3>
                          {job.priority === 'urgent' && (
                            <span className="px-2 py-1 bg-red-100 text-red-600 text-xs font-semibold rounded-full">
                              URGENT
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-[hsl(var(--instantly-text-muted))] mb-3">
                          {job.description}
                        </p>

                        {/* Job Details Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                          <div className="flex items-start gap-2">
                            <MapPin size={16} className="text-[hsl(var(--instantly-navy))] mt-0.5" />
                            <div>
                              <div className="font-semibold text-[hsl(var(--instantly-text-dark))]">Pickup:</div>
                              <div className="text-[hsl(var(--instantly-text-muted))]">{job.pickupAddress}</div>
                            </div>
                          </div>
                          <div className="flex items-start gap-2">
                            <Navigation size={16} className="text-[hsl(var(--instantly-navy))] mt-0.5" />
                            <div>
                              <div className="font-semibold text-[hsl(var(--instantly-text-dark))]">Delivery:</div>
                              <div className="text-[hsl(var(--instantly-text-muted))]">{job.deliveryAddress}</div>
                            </div>
                          </div>
                        </div>

                        {/* Job Meta */}
                        <div className="flex flex-wrap items-center gap-4 mt-4 text-sm text-[hsl(var(--instantly-text-muted))]">
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {job.distance}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock size={14} />
                            ~{job.estimatedTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Package size={14} />
                            {job.items}
                          </span>
                          <span className="flex items-center gap-1">
                            ⭐ {job.customerRating}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Accept Button */}
                  <div className="flex flex-col items-end gap-3">
                    <div className="text-right">
                      <div className="text-4xl font-bold text-[hsl(var(--instantly-orange))] mb-1">
                        ${job.pay}
                      </div>
                      <div className="text-sm text-[hsl(var(--instantly-text-muted))]">
                        Payment
                      </div>
                    </div>
                    <button
                      onClick={() => handleAcceptJob(job.id)}
                      className="bg-[hsl(var(--instantly-navy))] text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
                    >
                      Accept Job
                    </button>
                    <button className="text-sm text-[hsl(var(--instantly-navy))] hover:underline">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Active Jobs Tab */}
        {activeTab === 'active' && (
          <div className="space-y-6">
            {activeJobs.length > 0 ? (
              activeJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-xl p-6 instantly-card-shadow">
                  {/* Job Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-[hsl(var(--instantly-text-dark))] mb-1">
                        {job.title}
                      </h3>
                      <p className="text-sm text-[hsl(var(--instantly-text-muted))]">
                        Started {job.startedAt}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-3xl font-bold text-[hsl(var(--instantly-orange))] mb-1">
                        ${job.pay}
                      </div>
                      <div className="text-sm text-green-600 font-semibold">In Progress</div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-[hsl(var(--instantly-text-dark))]">
                        Delivery Progress
                      </span>
                      <span className="text-sm text-[hsl(var(--instantly-text-muted))]">
                        ETA: {job.estimatedCompletion}
                      </span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[hsl(var(--instantly-orange))] to-[hsl(var(--instantly-feature-green))] transition-all"
                        style={{ width: `${job.progress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-[hsl(var(--instantly-text-muted))]">
                      <span>Picked up</span>
                      <span>En route</span>
                      <span>Delivered</span>
                    </div>
                  </div>

                  {/* Addresses */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-[hsl(var(--instantly-feature-blue))] rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin size={18} className="text-[hsl(var(--instantly-navy))]" />
                        <span className="font-semibold text-[hsl(var(--instantly-text-dark))]">Pickup</span>
                      </div>
                      <p className="text-sm text-[hsl(var(--instantly-text-dark))]">{job.pickupAddress}</p>
                    </div>
                    <div className="p-4 bg-[hsl(var(--instantly-feature-green))] rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Navigation size={18} className="text-[hsl(var(--instantly-navy))]" />
                        <span className="font-semibold text-[hsl(var(--instantly-text-dark))]">Delivery</span>
                      </div>
                      <p className="text-sm text-[hsl(var(--instantly-text-dark))]">{job.deliveryAddress}</p>
                    </div>
                  </div>

                  {/* Customer Info */}
                  <div className="p-4 bg-gray-50 rounded-lg mb-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-[hsl(var(--instantly-navy))] text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {job.customerName.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-[hsl(var(--instantly-text-dark))]">
                            {job.customerName}
                          </div>
                          <div className="text-sm text-[hsl(var(--instantly-text-muted))]">
                            {job.customerPhone}
                          </div>
                        </div>
                      </div>
                      <button className="flex items-center gap-2 bg-[hsl(var(--instantly-navy))] text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                        <MessageSquare size={18} />
                        Message
                      </button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-3 gap-3">
                    <button className="flex flex-col items-center gap-2 p-4 border-2 border-gray-300 rounded-lg hover:border-[hsl(var(--instantly-navy))] transition-colors">
                      <Navigation className="text-[hsl(var(--instantly-navy))]" size={24} />
                      <span className="text-sm font-semibold text-[hsl(var(--instantly-text-dark))]">
                        Navigate
                      </span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-4 border-2 border-gray-300 rounded-lg hover:border-[hsl(var(--instantly-navy))] transition-colors">
                      <Camera className="text-[hsl(var(--instantly-navy))]" size={24} />
                      <span className="text-sm font-semibold text-[hsl(var(--instantly-text-dark))]">
                        Add Photo
                      </span>
                    </button>
                    <button className="flex flex-col items-center gap-2 p-4 bg-[hsl(var(--instantly-orange))] text-white rounded-lg hover:opacity-90 transition-opacity">
                      <CheckCircle size={24} />
                      <span className="text-sm font-semibold">
                        Complete
                      </span>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="bg-white rounded-xl p-12 instantly-card-shadow text-center">
                <Package className="mx-auto text-[hsl(var(--instantly-text-muted))] mb-4" size={64} />
                <h3 className="text-xl font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                  No Active Jobs
                </h3>
                <p className="text-[hsl(var(--instantly-text-muted))]">
                  Accept a job from the available jobs list to get started
                </p>
              </div>
            )}
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="space-y-6">
            {/* Filters */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                    Date Range
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent">
                    <option>Last 7 days</option>
                    <option>Last 30 days</option>
                    <option>Last 3 months</option>
                    <option>All time</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                    Job Type
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent">
                    <option>All types</option>
                    <option>Delivery</option>
                    <option>Pickup</option>
                    <option>Service</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                    Rating
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent">
                    <option>All ratings</option>
                    <option>5 stars</option>
                    <option>4+ stars</option>
                    <option>3+ stars</option>
                  </select>
                </div>
                <div className="flex items-end">
                  <button className="w-full bg-[hsl(var(--instantly-navy))] text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                    Apply Filters
                  </button>
                </div>
              </div>
            </div>

            {/* Job History List */}
            <div className="bg-white rounded-xl p-6 instantly-card-shadow">
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-6">Completed Jobs</h3>
              <div className="space-y-4">
                {jobHistory.map((job) => (
                  <div
                    key={job.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[hsl(var(--instantly-navy))] transition-colors"
                  >
                    <div className="flex items-start gap-4 flex-1">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="text-green-600" size={20} />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-[hsl(var(--instantly-text-dark))] mb-1">
                          {job.title}
                        </h4>
                        <div className="flex items-center gap-4 text-sm text-[hsl(var(--instantly-text-muted))]">
                          <span>{job.completedAt}</span>
                          <span className="flex items-center gap-1">
                            {'⭐'.repeat(job.rating)} {job.rating}.0
                          </span>
                        </div>
                        {job.review && (
                          <p className="text-sm text-[hsl(var(--instantly-text-muted))] mt-2 italic">
                            "{job.review}"
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-[hsl(var(--instantly-orange))] mb-1">
                        ${job.earnings}
                      </div>
                      <button className="text-sm text-[hsl(var(--instantly-navy))] hover:underline">
                        View Receipt
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Load More */}
              <div className="mt-6 text-center">
                <button className="text-[hsl(var(--instantly-navy))] font-semibold hover:underline">
                  Load More Jobs
                </button>
              </div>
            </div>

            {/* Summary Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-[hsl(var(--instantly-feature-blue))] to-[hsl(var(--instantly-feature-green))] rounded-xl p-6 text-center">
                <div className="text-4xl font-bold text-[hsl(var(--instantly-navy))] mb-2">127</div>
                <div className="text-sm text-[hsl(var(--instantly-text-dark))] font-semibold">
                  Total Jobs Completed
                </div>
              </div>
              <div className="bg-[hsl(var(--instantly-orange))] text-white rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">$2,847</div>
                <div className="text-sm font-semibold">Total Earnings</div>
              </div>
              <div className="bg-[hsl(var(--instantly-navy))] text-white rounded-xl p-6 text-center">
                <div className="text-4xl font-bold mb-2">4.9★</div>
                <div className="text-sm font-semibold">Average Rating</div>
              </div>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
