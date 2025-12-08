"use client";

import { Header } from "@/components/instantly/header";
import { Footer } from "@/components/instantly/footer";
import { DollarSign, TrendingUp, Download, CreditCard, Building, Smartphone, Calendar, Filter, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useState } from "react";

export default function EarningsPage() {
  const [timeRange, setTimeRange] = useState<'week' | 'month' | 'year'>('week');
  const [showCashOutModal, setShowCashOutModal] = useState(false);

  const earningsData = {
    week: { total: 2847, jobs: 127, tips: 234, bonuses: 50 },
    month: { total: 11200, jobs: 485, tips: 890, bonuses: 200 },
    year: { total: 134400, jobs: 5820, tips: 10680, bonuses: 2400 },
  };

  const current = earningsData[timeRange];

  const transactions = [
    { id: 1, type: "Job Payment", description: "Grocery delivery #1234", amount: 28, date: "Today, 2:30 PM", status: "completed" },
    { id: 2, type: "Tip", description: "From Maria S.", amount: 5, date: "Today, 1:15 PM", status: "completed" },
    { id: 3, type: "Job Payment", description: "Restaurant delivery #1233", amount: 18, date: "Today, 12:45 PM", status: "completed" },
    { id: 4, type: "Cash Out", description: "Withdrawal to Bank", amount: -250, date: "Yesterday, 6:00 PM", status: "processing" },
    { id: 5, type: "Bonus", description: "Weekly completion bonus", amount: 50, date: "2 days ago", status: "completed" },
    { id: 6, type: "Job Payment", description: "Pharmacy delivery #1232", amount: 12, date: "2 days ago", status: "completed" },
  ];

  const paymentMethods = [
    { id: 1, type: "Bank Account", name: "Chase ****4567", primary: true, icon: <Building size={20} /> },
    { id: 2, type: "Debit Card", name: "Visa ****8901", primary: false, icon: <CreditCard size={20} /> },
    { id: 3, type: "Mobile Wallet", name: "PayPal", primary: false, icon: <Smartphone size={20} /> },
  ];

  const weeklyBreakdown = [
    { day: "Mon", earnings: 385 },
    { day: "Tue", earnings: 420 },
    { day: "Wed", earnings: 365 },
    { day: "Thu", earnings: 510 },
    { day: "Fri", earnings: 445 },
    { day: "Sat", earnings: 480 },
    { day: "Sun", earnings: 242 },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[hsl(var(--instantly-bg-light))]">
      <Header />

      <div className="instantly-container py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-[hsl(var(--instantly-text-dark))] mb-2">Earnings & Payouts</h1>
          <p className="text-[hsl(var(--instantly-text-muted))]">
            Track your income, manage payments, and cash out anytime
          </p>
        </div>

        {/* Available Balance Card */}
        <div className="bg-gradient-to-br from-[hsl(var(--instantly-orange))] to-[hsl(var(--instantly-navy))] rounded-xl p-8 instantly-card-shadow mb-8 text-white">
          <div className="flex flex-col md:flex-row md:items-center justify-between">
            <div className="mb-6 md:mb-0">
              <div className="text-sm opacity-90 mb-2">Available Balance</div>
              <div className="text-5xl font-bold mb-4">$847.50</div>
              <div className="flex items-center gap-2 text-sm">
                <TrendingUp size={16} />
                <span>+23% from last week</span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <button
                onClick={() => setShowCashOutModal(true)}
                className="bg-white text-[hsl(var(--instantly-navy))] px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
              >
                <DollarSign size={20} />
                Cash Out Now
              </button>
              <div className="text-center text-sm opacity-90">
                Instant transfer available
              </div>
            </div>
          </div>
        </div>

        {/* Time Range Selector */}
        <div className="flex items-center gap-4 mb-6">
          <div className="flex gap-2">
            <button
              onClick={() => setTimeRange('week')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                timeRange === 'week'
                  ? 'bg-[hsl(var(--instantly-navy))] text-white'
                  : 'bg-white text-[hsl(var(--instantly-text-dark))]'
              }`}
            >
              This Week
            </button>
            <button
              onClick={() => setTimeRange('month')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                timeRange === 'month'
                  ? 'bg-[hsl(var(--instantly-navy))] text-white'
                  : 'bg-white text-[hsl(var(--instantly-text-dark))]'
              }`}
            >
              This Month
            </button>
            <button
              onClick={() => setTimeRange('year')}
              className={`px-6 py-2 rounded-lg font-semibold transition-colors ${
                timeRange === 'year'
                  ? 'bg-[hsl(var(--instantly-navy))] text-white'
                  : 'bg-white text-[hsl(var(--instantly-text-dark))]'
              }`}
            >
              This Year
            </button>
          </div>
        </div>

        {/* Earnings Summary */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl p-6 instantly-card-shadow">
            <DollarSign className="text-[hsl(var(--instantly-orange))] mb-3" size={24} />
            <div className="text-3xl font-bold text-[hsl(var(--instantly-text-dark))] mb-1">
              ${current.total.toLocaleString()}
            </div>
            <div className="text-sm text-[hsl(var(--instantly-text-muted))]">Total Earnings</div>
          </div>

          <div className="bg-white rounded-xl p-6 instantly-card-shadow">
            <div className="w-10 h-10 bg-[hsl(var(--instantly-feature-blue))] rounded-full flex items-center justify-center mb-3">
              <DollarSign size={20} className="text-[hsl(var(--instantly-navy))]" />
            </div>
            <div className="text-3xl font-bold text-[hsl(var(--instantly-text-dark))] mb-1">
              ${current.jobs.toLocaleString()}
            </div>
            <div className="text-sm text-[hsl(var(--instantly-text-muted))]">Job Payments</div>
          </div>

          <div className="bg-white rounded-xl p-6 instantly-card-shadow">
            <div className="w-10 h-10 bg-[hsl(var(--instantly-feature-green))] rounded-full flex items-center justify-center mb-3">
              <DollarSign size={20} className="text-[hsl(var(--instantly-navy))]" />
            </div>
            <div className="text-3xl font-bold text-[hsl(var(--instantly-text-dark))] mb-1">
              ${current.tips.toLocaleString()}
            </div>
            <div className="text-sm text-[hsl(var(--instantly-text-muted))]">Tips & Donations</div>
          </div>

          <div className="bg-white rounded-xl p-6 instantly-card-shadow">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mb-3">
              <TrendingUp size={20} className="text-purple-600" />
            </div>
            <div className="text-3xl font-bold text-[hsl(var(--instantly-text-dark))] mb-1">
              ${current.bonuses.toLocaleString()}
            </div>
            <div className="text-sm text-[hsl(var(--instantly-text-muted))]">Bonuses & Incentives</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Weekly Chart */}
          <div className="bg-white rounded-xl p-6 instantly-card-shadow">
            <h3 className="text-[hsl(var(--instantly-text-dark))] mb-6">Daily Breakdown</h3>
            <div className="h-64 flex items-end justify-around gap-2">
              {weeklyBreakdown.map((day, index) => {
                const maxEarnings = Math.max(...weeklyBreakdown.map(d => d.earnings));
                const height = (day.earnings / maxEarnings) * 100;
                return (
                  <div key={index} className="flex-1 flex flex-col items-center">
                    <div className="w-full flex flex-col items-center justify-end h-full">
                      <div className="text-sm font-semibold text-[hsl(var(--instantly-orange))] mb-2">
                        ${day.earnings}
                      </div>
                      <div
                        className="w-full bg-gradient-to-t from-[hsl(var(--instantly-orange))] to-[hsl(var(--instantly-feature-blue))] rounded-t-lg"
                        style={{ height: `${height}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-[hsl(var(--instantly-text-muted))] mt-2 font-semibold">
                      {day.day}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Earnings Goals */}
          <div className="bg-white rounded-xl p-6 instantly-card-shadow">
            <h3 className="text-[hsl(var(--instantly-text-dark))] mb-6">Monthly Goal</h3>
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-[hsl(var(--instantly-text-dark))]">
                  $11,200 / $15,000
                </span>
                <span className="text-sm text-green-600 font-semibold">75%</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[hsl(var(--instantly-orange))] to-green-500"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-[hsl(var(--instantly-feature-blue))] rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-[hsl(var(--instantly-text-dark))]">
                    On track for
                  </span>
                  <span className="text-2xl font-bold text-[hsl(var(--instantly-orange))]">
                    $14,933
                  </span>
                </div>
                <p className="text-sm text-[hsl(var(--instantly-text-muted))]">
                  Based on current pace
                </p>
              </div>

              <div className="p-4 bg-[hsl(var(--instantly-feature-green))] rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-[hsl(var(--instantly-text-dark))]">
                    Need to earn
                  </span>
                  <span className="text-2xl font-bold text-[hsl(var(--instantly-navy))]">
                    $3,800
                  </span>
                </div>
                <p className="text-sm text-[hsl(var(--instantly-text-muted))]">
                  $253/day to reach goal
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Transaction History */}
          <div className="lg:col-span-2 bg-white rounded-xl p-6 instantly-card-shadow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[hsl(var(--instantly-text-dark))]">Recent Transactions</h3>
              <button className="flex items-center gap-2 text-[hsl(var(--instantly-navy))] font-semibold hover:underline">
                <Download size={18} />
                Export
              </button>
            </div>

            <div className="space-y-3">
              {transactions.map((transaction) => (
                <div
                  key={transaction.id}
                  className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:border-[hsl(var(--instantly-navy))] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        transaction.amount > 0
                          ? 'bg-green-100'
                          : 'bg-red-100'
                      }`}
                    >
                      {transaction.amount > 0 ? (
                        <ArrowDownRight className="text-green-600" size={20} />
                      ) : (
                        <ArrowUpRight className="text-red-600" size={20} />
                      )}
                    </div>
                    <div>
                      <div className="font-semibold text-[hsl(var(--instantly-text-dark))]">
                        {transaction.type}
                      </div>
                      <div className="text-sm text-[hsl(var(--instantly-text-muted))]">
                        {transaction.description}
                      </div>
                      <div className="text-xs text-[hsl(var(--instantly-text-muted))]">
                        {transaction.date}
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className={`text-xl font-bold ${
                        transaction.amount > 0
                          ? 'text-green-600'
                          : 'text-red-600'
                      }`}
                    >
                      {transaction.amount > 0 ? '+' : ''}${Math.abs(transaction.amount)}
                    </div>
                    <div
                      className={`text-xs font-semibold ${
                        transaction.status === 'completed'
                          ? 'text-green-600'
                          : 'text-yellow-600'
                      }`}
                    >
                      {transaction.status}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 text-center">
              <button className="text-[hsl(var(--instantly-navy))] font-semibold hover:underline">
                View All Transactions
              </button>
            </div>
          </div>

          {/* Payment Methods */}
          <div className="bg-white rounded-xl p-6 instantly-card-shadow">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-[hsl(var(--instantly-text-dark))]">Payment Methods</h3>
              <button className="text-sm text-[hsl(var(--instantly-orange))] font-semibold hover:underline">
                + Add New
              </button>
            </div>

            <div className="space-y-3 mb-6">
              {paymentMethods.map((method) => (
                <div
                  key={method.id}
                  className={`p-4 rounded-lg border-2 transition-colors ${
                    method.primary
                      ? 'border-[hsl(var(--instantly-navy))] bg-[hsl(var(--instantly-feature-blue))]'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-[hsl(var(--instantly-text-dark))]">
                        {method.name}
                      </div>
                      <div className="text-xs text-[hsl(var(--instantly-text-muted))]">
                        {method.type}
                      </div>
                    </div>
                    {method.primary && (
                      <span className="px-2 py-1 bg-[hsl(var(--instantly-navy))] text-white text-xs font-semibold rounded-full">
                        Primary
                      </span>
                    )}
                  </div>
                  {!method.primary && (
                    <button className="text-xs text-[hsl(var(--instantly-navy))] hover:underline">
                      Set as primary
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Tax Documents */}
            <div className="pt-6 border-t border-gray-200">
              <h4 className="font-semibold text-[hsl(var(--instantly-text-dark))] mb-3">
                Tax Documents
              </h4>
              <button className="w-full flex items-center justify-between p-3 bg-[hsl(var(--instantly-bg-light))] rounded-lg hover:bg-gray-200 transition-colors">
                <div className="flex items-center gap-2">
                  <FileText size={18} className="text-[hsl(var(--instantly-navy))]" />
                  <span className="text-sm font-semibold text-[hsl(var(--instantly-text-dark))]">
                    2024 Tax Summary
                  </span>
                </div>
                <Download size={16} className="text-[hsl(var(--instantly-text-muted))]" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      {/* Cash Out Modal (simplified for demo) */}
      {showCashOutModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl p-8 max-w-md w-full">
            <h2 className="text-2xl font-bold text-[hsl(var(--instantly-text-dark))] mb-4">
              Cash Out
            </h2>
            <p className="text-[hsl(var(--instantly-text-muted))] mb-6">
              Transfer your earnings to your bank account instantly
            </p>

            <div className="mb-6">
              <label className="block text-sm font-semibold text-[hsl(var(--instantly-text-dark))] mb-2">
                Amount
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-bold text-[hsl(var(--instantly-text-dark))]">
                  $
                </span>
                <input
                  type="number"
                  defaultValue="847.50"
                  max="847.50"
                  className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-lg text-2xl font-bold focus:ring-2 focus:ring-[hsl(var(--instantly-navy))] focus:border-transparent"
                />
              </div>
              <p className="text-sm text-[hsl(var(--instantly-text-muted))] mt-2">
                Available: $847.50
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowCashOutModal(false)}
                className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 px-6 py-3 bg-[hsl(var(--instantly-orange))] text-white rounded-lg font-semibold hover:opacity-90 transition-opacity">
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
