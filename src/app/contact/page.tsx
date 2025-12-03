"use client";

import { Header } from "@/components/instantly/header";
import { Footer } from "@/components/instantly/footer";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for contacting us! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--instantly-bg-light))]">
      <Header />

      <div className="instantly-container py-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-[hsl(var(--instantly-text-dark))] mb-4">Contact Us</h1>
            <p className="text-lg text-[hsl(var(--instantly-text-muted))]">
              Have questions? We're here to help. Reach out to our team anytime.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Information */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl p-6 instantly-card-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[hsl(var(--instantly-feature-blue))] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="text-[hsl(var(--instantly-navy))]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-[hsl(var(--instantly-text-dark))] mb-2">Email Us</h3>
                    <p className="text-[hsl(var(--instantly-text-muted))] text-sm mb-2">
                      Send us an email anytime
                    </p>
                    <a
                      href="mailto:info@instantly-inc.com"
                      className="text-[hsl(var(--instantly-orange))] hover:underline font-semibold"
                    >
                      info@instantly-inc.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 instantly-card-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[hsl(var(--instantly-feature-green))] rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="text-[hsl(var(--instantly-navy))]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-[hsl(var(--instantly-text-dark))] mb-2">Call Us</h3>
                    <p className="text-[hsl(var(--instantly-text-muted))] text-sm mb-2">
                      Mon-Fri: 9AM - 6PM EST
                    </p>
                    <a
                      href="tel:1-800-INSTANT"
                      className="text-[hsl(var(--instantly-orange))] hover:underline font-semibold"
                    >
                      1-800-INSTANT
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 instantly-card-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[hsl(var(--instantly-feature-blue))] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[hsl(var(--instantly-navy))]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-[hsl(var(--instantly-text-dark))] mb-2">Visit Us</h3>
                    <p className="text-[hsl(var(--instantly-text-muted))] text-sm">
                      123 Innovation Drive<br />
                      San Francisco, CA 94105<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 instantly-card-shadow">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[hsl(var(--instantly-feature-green))] rounded-lg flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-[hsl(var(--instantly-navy))]" size={24} />
                  </div>
                  <div>
                    <h3 className="text-[hsl(var(--instantly-text-dark))] mb-2">Live Chat</h3>
                    <p className="text-[hsl(var(--instantly-text-muted))] text-sm mb-2">
                      Available 24/7 for support
                    </p>
                    <button className="text-[hsl(var(--instantly-orange))] hover:underline font-semibold">
                      Start Chat →
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 bg-white rounded-xl p-8 instantly-card-shadow">
              <h2 className="text-2xl font-bold text-[hsl(var(--instantly-text-dark))] mb-6">Send Us a Message</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                  <label htmlFor="subject" className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="provider">Provider Application</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[hsl(var(--instantly-orange))] text-white py-4 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity"
                >
                  Send Message
                </button>

                <p className="text-xs text-center text-[hsl(var(--instantly-text-muted))]">
                  We typically respond within 24 hours during business days.
                </p>
              </form>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[hsl(var(--instantly-text-dark))] text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 instantly-card-shadow">
                <h3 className="text-[hsl(var(--instantly-text-dark))] mb-2">How do I become a provider?</h3>
                <p className="text-[hsl(var(--instantly-text-muted))] text-sm">
                  Simply fill out our application form on the Apply page. We'll review your information and
                  get back to you within 48 hours.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 instantly-card-shadow">
                <h3 className="text-[hsl(var(--instantly-text-dark))] mb-2">What are the fees?</h3>
                <p className="text-[hsl(var(--instantly-text-muted))] text-sm">
                  We charge a small service fee per transaction. There are no hidden costs, and you keep
                  the majority of what you earn.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 instantly-card-shadow">
                <h3 className="text-[hsl(var(--instantly-text-dark))] mb-2">How do payments work?</h3>
                <p className="text-[hsl(var(--instantly-text-muted))] text-sm">
                  Payments are processed instantly after job completion. You can transfer your earnings to
                  your bank account anytime.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 instantly-card-shadow">
                <h3 className="text-[hsl(var(--instantly-text-dark))] mb-2">Is support available 24/7?</h3>
                <p className="text-[hsl(var(--instantly-text-muted))] text-sm">
                  Yes! Our live chat support is available 24/7 to help with any questions or issues you may have.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
