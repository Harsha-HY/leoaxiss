import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDown } from 'lucide-react';

export default function LeoHero({ onOpenContact, onNotify }) {
  // Dynamic Typewriter loop - starting with "AI Labs for Schools." matching Image 2
  const typewriterWords = [
    'AI Labs for Schools.',
    'TASK Mobile Apps.',
    'State Govt Portals.',
    'High-Speed Websites.',
    'Enterprise Cloud.',
    'Custom AI Solutions.'
  ];

  const [wordIdx, setWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const word = typewriterWords[wordIdx];
    let timer;

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText.length <= 1) {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % typewriterWords.length);
        }
      }, 35);
    } else {
      timer = setTimeout(() => {
        setCurrentText(word.slice(0, currentText.length + 1));
        if (currentText === word) {
          timer = setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 75);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, wordIdx]);

  // Exact 3x3 colorful launcher matrix matching Image 2
  const launcherApps = [
    { 
      name: 'TASK', 
      sub: 'GOVT APP', 
      bg: 'bg-[#ec4899]', 
      text: 'text-white', 
      title: 'TASK Mobile App', 
      subtitle: 'AI • WEB • CLOUD • COMMUNITY', 
      desc: 'Government of Telangana youth skilling Android platform in production.' 
    },
    { 
      name: 'DETTG', 
      sub: 'PORTAL', 
      bg: 'bg-[#6366f1]', 
      text: 'text-white', 
      title: 'Awarding Body DETTG', 
      subtitle: 'GOVERNANCE • ACCREDITATION • PORTAL', 
      desc: 'State examination & institutional accreditation governance system.' 
    },
    { 
      name: 'SaaS', 
      sub: 'GEOFENCE', 
      bg: 'bg-[#bef264]', 
      text: 'text-slate-950', 
      title: 'AcademicTracker SaaS', 
      subtitle: 'GEOFENCE • ATTENDANCE • TELEMETRY', 
      desc: 'Hardware GPS Geofence verified attendance & telemetry engine.' 
    },
    { 
      name: 'AI Lab', 
      sub: 'K-12', 
      bg: 'bg-[#3b82f6]', 
      text: 'text-white', 
      title: 'AI Labs for Schools', 
      subtitle: 'ROBOTICS • COMPUTER VISION • K-12', 
      desc: 'Hands-on experiential AI and machine learning curriculum for schools.' 
    },
    { 
      name: 'Cloud', 
      sub: 'AWS SLA', 
      bg: 'bg-[#f43f5e]', 
      text: 'text-white', 
      title: 'AWS Activate Cloud', 
      subtitle: 'MICROSERVICES • 99.9% SLA • DOCKER', 
      desc: 'Multi-AZ auto-scaling AWS cloud infrastructure and CI/CD pipelines.' 
    },
    { 
      name: 'SEO', 
      sub: 'FUNNELS', 
      bg: 'bg-[#10b981]', 
      text: 'text-slate-950', 
      title: 'Growth & SEO Funnels', 
      subtitle: 'ORGANIC RANK • +200% • ROAS 4.8X', 
      desc: 'High-conversion customer acquisition engines for fast-growth brands.' 
    },
    { 
      name: 'Training', 
      sub: '500+ GRAD', 
      bg: 'bg-[#a855f7]', 
      text: 'text-white', 
      title: 'IT Career Programs', 
      subtitle: 'DEVOPS • CLOUD • FULLSTACK', 
      desc: 'Practical tech upskilling and corporate placement training.' 
    },
    { 
      name: 'Web 19', 
      sub: 'SUB-SEC', 
      bg: 'bg-[#fbbf24]', 
      text: 'text-slate-950', 
      title: 'High-Performance Web', 
      subtitle: 'REACT 19 • NEXT.JS 15 • 0.48S FCP', 
      desc: 'Sub-second loading enterprise websites and digital commerce platforms.' 
    },
    { 
      name: 'Global', 
      sub: 'INDIA • IRL', 
      bg: 'bg-[#a7f3d0]', 
      text: 'text-slate-950', 
      title: 'Dual Continental Delivery', 
      subtitle: 'HYDERABAD HQ • DUBLIN OPS', 
      desc: 'Global execution teams spanning India, Ireland, and Australia.' 
    },
  ];

  const [activeIdx, setActiveIdx] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);

  // Auto-cycle animation when user is not manually hovering
  useEffect(() => {
    if (isUserInteracting) return;
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % launcherApps.length);
    }, 2800);
    return () => clearInterval(interval);
  }, [isUserInteracting, launcherApps.length]);

  const activeApp = launcherApps[activeIdx];

  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24 relative overflow-hidden bg-[#faf5ea] border-b border-[#ebdcc8]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Bold Editorial Typography & Impact Narrative */}
          <div className="lg:col-span-6 text-left space-y-6">
            
            {/* Location & Building Chip */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fffefa] border border-[#ebdcc8] text-xs font-mono text-[#574f45] shadow-2xs">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c] animate-pulse" />
              <span>Hyderabad &bull; building for India &amp; beyond</span>
            </div>

            {/* Studio Big Display Headline with Outline Typography & Typewriter Loop */}
            <h1 className="text-5xl sm:text-7xl lg:text-[84px] font-extrabold text-[#1c1917] tracking-tight leading-[1.02] font-display">
              Ideas with<br />
              <span className="text-outline font-black tracking-tighter">impact.</span><br />
              <span className="text-[#1c1917] block text-2xl sm:text-4xl lg:text-[46px] font-extrabold my-2">
                We build <span className="text-[#4f46e5]">{currentText || 'AI Labs for Schools.'}</span>
                <span className="inline-block w-1 sm:w-1.5 h-6 sm:h-9 lg:h-11 bg-[#4f46e5] ml-1.5 align-middle animate-pulse rounded-full" />
              </span>
              <span className="bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#ea580c] text-transparent bg-clip-text font-black">Built loud.</span>
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
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#4f46e5] to-[#ea580c] hover:opacity-95 hover:shadow-xl hover:shadow-indigo-500/20 text-white font-bold text-sm transition-all active:scale-95 flex items-center gap-2 cursor-pointer shadow-lg"
              >
                <span>Let's build something</span>
                <ArrowUpRight size={17} />
              </button>

              <a
                href="#selected-work"
                className="px-6 py-3.5 rounded-full bg-[#fffefa] hover:bg-[#f3ebdd] text-[#1c1917] font-semibold text-sm border border-[#ebdcc8] hover:border-[#4f46e5] transition-colors flex items-center gap-2 cursor-pointer shadow-2xs"
              >
                <span>See our work</span>
                <ArrowDown size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: Animated Studio Workstation Tablet with Orbital Ring */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            
            {/* Ambient Background Aura */}
            <div className="absolute inset-0 bg-radial from-indigo-500/10 via-orange-500/5 to-transparent blur-3xl pointer-events-none transform -translate-y-4" />

            {/* Delicate Orbital Trajectory Arc (Image 2 aesthetic) */}
            <div className="hidden sm:block absolute -top-8 -right-6 w-96 h-96 rounded-full border border-[#ebdcc8]/70 pointer-events-none transform rotate-12" />

            {/* Outer Box with Continuous Animated Float & 3D Tilt on Hover */}
            <div className="relative w-full max-w-md sm:max-w-lg">
              
              {/* Floating Badge 01 Innovate with Arrow (Top-Left) */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-5 left-4 sm:-left-3 bg-[#fffefa] border border-[#ebdcc8] shadow-lg rounded-full px-4 py-1.5 flex items-center gap-2 text-xs font-bold text-[#1c1917] z-30"
              >
                <span className="text-[#4f46e5] font-mono text-[11px]">01</span>
                <span>innovate</span>
                <ArrowUpRight size={13} className="text-[#4f46e5]" />
              </motion.div>

              {/* Bouncing Neon Star Badge (Top-Right) */}
              <motion.div 
                animate={{ y: [0, -7, 0], rotate: [0, 8, -8, 0] }}
                transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#bef264] border border-[#a3e635] shadow-lg shadow-[#bef264]/40 flex items-center justify-center text-slate-950 font-black text-sm z-30 cursor-pointer"
                title="LeoAxis Innovation Badge"
              >
                ✦
              </motion.div>

              {/* Floating Badge 02 Develop with Plus (Bottom-Right) */}
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
                className="absolute -bottom-4 -right-2 sm:-right-6 bg-[#fffefa] border border-[#ebdcc8] shadow-lg rounded-full px-4 py-1.5 flex items-center gap-1.5 text-xs font-bold text-[#1c1917] z-30"
              >
                <span className="text-slate-400 font-mono text-[11px]">02</span>
                <span>develop</span>
                <span className="text-[#ea580c] font-black text-sm leading-none">+</span>
              </motion.div>

              {/* Playful Pink Smiley Sticker (Image match) */}
              <motion.div
                animate={{ y: [0, -5, 0], rotate: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="hidden sm:flex absolute -bottom-5 -left-4 w-12 h-12 rounded-2xl bg-[#f472b6] border-2 border-white shadow-xl items-center justify-center text-slate-950 font-black text-xl select-none z-30"
              >
                :)
              </motion.div>

              {/* Main Interactive Animated Studio Tablet (Dark Bezel Hardware Composition) */}
              <motion.div 
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [1.5, 0.5, 1.5]
                }}
                transition={{ 
                  duration: 5.5, 
                  repeat: Infinity, 
                  ease: 'easeInOut' 
                }}
                whileHover={{ 
                  scale: 1.02, 
                  rotate: 0,
                  transition: { duration: 0.3 } 
                }}
                className="w-full bg-[#0e0f14] rounded-[28px] p-6 sm:p-7 shadow-2xl border border-slate-800/90 relative text-left select-none"
                style={{
                  boxShadow: '0 32px 70px -18px rgba(15, 12, 28, 0.55), 0 0 0 1px rgba(255, 255, 255, 0.08)'
                }}
                onMouseEnter={() => setIsUserInteracting(true)}
                onMouseLeave={() => setIsUserInteracting(false)}
              >
                {/* Tablet Chrome Top Bar */}
                <div className="flex items-center justify-between pb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ef4444]" />
                    <div className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                    <div className="w-3 h-3 rounded-full bg-[#10b981]" />
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
                <div className="pt-5 pb-3">
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-none uppercase font-display">
                    Tech For<br />
                    <span className="text-[#bef264]">Everyone.</span>
                  </div>
                  <div className="text-[10px] font-mono font-bold tracking-widest text-slate-400 uppercase mt-4">
                    Capabilities Launcher:
                  </div>
                </div>

                {/* 3x3 App Launcher Matrix matching Image 2 */}
                <div className="grid grid-cols-3 gap-2.5 sm:gap-3 pt-2 pb-5">
                  {launcherApps.map((app, i) => {
                    const isActive = i === activeIdx;
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => {
                          setActiveIdx(i);
                          setIsUserInteracting(true);
                        }}
                        onMouseEnter={() => {
                          setActiveIdx(i);
                          setIsUserInteracting(true);
                        }}
                        className={`aspect-square rounded-2xl ${app.bg} p-2.5 flex flex-col justify-between items-start transition-all transform duration-200 cursor-pointer text-left shadow-md ${
                          isActive 
                            ? 'ring-2 ring-white scale-[1.05] shadow-xl z-10' 
                            : 'opacity-90 hover:opacity-100 hover:scale-[1.03]'
                        }`}
                      >
                        <span className={`text-[10px] sm:text-xs font-mono font-black uppercase tracking-tight ${app.text}`}>
                          {app.name}
                        </span>
                        <span className={`text-[8px] sm:text-[9px] font-mono font-semibold tracking-tighter uppercase opacity-85 ${app.text}`}>
                          {app.sub}
                        </span>
                      </button>
                    );
                  })}
                </div>

                {/* Dynamic Bottom Telemetry Bar matching Image */}
                <div className="pt-3.5 border-t border-slate-800/80 flex flex-col gap-1.5">
                  <div className="flex items-center justify-between">
                    <span className="text-white font-extrabold text-sm tracking-wide">
                      {activeApp.title}
                    </span>
                    <span className="text-[11px] font-mono font-bold text-emerald-400 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                      Active in Prod
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 tracking-wider">
                    {activeApp.subtitle}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
