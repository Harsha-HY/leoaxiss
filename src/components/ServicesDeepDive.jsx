import React from 'react'
import { ArrowUpRight } from 'lucide-react'

export default function ServicesDeepDive({ onOpenContact }) {
  const capabilities = [
    {
      num: '01',
      title: 'Web & app development',
      desc: 'Responsive websites, web apps and mobile experiences made for performance, conversion and growth.',
      tags: ['Next.js 15', 'React 19', 'Flutter', 'Sub-sec Load'],
      accent: 'blue',
      href: '#portfolio'
    },
    {
      num: '02',
      title: 'AI-powered solutions',
      desc: 'Practical AI integrations that automate tasks, improve decisions and unlock better products.',
      tags: ['NVIDIA Inception', 'Computer Vision', 'Custom LLMs', 'Doc OCR'],
      accent: 'emerald',
      href: '#selected-work'
    },
    {
      num: '03',
      title: 'Cloud & IT support',
      desc: 'Secure cloud infrastructure, migration support and dependable technology systems.',
      tags: ['AWS Activate', 'Zero Downtime', 'Docker', '24/7 SLA'],
      accent: 'amber',
      href: '#attendance'
    },
    {
      num: '04',
      title: 'Digital marketing',
      desc: 'SEO, search, social and performance campaigns built around measurable business growth.',
      tags: ['Google & Meta Ads', 'Technical SEO', 'Local Maps', 'Analytics'],
      accent: 'purple',
      href: '#portfolio'
    }
  ]

  return (
    <section id="what-we-do" className="py-20 lg:py-28 bg-white border-b border-gray-200/60 relative">
      <div id="services" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section Tag */}
        <div className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase mb-10">
          05 / WHAT WE DO
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Sticky Column: Big Bold Typography & Studio Spark */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6 text-left">
            <h2 className="text-4xl sm:text-6xl font-black text-gray-950 tracking-tight leading-[1.05]">
              Pick a problem.<br />
              <span className="text-[#4f46e5]">We'll bring the spark.</span>
            </h2>

            {/* Minimalist Studio Coordinate / Radar Target Pill */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gray-50 border border-gray-200 shadow-xs">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500" />
              </span>
              <span className="text-xs font-mono font-semibold text-gray-600">
                Hyderabad HQ &bull; 100% on-time delivery
              </span>
            </div>

            <p className="text-base text-gray-600 leading-relaxed font-normal pt-2">
              We don't do boilerplate templates or slow agency layers. LeoAxis pairs senior fullstack engineers with cutting-edge AI architectures to ship production platforms that run circles around the competition.
            </p>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onOpenContact('services')}
                className="px-7 py-3.5 rounded-full bg-black hover:bg-gray-800 text-white font-bold text-sm transition-all shadow-md active:scale-95 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Tell us what you're building</span>
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>

          {/* Right Column: Clean Numbered Rows (01, 02, 03, 04) */}
          <div className="lg:col-span-7 divide-y divide-gray-200/80 border-y border-gray-200/80">
            {capabilities.map((c) => (
              <div
                key={c.num}
                className="py-9 group hover:bg-[#faf8f5] px-4 sm:px-6 rounded-2xl transition-all duration-300 text-left"
              >
                <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center">
                  <div className="sm:col-span-1 text-sm font-mono font-bold text-gray-400 group-hover:text-[#4f46e5] transition-colors">
                    {c.num}
                  </div>
                  <div className="sm:col-span-5">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-950 group-hover:text-[#4f46e5] transition-colors tracking-tight">
                      {c.title}
                    </h3>
                  </div>
                  <div className="sm:col-span-5">
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {c.desc}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {c.tags.map((t, idx) => (
                        <span
                          key={idx}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-600"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="sm:col-span-1 text-right sm:text-center">
                    <a
                      href={c.href}
                      className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 group-hover:bg-[#4f46e5] group-hover:border-[#4f46e5] text-gray-400 group-hover:text-white inline-flex items-center justify-center transition-all shadow-xs group-hover:scale-110 cursor-pointer"
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
