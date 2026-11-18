import React from 'react';
import { motion } from 'framer-motion';
import { companyInfo } from '../data/leoaxisData';
import { 
  ArrowUpRight, 
  MessageSquare, 
  Phone, 
  CheckCircle2, 
  Sparkles 
} from 'lucide-react';

export default function LeoCta({ onOpenContact }) {
  return (
    <section className="py-24 bg-[#faf5ea] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Unique Bento Studio CTA Layout (Transforming Photo 1 into Photo 2 & 6 Aesthetics) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Heroic Bento Card (Vibrant Neon Lime - Styled after 6th Photo) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 rounded-[36px] p-8 sm:p-12 lg:p-14 bg-[#bef264] border border-[#a3e635] shadow-xl relative overflow-hidden flex flex-col justify-between text-left"
          >
            {/* Top Kicker & Gen-Z Sparkle Badge */}
            <div className="flex items-center justify-between mb-8 z-10">
              <span className="px-4 py-1.5 rounded-full bg-[#1c1917] text-white text-xs font-mono font-bold tracking-widest uppercase">
                09 / LET'S MAKE A MOVE &bull; START YOUR PROJECT TODAY
              </span>
              <div className="w-10 h-10 rounded-full bg-pink-400 flex items-center justify-center text-white shadow-md animate-bounce">
                <span className="text-lg font-black">&#10022;</span>
              </div>
            </div>

            {/* Display Headline (Authentic LeoAxis Copy) */}
            <div className="space-y-4 my-auto z-10">
              <h2 className="text-4xl sm:text-6xl lg:text-[62px] font-black text-[#1c1917] tracking-tight leading-[1.05]">
                Ready to Innovate, Develop, &amp; Deliver Your Next Big Leap?
              </h2>
              <p className="text-base sm:text-lg text-[#1c1917]/90 max-w-2xl font-normal leading-relaxed">
                Partner with the engineering team trusted by the Government of Telangana, global clients across Ireland and Australia, and over 28+ growing brands.
              </p>
            </div>

            {/* Action Buttons & Direct Channels */}
            <div className="pt-8 flex flex-wrap items-center gap-4 z-10">
              <button
                type="button"
                onClick={() => onOpenContact && onOpenContact('consultation')}
                className="px-8 py-4 rounded-full bg-[#1c1917] hover:bg-black text-white font-black text-sm sm:text-base transition-all shadow-xl active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Book Free Consultation</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={companyInfo.indiaOffice.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-black text-sm sm:text-base transition-all shadow-lg shadow-emerald-700/20 flex items-center gap-2 cursor-pointer"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WhatsApp (+91 96180 76715)</span>
              </a>

              <a
                href={`tel:${companyInfo.indiaOffice.phoneRaw}`}
                className="px-5 py-4 rounded-full bg-white/80 hover:bg-white text-[#1c1917] font-bold text-xs sm:text-sm border border-[#1c1917]/20 transition-all flex items-center gap-1.5 cursor-pointer"
                title="Call India Headquarters"
              >
                <span>🇮🇳 +91 96180 76715</span>
              </a>

              <a
                href={`tel:${companyInfo.irelandOffice.phoneRaw}`}
                className="px-5 py-4 rounded-full bg-white/80 hover:bg-white text-[#1c1917] font-bold text-xs sm:text-sm border border-[#1c1917]/20 transition-all flex items-center gap-1.5 cursor-pointer"
                title="Call Europe Hub (Dublin)"
              >
                <span>🇪🇺 +353 (89) 254 2002</span>
              </a>
            </div>

            {/* Playful Floating Smiley Sticker */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 w-36 h-36 rounded-3xl bg-[#818cf8] p-4 shadow-xl transform rotate-12 pointer-events-none opacity-90">
              <div className="w-full h-full flex items-center justify-center text-4xl text-white font-black">
                :)
              </div>
            </div>
          </motion.div>

          {/* Technical Telemetry Inset Bento (Styled after 2nd Photo) */}
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 rounded-[36px] p-8 sm:p-10 bg-[#f0ebff] border border-purple-200/80 shadow-xl flex flex-col justify-between text-left relative overflow-hidden"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono font-bold tracking-wider text-dual-1 uppercase">
                  DIRECT LEAD ACCESS
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-[#1c1917] tracking-tight leading-tight">
                Enterprise code. <span className="text-dual-1">Zero outsourcers.</span>
              </h3>

              <p className="text-xs text-[#574f45] leading-relaxed">
                Every contract includes senior in-house architecture leads, bi-weekly sprints, and automated code review pipelines.
              </p>
            </div>

            {/* Inner White Telemetry Widget */}
            <div className="bg-white rounded-2xl border border-purple-200 p-5 shadow-xs my-6 space-y-4">
              <div className="flex items-center justify-between text-[11px] font-mono font-bold">
                <span className="text-[#1c1917]">SPRINT CADENCE</span>
                <span className="px-2 py-0.5 rounded bg-lime-100 text-lime-900 text-[10px]">100% ON-TIME</span>
              </div>

              <div>
                <div className="flex justify-between text-[10px] font-mono text-gray-500 mb-1">
                  <span>Milestone Progress (Sprint 4/4)</span>
                  <span className="font-bold text-dual-1">100% SLA</span>
                </div>
                <div className="w-full h-2 rounded-full bg-gray-100 overflow-hidden">
                  <div className="h-full rounded-full dual-gradient-bg" style={{ width: '100%' }} />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 text-center text-xs font-mono">
                <div className="p-2 rounded-xl bg-purple-50 border border-purple-100">
                  <span className="text-[10px] text-gray-500 block">SLA Commitment</span>
                  <span className="text-xs font-black text-emerald-600">0 Deadline Slip</span>
                </div>
                <div className="p-2 rounded-xl bg-purple-50 border border-purple-100">
                  <span className="text-[10px] text-gray-500 block">Code Health</span>
                  <span className="text-xs font-black text-[#1c1917]">Grade A+</span>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-purple-200/60 flex items-center justify-between text-xs font-mono text-[#78716c]">
              <span>Hyderabad &bull; Dublin Hubs</span>
              <span className="font-bold text-dual-1">&lt; 15m Response</span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
