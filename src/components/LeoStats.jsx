import React from 'react';
import { motion } from 'framer-motion';
import { companyInfo } from '../data/leoaxisData';
import { Award, Globe2, CheckCircle2, Users2, Sparkles } from 'lucide-react';

const icons = [Award, CheckCircle2, Globe2, Users2];

export default function LeoStats() {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-gray-200/90 bg-gradient-to-b from-gray-50/70 via-white to-gray-50/50 p-8 sm:p-12 shadow-xl shadow-blue-900/5 relative overflow-hidden"
        >
          {/* Subtle Glow */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />

          {/* Section Sub-heading */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold text-[#0d44e8] uppercase tracking-wider">
              VERIFIED TRACK RECORD & IMPACT
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-gray-950 mt-1 tracking-tight">
              Numbers Grounded in Real Deliverables
            </h3>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {companyInfo.stats.map((stat, i) => {
              const Icon = icons[i] || Sparkles;
              return (
                <div 
                  key={stat.label}
                  className="p-6 rounded-2xl bg-white border border-gray-200/70 text-center shadow-xs hover:border-blue-300 transition-colors"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0d44e8] mx-auto flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base font-bold text-gray-900 mt-2">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500 font-medium mt-1">
                    {stat.sub}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Trust Indicators */}
          <div className="mt-12 pt-8 border-t border-gray-200/80 flex flex-wrap items-center justify-around gap-6 text-xs text-gray-500 font-medium text-center">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>DPIIT Startup India Certified (Govt of India)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>NVIDIA Inception Global AI Member</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>AWS Activate Cloud Architecture</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>Dual Hub Delivery: India 🇮🇳 & Ireland 🇮🇪</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
