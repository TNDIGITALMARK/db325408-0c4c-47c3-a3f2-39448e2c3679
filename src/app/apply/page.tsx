"use client";

import { Header } from "@/components/instantly/header";
import { Footer } from "@/components/instantly/footer";
import { Upload, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function ApplyPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: 'provider',
    specialty: '',
    experience: '',
    availability: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Application submitted! We\'ll review your information and contact you soon.');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--instantly-bg-light))]">
      <Header />

      <div className="instantly-container py-12">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-[hsl(var(--instantly-text-dark))] mb-4">Join Our Network</h1>
            <p className="text-lg text-[hsl(var(--instantly-text-muted))]">
              Apply as a Service Provider or Messenger and start earning on your terms
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl p-6 instantly-card-shadow text-center">
              <div className="w-16 h-16 bg-[hsl(var(--instantly-feature-green))] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-[hsl(var(--instantly-navy))]" size={32} />
              </div>
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-2">Complete Freedom</h3>
              <p className="text-sm text-[hsl(var(--instantly-text-muted))]">
                Set your own schedule and rates
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 instantly-card-shadow text-center">
              <div className="w-16 h-16 bg-[hsl(var(--instantly-feature-blue))] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-[hsl(var(--instantly-navy))]" size={32} />
              </div>
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-2">Instant Earnings</h3>
              <p className="text-sm text-[hsl(var(--instantly-text-muted))]">
                Get paid immediately for your work
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 instantly-card-shadow text-center">
              <div className="w-16 h-16 bg-[hsl(var(--instantly-feature-green))] rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="text-[hsl(var(--instantly-navy))]" size={32} />
              </div>
              <h3 className="text-[hsl(var(--instantly-text-dark))] mb-2">Community Support</h3>
              <p className="text-sm text-[hsl(var(--instantly-text-muted))]">
                Connect with other providers
              </p>
            </div>
          </div>

          {/* Application Form */}
          <div className="bg-white rounded-xl p-8 instantly-card-shadow">
            <h2 className="text-2xl font-bold text-[hsl(var(--instantly-text-dark))] mb-6">Application Form</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Type Selection */}
              <div>
                <label className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                  I want to apply as:
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, serviceType: 'provider' })}
                    className={`p-4 border-2 rounded-lg font-semibold transition-colors ${
                      formData.serviceType === 'provider'
                        ? 'border-[hsl(var(--instantly-navy))] bg-[hsl(var(--instantly-feature-blue))] text-[hsl(var(--instantly-navy))]'
                        : 'border-gray-300 text-[hsl(var(--instantly-text-muted))] hover:border-gray-400'
                    }`}
                  >
                    Service Provider
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, serviceType: 'messenger' })}
                    className={`p-4 border-2 rounded-lg font-semibold transition-colors ${
                      formData.serviceType === 'messenger'
                        ? 'border-[hsl(var(--instantly-navy))] bg-[hsl(var(--instantly-feature-blue))] text-[hsl(var(--instantly-navy))]'
                        : 'border-gray-300 text-[hsl(var(--instantly-text-muted))] hover:border-gray-400'
                    }`}
                  >
                    Messenger/Delivery
                  </button>
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                  placeholder="(555) 123-4567"
                />
              </div>

              {/* Service Details */}
              <div>
                <label htmlFor="specialty" className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                  Specialty/Service Type *
                </label>
                <select
                  id="specialty"
                  required
                  value={formData.specialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                >
                  <option value="">Select your specialty</option>
                  <option value="handyman">Home Repairs & Handyman</option>
                  <option value="delivery">Food & Goods Delivery</option>
                  <option value="tech">Tech Support</option>
                  <option value="moving">Moving & Furniture</option>
                  <option value="cleaning">Cleaning Services</option>
                  <option value="tutoring">Tutoring & Education</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="experience" className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                  Experience Level *
                </label>
                <select
                  id="experience"
                  required
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                >
                  <option value="">Select experience level</option>
                  <option value="beginner">Beginner (0-1 years)</option>
                  <option value="intermediate">Intermediate (1-3 years)</option>
                  <option value="experienced">Experienced (3-5 years)</option>
                  <option value="expert">Expert (5+ years)</option>
                </select>
              </div>

              <div>
                <label htmlFor="availability" className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                  Availability *
                </label>
                <select
                  id="availability"
                  required
                  value={formData.availability}
                  onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                >
                  <option value="">Select availability</option>
                  <option value="full-time">Full-time (40+ hours/week)</option>
                  <option value="part-time">Part-time (20-40 hours/week)</option>
                  <option value="flexible">Flexible (As needed)</option>
                  <option value="weekends">Weekends only</option>
                </select>
              </div>

              {/* Document Upload */}
              <div>
                <label className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                  Upload Documents (Optional)
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-[hsl(var(--instantly-navy))] transition-colors cursor-pointer">
                  <Upload className="mx-auto mb-2 text-[hsl(var(--instantly-text-muted))]" size={32} />
                  <p className="text-sm text-[hsl(var(--instantly-text-muted))] mb-1">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-[hsl(var(--instantly-text-muted))]">
                    Resume, certifications, or portfolio (PDF, JPG, PNG)
                  </p>
                </div>
              </div>

              {/* OAuth Alternative */}
              <div className="border-t border-gray-200 pt-6">
                <p className="text-center text-sm text-[hsl(var(--instantly-text-muted))] mb-4">
                  Or sign up quickly with:
                </p>
                <button
                  type="button"
                  className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-300 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[hsl(var(--instantly-orange))] text-white py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
              >
                Submit Application
              </button>

              <p className="text-xs text-center text-[hsl(var(--instantly-text-muted))]">
                By submitting, you agree to our Terms of Service and Privacy Policy. We are an Equal Opportunity Employer.
              </p>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
