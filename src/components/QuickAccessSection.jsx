import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Zap, 
  Copy, 
  Save, 
  Edit3, 
  UploadCloud, 
  Pin, 
  Trash2, 
  Check, 
  Share2, 
  MousePointer, 
  Sparkles,
  ArrowRight,
  Layers,
  MessageSquare,
  FileCode
} from 'lucide-react'

export default function QuickAccessSection({ onOpenPurchase, onNotify }) {
  const [activeTab, setActiveTab] = useState('drag') // 'drag' | 'pin' | 'copy' | 'cloud'
  const [dragProgress, setDragProgress] = useState(false)
  const [copiedState, setCopiedState] = useState(false)
  const [isPinned, setIsPinned] = useState(false)

  const handleCopyDemo = () => {
    setCopiedState(true)
    if (onNotify) {
      onNotify('Copied to Clipboard', 'Image data is ready to paste anywhere (⌘V).')
    }
    setTimeout(() => setCopiedState(false), 2000)
  }

  const handlePinToggle = () => {
    setIsPinned(!isPinned)
    if (onNotify) {
      onNotify(
        !isPinned ? 'Window Pinned' : 'Window Unpinned',
        !isPinned ? 'The capture now floats on top of all fullscreen apps.' : 'Returned to normal overlay mode.'
      )
    }
  }

  const handleTriggerDrag = () => {
    setDragProgress(true)
    setTimeout(() => {
      setDragProgress(false)
      if (onNotify) onNotify('Dropped into Slack!', 'Screenshot instantly attached to #design-team channel.')
    }, 1600)
  }

  return (
    <section id="quick-access" className="py-24 bg-slate-50/60 border-y border-slate-200/70 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0d44e8] text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-200/60">
            <Zap size={13} />
            <span>Signature Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Never search for screenshots again.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            As soon as you capture your screen, a small floating thumbnail appears. Instantly copy, save, annotate, or drag & drop it straight into your apps without cluttering your desktop with files.
          </p>
        </div>

        {/* Interactive Feature Demo Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Feature highlights / tab selector */}
          <div className="lg:col-span-5 space-y-4">
            <button
              onClick={() => setActiveTab('drag')}
              className={`w-full text-left p-5 rounded-2xl transition-all border ${
                activeTab === 'drag'
                  ? 'bg-white border-blue-500 shadow-lg shadow-blue-500/5'
                  : 'bg-white/60 hover:bg-white border-slate-200/80'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center text-xs font-mono">1</span>
                  Drag & Drop Straight into Apps
                </span>
                <span className="text-[11px] font-mono text-slate-400">Zero files saved</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 pl-8 leading-relaxed">
                Grab the floating thumbnail directly from the corner and drop it into Slack, Figma, GitHub PRs, Notion, or Mail. No messy Desktop cleanup.
              </p>
            </button>

            <button
              onClick={() => setActiveTab('pin')}
              className={`w-full text-left p-5 rounded-2xl transition-all border ${
                activeTab === 'pin'
                  ? 'bg-white border-blue-500 shadow-lg shadow-blue-500/5'
                  : 'bg-white/60 hover:bg-white border-slate-200/80'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-600 flex items-center justify-center text-xs font-mono">2</span>
                  Pin Floating Screenshots
                </span>
                <span className="text-[11px] font-mono text-slate-400">Always on top</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 pl-8 leading-relaxed">
                Need to keep a visual reference while coding or designing? Click the Pin icon and keep the thumbnail floating on top of all windows.
              </p>
            </button>

            <button
              onClick={() => setActiveTab('copy')}
              className={`w-full text-left p-5 rounded-2xl transition-all border ${
                activeTab === 'copy'
                  ? 'bg-white border-blue-500 shadow-lg shadow-blue-500/5'
                  : 'bg-white/60 hover:bg-white border-slate-200/80'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-mono">3</span>
                  Single-Click Clipboard Copy
                </span>
                <span className="text-[11px] font-mono text-slate-400">⌘C / Auto-close</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 pl-8 leading-relaxed">
                Press ⌘C or click the copy icon — the image is copied directly to your clipboard and the floating overlay vanishes instantly.
              </p>
            </button>

            <button
              onClick={() => setActiveTab('cloud')}
              className={`w-full text-left p-5 rounded-2xl transition-all border ${
                activeTab === 'cloud'
                  ? 'bg-white border-blue-500 shadow-lg shadow-blue-500/5'
                  : 'bg-white/60 hover:bg-white border-slate-200/80'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-cyan-100 text-cyan-600 flex items-center justify-center text-xs font-mono">4</span>
                  Instant Cloud Upload
                </span>
                <span className="text-[11px] font-mono text-slate-400">Shareable URL</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 pl-8 leading-relaxed">
                One click uploads to CleanShot Cloud. The private share link is placed directly on your clipboard with self-destruct settings.
              </p>
            </button>
          </div>

          {/* Right Column: Live Interactive Mockup Canvas */}
          <div className="lg:col-span-7">
            <div className="relative bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-slate-200/80 min-h-[440px] flex flex-col justify-between overflow-hidden">
              
              {/* Simulated desktop workspace */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-slate-300" />
                  <span className="text-xs font-medium text-slate-500 ml-2">CleanShot Interactive Playground</span>
                </div>
                <span className="text-[11px] font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full font-medium">
                  Try clicking the action buttons below
                </span>
              </div>

              {/* Target Drop Zone: Simulated Slack / Figma App */}
              <div className="relative bg-slate-100/80 border-2 border-dashed border-slate-300/80 rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-center text-center my-auto transition-all">
                <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-slate-600 mb-3">
                  <MessageSquare size={22} className="text-[#4A154B]" />
                </div>
                <div className="text-sm font-semibold text-slate-800">
                  #design-system Slack Channel
                </div>
                <p className="text-xs text-slate-500 max-w-xs mt-1">
                  Drag the Quick Access thumbnail here to attach it directly to your message.
                </p>

                <button
                  type="button"
                  onClick={handleTriggerDrag}
                  className="mt-4 px-4 py-2 rounded-xl bg-white hover:bg-slate-50 text-blue-600 text-xs font-semibold border border-slate-200 shadow-sm flex items-center gap-1.5 transition-all cursor-pointer"
                >
                  <MousePointer size={13} />
                  <span>Simulate Drag & Drop Action</span>
                </button>
              </div>

              {/* THE QUICK ACCESS OVERLAY WIDGET (Interactive) */}
              <motion.div
                animate={
                  dragProgress
                    ? { x: [0, 180, 240], y: [0, -100, -140], scale: [1, 0.9, 0], opacity: [1, 0.8, 0] }
                    : { x: 0, y: 0, scale: 1, opacity: 1 }
                }
                transition={{ duration: 1.4, ease: 'easeInOut' }}
                className={`mt-4 p-2.5 bg-slate-900/95 text-white rounded-2xl shadow-2xl backdrop-blur-xl border ${
                  isPinned ? 'border-amber-400 ring-2 ring-amber-400/20' : 'border-slate-700/80'
                } flex flex-wrap items-center justify-between gap-3`}
              >
                <div className="flex items-center gap-3">
                  {/* Thumbnail */}
                  <div className="relative w-16 h-12 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center border border-white/20 overflow-hidden cursor-grab active:cursor-grabbing">
                    <span className="text-[10px] font-mono text-white/90 font-bold">1440×900</span>
                    {isPinned && (
                      <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-amber-400 animate-ping" />
                    )}
                  </div>

                  <div>
                    <div className="text-xs font-semibold text-white flex items-center gap-1.5">
                      <span>Quick Access</span>
                      {isPinned && (
                        <span className="text-[9px] bg-amber-400/20 text-amber-300 px-1.5 py-0.2 rounded font-mono">
                          PINNED
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-slate-400 font-mono">CleanShot-2026.png</div>
                  </div>
                </div>

                {/* Overlay Action Buttons */}
                <div className="flex items-center gap-1 bg-slate-800/90 p-1 rounded-xl border border-slate-700/60">
                  <button
                    type="button"
                    onClick={handleCopyDemo}
                    className={`p-2 rounded-lg transition-all ${
                      copiedState ? 'bg-emerald-600 text-white' : 'hover:bg-slate-700 text-slate-300'
                    }`}
                    title="Copy to Clipboard (⌘C)"
                  >
                    {copiedState ? <Check size={14} /> : <Copy size={14} />}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (onNotify) onNotify('Annotation Editor Opened', 'Launching CleanShot markup suite...')
                    }}
                    className="p-2 rounded-lg hover:bg-slate-700 text-slate-300 transition-all"
                    title="Annotate (⌘E)"
                  >
                    <Edit3 size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (onNotify) onNotify('Uploaded to Cloud', 'Share URL copied: https://cln.sh/v8Z2a')
                    }}
                    className="p-2 rounded-lg hover:bg-slate-700 text-slate-300 transition-all"
                    title="Upload to Cloud (⌘U)"
                  >
                    <UploadCloud size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={handlePinToggle}
                    className={`p-2 rounded-lg transition-all ${
                      isPinned ? 'bg-amber-500 text-white' : 'hover:bg-slate-700 text-slate-300'
                    }`}
                    title="Pin to Screen (⌘P)"
                  >
                    <Pin size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (onNotify) onNotify('Saved to ~/Downloads', 'File saved in high-res PNG.')
                    }}
                    className="p-2 rounded-lg hover:bg-slate-700 text-slate-300 transition-all"
                    title="Save to Disk (⌘S)"
                  >
                    <Save size={14} />
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
