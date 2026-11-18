import React from 'react'
import { motion } from 'framer-motion'
import { Heart, Store, Users, BookOpen, ArrowRight, CheckCircle2, MapPin } from 'lucide-react'

export default function CommunitySection({ onOpenContact }) {
  const initiatives = [
    {
      title: "Local Shops to Online Stores",
      desc: "Helping small grocers, tailors, saree retailers, and artisans establish simple, high-impact digital catalogs and WhatsApp ordering systems without heavy tech overhead.",
      icon: Store,
      tag: "Vocal for Local"
    },
    {
      title: "Tier 2 & Tier 3 Youth Camps",
      desc: "Free digital literacy and introductory coding bootcamps conducted in semi-urban and rural centers to spark tech aspirations in talented first-generation learners.",
      icon: Users,
      tag: "Youth Empowerment"
    },
    {
      title: "Non-Profit & NGO Support",
      desc: "Subsidized and pro-bono digital architecture built for social welfare trusts, temples, and foundations (like Ikyata Foundation and HKM Tirupati) to scale food and aid distribution.",
      icon: Heart,
      tag: "Social Welfare"
    }
  ]

  return (
    <section id="community" className="py-24 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-rose-200/60">
            <Heart size={13} fill="currentColor" />
            <span>Community Programs & Social Impact</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Technology for Every Corner of India.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            True digital transformation cannot be restricted to Tier-1 tech parks. LeoAxis actively works at the grassroots to empower small shopkeepers, educators, and rural youth with practical digital tools.
          </p>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-left mb-12">
          {initiatives.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="p-8 rounded-3xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-rose-200 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-rose-50 text-rose-600 flex items-center justify-center">
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-slate-100 text-slate-700">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-xs font-semibold text-rose-600">
                  <CheckCircle2 size={14} />
                  <span>Grassroots Outreach</span>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Quote banner */}
        <div className="p-8 rounded-3xl bg-white border border-slate-200 max-w-4xl mx-auto text-center shadow-xs">
          <p className="text-base sm:text-lg font-bold text-slate-900 italic">
            "When a saree weaver in a small town gets an order from Delhi through a website we made, that is the real victory of Digital India."
          </p>
          <div className="mt-3 text-xs font-mono font-bold text-blue-600 uppercase tracking-wider">
            — LeoAxis Technologies Founding Vision
          </div>
        </div>

      </div>
    </section>
  )
}
