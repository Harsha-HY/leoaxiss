import React from 'react'
import { motion } from 'framer-motion'
import { Megaphone, TrendingUp, BarChart3, Search, Target, CheckCircle2, ArrowRight } from 'lucide-react'

export default function DigitalMarketingSection({ onOpenContact }) {
  const categories = [
    { name: "Saree & Clothing Showrooms", result: "Statewide e-commerce orders" },
    { name: "Restaurants & Cloud Kitchens", result: "Direct online menu ordering" },
    { name: "Gyms & Fitness Centers", result: "Local membership lead generation" },
    { name: "Sports Academies", result: "Seasonal batch enrolments" },
    { name: "Retail Stores & Kiranas", result: "Digital product catalogs" },
    { name: "Real Estate Developers", result: "High-intent buyer inquiry funnels" },
    { name: "Family Salons & Spas", result: "Online appointment bookings" },
    { name: "Educational Institutes", result: "Admission inquiry campaigns" },
  ]

  return (
    <section id="digital-marketing" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0d44e8] text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-200/60">
            <TrendingUp size={13} />
            <span>Measurable Growth Engineering</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Digital Marketing & Performance SEO
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Accelerate your brand visibility and customer acquisition with data-backed performance advertising, technical SEO audits, and conversion analytics.
          </p>

          <div className="mt-6 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 text-xs font-bold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Average Client Growth: 200% in 90 Days</span>
          </div>
        </div>

        {/* 2-Column Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-5xl mx-auto text-left">
          
          {/* Left: What We Deliver */}
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0d44e8] flex items-center justify-center">
                  <Search size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">Technical & Local Google SEO</h3>
                  <p className="text-xs text-slate-500">Rank #1 on Google for high-intent keywords</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                We optimize Google Business Profiles, structured JSON-LD schema, page load speeds, and location keywords so customers in your city find you immediately.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center">
                  <Target size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900">ROI-Focused Meta & Google Ads</h3>
                  <p className="text-xs text-slate-500">Every rupee spent tracked to real revenue</p>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Laser-targeted campaigns on Instagram, Facebook, and Google Search that connect directly with prospective buyers and route them into WhatsApp chat funnels.
              </p>
            </div>

            <button
              type="button"
              onClick={() => onOpenContact('digital-marketing')}
              className="px-6 py-3 rounded-2xl bg-[#0d44e8] hover:bg-[#0b3ac7] text-white text-xs sm:text-sm font-semibold inline-flex items-center gap-2 cursor-pointer transition-all shadow-md shadow-blue-500/20"
            >
              <span>Get Free Marketing & SEO Audit</span>
              <ArrowRight size={14} />
            </button>
          </div>

          {/* Right: Businesses Scaled Grid */}
          <div className="lg:col-span-6 bg-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-800">
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 mb-4">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase">
                Proven Vertical Experience
              </span>
              <span className="text-[10px] font-mono bg-slate-800 px-2 py-0.5 rounded text-slate-300">
                85+ MSMEs Scaled
              </span>
            </div>

            <div className="space-y-2.5">
              {categories.map((c, i) => (
                <div key={i} className="flex items-center justify-between p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/60 text-xs">
                  <span className="font-semibold text-slate-200">{c.name}</span>
                  <span className="text-[11px] text-emerald-400 font-mono font-medium">✓ {c.result}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
