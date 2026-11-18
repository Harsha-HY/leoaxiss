import React from 'react'
import { ArrowRight } from 'lucide-react'

export default function AiSchoolsSection({ onOpenContact }) {
  return (
    <section id="impact-programs" className="py-20 lg:py-28 bg-[#faf8f5] border-b border-gray-200/60 relative">
      <div id="ai-schools" className="absolute -top-24" />
      <div id="training" className="absolute -top-24" />
      <div id="community" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-14 gap-4 text-left">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase mb-2">
              07 / SOCIAL IMPACT & EDUCATION
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight">
              Classrooms, Careers & Communities.
            </h2>
          </div>
          <p className="text-sm text-gray-500 max-w-md">
            Technology isn't just for multinational boardrooms. We take enterprise capabilities to school labs, job seekers, and neighborhood small businesses across Tier 2 & Tier 3 India.
          </p>
        </div>

        {/* 3 Bento Cards Grid (Matching Reference Image 4) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* CARD 1: Lavender / Lilac Card (AI FOR SCHOOLS) */}
          <div className="rounded-3xl p-8 bg-[#ede9fe] border border-purple-200/80 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden group text-left">
            <div className="space-y-4">
              <span className="text-[11px] font-mono font-bold tracking-wider text-purple-900 uppercase">
                AI FOR SCHOOLS
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight leading-tight">
                Big future energy.
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed font-normal">
                Age-appropriate AI learning tools and hands-on programs that make emerging technology feel exciting, understandable and useful in every classroom.
              </p>
            </div>

            {/* Tablet Visual Mockup */}
            <div className="my-8 relative">
              <div className="rounded-2xl border-2 border-slate-900 bg-white p-5 shadow-lg relative overflow-hidden group-hover:scale-102 transition-transform duration-300">
                <div className="text-[10px] font-mono uppercase tracking-widest text-gray-400 mb-2">
                  AI LAB
                </div>
                <h4 className="text-xl font-black text-gray-950 tracking-tight mb-4">
                  What can we create today?
                </h4>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                  <span className="text-[9px] font-mono tracking-wider text-gray-500 font-bold uppercase">
                    SAFE &bull; GUIDED &bull; HANDS-ON
                  </span>
                  <span className="text-rose-400 text-lg">✦</span>
                </div>
              </div>
            </div>

            {/* Bottom Action Link */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenContact('AI for Schools Lab')}
                className="inline-flex items-center gap-2 text-sm font-bold text-gray-950 group-hover:text-[#4f46e5] transition-colors cursor-pointer"
              >
                <span>Bring AI to your school</span>
                <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* CARD 2: Dark Charcoal / Slate Card (IT TRAINING & PLACEMENTS) */}
          <div className="rounded-3xl p-8 bg-[#18181b] text-white border border-zinc-800 flex flex-col justify-between shadow-xs hover:shadow-2xl transition-all duration-300 relative overflow-hidden group text-left">
            <div className="space-y-4">
              <span className="text-[11px] font-mono font-bold tracking-wider text-slate-400 uppercase">
                IT TRAINING & PLACEMENTS
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                Learn it. <span className="text-[#818cf8]">Launch it.</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-normal">
                Hands-on Cloud, DevOps and software training for students and professionals building real career momentum.
              </p>
            </div>

            {/* Interactive Terminal Visual Mockup */}
            <div className="my-8 relative">
              <div className="rounded-2xl border border-zinc-700 bg-zinc-950 p-5 font-mono shadow-inner group-hover:scale-102 transition-transform duration-300">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  <span className="text-[10px] text-zinc-500 ml-2">bash - 80x24</span>
                </div>
                <div className="text-xs text-lime-400 mb-1">
                  leoaxis@future:~$
                </div>
                <div className="text-xs text-zinc-100 flex items-center gap-1">
                  <span>skills.exe --run</span>
                  <span className="w-2 h-4 bg-lime-400 animate-pulse" />
                </div>
                <div className="mt-4 pt-3 border-t border-zinc-800/80 text-[10px] text-zinc-400 flex items-center justify-between">
                  <span>AI / Cloud / DevOps / Software</span>
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                </div>
              </div>
            </div>

            {/* Bottom Action Link */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenContact('IT Training & Placements')}
                className="inline-flex items-center gap-2 text-sm font-bold text-white group-hover:text-[#818cf8] transition-colors cursor-pointer"
              >
                <span>Explore training</span>
                <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

          {/* CARD 3: Vibrant Lime Green Card (COMMUNITY PROGRAMS) */}
          <div className="rounded-3xl p-8 bg-[#bef264] text-slate-950 border border-lime-300 flex flex-col justify-between shadow-xs hover:shadow-xl transition-all duration-300 relative overflow-hidden group text-left">
            <div className="space-y-4">
              <span className="text-[11px] font-mono font-bold tracking-wider text-lime-900 uppercase">
                COMMUNITY PROGRAMS
              </span>
              <h3 className="text-3xl sm:text-4xl font-black text-slate-950 tracking-tight leading-tight">
                Digital <span className="text-[#4f46e5]">for all.</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
                Digital literacy and local business enablement initiatives that create opportunity across Tier 2 and Tier 3 India.
              </p>
            </div>

            {/* Floating 3D Shapes & 3 Metric Boxes */}
            <div className="my-8 relative">
              <div className="relative h-20 mb-3 flex items-center justify-around pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-[#818cf8]/70 shadow-sm animate-pulse" />
                <div className="text-purple-700 text-xl font-bold">✦</div>
                <div className="w-10 h-10 rounded-full bg-pink-400/80 shadow-sm" />
              </div>

              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white rounded-xl p-2.5 text-center shadow-xs border border-lime-400/60">
                  <div className="text-base sm:text-lg font-black text-slate-950">50+</div>
                  <div className="text-[10px] font-mono text-gray-500 uppercase">schools</div>
                </div>
                <div className="bg-white rounded-xl p-2.5 text-center shadow-xs border border-lime-400/60">
                  <div className="text-base sm:text-lg font-black text-slate-950">1,200+</div>
                  <div className="text-[10px] font-mono text-gray-500 uppercase">students</div>
                </div>
                <div className="bg-white rounded-xl p-2.5 text-center shadow-xs border border-lime-400/60">
                  <div className="text-base sm:text-lg font-black text-slate-950">100+</div>
                  <div className="text-[10px] font-mono text-gray-500 uppercase">businesses</div>
                </div>
              </div>
            </div>

            {/* Bottom Action Link */}
            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenContact('Community Programs')}
                className="inline-flex items-center gap-2 text-sm font-bold text-slate-950 group-hover:text-[#4f46e5] transition-colors cursor-pointer"
              >
                <span>Join the movement</span>
                <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
