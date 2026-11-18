import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState(0)

  const faqs = [
    {
      q: 'What happens after 1 year of free updates on the Basic plan?',
      a: 'You can keep using the version of CleanShot X you have forever! There are no forced renewals or recurring charges. If you want to receive new feature updates after year 1, you can renew at an exclusive discounted rate, or keep your existing version perpetually.'
    },
    {
      q: 'Can I use CleanShot X on multiple Macs?',
      a: 'A standard CleanShot Basic license is valid for 1 Mac. You can buy additional seats during checkout at a volume discount. CleanShot Pro accounts can be used across multiple Macs under the same subscription.'
    },
    {
      q: 'Is CleanShot X compatible with Apple Silicon (M1, M2, M3, M4) and macOS Sequoia?',
      a: 'Yes, absolutely. CleanShot X is a 100% native Universal binary optimized specifically for Apple Silicon hardware, ensuring near-instant launch times, high 60 FPS recording performance, and minimal battery consumption.'
    },
    {
      q: 'Can CleanShot record internal macOS system audio?',
      a: 'Yes! Unlike older capture tools that require complex audio routing or third-party kernel drivers, CleanShot captures crystal-clear system audio directly from applications, games, and video calls out of the box.'
    },
    {
      q: 'How does CleanShot Cloud work and where is data stored?',
      a: 'CleanShot Cloud is hosted on high-performance global CDN infrastructure with 256-bit SSL encryption. Once uploaded, a private short link is copied to your clipboard. You can protect files with passwords, custom domains, or self-destruct timers.'
    },
    {
      q: 'What is your refund policy?',
      a: 'We offer an unconditional 30-day money-back guarantee. If CleanShot X does not significantly speed up your workflow, simply contact our support team and we will issue a full refund immediately.'
    },
  ]

  return (
    <section id="faq" className="py-24 bg-slate-50/70 border-t border-slate-200/80 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-200/70 text-slate-700 text-xs font-semibold uppercase tracking-wider mb-3">
            <HelpCircle size={13} />
            <span>Got Questions?</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Everything you need to know about CleanShot X licenses, updates, and compatibility.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-3.5 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white border border-slate-200/80 shadow-xs overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left cursor-pointer hover:bg-slate-50/50 transition-colors"
                >
                  <span className="text-base font-bold text-slate-900 pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-blue-600' : ''
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
