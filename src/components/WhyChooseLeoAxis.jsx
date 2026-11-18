import React from 'react'

export default function WhyChooseLeoAxis({ onOpenContact }) {
  return (
    <section id="why-us" className="py-24 bg-white border-t border-gray-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-4 text-left">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase mb-2">
              09 / THE LEOAXIS DIFFERENCE
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight leading-tight">
              Why Industry Leaders &amp; Fast-Growing Brands Choose Us.
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-md">
            Six foundational engineering commitments that separate LeoAxis from standard agencies. Production-grade architecture with zero deadline slippage.
          </p>
        </div>

        {/* 6 Bento Cards Grid (Styled in Image 2 Bento System) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* BENTO 1: Dark Charcoal Card (#18181b) - Quality Assured Architecture */}
          <div className="rounded-3xl p-8 bg-[#18181b] text-white border border-zinc-800 flex flex-col justify-between shadow-xs hover:shadow-2xl transition-all duration-300 relative overflow-hidden group text-left">
            <div className="space-y-4">
              <span className="text-[11px] font-mono font-bold tracking-wider text-emerald-400 uppercase">
                QUALITY ASSURED ARCHITECTURE
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Zero tech debt. <span className="text-emerald-400">Grade A+.</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                Production-grade codebases engineered with microservices, strict linting, zero tech debt, and comprehensive automated test suites.
              </p>
            </div>

            {/* Code Health Index Terminal Visual */}
            <div className="my-8 relative">
              <div className="rounded-2xl border border-zinc-700 bg-zinc-950 p-5 font-mono shadow-inner group-hover:scale-102 transition-transform duration-300">
                <div className="flex items-center justify-between mb-3 text-[10px] text-zinc-400 border-b border-zinc-800 pb-2">
                  <span className="text-emerald-400 font-bold">CODE HEALTH INDEX</span>
                  <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded text-[9px] font-bold">GRADE A+ (100%)</span>
                </div>
                <div className="space-y-1.5 text-xs text-zinc-200">
                  <div className="flex items-center justify-between">
                    <span>● Test Coverage:</span>
                    <span className="text-emerald-400 font-bold">98%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>● Tech Debt:</span>
                    <span className="text-emerald-400 font-bold">0 Hours</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>● CI/CD Status:</span>
                    <span className="text-emerald-400 font-bold">Automated Pass ✓</span>
                  </div>
                </div>
                <div className="mt-4 pt-2.5 border-t border-zinc-800/80 text-[10px] text-zinc-400 flex items-center justify-between">
                  <span>Clean Code Principles</span>
                  <span className="text-emerald-400 font-bold">SLA: 100%</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenContact('Quality Assured Architecture Audit')}
                className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-emerald-400 transition-colors cursor-pointer"
              >
                <span>Inspect architecture standards</span>
                <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* BENTO 2: Vibrant Lime Green Card (#bef264) - Punctual Delivery Commitments */}
          <div className="rounded-3xl p-8 bg-[#bef264] text-slate-950 border border-lime-300 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden group text-left">
            <div className="space-y-4">
              <span className="text-[11px] font-mono font-bold tracking-wider text-lime-900 uppercase">
                PUNCTUAL DELIVERY COMMITMENTS
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Sprint fast. <span className="text-[#4f46e5]">Never slip.</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                Agile 2-week sprints with milestone transparency, weekly video demos, and strict SLA delivery commitments with zero deadline slippage.
              </p>
            </div>

            {/* Agile Sprints Widget with Progress Bar */}
            <div className="my-8 relative">
              <div className="rounded-2xl border-2 border-slate-900 bg-white p-5 shadow-lg group-hover:scale-102 transition-transform duration-300 font-mono">
                <div className="flex items-center justify-between mb-2 text-xs">
                  <span className="font-bold text-slate-900">AGILE 2-WEEK SPRINTS</span>
                  <span className="bg-[#bef264] text-slate-950 px-2 py-0.5 rounded text-[10px] font-bold">100% ON-TIME</span>
                </div>
                <div className="text-[11px] text-gray-600 mb-2">Milestone Progress (Sprint 4/4)</div>
                <div className="w-full bg-slate-100 h-3 rounded-full overflow-hidden p-0.5 border border-slate-300">
                  <div className="bg-[#4f46e5] h-full w-[100%] rounded-full" />
                </div>
                <div className="mt-4 pt-3 border-t border-gray-100 grid grid-cols-3 gap-1.5 text-center text-[10px]">
                  <div className="bg-gray-50 rounded p-1 font-bold">Sprint 4/4</div>
                  <div className="bg-gray-50 rounded p-1 font-bold text-[#4f46e5]">100% SLA</div>
                  <div className="bg-gray-50 rounded p-1 font-bold text-emerald-700">0 Slip</div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenContact('Punctual Delivery Commitments')}
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-950 group-hover:text-[#4f46e5] transition-colors cursor-pointer"
              >
                <span>View sprint cadence</span>
                <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* BENTO 3: Lavender / Lilac Card (#ede9fe) - Experienced Engineering Team */}
          <div className="rounded-3xl p-8 bg-[#ede9fe] border border-purple-200/80 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden group text-left">
            <div className="space-y-4">
              <span className="text-[11px] font-mono font-bold tracking-wider text-purple-900 uppercase">
                EXPERIENCED ENGINEERING TEAM
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-tight">
                Senior leads. <span className="text-[#4f46e5]">Zero outsourcers.</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                Senior fullstack developers and cloud architects with proven track records building government platforms, fintech systems, and cross-border web apps.
              </p>
            </div>

            {/* Tech Constellation Widget */}
            <div className="my-8 relative">
              <div className="rounded-2xl border-2 border-slate-900 bg-white p-5 shadow-lg group-hover:scale-102 transition-transform duration-300 font-mono">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-bold text-slate-900">ENTERPRISE ARCHITECTS</span>
                  <span className="text-purple-700 font-bold text-[10px]">10+ Yrs Leads</span>
                </div>
                <div className="flex flex-wrap gap-1.5 my-2">
                  <span className="px-2.5 py-1 rounded-lg bg-indigo-50 text-[#4f46e5] font-bold text-[11px]">React 19</span>
                  <span className="px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 font-bold text-[11px]">Flutter</span>
                  <span className="px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 font-bold text-[11px]">AWS Cloud</span>
                  <span className="px-2.5 py-1 rounded-lg bg-emerald-50 text-emerald-700 font-bold text-[11px]">Next.js 15</span>
                  <span className="px-2.5 py-1 rounded-lg bg-purple-50 text-purple-700 font-bold text-[11px]">Python AI</span>
                </div>
                <div className="mt-3 pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-500">
                  <span>Direct In-House Staff</span>
                  <span className="text-[#4f46e5] font-bold">Zero Outsourcing</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenContact('Engineering Team Consultation')}
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-950 group-hover:text-[#4f46e5] transition-colors cursor-pointer"
              >
                <span>Meet our technical leads</span>
                <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* BENTO 4: Soft Sky / Cyan Card (#e0f2fe) - Measurable Growth Outcomes */}
          <div className="rounded-3xl p-8 bg-[#e0f2fe] border border-sky-200/80 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden group text-left">
            <div className="space-y-4">
              <span className="text-[11px] font-mono font-bold tracking-wider text-sky-900 uppercase">
                MEASURABLE GROWTH OUTCOMES
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-tight">
                Sub-second speed. <span className="text-sky-700">Real revenue.</span>
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                Platforms designed specifically to convert traffic, retain users, improve Google organic ranking, and directly multiply inbound business revenue.
              </p>
            </div>

            {/* Performance Telemetry Boxes */}
            <div className="my-8 relative">
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white rounded-2xl p-3 text-center border-2 border-slate-900 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <div className="text-xl sm:text-2xl font-black text-slate-950">99</div>
                  <div className="text-[9px] font-mono text-gray-500 uppercase">Lighthouse</div>
                </div>
                <div className="bg-white rounded-2xl p-3 text-center border-2 border-slate-900 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <div className="text-xl sm:text-2xl font-black text-emerald-600">0.48s</div>
                  <div className="text-[9px] font-mono text-gray-500 uppercase">Load Time</div>
                </div>
                <div className="bg-white rounded-2xl p-3 text-center border-2 border-slate-900 shadow-sm group-hover:scale-105 transition-transform duration-300">
                  <div className="text-xl sm:text-2xl font-black text-[#4f46e5]">+18.5%</div>
                  <div className="text-[9px] font-mono text-gray-500 uppercase">CRO Rate</div>
                </div>
              </div>
              <div className="mt-3 bg-white/80 rounded-xl p-2.5 text-center font-mono text-xs font-bold text-sky-800 border border-sky-200">
                +240% Inbound Pipeline Velocity
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenContact('Performance & CRO Audit')}
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-950 group-hover:text-sky-700 transition-colors cursor-pointer"
              >
                <span>Request speed audit</span>
                <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* BENTO 5: Warm Amber Card (#fef3c7) - Affordable & Fair Pricing */}
          <div className="rounded-3xl p-8 bg-[#fef3c7] border border-amber-300/80 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden group text-left">
            <div className="space-y-4">
              <span className="text-[11px] font-mono font-bold tracking-wider text-amber-900 uppercase">
                AFFORDABLE &amp; FAIR PRICING
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-tight">
                Pay on approval. <span className="text-amber-700">Zero hidden costs.</span>
              </h3>
              <p className="text-xs sm:text-sm text-amber-900 leading-relaxed font-normal">
                Enterprise-grade architectural quality made accessible for Indian startups, educational institutions, and fast-growing local businesses.
              </p>
            </div>

            {/* Billing Transparency Tracker */}
            <div className="my-8 relative">
              <div className="rounded-2xl border-2 border-slate-900 bg-white p-5 shadow-lg group-hover:scale-102 transition-transform duration-300 font-mono">
                <div className="flex items-center justify-between mb-3 text-xs">
                  <span className="font-bold text-slate-900">TRANSPARENT BILLING</span>
                  <span className="bg-amber-100 text-amber-800 px-2 py-0.5 rounded text-[10px] font-bold">FIXED SCOPE</span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex items-center justify-between text-gray-700">
                    <span>Phase 1: Architecture &amp; UI</span>
                    <span className="text-emerald-600 font-bold">✓ Approved</span>
                  </div>
                  <div className="flex items-center justify-between text-gray-700">
                    <span>Phase 2: Core Engineering</span>
                    <span className="text-emerald-600 font-bold">✓ Milestone</span>
                  </div>
                </div>
                <div className="mt-4 pt-2.5 border-t border-gray-100 flex items-center justify-between text-[11px] font-bold">
                  <span className="text-emerald-700">Pay Only on Approval</span>
                  <span className="text-amber-700">Zero Hidden Costs</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenContact('Transparent Pricing Inquiry')}
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-950 group-hover:text-amber-700 transition-colors cursor-pointer"
              >
                <span>Get fixed milestone quote</span>
                <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* BENTO 6: Deep Slate / Midnight Card (#0f172a) - 24/7 Dedicated SRE */}
          <div className="rounded-3xl p-8 bg-[#0f172a] text-white border border-slate-800 flex flex-col justify-between shadow-xs hover:shadow-2xl transition-all duration-300 relative overflow-hidden group text-left">
            <div className="space-y-4">
              <span className="text-[11px] font-mono font-bold tracking-wider text-sky-400 uppercase">
                24/7 DEDICATED SRE SUPPORT
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Always online. <span className="text-sky-400">99.99% uptime.</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
                Dedicated technical maintenance, security vulnerability patching, automated cloud backups, and rapid emergency response SLAs.
              </p>
            </div>

            {/* SRE Pulse Monitor */}
            <div className="my-8 relative">
              <div className="rounded-2xl border border-slate-700 bg-slate-900/90 p-5 font-mono shadow-inner group-hover:scale-102 transition-transform duration-300">
                <div className="flex items-center justify-between mb-3 text-[10px] text-slate-400 border-b border-slate-800 pb-2">
                  <span className="text-sky-400 font-bold">LIVE TELEMETRY MONITOR</span>
                  <span className="text-emerald-400 font-bold">&lt; 15m EMERGENCY SLA</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700">
                    <div className="text-[9px] text-slate-400">Uptime</div>
                    <div className="font-black text-emerald-400 text-sm mt-0.5">99.99%</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700">
                    <div className="text-[9px] text-slate-400">Backups</div>
                    <div className="font-black text-sky-400 text-sm mt-0.5">Daily Cloud</div>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-800/80 border border-slate-700">
                    <div className="text-[9px] text-slate-400">Patches</div>
                    <div className="font-black text-purple-400 text-sm mt-0.5">Active</div>
                  </div>
                </div>
                <div className="mt-4 pt-2.5 border-t border-slate-800 text-[10px] text-slate-400 flex items-center justify-between">
                  <span>Direct Engineer Access</span>
                  <span className="text-sky-400 font-bold">Zero Downtime</span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenContact('24/7 Dedicated SRE Support')}
                className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-sky-400 transition-colors cursor-pointer"
              >
                <span>Review SLA guarantees</span>
                <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
