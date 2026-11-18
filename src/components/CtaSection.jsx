import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download, ShieldCheck, Apple, Sparkles, CheckCircle2 } from 'lucide-react'

export default function CtaSection({ onOpenPurchase }) {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-blue-50/50 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        {/* CleanShot Camera Lens Icon */}
        <div className="w-16 h-16 rounded-3xl bg-gradient-to-tr from-[#0d44e8] to-[#3b82f6] p-1 mx-auto mb-8 shadow-xl shadow-blue-500/25 flex items-center justify-center">
          <div className="w-full h-full bg-[#0d44e8] rounded-[20px] flex items-center justify-center">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <circle cx="12" cy="12" r="3.5" fill="white" />
              <line x1="12" y1="3" x2="14" y2="8.5" />
              <line x1="20.5" y1="8" x2="15.5" y2="10" />
              <line x1="19.5" y1="16.5" x2="14" y2="14.5" />
              <line x1="9.5" y1="19.5" x2="10" y2="14" />
              <line x1="3.5" y1="13.5" x2="8.5" y2="12" />
              <line x1="5.5" y1="6" x2="10" y2="9.5" />
            </svg>
          </div>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Ready to capture your screen <br className="hidden sm:inline" />
          <span className="text-[#0d44e8]">like a pro?</span>
        </h2>

        <p className="mt-6 text-base sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Join over 100,000 creators, designers, and developers who upgraded their Mac workflow with CleanShot X.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto">
          <button
            type="button"
            onClick={() => onOpenPurchase('basic')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#0d44e8] hover:bg-[#0b3ac7] text-white font-semibold text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Get CleanShot X — $29</span>
            <ArrowRight size={17} />
          </button>

          <button
            type="button"
            onClick={() => onOpenPurchase('trial')}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-300 shadow-sm transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download size={16} className="text-slate-500" />
            <span>Free 30-Day Trial</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-emerald-600" />
            <span>30-Day Money-Back Guarantee</span>
          </span>
          <span className="flex items-center gap-1.5">
            <Apple size={14} className="text-slate-800" />
            <span>Apple Silicon & macOS Sequoia Native</span>
          </span>
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={14} className="text-blue-600" />
            <span>Secure 256-Bit SSL Checkout</span>
          </span>
        </div>
      </div>
    </section>
  )
}
