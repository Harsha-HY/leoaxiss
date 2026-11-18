import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Edit3, 
  ArrowUpRight, 
  Circle, 
  Square, 
  Search, 
  EyeOff, 
  Highlighter, 
  Type, 
  ListOrdered, 
  Crop, 
  Sparkles,
  Check,
  Undo2,
  Redo2,
  Download
} from 'lucide-react'

export default function AnnotationSection({ onOpenPurchase, onNotify }) {
  const [selectedTool, setSelectedTool] = useState('arrow') // 'arrow' | 'numbers' | 'magnifier' | 'blur' | 'highlighter'
  const [activeColor, setActiveColor] = useState('#0d44e8')
  const [showBlur, setShowBlur] = useState(true)

  const tools = [
    { id: 'arrow', name: 'Curved Arrow', icon: ArrowUpRight, desc: 'Draw smooth curved arrows with precise pointer heads.' },
    { id: 'numbers', name: 'Step Counters', icon: ListOrdered, desc: 'Auto-incrementing 1, 2, 3 steps for tutorials and bugs.' },
    { id: 'magnifier', name: 'Magnifier Loupe', icon: Search, desc: 'Zoom in 4× or 8× on pixel details and retina assets.' },
    { id: 'blur', name: 'Blur & Pixelate', icon: EyeOff, desc: 'Redact private keys, passwords, and sensitive client data.' },
    { id: 'highlighter', name: 'Marker Highlight', icon: Highlighter, desc: 'Vibrant translucent highlighter for text or UI elements.' },
    { id: 'text', name: 'Text & Callout', icon: Type, desc: 'Clean typography with drop shadow or solid background pill.' },
  ]

  const colors = [
    { hex: '#0d44e8', name: 'Electric Blue' },
    { hex: '#ef4444', name: 'Crimson Red' },
    { hex: '#f97316', name: 'Bright Orange' },
    { hex: '#eab308', name: 'Sunny Yellow' },
    { hex: '#10b981', name: 'Emerald Green' },
    { hex: '#8b5cf6', name: 'Violet Purple' },
  ]

  return (
    <section id="annotations" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-indigo-200/60">
            <Edit3 size={13} />
            <span>Built-in Annotation Suite</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Highlight what matters in seconds.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            In a matter of seconds, highlight important parts of your screenshot with our suite of powerful annotation tools. No need to open heavy graphics software.
          </p>
        </div>

        {/* Big Annotation Editor Window Mockup */}
        <div className="relative max-w-5xl mx-auto bg-slate-900 rounded-3xl p-3 sm:p-5 shadow-2xl macos-shadow-lg border border-slate-700/80">
          
          {/* Editor Top Bar */}
          <div className="h-10 w-full bg-slate-800/90 rounded-t-2xl px-4 flex items-center justify-between border-b border-slate-700/70 select-none">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
              <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
              <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              <span className="ml-2 text-xs font-medium text-slate-300">CleanShot Annotation Editor — feature_preview.png</span>
            </div>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => onNotify('Undo', 'Reverted last annotation edit')}
                className="text-slate-400 hover:text-white p-1 rounded"
                title="Undo (⌘Z)"
              >
                <Undo2 size={14} />
              </button>
              <button
                type="button"
                onClick={() => onNotify('Redo', 'Redid annotation edit')}
                className="text-slate-400 hover:text-white p-1 rounded"
                title="Redo (⇧⌘Z)"
              >
                <Redo2 size={14} />
              </button>
              <button
                type="button"
                onClick={() => onNotify('Exported Image', 'Saved annotated image to disk.')}
                className="px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Download size={12} />
                <span>Save</span>
              </button>
            </div>
          </div>

          {/* FLOATING ANNOTATION TOOLBAR (CleanShot authentic floating toolbar) */}
          <div className="py-3 px-4 bg-slate-800/60 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 border-b border-slate-700/50">
            {/* Tool Selector Buttons */}
            <div className="flex items-center gap-1 bg-slate-900/90 p-1 rounded-xl border border-slate-700/70">
              {tools.map((tool) => {
                const Icon = tool.icon
                const isActive = selectedTool === tool.id
                return (
                  <button
                    key={tool.id}
                    onClick={() => {
                      setSelectedTool(tool.id)
                      if (onNotify) onNotify(`Tool: ${tool.name}`, tool.desc)
                    }}
                    className={`p-2 rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white hover:bg-slate-800'
                    }`}
                    title={tool.name}
                  >
                    <Icon size={15} />
                    <span className="hidden sm:inline text-xs font-medium">{tool.name}</span>
                  </button>
                )
              })}
            </div>

            {/* Color Palette Selector */}
            <div className="flex items-center gap-1.5 bg-slate-900/90 p-1.5 rounded-xl border border-slate-700/70">
              <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono mr-1 hidden sm:inline">
                Color
              </span>
              {colors.map((c) => (
                <button
                  key={c.hex}
                  onClick={() => setActiveColor(c.hex)}
                  style={{ backgroundColor: c.hex }}
                  className={`w-5 h-5 rounded-full transition-transform cursor-pointer relative ${
                    activeColor === c.hex ? 'scale-125 ring-2 ring-white ring-offset-2 ring-offset-slate-900' : 'hover:scale-110 opacity-80'
                  }`}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          {/* Canvas Preview Area */}
          <div className="relative rounded-b-2xl bg-slate-950 p-4 sm:p-8 flex items-center justify-center overflow-hidden min-h-[460px]">
            {/* Inner Screenshot Being Annotated (Modern UI Card) */}
            <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-200">
              
              {/* Fake UI Header */}
              <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-slate-50">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white font-bold text-xs">
                    CS
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">User Authentication Flow</div>
                    <div className="text-[11px] text-slate-500">Security & Privacy Checklist</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                  Passed Verification
                </span>
              </div>

              {/* Fake UI Body */}
              <div className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-xs text-slate-500 font-medium">Single Sign-On (SSO)</div>
                    <div className="text-sm font-semibold text-slate-800 mt-1">Okta & Google Workspace</div>
                  </div>
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                    <div className="text-xs text-slate-500 font-medium">Session Encryption</div>
                    <div className="text-sm font-semibold text-slate-800 mt-1">AES-256 GCM Key</div>
                  </div>
                </div>

                {/* Sensitive API key row that can be blurred */}
                <div className="p-4 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-medium text-slate-600">Production Secret API Key</div>
                    <div className="mt-1 font-mono text-xs">
                      {showBlur ? (
                        <span className="bg-slate-300 text-slate-300 select-none px-2 py-0.5 rounded blur-[3px]">
                          sk_live_984102948102948102
                        </span>
                      ) : (
                        <span className="text-rose-600 font-bold">sk_live_984102948102948102</span>
                      )}
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowBlur(!showBlur)}
                    className="text-xs px-2.5 py-1 rounded bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-medium transition-colors"
                  >
                    {showBlur ? 'Reveal Secret' : 'Blur Secret'}
                  </button>
                </div>
              </div>

              {/* DYNAMIC ANNOTATION OVERLAYS (Simulating real CleanShot annotations) */}
              
              {/* 1. Curved Arrow Annotation */}
              <div className="absolute top-16 right-16 z-20 pointer-events-none">
                <svg className="w-32 h-24 overflow-visible" viewBox="0 0 120 90">
                  <path
                    d="M 10 70 Q 60 10 110 30"
                    fill="none"
                    stroke={activeColor}
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <polygon
                    points="110,30 95,22 102,36"
                    fill={activeColor}
                  />
                </svg>
                <div
                  style={{ backgroundColor: activeColor }}
                  className="text-white text-[11px] font-bold px-2 py-0.5 rounded-full shadow-lg -mt-3 ml-12 inline-block"
                >
                  Verify Status
                </div>
              </div>

              {/* 2. Step Counters (1, 2) */}
              <div className="absolute top-28 left-6 z-20 flex items-center gap-2 pointer-events-none">
                <div
                  style={{ backgroundColor: activeColor }}
                  className="w-7 h-7 rounded-full text-white font-bold text-xs flex items-center justify-center shadow-lg ring-4 ring-white"
                >
                  1
                </div>
                <span className="text-xs font-semibold bg-white px-2 py-0.5 rounded shadow border border-slate-200">
                  SSO Configuration
                </span>
              </div>

              <div className="absolute bottom-16 left-6 z-20 flex items-center gap-2 pointer-events-none">
                <div
                  style={{ backgroundColor: activeColor }}
                  className="w-7 h-7 rounded-full text-white font-bold text-xs flex items-center justify-center shadow-lg ring-4 ring-white"
                >
                  2
                </div>
                <span className="text-xs font-semibold bg-white px-2 py-0.5 rounded shadow border border-slate-200">
                  Mask sensitive keys before sharing
                </span>
              </div>

              {/* 3. Magnifier Loupe Floating Overlay */}
              <div className="absolute -bottom-4 right-12 z-30 pointer-events-none hidden sm:block">
                <div
                  style={{ borderColor: activeColor }}
                  className="w-28 h-28 rounded-full bg-white/95 border-4 shadow-2xl flex flex-col items-center justify-center text-center p-3 backdrop-blur-sm"
                >
                  <span className="text-[10px] font-mono text-slate-400">MAGNIFIER 4×</span>
                  <span className="text-sm font-bold text-slate-900 mt-0.5">AES-256</span>
                  <span className="text-[9px] font-semibold text-emerald-600">Encrypted</span>
                  <div
                    style={{ backgroundColor: activeColor }}
                    className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full ring-2 ring-white"
                  />
                </div>
              </div>

              {/* 4. Yellow Highlighter Overlay */}
              <div className="absolute top-[175px] left-[170px] z-10 pointer-events-none bg-yellow-300/40 px-2 py-1 rounded mix-blend-multiply border-b-2 border-yellow-400">
                <span className="text-xs font-bold text-transparent select-none">Okta & Google Workspace</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature bullets below the demo */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600" />
              Automatic Numbering
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Click anywhere to drop 1, 2, 3 step tags. CleanShot automatically increments numbers and lets you reorder them on the fly.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-indigo-600" />
              Smart Blur & Redaction
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Choose between smooth aesthetic blur or classic pixelation to securely redact passwords, API keys, and personal identifiers.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/70">
            <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              Retina Magnifier Loupe
            </h4>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              Draw attention to microscopic design flaws, typography alignments, or subtle UI glitches with the 4× zoom magnifier circle.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
