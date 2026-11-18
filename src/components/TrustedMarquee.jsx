import React from 'react'

export default function TrustedMarquee() {
  const clients = [
    { name: 'Government of Telangana (TASK)', sub: 'State Youth Skilling Android App', color: 'bg-emerald-500' },
    { name: 'Awarding Body DETTG', sub: 'Accreditation & Verification Portal', color: 'bg-indigo-500' },
    { name: 'NVIDIA Inception', sub: 'AI & Deep Learning Member', color: 'bg-[#76b900]' },
    { name: 'AWS Activate', sub: 'Cloud Architecture Portfolio', color: 'bg-[#ff9900]' },
    { name: 'DPIIT Startup India', sub: 'Govt Certified #DIPP162791', color: 'bg-blue-600' },
    { name: 'CA Ghantasala & Co', sub: 'Chartered Accountants Platform', color: 'bg-rose-500' },
    { name: 'iFocus Infotech', sub: 'Enterprise IT Solutions', color: 'bg-purple-500' },
    { name: 'MyCorp Solutions', sub: 'Corporate Advisory Portal', color: 'bg-cyan-500' },
    { name: 'RK Software Solutions', sub: 'SaaS & Web Systems', color: 'bg-teal-500' },
    { name: 'Ikyata Foundation', sub: 'Education & Community NGO', color: 'bg-amber-500' },
    { name: 'Saravana Pooja Store', sub: 'E-Commerce Global Retail', color: 'bg-orange-500' },
    { name: 'AAdesigner Studio', sub: 'Modern Architecture & Interiors', color: 'bg-violet-500' },
    { name: 'Roo & Co', sub: 'Apparel & Fashion Commerce', color: 'bg-emerald-600' },
    { name: 'The Apex Dental', sub: 'Healthcare Clinic Chain', color: 'bg-sky-500' },
    { name: 'Toros Steakhouse', sub: 'International Hospitality', color: 'bg-red-500' },
    { name: 'NRI Matrimony', sub: 'High-Concurrency Web App', color: 'bg-pink-500' },
  ]

  return (
    <section id="trusted-teams" className="py-14 bg-[#faf5ea] border-b border-[#ebdcc8] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fffefa] border border-[#ebdcc8] text-xs font-mono font-bold tracking-wider text-[#78716c] uppercase shadow-2xs">
          <span className="w-2 h-2 rounded-full dual-gradient-bg animate-pulse" />
          <span>TRUSTED BY INNOVATIVE TEAMS, STARTUPS &amp; STATE GOVERNMENTS</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-[#1c1917] tracking-tight mt-3">
          Proven Engineering Partner for 28+ High-Growth Brands
        </h3>
      </div>

      {/* Smooth Continuous Right-to-Left Marquee Ticker */}
      <div className="relative w-full overflow-hidden py-3">
        {/* Edge Gradient Fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 sm:w-36 z-10 bg-gradient-to-r from-[#faf5ea] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 sm:w-36 z-10 bg-gradient-to-l from-[#faf5ea] to-transparent" />

        <div className="marquee-track-rtl flex items-center gap-4 sm:gap-6">
          {/* Group 1 */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0">
            {clients.map((c, i) => (
              <div 
                key={i} 
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#fffefa] border border-[#ebdcc8] shadow-xs hover:border-dual-1 hover:shadow-md transition-all text-left"
              >
                <span className={`w-2.5 h-2.5 rounded-full ${c.color} shrink-0`} />
                <div>
                  <div className="text-xs font-black text-[#1c1917] whitespace-nowrap">{c.name}</div>
                  <div className="text-[10px] font-mono text-[#78716c] whitespace-nowrap">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Group 2 (Duplicate for Seamless Infinite Loop) */}
          <div className="flex items-center gap-4 sm:gap-6 shrink-0" aria-hidden="true">
            {clients.map((c, i) => (
              <div 
                key={`dup-${i}`} 
                className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#fffefa] border border-[#ebdcc8] shadow-xs hover:border-dual-1 hover:shadow-md transition-all text-left"
              >
                <span className={`w-2.5 h-2.5 rounded-full ${c.color} shrink-0`} />
                <div>
                  <div className="text-xs font-black text-[#1c1917] whitespace-nowrap">{c.name}</div>
                  <div className="text-[10px] font-mono text-[#78716c] whitespace-nowrap">{c.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
