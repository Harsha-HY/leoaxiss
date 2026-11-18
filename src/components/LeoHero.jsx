import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDown } from 'lucide-react'

export default function LeoHero({ onOpenContact, onNotify }) {
  const [activeApp, setActiveApp] = useState({
    title: 'TASK Mobile App',
    desc: 'Government of Telangana youth skilling Android platform.'
  })

  // Dynamic Typewriter loop
  const typewriterWords = [
    'high-speed websites.',
    'custom mobile apps.',
    'enterprise AI platforms.',
    'scalable cloud systems.',
    'state governance portals.',
    'fullstack SaaS products.'
  ]

  const [wordIdx, setWordIdx] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const word = typewriterWords[wordIdx]
    let timer

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1))
        if (currentText.length <= 1) {
          setIsDeleting(false)
          setWordIdx((prev) => (prev + 1) % typewriterWords.length)
        }
      }, 40)
    } else {
      timer = setTimeout(() => {
        setCurrentText(word.slice(0, currentText.length + 1))
        if (currentText === word) {
          timer = setTimeout(() => setIsDeleting(true), 1800)
        }
      }, 80)
    }

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, wordIdx])

  const launcherApps = [
    { name: 'TASK', sub: 'Govt App', bg: 'bg-[#ec4899]', text: 'text-white', title: 'TASK Mobile App', desc: 'Government of Telangana youth skilling platform in active production.' },
    { name: 'DETTG', sub: 'Portal', bg: 'bg-[#818cf8]', text: 'text-slate-950', title: 'Awarding Body DETTG', desc: 'State accreditation & attendance monitoring official portal.' },
    { name: 'SaaS', sub: 'Geofence', bg: 'bg-[#bef264]', text: 'text-slate-950', title: 'AcademicTracker SaaS', desc: 'Hardware GPS Geofence attendance verification suite.' },
    { name: 'AI Lab', sub: 'K-12', bg: 'bg-[#6366f1]', text: 'text-white', title: 'AI for Schools', desc: 'Classroom 3.0 hands-on AI & computer vision curriculum.' },
    { name: 'NVIDIA', sub: 'Inception', bg: 'bg-[#76b900]', text: 'text-black', title: 'NVIDIA Inception', desc: 'GPU compute hardware & computer vision pipeline member.' },
    { name: 'Cloud', sub: 'AWS Act', bg: 'bg-[#ff9900]', text: 'text-black', title: 'AWS Activate Cloud', desc: '99.9% uptime SLA auto-scaling microservices on AWS.' },
    { name: 'Training', sub: '500+ Grad', bg: 'bg-[#a855f7]', text: 'text-white', title: 'IT Training & Placements', desc: 'Hands-on Cloud, DevOps, and Fullstack career programs.' },
    { name: 'Web 19', sub: 'Sub-Sec', bg: 'bg-[#fbbf24]', text: 'text-slate-950', title: 'Web Development', desc: 'Sub-second loading React 19 & Next.js 15 platforms.' },
    { name: 'Global', sub: 'India • IRL', bg: 'bg-[#d9f99d]', text: 'text-slate-950', title: 'Dual Continental Delivery', desc: 'Hyderabad Development HQ & Dublin European Operations.' },
  ]

  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 relative overflow-hidden bg-[#faf5ea] border-b border-[#ebdcc8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Typography & Impact Narrative */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            {/* Location & Building Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fffefa] border border-[#ebdcc8] text-xs font-mono text-[#574f45] shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full dual-gradient-bg animate-pulse" />
              <span>Hyderabad &bull; building for India &amp; beyond</span>
            </div>

            {/* Studio Big Display Headline with Outline Typography & Typewriter Loop */}
            <h1 className="text-5xl sm:text-7xl lg:text-[82px] font-black text-[#1c1917] tracking-tight leading-[1.02]">
              Ideas with<br />
              <span className="text-outline">impact.</span><br />
              <span className="text-[#1c1917] block text-2xl sm:text-4xl lg:text-5xl font-extrabold my-2">
                We build <span className="text-dual-1">{currentText || 'high-speed websites.'}</span>
                <span className="inline-block w-1 sm:w-1.5 h-6 sm:h-9 lg:h-10 bg-dual-1 ml-1.5 align-middle animate-pulse rounded-full" />
              </span>
              <span className="dual-gradient-text">Built loud.</span>
            </h1>

            {/* Authentic LeoAxis Subtitle */}
            <p className="text-base sm:text-lg text-[#574f45] max-w-xl font-normal leading-relaxed pt-1">
              LeoAxis turns ambitious ideas into websites, apps, AI solutions and tech programs that move people and businesses forward.
            </p>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => onOpenContact('hero')}
                className="px-7 py-3.5 rounded-full dual-gradient-bg hover:opacity-90 text-white font-bold text-sm transition-all dual-shadow-button active:scale-95 flex items-center gap-2 cursor-pointer"
              >
                <span>Let's build something</span>
                <ArrowUpRight size={17} />
              </button>

              <a
                href="#selected-work"
                className="px-6 py-3.5 rounded-full bg-[#fffefa] hover:bg-[#f3ebdd] text-[#1c1917] font-semibold text-sm border border-[#ebdcc8] hover:border-dual-1 transition-colors flex items-center gap-2 cursor-pointer"
              >
                <span>See our work</span>
                <ArrowDown size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: 3D Dark Workstation Tablet & Interactive Grid */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-radial from-indigo-500/10 via-orange-500/5 to-transparent blur-3xl pointer-events-none transform -translate-y-4" />

            {/* Main Interactive Studio Tablet (Dark Bezel Hardware Composition) */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-md sm:max-w-lg bg-[#14121d] rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-800/80 relative text-left"
              style={{
                boxShadow: '0 30px 60px -15px rgba(28, 25, 23, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08)'
              }}
            >
              {/* Tablet Chrome Top Bar */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-800/60">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                  <div className="w-3 h-3 rounded-full bg-[#eab308]" />
                  <div className="w-3 h-3 rounded-full bg-[#22c55e]" />
                </div>
                <div className="text-[11px] font-mono text-slate-400 font-semibold tracking-wider">
                  leoaxis / future-ready
                </div>
                <div className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  live
                </div>
              </div>

              {/* Bold Studio Statement */}
              <div className="py-6">
                <div className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none uppercase">
                  Tech For<br />
                  <span className="text-[#bef264]">Everyone.</span>
                </div>
              </div>

              {/* 3x3 App Launcher Matrix with Hover Preview */}
              <div className="grid grid-cols-3 gap-3 sm:gap-3.5 pt-2 pb-6">
                {launcherApps.map((app, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveApp(app)}
                    onMouseEnter={() => setActiveApp(app)}
                    className={`aspect-square rounded-2xl ${app.bg} p-2 flex flex-col justify-between items-start transition-all hover:scale-105 active:scale-95 text-left shadow-md cursor-pointer`}
                  >
                    <span className={`text-[10px] sm:text-xs font-mono font-black uppercase ${app.text}`}>
                      {app.name}
                    </span>
                    <span className={`text-[8px] sm:text-[9px] font-mono opacity-80 ${app.text}`}>
                      {app.sub}
                    </span>
                  </button>
                ))}
              </div>

              {/* Dynamic Bottom Telemetry Bar */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="truncate pr-2">
                  <span className="text-white font-bold">{activeApp.title}:</span>{' '}
                  <span className="text-slate-400">{activeApp.desc}</span>
                </div>
              </div>

              {/* Gen-Z Playful Floating Stickers */}
              <div className="hidden sm:flex absolute -top-4 -left-6 bg-[#fffefa] border border-[#ebdcc8] shadow-xl rounded-2xl px-4 py-2 items-center gap-2 text-xs font-bold text-[#1c1917] z-20">
                <span className="w-2 h-2 rounded-full bg-dual-1" />
                <span>01 innovate</span>
              </div>

              <div className="hidden sm:flex absolute top-1/2 -right-8 bg-[#fffefa] border border-[#ebdcc8] shadow-xl rounded-2xl px-4 py-2 items-center gap-2 text-xs font-bold text-[#1c1917] z-20">
                <span className="text-dual-2 font-black">+</span>
                <span>Develop</span>
              </div>

              <div className="hidden sm:flex absolute -bottom-4 right-12 bg-[#fffefa] border border-[#ebdcc8] shadow-xl rounded-2xl px-4 py-2 items-center gap-2 text-xs font-bold text-[#1c1917] z-20">
                <span className="text-emerald-500 font-bold">&#10003;</span>
                <span>Deliver</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  )
}
