import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowDownCircle, 
  Layers, 
  Maximize2, 
  Check, 
  Sparkles, 
  Play, 
  Pause, 
  RotateCcw,
  Sliders,
  Scissors
} from 'lucide-react'

export default function ScrollingCaptureSection({ onOpenPurchase, onNotify }) {
  const [isScrolling, setIsScrolling] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0) // 0 to 100
  const [freezeHeader, setFreezeHeader] = useState(true)

  const handleStartCapture = () => {
    if (isScrolling) return
    setIsScrolling(true)
    setScrollProgress(10)

    const timer1 = setTimeout(() => setScrollProgress(35), 600)
    const timer2 = setTimeout(() => setScrollProgress(70), 1200)
    const timer3 = setTimeout(() => {
      setScrollProgress(100)
      setIsScrolling(false)
      if (onNotify) {
        onNotify('Scrolling Capture Complete!', 'Successfully stitched 1440 × 3400px full-page capture.')
      }
    }, 1800)
  }

  const handleReset = () => {
    setIsScrolling(false)
    setScrollProgress(0)
  }

  return (
    <section id="scrolling" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-emerald-200/60">
            <ArrowDownCircle size={13} />
            <span>Scrolling Capture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Capture anything beyond your screen.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Need to grab a full webpage, lengthy chat log, or massive code file? Simply drag the selection area and scroll. CleanShot X stitches every slice together with pixel-perfect alignment.
          </p>
        </div>

        {/* Interactive Scrolling Demo Frame */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Feature explanations */}
          <div className="lg:col-span-5 space-y-5">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Intelligent Edge Stitching
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                CleanShot analyzes overlapping pixels in real-time, removing duplicate lines and jagged seams. Whether you scroll fast or slow, the output is seamless.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                Freeze Fixed Headers
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Sticky navigation bars won't repeat or ruin your screenshot. With one click, CleanShot freezes sticky elements so they only appear once at the very top.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-purple-500" />
                Horizontal & Vertical Support
              </h3>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Scroll downwards for articles, or sideways for wide Figma boards, horizontal spreadsheets, and timeline graphs.
              </p>
            </div>

            {/* Live Interactive Trigger Controls */}
            <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-200 flex items-center justify-between gap-3">
              <div>
                <div className="text-xs font-bold text-slate-900">Try Scrolling Capture</div>
                <div className="text-[11px] text-slate-500">Experience automatic stitching live</div>
              </div>
              <div className="flex items-center gap-2">
                {scrollProgress > 0 && (
                  <button
                    onClick={handleReset}
                    className="p-2 text-slate-500 hover:text-slate-800 rounded-lg hover:bg-white transition-colors"
                    title="Reset simulation"
                  >
                    <RotateCcw size={15} />
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleStartCapture}
                  disabled={isScrolling}
                  className="px-4 py-2 rounded-xl bg-[#0d44e8] hover:bg-[#0b3ac7] text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md shadow-blue-500/20 cursor-pointer disabled:opacity-50"
                >
                  <Play size={13} fill="currentColor" />
                  <span>{isScrolling ? 'Stitching...' : scrollProgress === 100 ? 'Capture Again' : 'Start Capture'}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: Simulated Browser Window with scrolling viewport */}
          <div className="lg:col-span-7">
            <div className="relative bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden macos-shadow">
              
              {/* Safari Window Header */}
              <div className="px-4 py-3 bg-slate-100/90 border-b border-slate-200 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                  <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                  <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                  <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-600 ml-2 font-mono">
                    <span>developer.apple.com/documentation/swift</span>
                  </div>
                </div>
                
                {/* Scrolling HUD Pill */}
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                    ⇧⌘6 Active
                  </span>
                </div>
              </div>

              {/* Viewport with Animated Scroll */}
              <div className="relative h-96 overflow-hidden bg-slate-50 p-6 select-none">
                
                {/* Freeze Header simulation */}
                <div className="sticky top-0 z-20 bg-white/95 backdrop-blur-md p-3 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                    <span className="text-xs font-bold text-slate-800">SwiftUI Component Library Documentation</span>
                  </div>
                  <span className="text-[10px] bg-emerald-50 text-emerald-700 font-mono font-medium px-2 py-0.5 rounded border border-emerald-200">
                    Header Frozen
                  </span>
                </div>

                {/* Simulated Content scrolling inside */}
                <motion.div
                  animate={{ y: -(scrollProgress * 2.2) }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="space-y-4 text-left"
                >
                  <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs">
                    <div className="text-xs font-semibold text-blue-600">Section 1: Declarative Views</div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      SwiftUI provides a declarative syntax for UI construction. CleanShot captures every nested view hierarchy and preview canvas seamlessly.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs">
                    <div className="text-xs font-semibold text-indigo-600">Section 2: State and Data Binding</div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Manage single source of truth across views. CleanShot Scrolling Capture automatically detects text boundaries without distortion.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs">
                    <div className="text-xs font-semibold text-purple-600">Section 3: Animations and Gestures</div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Smooth spring physics and touch gestures recorded with 60 frames per second fidelity.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs">
                    <div className="text-xs font-semibold text-emerald-600">Section 4: Navigation Stacks</div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Full hierarchy rendering with programmatic path destination routing and persistent state recovery.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-white border border-slate-200/70 shadow-xs">
                    <div className="text-xs font-semibold text-slate-700">Section 5: Accessibility Identifiers</div>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                      Native VoiceOver labels, dynamic type scaling, and contrast optimization verification.
                    </p>
                  </div>
                </motion.div>

                {/* CleanShot Scrolling Frame Overlays */}
                <div className="absolute inset-0 pointer-events-none border-2 border-emerald-500/70 rounded-b-2xl m-2" />

                {/* Floating Stitch Indicator */}
                <div className="absolute bottom-4 right-4 z-30 bg-slate-900/90 text-white px-3.5 py-1.5 rounded-xl shadow-lg border border-slate-700 text-xs font-mono flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Stitched: {scrollProgress}% (1440 × {900 + Math.round(scrollProgress * 25)}px)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
