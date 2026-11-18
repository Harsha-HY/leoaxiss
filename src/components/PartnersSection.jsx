import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function PartnersSection({ onOpenContact }) {
  const [slideState, setSlideState] = useState(0) // 0 or 1, flips every 3 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setSlideState((prev) => (prev + 1) % 2)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  const partners = [
    {
      id: 'nvidia',
      tag: 'AI MEMBER',
      tagColor: 'bg-emerald-50 text-emerald-700',
      dotColor: 'bg-[#76b900]',
      title: 'NVIDIA Inception',
      desc: 'Direct access to GPU hardware compute, computer vision toolkits, and go-to-market acceleration to build enterprise-ready AI.',
      meta: 'GPU Compute & Vision',
      accentColor: '#76b900',
      slideA: {
        img: '/home/Tech_Innovation.jpg',
        logo: '/nvidia_inception.png',
        sub: 'GPU Compute Lab',
        badge: 'CUDA 12.4'
      },
      slideB: {
        title: 'PyTorch 2.5 Inference',
        metric1: 'Model: Computer Vision & OCR',
        metric2: 'Accuracy: 98.4% (PASSED ✓)',
        footer: 'Hardware TensorRT Accelerated'
      }
    },
    {
      id: 'aws-activate',
      tag: 'CLOUD PARTNER',
      tagColor: 'bg-amber-50 text-amber-700',
      dotColor: 'bg-[#ff9900]',
      title: 'AWS Activate',
      desc: 'Architecting secure, auto-scaling cloud backends and containerized microservices with dedicated architecture support and 99.9% SLAs.',
      meta: 'Cloud Infrastructure',
      accentColor: '#ff9900',
      slideA: {
        img: '/home/built_by_india.png',
        logo: '/aws_activate.png',
        sub: '99.9% Uptime SLA',
        badge: 'VERIFIED'
      },
      slideB: {
        title: 'Multi-AZ Architecture',
        metric1: 'Regions: ap-south-1 & eu-west-1',
        metric2: 'Uptime Record: 99.99%',
        footer: 'Docker Microservices Auto-Scaled'
      }
    },
    {
      id: 'dpiit',
      tag: 'GOVT OF INDIA',
      tagColor: 'bg-blue-50 text-[#4f46e5]',
      dotColor: 'bg-[#4f46e5]',
      title: 'DPIIT Recognized',
      desc: 'Officially recognized startup under the Department for Promotion of Industry and Internal Trade (#DIPP162791).',
      meta: 'National Startup India',
      accentColor: '#4f46e5',
      slideA: {
        img: '/home/Future_Ready_India.jpg',
        logo: '/clients/DPIIT.png',
        sub: '#DIPP162791',
        badge: 'CERTIFIED'
      },
      slideB: {
        title: 'Telangana State Platforms',
        metric1: 'Deployed: Awarding Body DETTG',
        metric2: 'Candidates Served: Lakhs (Verified)',
        footer: 'Public Sector Trust: Govt Proven'
      }
    },
    {
      id: 'aws-skill',
      tag: 'TRAINING ALIGNED',
      tagColor: 'bg-purple-50 text-purple-700',
      dotColor: 'bg-purple-500',
      title: 'AWS Skill Builder',
      desc: 'Student and corporate curricula structured directly along official AWS certification learning paths, preparing learners for Solutions Architect exams.',
      meta: 'Certified Curricula',
      accentColor: '#a855f7',
      slideA: {
        img: '/GSSS-College-Mysuru-cloud-Bootcamp-April-2025.jpeg',
        logo: '/clients/aws.png',
        sub: 'Mysuru Bootcamp',
        badge: '500+ GRAD'
      },
      slideB: {
        title: 'AWS Certification Paths',
        metric1: 'Track: Solutions Architect & DevOps',
        metric2: 'Graduates Placed: Top Tier',
        footer: 'Skilling Tier 2/3 Youth: Hands-On'
      }
    }
  ]

  return (
    <section id="partners" className="py-20 bg-[#faf8f5] border-b border-gray-200/60 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section Tag */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4 text-left">
          <div>
            <div className="text-xs font-mono font-bold tracking-widest text-gray-400 uppercase mb-2">
              04 / STRATEGIC ALLIANCES & RECOGNITION
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight">
              Backed by Tech Pioneers &amp; National Initiatives.
            </h2>
          </div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-gray-200 text-xs font-mono text-gray-600 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Auto-cycling telemetry &bull; updates every 3s</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((p) => (
            <div
              key={p.id}
              className="rounded-3xl p-6 bg-white border border-gray-200 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group overflow-hidden relative text-left"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${p.tagColor} uppercase tracking-wider`}>
                    {p.tag}
                  </span>
                  <span className={`w-2 h-2 rounded-full ${p.dotColor} animate-pulse`} />
                </div>

                <h3 className="text-lg font-bold text-gray-950 tracking-tight group-hover:text-[#4f46e5] transition-colors mb-3">
                  {p.title}
                </h3>

                {/* 3-Second Alternating Visual Container */}
                <div className="relative h-44 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 mb-4">
                  <AnimatePresence mode="wait">
                    {slideState === 0 ? (
                      <motion.div
                        key="slideA"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0"
                      >
                        <img
                          src={p.slideA.img}
                          alt={p.title}
                          className="w-full h-full object-cover object-center opacity-65 group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                        <div className="absolute top-2.5 left-2.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-xl shadow-xs border border-white/40">
                          <img src={p.slideA.logo} alt={p.title} className="h-4 w-auto object-contain" />
                        </div>
                        <div className="absolute bottom-2.5 left-3 right-3 text-white text-[11px] font-mono flex items-center justify-between">
                          <span className="font-bold text-slate-200">{p.slideA.sub}</span>
                          <span className="bg-slate-800 text-white font-bold px-1.5 py-0.2 rounded text-[9px]">
                            {p.slideA.badge}
                          </span>
                        </div>
                      </motion.div>
                    ) : (
                      <motion.div
                        key="slideB"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.4 }}
                        className="absolute inset-0 p-4 flex flex-col justify-between bg-slate-900 text-white font-mono text-[11px]"
                      >
                        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                          <span className="font-bold text-emerald-400">{p.slideB.title}</span>
                          <span className="text-slate-400 text-[10px]">LIVE</span>
                        </div>
                        <div className="space-y-1 my-auto">
                          <div className="text-[10px] text-slate-400">{p.slideB.metric1}</div>
                          <div className="text-white font-bold text-xs flex items-center justify-between">
                            <span>{p.slideB.metric2}</span>
                          </div>
                          <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden mt-1">
                            <div className="h-full w-[98%] rounded-full bg-[#4f46e5]" />
                          </div>
                        </div>
                        <div className="text-[9px] text-slate-400 flex items-center justify-between pt-1 border-t border-slate-800">
                          <span>{p.slideB.footer}</span>
                          <span className="text-emerald-400 font-semibold">Active</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed font-normal">
                  {p.desc}
                </p>
              </div>

              {/* 3-Second Progress Bar */}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <div className="flex items-center justify-between text-[10px] font-mono text-gray-400 mb-1.5">
                  <span>{p.meta}</span>
                  <span className="text-indigo-600 font-bold">3s Cycle</span>
                </div>
                <div className="w-full h-1 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    key={slideState}
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3, ease: 'linear' }}
                    className="h-full bg-[#4f46e5] rounded-full"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
