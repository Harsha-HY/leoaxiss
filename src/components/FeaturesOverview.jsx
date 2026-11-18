import React from 'react'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Edit3, 
  UploadCloud, 
  ArrowDownCircle, 
  Video, 
  Type, 
  Sparkles,
  ArrowRight,
  Layers,
  CheckCircle2
} from 'lucide-react'

export default function FeaturesOverview({ onOpenPurchase }) {
  const pillars = [
    {
      id: 'quick-access',
      title: 'Quick Access Overlay',
      short: 'Instant Workflow',
      desc: 'Floating thumbnail preview appears right after capture. Drag straight into Figma, Slack, or Notion without saving files.',
      icon: Zap,
      color: 'from-blue-600 to-indigo-600',
      badge: 'Signature Feature',
      shortcut: 'Instant',
      href: '#quick-access'
    },
    {
      id: 'annotations',
      title: 'Built-in Annotation',
      short: 'Highlight & Redact',
      desc: 'Highlight important sections, add sequential numbered steps, draw curved arrows, and blur passwords or sensitive tokens.',
      icon: Edit3,
      color: 'from-indigo-600 to-violet-600',
      badge: 'Pro Editor',
      shortcut: '⌘E',
      href: '#annotations'
    },
    {
      id: 'cloud',
      title: 'CleanShot Cloud',
      short: 'Lightning Sharing',
      desc: 'Upload captures in a fraction of a second. Link automatically lands on your clipboard ready to paste into team chats.',
      icon: UploadCloud,
      color: 'from-blue-500 to-cyan-500',
      badge: 'Cloud Sync',
      shortcut: '⌘U',
      href: '#cloud'
    },
    {
      id: 'scrolling',
      title: 'Scrolling Capture',
      short: 'Beyond The Screen',
      desc: 'Grab an entire long webpage, lengthy Slack conversation, or 2,000 lines of code by simply scrolling down the window.',
      icon: ArrowDownCircle,
      color: 'from-emerald-500 to-teal-600',
      badge: 'Auto-Stitch',
      shortcut: '⇧⌘6',
      href: '#scrolling'
    },
    {
      id: 'recording',
      title: 'Screen Recording & Studio',
      short: 'Video & Crisp GIFs',
      desc: 'Record screen, webcam bubble, microphone, and internal system audio. Edit with smooth cursor movement and auto-zoom.',
      icon: Video,
      color: 'from-rose-500 to-pink-600',
      badge: '60 FPS + Audio',
      shortcut: '⇧⌘2',
      href: '#recording'
    },
    {
      id: 'ocr',
      title: 'Text Recognition (OCR)',
      short: 'Copy Anywhere',
      desc: 'Instantly extract unselectable text from images, tutorial videos, scanned receipts, or software dialogues.',
      icon: Type,
      color: 'from-amber-500 to-orange-600',
      badge: 'High Accuracy',
      shortcut: '⇧⌘O',
      href: '#ocr'
    },
  ]

  return (
    <section id="features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-4 border border-slate-200/60">
            <Layers size={13} className="text-[#0d44e8]" />
            <span>Over 50+ Features Inside</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Feels like 6 apps in one.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Stop switching between screenshot tools, video converters, annotation apps, and cloud drives. CleanShot X brings everything together into one blazing-fast macOS experience.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon
            return (
              <motion.a
                key={pillar.id}
                href={pillar.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-200/80 hover:border-blue-200 shadow-sm hover:shadow-xl hover:shadow-blue-600/5 transition-all text-left flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${pillar.color} text-white flex items-center justify-center shadow-md shadow-blue-500/10 group-hover:scale-105 transition-transform`}>
                      <Icon size={22} />
                    </div>
                    <span className="text-[11px] font-mono font-medium text-slate-500 bg-white px-2 py-1 rounded-md border border-slate-200/80">
                      {pillar.shortcut}
                    </span>
                  </div>

                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {pillar.short}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1 mb-2 group-hover:text-blue-600 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-medium text-slate-500 group-hover:text-blue-600 transition-colors">
                  <span className="text-slate-400 group-hover:text-slate-700">{pillar.badge}</span>
                  <span className="flex items-center gap-1 font-semibold">
                    <span>Explore details</span>
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
