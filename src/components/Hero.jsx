import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Download, 
  Play, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Command, 
  Camera, 
  Crop, 
  Video, 
  Share2, 
  Sliders, 
  Type, 
  Eye, 
  Pin, 
  Copy, 
  Save, 
  Edit3, 
  UploadCloud, 
  HelpCircle,
  Apple
} from 'lucide-react'

export default function Hero({ onOpenPurchase, onNotify }) {
  const [activeMenu, setActiveMenu] = useState(true)
  const [copiedQuickAccess, setCopiedQuickAccess] = useState(false)
  const [pinnedQuickAccess, setPinnedQuickAccess] = useState(false)

  const handleCopyQuick = () => {
    setCopiedQuickAccess(true)
    if (onNotify) {
      onNotify('Copied to Clipboard!', 'Screenshot image copied directly to your macOS clipboard.')
    }
    setTimeout(() => setCopiedQuickAccess(false), 2500)
  }

  const handlePinQuick = () => {
    setPinnedQuickAccess(!pinnedQuickAccess)
    if (onNotify) {
      onNotify(
        pinnedQuickAccess ? 'Unpinned' : 'Screenshot Pinned',
        pinnedQuickAccess ? 'Screenshot unpinned from screen top.' : 'Screenshot is now floating on top of all windows.'
      )
    }
  }

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden glow-hero">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-400/15 via-indigo-300/10 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Top Announcement Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/70 text-blue-700 text-xs sm:text-sm font-medium mb-8 hover:bg-blue-100/60 transition-colors cursor-pointer group shadow-xs"
          onClick={() => onNotify('CleanShot X 4.7 Update', 'Includes Studio Mode, auto-zoom on clicks, and Apple Silicon M4 optimizations!')}
        >
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>CleanShot X 4.7 is out — Introducing Studio Mode & OCR 2.0</span>
          <ArrowRight size={13} className="text-blue-500 group-hover:translate-x-0.5 transition-transform" />
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.08] max-w-4xl mx-auto"
        >
          Capture your Mac's screen <br className="hidden sm:inline" />
          <span className="text-[#0d44e8] relative inline-block">
            like a pro
            <svg className="absolute -bottom-2 left-0 w-full h-3 text-blue-200 -z-10" viewBox="0 0 100 12" preserveAspectRatio="none">
              <path d="M0,10 Q50,0 100,10" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
            </svg>
          </span>
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed"
        >
          CleanShot X provides over 50 features making it the ultimate screen capturing tool. It feels like 6 apps in one.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5 max-w-md mx-auto"
        >
          <button
            type="button"
            onClick={() => onOpenPurchase('basic')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-[#0d44e8] hover:bg-[#0b3ac7] text-white font-semibold text-base shadow-xl shadow-blue-600/25 hover:shadow-blue-600/35 hover:-translate-y-0.5 active:translate-y-0 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Buy Now — $29</span>
            <ArrowRight size={17} />
          </button>

          <button
            type="button"
            onClick={() => onOpenPurchase('trial')}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200/90 shadow-sm hover:border-slate-300 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Download size={16} className="text-slate-500" />
            <span>Free 30-Day Trial</span>
          </button>
        </motion.div>

        {/* System Compatibility Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-500"
        >
          <span className="flex items-center gap-1.5">
            <Apple size={13} className="text-slate-700" />
            <span>macOS 10.14+ (Sonoma, Sequoia & Apple Silicon M1-M4 Native)</span>
          </span>
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          <span>One-time purchase or Pro Cloud</span>
        </motion.div>

        {/* MAIN PRODUCT VISUAL / MOCKUP */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.45, type: 'spring', damping: 25 }}
          className="mt-14 relative max-w-5xl mx-auto"
        >
          {/* macOS Desktop Canvas Container */}
          <div className="relative rounded-2xl sm:rounded-3xl p-3 sm:p-5 bg-gradient-to-b from-slate-100/90 to-slate-200/80 border border-slate-200/90 shadow-2xl macos-shadow-lg">
            
            {/* macOS Top Menu Bar */}
            <div className="h-7 w-full bg-white/90 backdrop-blur-md rounded-t-xl sm:rounded-t-2xl border-b border-slate-200/70 px-4 flex items-center justify-between text-[11px] text-slate-700 select-none">
              <div className="flex items-center gap-4">
                <Apple size={13} className="text-slate-800" />
                <span className="font-semibold text-slate-900">CleanShot</span>
                <span className="hidden sm:inline text-slate-500">File</span>
                <span className="hidden sm:inline text-slate-500">Edit</span>
                <span className="hidden sm:inline text-slate-500">Capture</span>
                <span className="hidden sm:inline text-slate-500">Window</span>
                <span className="hidden sm:inline text-slate-500">Help</span>
              </div>

              {/* Status Bar Icons */}
              <div className="flex items-center gap-3">
                {/* Active CleanShot Icon in Menu Bar */}
                <button
                  type="button"
                  onClick={() => setActiveMenu(!activeMenu)}
                  className={`px-2 py-0.5 rounded flex items-center gap-1 transition-colors ${
                    activeMenu ? 'bg-blue-600 text-white' : 'hover:bg-slate-200/60 text-slate-800'
                  }`}
                  title="Toggle CleanShot Menu"
                >
                  <Camera size={12} />
                  <span className="text-[10px] font-bold">X</span>
                </button>
                <span className="text-slate-400 text-[10px]">9:41 AM</span>
                <span className="w-4 h-2 rounded-[2px] border border-slate-400 inline-block relative">
                  <span className="absolute left-0.5 top-0.5 bottom-0.5 right-1 bg-slate-600 rounded-[1px]" />
                </span>
              </div>
            </div>

            {/* Desktop Surface with Simulated Window & Overlays */}
            <div className="relative rounded-b-xl sm:rounded-b-2xl bg-gradient-to-br from-slate-50 to-blue-50/40 p-4 sm:p-8 min-h-[460px] sm:min-h-[560px] flex items-center justify-center overflow-hidden border border-t-0 border-slate-200/60">
              
              {/* Subtle grid pattern for desktop texture */}
              <div className="absolute inset-0 bg-grid-dots opacity-40 pointer-events-none" />

              {/* CLEANSHOT NATIVE MENU DROPDOWN (Floating near menu bar) */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: activeMenu ? 1 : 0, scale: activeMenu ? 1 : 0.95 }}
                className={`absolute top-2 right-4 sm:right-12 w-64 bg-slate-900/95 text-white rounded-2xl shadow-2xl backdrop-blur-xl border border-slate-700/80 p-1.5 z-30 select-none text-left transition-all ${
                  !activeMenu ? 'pointer-events-none' : ''
                }`}
              >
                <div className="px-3 py-1.5 text-[11px] font-semibold text-slate-400 uppercase tracking-wider flex items-center justify-between">
                  <span>Quick Capture</span>
                  <span className="text-[10px] text-blue-400 font-mono">v4.7</span>
                </div>

                <div className="space-y-0.5">
                  <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-blue-600 text-xs font-medium cursor-pointer transition-colors">
                    <span className="flex items-center gap-2">
                      <Crop size={14} className="text-blue-400 group-hover:text-white" />
                      <span>Capture Area</span>
                    </span>
                    <kbd className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-1.5 py-0.5 rounded">⇧⌘4</kbd>
                  </div>

                  <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-blue-600 text-xs font-medium cursor-pointer transition-colors">
                    <span className="flex items-center gap-2">
                      <Camera size={14} className="text-indigo-400" />
                      <span>Capture Fullscreen</span>
                    </span>
                    <kbd className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-1.5 py-0.5 rounded">⇧⌘3</kbd>
                  </div>

                  <div className="flex items-center justify-between px-3 py-2 rounded-lg bg-blue-600/30 border border-blue-500/40 text-xs font-medium cursor-pointer">
                    <span className="flex items-center gap-2">
                      <Sliders size={14} className="text-blue-400" />
                      <span className="text-blue-200">Scrolling Capture</span>
                    </span>
                    <kbd className="text-[10px] font-mono text-blue-300 bg-blue-900/60 px-1.5 py-0.5 rounded">⇧⌘6</kbd>
                  </div>

                  <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-blue-600 text-xs font-medium cursor-pointer transition-colors">
                    <span className="flex items-center gap-2">
                      <Video size={14} className="text-rose-400" />
                      <span>Record Screen (Video / GIF)</span>
                    </span>
                    <kbd className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-1.5 py-0.5 rounded">⇧⌘2</kbd>
                  </div>

                  <div className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-blue-600 text-xs font-medium cursor-pointer transition-colors">
                    <span className="flex items-center gap-2">
                      <Type size={14} className="text-amber-400" />
                      <span>Recognize Text (OCR)</span>
                    </span>
                    <kbd className="text-[10px] font-mono text-slate-400 bg-slate-800/80 px-1.5 py-0.5 rounded">⇧⌘O</kbd>
                  </div>
                </div>

                <div className="my-1.5 border-t border-slate-800" />

                <div className="flex items-center justify-between px-3 py-1.5 rounded-lg hover:bg-slate-800 text-xs text-slate-300 cursor-pointer">
                  <span className="flex items-center gap-2">
                    <Eye size={13} className="text-slate-400" />
                    <span>Hide Desktop Icons</span>
                  </span>
                  <span className="text-[10px] text-emerald-400 font-medium">Active</span>
                </div>
              </motion.div>

              {/* PRIMARY CAPTURED APP WINDOW (Figma / Analytics Interface) */}
              <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200/90 overflow-hidden text-left z-10 transition-all">
                {/* macOS Window Title Bar */}
                <div className="px-4 py-3 bg-slate-50/90 border-b border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#ff5f57] border border-black/10" />
                    <div className="w-3 h-3 rounded-full bg-[#febc2e] border border-black/10" />
                    <div className="w-3 h-3 rounded-full bg-[#28c840] border border-black/10" />
                    <span className="ml-2 text-xs font-semibold text-slate-700">Project Launch Dashboard — CleanShot Design System</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-400 bg-slate-100 px-2 py-0.5 rounded">1440 × 900</span>
                  </div>
                </div>

                {/* Dashboard content */}
                <div className="p-5 sm:p-6 space-y-5 bg-white">
                  {/* Top Stats Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="text-[11px] text-slate-500 font-medium">Monthly Active Users</div>
                      <div className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">104,820</div>
                      <div className="text-[10px] text-emerald-600 font-semibold mt-1">↑ 24.8% vs last month</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-blue-50/60 border border-blue-100 relative overflow-hidden">
                      <div className="text-[11px] text-blue-600 font-medium">Screen Captures</div>
                      <div className="text-xl sm:text-2xl font-bold text-blue-900 mt-1">3.2M+</div>
                      <div className="text-[10px] text-blue-600 font-semibold mt-1">Instant Cloud Sync</div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="text-[11px] text-slate-500 font-medium">Average Share Time</div>
                      <div className="text-xl sm:text-2xl font-bold text-slate-900 mt-1">1.2s</div>
                      <div className="text-[10px] text-slate-500 font-semibold mt-1">Link on clipboard</div>
                    </div>
                  </div>

                  {/* Chart and visual elements */}
                  <div className="p-4 rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 text-white relative overflow-hidden">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="text-xs font-semibold text-slate-300">CleanShot Cloud Realtime Activity</div>
                        <div className="text-lg font-bold text-white">48,210 Uploads Today</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-mono font-medium border border-emerald-500/30">
                        Live 60 FPS
                      </span>
                    </div>

                    {/* Chart Bars */}
                    <div className="h-24 flex items-end gap-2 pt-4 border-b border-slate-700/60">
                      {[35, 52, 45, 68, 74, 60, 85, 92, 78, 95, 88, 100].map((h, i) => (
                        <div key={i} className="flex-1 flex flex-col items-center gap-1 group">
                          <div
                            style={{ height: `${h}%` }}
                            className={`w-full rounded-t transition-all ${
                              i === 11 ? 'bg-blue-500 shadow-lg shadow-blue-500/50' : 'bg-slate-700 hover:bg-slate-600'
                            }`}
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating Live Annotations on the Mockup */}
                  {/* Annotation 1: Step Number Pin */}
                  <div className="absolute top-28 left-16 sm:left-24 z-20 flex items-center gap-2 pointer-events-none">
                    <div className="w-7 h-7 rounded-full bg-[#0d44e8] text-white font-bold text-xs flex items-center justify-center shadow-lg shadow-blue-600/50 ring-4 ring-white">
                      1
                    </div>
                    <div className="bg-slate-900/90 text-white text-[11px] px-2.5 py-1 rounded-lg backdrop-blur-sm shadow-md font-medium border border-slate-700">
                      Inspect analytics spikes
                    </div>
                  </div>

                  {/* Annotation 2: Magnifier Loupe */}
                  <div className="absolute bottom-28 right-16 sm:right-28 z-20 pointer-events-none hidden sm:block">
                    <div className="relative w-24 h-24 rounded-full bg-white/95 border-4 border-[#0d44e8] shadow-2xl flex flex-col items-center justify-center text-center p-2">
                      <span className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">Loupe 4×</span>
                      <span className="text-xs font-mono font-bold text-slate-800">#0d44e8</span>
                      <span className="text-[9px] text-slate-400 font-mono">100% Retinal</span>
                      <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#0d44e8] ring-2 ring-white" />
                    </div>
                  </div>

                  {/* Annotation 3: Redaction/Blur sample */}
                  <div className="absolute top-1/2 left-1/3 -translate-y-1/2 z-20 pointer-events-none hidden md:block">
                    <div className="px-4 py-1.5 rounded-lg bg-slate-300/60 backdrop-blur-md border border-slate-400/40 text-slate-700 text-xs font-mono line-through tracking-wider select-none">
                      ██████ SENSITIVE TOKEN ██████
                    </div>
                  </div>
                </div>
              </div>

              {/* CLEANSHOT QUICK ACCESS OVERLAY (The iconic floating preview at bottom left) */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className={`absolute bottom-4 left-4 sm:bottom-8 sm:left-8 z-30 bg-slate-900/95 text-white rounded-2xl shadow-2xl backdrop-blur-2xl border ${
                  pinnedQuickAccess ? 'border-amber-400 shadow-amber-500/20' : 'border-slate-700/90'
                } p-2 flex items-center gap-3 select-none`}
              >
                {/* Thumbnail Preview */}
                <div className="relative w-16 h-12 sm:w-20 sm:h-14 bg-gradient-to-tr from-blue-700 to-indigo-600 rounded-xl overflow-hidden border border-white/20 shrink-0 group/thumb cursor-grab">
                  <div className="absolute inset-0 flex items-center justify-center text-[9px] font-mono text-white/90">
                    PNG 1.4MB
                  </div>
                  <div className="absolute bottom-1 right-1 text-[8px] bg-black/60 px-1 rounded text-white font-mono">
                    NEW
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={handleCopyQuick}
                    className={`p-2 rounded-xl transition-all cursor-pointer ${
                      copiedQuickAccess
                        ? 'bg-emerald-600 text-white'
                        : 'hover:bg-slate-800 text-slate-300 hover:text-white'
                    }`}
                    title="Copy to Clipboard (⌘C)"
                  >
                    {copiedQuickAccess ? <Check size={16} /> : <Copy size={16} />}
                  </button>

                  <button
                    type="button"
                    onClick={() => onOpenPurchase('basic')}
                    className="p-2 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer"
                    title="Annotate (⌘E)"
                  >
                    <Edit3 size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (onNotify) onNotify('Uploaded to CleanShot Cloud', 'Shareable link copied: https://cln.sh/k9X2bY')
                    }}
                    className="p-2 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer"
                    title="Upload to Cloud (⌘U)"
                  >
                    <UploadCloud size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={handlePinQuick}
                    className={`p-2 rounded-xl transition-all cursor-pointer ${
                      pinnedQuickAccess
                        ? 'bg-amber-500 text-white'
                        : 'hover:bg-slate-800 text-slate-300 hover:text-white'
                    }`}
                    title="Pin to Screen (⌘P)"
                  >
                    <Pin size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      if (onNotify) onNotify('Saved to Disk', 'Screenshot saved to ~/Desktop/CleanShot-2026.png')
                    }}
                    className="p-2 rounded-xl hover:bg-slate-800 text-slate-300 hover:text-white transition-all cursor-pointer"
                    title="Save to Desktop (⌘S)"
                  >
                    <Save size={16} />
                  </button>
                </div>

                <div className="hidden sm:block border-l border-slate-700 pl-2 pr-1">
                  <div className="text-[10px] text-slate-400 font-mono">Quick Access</div>
                  <div className="text-[11px] font-semibold text-blue-400 flex items-center gap-1">
                    <span>Drag & Drop</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
