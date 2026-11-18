import React from 'react'
import { motion } from 'framer-motion'
import { Star, CheckCircle, Heart, Quote } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sahil Lavingia',
      role: 'Founder of Gumroad',
      handle: '@shl',
      avatar: 'SL',
      color: 'bg-emerald-600',
      text: 'CleanShot X is one of the few Mac apps I install on every single machine without even thinking. The Quick Access overlay alone saves me hours every month.',
      highlight: 'Saves me hours every month'
    },
    {
      name: 'Ryan Hoover',
      role: 'Founder of Product Hunt',
      handle: '@rrhoover',
      avatar: 'RH',
      color: 'bg-orange-600',
      text: 'CleanShot is the best screenshot tool on macOS by a mile. Annotations are instant, scrolling capture works every time, and the cloud link is genius.',
      highlight: 'Best screenshot tool on macOS'
    },
    {
      name: 'Tibo',
      role: 'Indie Hacker & Creator',
      handle: '@tibo_maker',
      avatar: 'TB',
      color: 'bg-blue-600',
      text: 'The Background Tool and Studio Mode turned my product launch screenshots into high-converting graphics. Worth 10x the $29 price tag.',
      highlight: 'Worth 10x the price'
    },
    {
      name: 'Charli Marie',
      role: 'Design Director & Creator',
      handle: '@charliprangley',
      avatar: 'CM',
      color: 'bg-purple-600',
      text: 'The magnifier loupe and sequential step numbers make bug reports and design feedback so clear that clients understand everything immediately.',
      highlight: 'Design feedback so clear'
    },
    {
      name: 'Fons Mans',
      role: 'Art Director & Brand Designer',
      handle: '@fonsmans',
      avatar: 'FM',
      color: 'bg-indigo-600',
      text: 'CleanShot X feels like it was designed by Apple themselves. The subtle animations, typography, and speed are unmatched.',
      highlight: 'Feels designed by Apple'
    },
    {
      name: 'Guillermo Rauch',
      role: 'CEO at Vercel',
      handle: '@rauchg',
      avatar: 'GR',
      color: 'bg-slate-800',
      text: 'Fast, seamless, native. The ability to copy unselectable text with OCR and immediately drag screenshots into pull requests is a superpower.',
      highlight: 'Native superpower'
    },
  ]

  const companies = [
    'Apple', 'Stripe', 'Figma', 'Airbnb', 'Google', 'Spotify', 'Vercel', 'Linear'
  ]

  return (
    <section id="testimonials" className="py-24 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0d44e8] text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-200/60">
            <Heart size={13} fill="currentColor" />
            <span>Community Wall of Love</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Loved by over 100,000+ Mac users.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Designers, engineers, creators, and leaders at the world's best companies rely on CleanShot X every single day.
          </p>

          {/* Social Proof Metric Counters */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 sm:gap-12">
            <div className="flex items-center gap-2">
              <div className="flex text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <span className="text-sm font-bold text-slate-800">4.9 / 5 Rating</span>
              <span className="text-xs text-slate-500">(12,000+ reviews)</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle size={16} className="text-blue-600" />
              <span className="text-sm font-bold text-slate-800">100,000+ Active Macs</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-sm font-bold text-slate-800">35M+ Captures / Year</span>
            </div>
          </div>
        </div>

        {/* Company Logos Row */}
        <div className="mb-14 py-6 border-y border-slate-200/70">
          <div className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400 mb-5">
            Trusted by teams at
          </div>
          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 text-slate-500 font-bold text-lg tracking-tight">
            {companies.map((c) => (
              <span key={c} className="hover:text-slate-900 transition-colors">
                {c}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonials Masonry/Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all text-left flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full ${t.color} text-white font-bold text-xs flex items-center justify-center shadow-sm`}>
                      {t.avatar}
                    </div>
                    <div>
                      <div className="text-sm font-bold text-slate-900">{t.name}</div>
                      <div className="text-xs text-slate-500">{t.role}</div>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-blue-600">{t.handle}</span>
                </div>

                <div className="text-xs font-semibold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md inline-block mb-3">
                  "{t.highlight}"
                </div>

                <p className="text-sm text-slate-700 leading-relaxed">
                  "{t.text}"
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
                <span className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={13} fill="currentColor" />
                  ))}
                </span>
                <span>Verified Buyer</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
