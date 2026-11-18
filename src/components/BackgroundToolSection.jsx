import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Palette, 
  Sparkles, 
  Sliders, 
  Copy, 
  Download, 
  Check, 
  Maximize, 
  Square, 
  LayoutTemplate,
  Layers
} from 'lucide-react'

export default function BackgroundToolSection({ onOpenPurchase, onNotify }) {
  const presets = [
    {
      id: 'mesh-blue',
      name: 'CleanShot Electric',
      style: 'bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400',
      pillColor: '#0d44e8'
    },
    {
      id: 'sunset',
      name: 'Sunset Coral',
      style: 'bg-gradient-to-tr from-rose-500 via-orange-500 to-amber-300',
      pillColor: '#f43f5e'
    },
    {
      id: 'emerald',
      name: 'Emerald Mint',
      style: 'bg-gradient-to-tr from-emerald-600 via-teal-500 to-cyan-300',
      pillColor: '#10b981'
    },
    {
      id: 'slate-studio',
      name: 'Studio Gray',
      style: 'bg-gradient-to-br from-slate-200 via-slate-100 to-slate-300',
      pillColor: '#64748b'
    },
    {
      id: 'midnight',
      name: 'Midnight Aurora',
      style: 'bg-gradient-to-tr from-slate-950 via-purple-950 to-indigo-900',
      pillColor: '#312e81'
    },
    {
      id: 'cosmic',
      name: 'Cosmic Magenta',
      style: 'bg-gradient-to-tr from-purple-700 via-pink-600 to-amber-400',
      pillColor: '#9333ea'
    },
  ]

  const [activePreset, setActivePreset] = useState(presets[0])
  const [paddingSize, setPaddingSize] = useState('medium') // 'small' | 'medium' | 'large'
  const [shadowStyle, setShadowStyle] = useState('dramatic') // 'none' | 'soft' | 'dramatic'
  const [aspectRatio, setAspectRatio] = useState('16:9') // 'auto' | '16:9' | '1:1'
  const [copied, setCopied] = useState(false)

  const paddingClass = {
    small: 'p-4 sm:p-6',
    medium: 'p-6 sm:p-12',
    large: 'p-10 sm:p-20'
  }[paddingSize]

  const shadowClass = {
    none: 'shadow-none',
    soft: 'shadow-xl',
    dramatic: 'shadow-2xl macos-shadow-lg ring-1 ring-black/10'
  }[shadowStyle]

  const handleCopyGraphic = () => {
    setCopied(true)
    if (onNotify) {
      onNotify('Copied Beautified Graphic', 'Social-ready graphic copied to clipboard with background & shadow.')
    }
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="background-tool" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0d44e8] text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-200/60">
            <Palette size={13} />
            <span>Background Tool</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Make every screenshot look stunning.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Transform ordinary window captures into high-impact visuals for Twitter/X, LinkedIn, blog posts, and documentation with custom gradients, padding, and soft macOS drop shadows.
          </p>
        </div>

        {/* Playground Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          
          {/* Controls Column (Left) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Background Presets */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-3">
                Background Style Presets
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {presets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => setActivePreset(preset)}
                    className={`flex items-center gap-2.5 p-2 rounded-xl text-left border text-xs font-semibold transition-all cursor-pointer ${
                      activePreset.id === preset.id
                        ? 'bg-white border-blue-600 text-blue-600 shadow-sm ring-1 ring-blue-600'
                        : 'bg-white/80 border-slate-200 text-slate-700 hover:border-slate-300'
                    }`}
                  >
                    <div className={`w-5 h-5 rounded-lg shrink-0 ${preset.style}`} />
                    <span className="truncate">{preset.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Padding Controls */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                Padding & Spacing
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['small', 'medium', 'large'].map((size) => (
                  <button
                    key={size}
                    onClick={() => setPaddingSize(size)}
                    className={`py-2 px-3 text-xs font-semibold rounded-xl border capitalize transition-all cursor-pointer ${
                      paddingSize === size
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Shadow Controls */}
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2.5">
                Window Shadow
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'none', label: 'Flat' },
                  { id: 'soft', label: 'Soft' },
                  { id: 'dramatic', label: 'macOS Deep' },
                ].map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setShadowStyle(s.id)}
                    className={`py-2 px-3 text-xs font-semibold rounded-xl border transition-all cursor-pointer ${
                      shadowStyle === s.id
                        ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                        : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={handleCopyGraphic}
                className="flex-1 py-3 px-4 rounded-xl bg-[#0d44e8] hover:bg-[#0b3ac7] text-white text-xs font-semibold shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {copied ? <Check size={15} /> : <Copy size={15} />}
                <span>{copied ? 'Copied Graphic!' : 'Copy to Clipboard'}</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenPurchase('basic')}
                className="py-3 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-semibold transition-all cursor-pointer"
              >
                Export PNG
              </button>
            </div>
          </div>

          {/* Canvas Display Column (Right) */}
          <div className="lg:col-span-7">
            <div className="bg-slate-100 rounded-3xl p-3 sm:p-5 border border-slate-200/80 shadow-xl">
              
              {/* Outer Beautified Canvas with Live Selected Gradient & Padding */}
              <motion.div
                layout
                className={`relative rounded-2xl ${activePreset.style} ${paddingClass} flex items-center justify-center transition-all duration-300 min-h-[380px] sm:min-h-[440px]`}
              >
                {/* Captured Application Window inside */}
                <motion.div
                  layout
                  className={`w-full max-w-lg bg-white rounded-xl overflow-hidden ${shadowClass} transition-all`}
                >
                  {/* macOS Title Bar */}
                  <div className="px-3.5 py-2.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                      <span className="text-[11px] font-semibold text-slate-700 ml-2">Release v2.0 Overview</span>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">1200 × 750</span>
                  </div>

                  {/* Window Content */}
                  <div className="p-4 sm:p-5 space-y-3 bg-white text-left">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-slate-900">Quarterly Growth</span>
                      <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded">
                        +142% Target Met
                      </span>
                    </div>

                    <div className="h-20 bg-slate-50 rounded-lg p-2.5 flex items-end gap-1.5 border border-slate-100">
                      {[30, 50, 40, 75, 60, 90, 85, 100].map((v, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center">
                          <div
                            style={{ height: `${v}%` }}
                            className={`w-full rounded-xs ${idx === 7 ? 'bg-blue-600' : 'bg-slate-300'}`}
                          />
                        </div>
                      ))}
                    </div>

                    <div className="text-[11px] text-slate-500 flex items-center justify-between pt-1">
                      <span>Generated with CleanShot X</span>
                      <span className="font-mono text-blue-600">@designteam</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
