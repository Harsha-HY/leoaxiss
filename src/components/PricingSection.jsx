import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, X, ShieldCheck, Sparkles, ArrowRight, Apple, HelpCircle } from 'lucide-react'

export default function PricingSection({ onOpenPurchase, onNotify }) {
  const [billingCycle, setBillingCycle] = useState('annual') // 'annual' | 'monthly'

  const comparisonFeatures = [
    { name: 'All 50+ capture, annotation & recording tools', basic: true, pro: true },
    { name: 'Scrolling capture with auto-stitching', basic: true, pro: true },
    { name: 'Text recognition (OCR) on-device', basic: true, pro: true },
    { name: 'Background tool & social presets', basic: true, pro: true },
    { name: 'Studio Mode cursor smoothing & auto-zoom', basic: true, pro: true },
    { name: 'CleanShot Cloud Storage', basic: '1 GB included', pro: 'Unlimited' },
    { name: 'Software updates', basic: '1 year of free updates', pro: 'Continuous updates' },
    { name: 'Custom domain (shots.yourcompany.com)', basic: false, pro: true },
    { name: 'Custom branding & color themes', basic: false, pro: true },
    { name: 'Password protection & self-destruct links', basic: false, pro: true },
    { name: 'Centralized team billing & seat management', basic: false, pro: true },
  ]

  return (
    <section id="pricing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0d44e8] text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-200/60">
            <Sparkles size={13} />
            <span>Simple, Honest Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            One-time purchase or Pro subscription.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Choose what fits your workflow best. Whether you want a permanent perpetual license or unlimited cloud collaboration for your team.
          </p>

          {/* Billing Cycle Switcher for Pro */}
          <div className="mt-8 inline-flex items-center gap-3 p-1.5 bg-slate-100 rounded-full border border-slate-200/80">
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                billingCycle === 'annual'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Annual Billing
              <span className="ml-1.5 text-[10px] bg-emerald-100 text-emerald-700 px-2 py-0.5 rounded-full font-bold">
                SAVE 20%
              </span>
            </button>

            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                billingCycle === 'monthly'
                  ? 'bg-white text-slate-900 shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Monthly Billing
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          
          {/* Card 1: CleanShot Basic (One-Time Purchase) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 border border-slate-200 shadow-sm flex flex-col justify-between text-left relative">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Perpetual License
                </span>
                <span className="px-3 py-1 rounded-full bg-white text-slate-700 text-xs font-semibold border border-slate-200">
                  One-time payment
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">CleanShot Basic</h3>
              <p className="text-sm text-slate-600 mt-2">
                Ideal for individuals who want all app features and pay once.
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-slate-900">$29</span>
                <span className="text-slate-500 text-sm font-medium">USD / Mac</span>
              </div>
              <div className="text-xs text-slate-500 mt-1">Pay once, own the app version forever.</div>

              <div className="my-8 border-t border-slate-200" />

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-700">
                <li className="flex items-center gap-3">
                  <Check size={16} className="text-blue-600 shrink-0" />
                  <span>Full access to all 50+ capture & recording features</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={16} className="text-blue-600 shrink-0" />
                  <span>1 year of free software updates & bug fixes</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={16} className="text-blue-600 shrink-0" />
                  <span>1 GB CleanShot Cloud storage included</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={16} className="text-blue-600 shrink-0" />
                  <span>Keep and use the app forever</span>
                </li>
                <li className="flex items-center gap-3 text-slate-400">
                  <X size={16} className="shrink-0" />
                  <span className="line-through">Custom domain & custom branding</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/80">
              <button
                type="button"
                onClick={() => onOpenPurchase('basic')}
                className="w-full py-3.5 px-6 rounded-2xl bg-white hover:bg-slate-100 text-slate-900 font-semibold text-sm border border-slate-300 shadow-sm flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Buy CleanShot Basic — $29</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Card 2: CleanShot Pro (Subscription) */}
          <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-blue-900 via-slate-900 to-slate-900 text-white border-2 border-blue-500/80 shadow-2xl flex flex-col justify-between text-left relative overflow-hidden">
            {/* Top pill badge */}
            <div className="absolute top-6 right-8 bg-[#0d44e8] text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
              MOST POPULAR
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">
                  Cloud Powerhouse
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white">CleanShot Pro</h3>
              <p className="text-sm text-slate-300 mt-2">
                For power users, designers, and teams who need unlimited cloud storage and custom domains.
              </p>

              <div className="mt-6 flex items-baseline gap-2">
                <span className="text-5xl font-extrabold text-white">
                  {billingCycle === 'annual' ? '$8' : '$10'}
                </span>
                <span className="text-slate-400 text-sm font-medium">
                  USD / user / month
                </span>
              </div>
              <div className="text-xs text-blue-300 mt-1">
                {billingCycle === 'annual' ? 'Billed annually ($96/year)' : 'Billed monthly ($10/month)'}
              </div>

              <div className="my-8 border-t border-slate-800" />

              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-3">
                  <Check size={16} className="text-blue-400 shrink-0" />
                  <span>Unlimited CleanShot Cloud storage</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={16} className="text-blue-400 shrink-0" />
                  <span>Continuous app updates & all upcoming major versions</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={16} className="text-blue-400 shrink-0" />
                  <span>Custom domain (shots.yourcompany.com)</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={16} className="text-blue-400 shrink-0" />
                  <span>Custom logo & color branding on viewer pages</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={16} className="text-blue-400 shrink-0" />
                  <span>Self-destructing links, passwords & team permissions</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-800">
              <button
                type="button"
                onClick={() => onOpenPurchase('pro')}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#0d44e8] hover:bg-[#0b3ac7] text-white font-semibold text-sm shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <span>Subscribe to CleanShot Pro</span>
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Full Feature Comparison Table */}
        <div className="max-w-4xl mx-auto bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200">
          <h3 className="text-lg font-bold text-slate-900 mb-6 text-center sm:text-left">
            Detailed Plan Comparison
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-semibold uppercase tracking-wider text-[11px]">
                  <th className="pb-3">Feature</th>
                  <th className="pb-3 text-center">Basic ($29)</th>
                  <th className="pb-3 text-center">Pro ($8/mo)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/70 text-slate-700">
                {comparisonFeatures.map((f, i) => (
                  <tr key={i} className="hover:bg-white/60 transition-colors">
                    <td className="py-3 font-medium text-slate-800">{f.name}</td>
                    <td className="py-3 text-center">
                      {typeof f.basic === 'boolean' ? (
                        f.basic ? (
                          <Check size={16} className="text-blue-600 mx-auto" />
                        ) : (
                          <X size={16} className="text-slate-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-semibold text-slate-700">{f.basic}</span>
                      )}
                    </td>
                    <td className="py-3 text-center">
                      {typeof f.pro === 'boolean' ? (
                        f.pro ? (
                          <Check size={16} className="text-blue-600 mx-auto" />
                        ) : (
                          <X size={16} className="text-slate-300 mx-auto" />
                        )
                      ) : (
                        <span className="font-bold text-blue-600">{f.pro}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-4">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-600" />
              <span>30-Day Money-Back Guarantee, no questions asked.</span>
            </div>
            <div className="flex items-center gap-2">
              <Apple size={14} className="text-slate-800" />
              <span>Instant license key delivery via email.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
