import React from 'react'
import { motion } from 'framer-motion'
import { 
  Sparkles, 
  Cloud, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Laptop, 
  Users, 
  Building2,
  ExternalLink
} from 'lucide-react'

export default function TrainingPlacementsSection({ onOpenContact }) {
  const highlights = [
    {
      title: "AWS Skill Builder-Aligned",
      desc: "Curricula tailored to official Amazon Web Services certification tracks (Solutions Architect, SysOps, Cloud Practitioner)."
    },
    {
      title: "Hands-on Live Cloud Labs",
      desc: "Learners deploy real infrastructure on AWS using EC2, S3, RDS, Lambda, and Docker rather than just watching slides."
    },
    {
      title: "Real Industry Capstones",
      desc: "Build production-grade web applications, CI/CD pipelines, and microservices ready to demo on GitHub."
    },
    {
      title: "Verified Placement Support",
      desc: "Mock interviews, algorithmic coding rounds, resume optimization, and direct referrals to hiring partner networks."
    }
  ]

  const institutions = [
    "GSSS Institute of Engineering, Mysuru",
    "Sreyas Institute of Engineering, Hyderabad",
    "SMVITM College of Engineering",
    "ATME College of Engineering"
  ]

  return (
    <section id="training" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200/70">
            <Sparkles size={13} className="text-emerald-600" />
            <span>Future Leaders Program</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            IT Training & Placement Accelerator
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Bridging the gap between engineering degrees and tier-1 tech careers. Over 500+ students and professionals upskilled through hands-on cloud and software engineering bootcamps.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14 text-left">
          {highlights.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:shadow-xl hover:border-blue-200 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {item.desc}
                </p>
              </div>
              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center gap-1.5 text-xs text-emerald-700 font-semibold">
                <CheckCircle2 size={13} />
                <span>Job-Ready Focus</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Institutional Campus Workshops Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white shadow-xl text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider">
                Campus Bootcamps & Workshops Conducted
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Trusted by Top Engineering Colleges
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
                LeoAxis conducts multi-day cloud bootcamps, AWS Cloud workshops, and DevOps masterclasses for university campuses across Karnataka, Telangana, and Andhra Pradesh.
              </p>

              <div className="pt-2 flex flex-wrap gap-2">
                {institutions.map((inst) => (
                  <span
                    key={inst}
                    className="text-xs bg-slate-800 px-3 py-1.5 rounded-xl border border-slate-700 text-slate-200 font-medium"
                  >
                    ✓ {inst}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <button
                type="button"
                onClick={() => onOpenContact('college-workshop')}
                className="w-full py-3.5 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/20 text-center cursor-pointer"
              >
                Book Campus Cloud Workshop
              </button>
              <button
                type="button"
                onClick={() => onOpenContact('student-training')}
                className="w-full py-3 px-6 rounded-2xl border border-white/20 text-white font-semibold text-xs sm:text-sm hover:bg-white/10 transition-colors text-center cursor-pointer"
              >
                Enroll as Individual Student
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
