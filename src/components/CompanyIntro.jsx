import React from 'react';
import { motion } from 'framer-motion';
import { 
  Rocket, 
  Code2, 
  CheckCircle2, 
  Landmark, 
  GraduationCap, 
  Globe2, 
  ArrowRight,
  Sparkles,
  Layers,
  ShieldCheck,
  Zap
} from 'lucide-react';

export default function CompanyIntro({ onOpenContact }) {
  const pillars = [
    {
      id: 'innovate',
      title: 'INNOVATE',
      short: 'Next-Gen Intelligence',
      photo: '/home/Tech_Innovation.jpg',
      badge: 'NVIDIA Inception AI',
      desc: 'Pioneering cutting-edge AI architectures, computer vision models, and GPU-accelerated pipelines that automate business operations.',
      metric: 'AI & GPU Compute',
      accent: 'from-blue-600 to-indigo-600',
      icon: Rocket,
      tag: '01'
    },
    {
      id: 'develop',
      title: 'DEVELOP',
      short: 'Fullstack Engineering',
      photo: '/community/webDevelopement.png',
      badge: 'Modern Web & Mobile',
      desc: 'Clean, scalable, maintainable software crafted with modern React, Next.js, Flutter, and serverless microservices for sub-second speeds.',
      metric: 'Sub-Second Speeds',
      accent: 'from-indigo-600 to-blue-700',
      icon: Code2,
      tag: '02'
    },
    {
      id: 'deliver',
      title: 'DELIVER',
      short: 'Zero Deadline Slippage',
      photo: '/home/built_by_india.png',
      badge: '100% On-Time SLA',
      desc: 'Dependable milestone execution. Transparent agile 2-week sprints, weekly video demos, and strict SLA delivery commitments.',
      metric: '100% SLA Record',
      accent: 'from-emerald-600 to-teal-700',
      icon: CheckCircle2,
      tag: '03'
    },
    {
      id: 'government',
      title: 'Government Proven',
      short: 'High-Consequence Platforms',
      photo: '/clients/projects/dettg_website.png',
      badge: 'Govt of Telangana',
      desc: 'Trusted public sector engineering partner powering state youth skilling platforms (TASK) and statewide institutional portals (DETTG).',
      metric: '33 Districts Covered',
      accent: 'from-amber-600 to-orange-700',
      icon: Landmark,
      tag: '04'
    },
    {
      id: 'skilling',
      title: 'Youth & School Skilling',
      short: 'Classroom 3.0 & Labs',
      photo: '/GSSS-College-Mysuru-cloud-Bootcamp-April-2025.jpeg',
      badge: '500+ Trained',
      desc: 'Real hands-on AI & AWS Cloud bootcamps at prestigious colleges (Sreyas, GSSS Mysuru, SMVITM) and practical K-12 AI curricula.',
      metric: 'AWS Skill Aligned',
      accent: 'from-purple-600 to-pink-700',
      icon: GraduationCap,
      tag: '05'
    },
    {
      id: 'global',
      title: 'Global Presence',
      short: 'Dual Continental Hubs',
      photo: '/ireland_update.jpeg',
      badge: 'India & Ireland',
      desc: 'Headquartered in Hyderabad with European business development based in Dublin, Ireland delivering cross-border digital transformation.',
      metric: 'Global Footprint',
      accent: 'from-sky-600 to-blue-800',
      icon: Globe2,
      tag: '06'
    }
  ];

  return (
    <section id="intro" className="py-24 bg-white relative overflow-hidden border-t border-gray-100">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[500px] bg-blue-50/50 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0d44e8] text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200/80 shadow-xs"
          >
            <Layers className="w-3.5 h-3.5 text-[#0d44e8]" />
            <span>THE 6 PILLARS OF LEOAXIS</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight"
          >
            Empowering Digital India from <span className="text-[#0d44e8]">Grassroots to Enterprise.</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal"
          >
            Every capability is backed by real engineering track records, verified state government deployments, and tangible business outcomes.
          </motion.p>
        </div>

        {/* 6 Visual Cards Grid with Photos & Animations (CleanShot X 6-in-1 layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="group rounded-3xl bg-white border border-gray-200/90 hover:border-blue-400 shadow-xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                {/* Photo Visual Header with Image & Badges */}
                <div className="relative h-48 overflow-hidden bg-slate-900 border-b border-gray-100">
                  <img
                    src={pillar.photo}
                    alt={pillar.title}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-700"
                    onError={(e) => {
                      e.currentTarget.src = '/home/Tech_Innovation.jpg';
                    }}
                  />
                  {/* Subtle Dark Gradient Overlay for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-bold border border-white/20 shadow-xs flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3 text-blue-400" />
                      <span>{pillar.badge}</span>
                    </span>

                    <span className="w-7 h-7 rounded-full bg-white/20 backdrop-blur-md text-white font-mono text-xs font-bold flex items-center justify-center border border-white/30">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Bottom Image Title Overlay */}
                  <div className="absolute bottom-3 left-4 right-4 z-10 flex items-center justify-between text-white">
                    <span className="text-xs font-mono font-semibold tracking-wider text-blue-300 uppercase">
                      {pillar.short}
                    </span>
                    <span className="text-[11px] font-semibold bg-blue-600/80 px-2 py-0.5 rounded backdrop-blur-xs">
                      {pillar.metric}
                    </span>
                  </div>
                </div>

                {/* Card Content Area */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0d44e8] border border-blue-100 flex items-center justify-center font-bold shrink-0 group-hover:bg-[#0d44e8] group-hover:text-white transition-colors duration-300 shadow-xs">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-950 group-hover:text-[#0d44e8] transition-colors tracking-tight">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Bottom Action Trigger */}
                  <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-xs font-semibold text-gray-400">
                      LeoAxis Standard
                    </span>
                    <button
                      type="button"
                      onClick={() => onOpenContact && onOpenContact(pillar.id)}
                      className="inline-flex items-center gap-1 text-xs font-bold text-[#0d44e8] hover:text-blue-800 transition-colors group-hover:translate-x-0.5 duration-200"
                    >
                      <span>Explore Capability</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
