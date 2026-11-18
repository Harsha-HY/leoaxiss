import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, FileText, Lock, RefreshCw, CornerDownLeft } from 'lucide-react'

export default function GovernmentProjectsSection({ onOpenContact, onNotify }) {
  const [activeTab, setActiveTab] = useState('dettg') // 'dettg' | 'task' | 'academic'

  const projects = {
    dettg: {
      category: 'FEATURED PROJECT • INSTITUTIONAL',
      headline: 'Awarding Body DETTG.',
      highlight: 'DETTG.',
      desc: 'We built a clear, credible digital presence for an education, assessment and certification body—designed to help students, stakeholders and the public find what matters.',
      bullets: [
        '↗ Institutional website & accreditation engine',
        '↗ Mobile-first access for candidates statewide',
        '↗ Trust & transparency via verifiable digital records'
      ],
      buttonText: 'Visit live project',
      url: 'https://www.awardingbodydettg.in/',
      displayUrl: 'awardingbodydettg.in',
      img: '/clients/projects/dettg_website.png'
    },
    task: {
      category: 'GOVERNMENT OF TELANGANA • MOBILE PLATFORM',
      headline: 'TASK Mobile Platform.',
      highlight: 'Mobile Platform.',
      desc: 'Official Android application for Telangana Academy for Skill and Knowledge. Connecting youth statewide with skilling drives, career mentorship, and employment certifications.',
      bullets: [
        '↗ High-performance React Native architecture',
        '↗ Real-time notifications for statewide drives',
        '↗ Scaled to thousands of youth across Telangana'
      ],
      buttonText: 'View on Google Play Store',
      url: 'https://play.google.com/store/apps/details?id=in.gov.telangana.taskmobile',
      displayUrl: 'play.google.com/taskmobile',
      img: '/clients/projects/task_mobile_app.jpg'
    },
    academic: {
      category: 'PROPRIETARY SAAS • CAMPUS INTELLIGENCE',
      headline: 'AcademicTracker SaaS.',
      highlight: 'SaaS.',
      desc: 'Next-generation attendance and academic operations management with hardware-verified GPS geofencing, preventing proxy check-ins and automating compliance reporting.',
      bullets: [
        '↗ Micro-radius hardware geofence check-ins',
        '↗ Instant multi-campus & batch synchronization',
        '↗ 1-click automated accreditation reports'
      ],
      buttonText: 'Explore SaaS Demo',
      url: 'https://attendance-production-b5a1.up.railway.app/',
      displayUrl: 'app.academictracker.io',
      img: '/clients/projects/attandance_product.jpeg'
    }
  }

  const p = projects[activeTab]

  return (
    <section id="selected-work" className="py-20 lg:py-28 bg-white border-b border-gray-200/60 relative overflow-hidden">
      <div id="government-projects" className="absolute -top-24" />
      <div id="government" className="absolute -top-24" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Meta Bar: 03 / SELECTED WORK on Left, All 20+ projects on Right */}
        <div className="flex items-center justify-between border-b border-gray-200/80 pb-6 mb-12">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase">
              03 / SELECTED WORK
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#4f46e5]" />
          </div>
          <a
            href="#portfolio"
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-gray-500 hover:text-[#4f46e5] transition-colors group cursor-pointer"
          >
            <span>All 20+ projects</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Main Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Details & Interactive Tabs */}
          <div className="lg:col-span-6 space-y-7 text-left">
            
            {/* Category Label & Project Switcher Pills */}
            <div className="space-y-3">
              <div className="text-xs font-mono font-extrabold tracking-widest text-gray-400 uppercase">
                {p.category}
              </div>

              {/* Project Switcher Tabs */}
              <div className="inline-flex flex-wrap p-1 rounded-full bg-gray-100 border border-gray-200 gap-1">
                <button
                  type="button"
                  onClick={() => setActiveTab('dettg')}
                  className={`px-4 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                    activeTab === 'dettg'
                      ? 'font-bold bg-slate-900 text-white shadow-xs'
                      : 'font-semibold text-gray-600 hover:text-gray-900 bg-white border border-gray-200'
                  }`}
                >
                  Awarding Body DETTG
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('task')}
                  className={`px-4 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                    activeTab === 'task'
                      ? 'font-bold bg-slate-900 text-white shadow-xs'
                      : 'font-semibold text-gray-600 hover:text-gray-900 bg-white border border-gray-200'
                  }`}
                >
                  TASK Mobile App
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('academic')}
                  className={`px-4 py-1.5 rounded-full text-xs transition-all cursor-pointer ${
                    activeTab === 'academic'
                      ? 'font-bold bg-slate-900 text-white shadow-xs'
                      : 'font-semibold text-gray-600 hover:text-gray-900 bg-white border border-gray-200'
                  }`}
                >
                  AcademicTracker SaaS
                </button>
              </div>
            </div>

            {/* Dynamic Project Headline */}
            <h2 className="text-4xl sm:text-6xl font-black text-gray-950 tracking-tight leading-[1.05]">
              {p.headline.replace(p.highlight, '')}
              <span className="text-[#4f46e5]">{p.highlight}</span>
            </h2>

            {/* Dynamic Project Description */}
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
              {p.desc}
            </p>

            {/* 3 Bullet Highlights with Diagonal Arrows */}
            <div className="space-y-2.5 pt-2 text-sm text-gray-700">
              {p.bullets.map((b, idx) => (
                <div key={idx} className="flex items-center gap-2 font-medium text-gray-700 hover:text-black transition-colors">
                  <span>{b}</span>
                </div>
              ))}
            </div>

            {/* Primary CTA Buttons */}
            <div className="pt-4 flex items-center gap-4">
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3.5 rounded-full bg-black hover:bg-gray-800 text-white font-bold text-sm transition-all shadow-md active:scale-95 inline-flex items-center gap-2 cursor-pointer"
              >
                <span>{p.buttonText}</span>
                <ArrowUpRight size={16} />
              </a>

              <button
                type="button"
                onClick={() => onOpenContact(`Case Study: ${p.headline}`)}
                className="px-5 py-3.5 rounded-full bg-white hover:bg-gray-50 text-gray-700 font-semibold text-xs border border-gray-200 transition-colors inline-flex items-center gap-1.5 cursor-pointer"
              >
                <FileText size={14} className="text-gray-400" />
                <span>Read technical specs</span>
              </button>
            </div>

          </div>

          {/* Right Column: 3D Tilted Browser Mockup with Lime Green Badge */}
          <div className="lg:col-span-6 relative flex items-center justify-center pt-8 lg:pt-0">
            
            {/* Decorative studio coordinate dots */}
            <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full border border-pink-400 flex items-center justify-center pointer-events-none hidden lg:flex">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
            </div>

            <div className="relative w-full max-w-xl group/mockup">
              
              {/* The 3D Tilted Browser Container */}
              <div className="tilted-browser-3d rounded-2xl border-2 border-slate-900 bg-white overflow-hidden">
                
                {/* Browser Header / Address Bar */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                    <span className="w-3 h-3 rounded-full bg-[#eab308]" />
                    <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
                  </div>
                  <div className="bg-slate-800/80 px-4 py-1 rounded-lg text-slate-300 font-mono text-xs flex items-center gap-2 border border-slate-700/60 max-w-xs truncate">
                    <Lock size={12} className="text-emerald-400" />
                    <span>{p.displayUrl}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-400">
                    <RefreshCw size={13} />
                  </div>
                </div>

                {/* Browser Content Image */}
                <div className="relative bg-slate-950 aspect-[16/10] overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={p.img}
                      src={p.img}
                      alt={p.headline}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="w-full h-full object-cover object-top"
                    />
                  </AnimatePresence>
                </div>

              </div>

              {/* Floating Lime Green Circular Sticker "CASE STUDY 2026" */}
              <div className="lime-case-study-badge absolute -top-5 -right-4 sm:-right-6 w-20 h-20 rounded-full bg-[#bef264] text-slate-950 border-2 border-slate-950 flex flex-col items-center justify-center font-black text-center shadow-xl pointer-events-none z-20">
                <span className="text-[9px] uppercase tracking-wider leading-none">CASE</span>
                <span className="text-[9px] uppercase tracking-wider leading-none">STUDY</span>
                <span className="text-[12px] leading-tight font-black mt-0.5">2026</span>
              </div>

              {/* Subtle bottom-corner arrow accent */}
              <div className="absolute -bottom-3 -right-2 text-pink-500 font-bold pointer-events-none hidden sm:block">
                <CornerDownLeft size={20} />
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  )
}
