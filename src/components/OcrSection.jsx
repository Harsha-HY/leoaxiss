import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Type, 
  Scan, 
  Copy, 
  Check, 
  Sparkles, 
  FileText, 
  Cpu, 
  Lock, 
  ArrowRight
} from 'lucide-react'

export default function OcrSection({ onOpenPurchase, onNotify }) {
  const sampleCode = `import { useState, useEffect } from 'react'
export function useCleanShotOCR() {
  const [accuracy, setAccuracy] = useState(0.998)
  return { recognizedText, accuracy }
}`

  const [copied, setCopied] = useState(false)
  const [isScanning, setIsScanning] = useState(false)

  const handleCopyOcr = () => {
    setIsScanning(true)
    setTimeout(() => {
      setIsScanning(false)
      setCopied(true)
      if (onNotify) {
        onNotify('OCR Text Copied to Clipboard!', 'Extracted 148 characters directly from screen pixels.')
      }
      setTimeout(() => setCopied(false), 2500)
    }, 600)
  }

  return (
    <section id="ocr" className="py-24 bg-slate-50/70 border-y border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-amber-200/70">
            <Scan size={13} />
            <span>Text Recognition (OCR)</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Extract text from anywhere.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Can't select text in an image, tutorial video, scanned document, or legacy application? Press <kbd className="px-2 py-0.5 rounded bg-white text-slate-800 font-mono text-sm border border-slate-300 font-semibold shadow-2xs">⇧⌘O</kbd> to capture the area and instantly copy editable text directly to your clipboard.
          </p>
        </div>

        {/* OCR Interactive Canvas */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 shadow-xl border border-slate-200/80">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            
            {/* Left: Pixel source (Simulated image/video scan area) */}
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 mb-2">
                <span className="font-semibold text-slate-700">Source: Video Frame / Image</span>
                <span className="text-[11px] font-mono bg-slate-100 px-2 py-0.5 rounded">Unselectable Pixels</span>
              </div>

              {/* Fake scanned code snippet inside bounding box */}
              <div className="relative rounded-2xl bg-slate-900 p-5 font-mono text-xs text-slate-200 overflow-hidden border border-slate-700 shadow-inner select-none">
                
                {/* Code lines */}
                <div className="space-y-1.5 opacity-90">
                  <div className="text-purple-400">import <span className="text-white">{"{ useState, useEffect }"}</span> from <span className="text-emerald-400">'react'</span></div>
                  <div className="text-blue-400">export function <span className="text-amber-300">useCleanShotOCR</span>() {"{"}</div>
                  <div className="pl-4 text-slate-400">const [accuracy, setAccuracy] = useState(<span className="text-rose-400">0.998</span>)</div>
                  <div className="pl-4 text-purple-400">return <span className="text-white">{"{ recognizedText, accuracy }"}</span></div>
                  <div>{"}"}</div>
                </div>

                {/* Animated OCR Scan Reticle Box */}
                <motion.div
                  animate={{
                    borderColor: isScanning ? ['#f59e0b', '#10b981', '#3b82f6'] : '#3b82f6',
                    boxShadow: isScanning
                      ? '0 0 20px rgba(59, 130, 246, 0.5)'
                      : '0 0 0px rgba(0,0,0,0)'
                  }}
                  transition={{ duration: 0.8, repeat: isScanning ? Infinity : 0 }}
                  className="absolute inset-2 border-2 border-dashed border-blue-500/80 rounded-xl pointer-events-none flex items-start justify-end p-2"
                >
                  <span className="text-[9px] bg-blue-600 text-white font-mono px-1.5 py-0.5 rounded font-bold">
                    OCR 99.8%
                  </span>
                </motion.div>

                {isScanning && (
                  <motion.div
                    initial={{ top: '0%' }}
                    animate={{ top: '100%' }}
                    transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                    className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent pointer-events-none shadow-md shadow-blue-400"
                  />
                )}
              </div>

              <div className="mt-4 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Cpu size={14} className="text-blue-600" />
                  <span>On-Device Apple Neural Engine</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Lock size={13} className="text-emerald-600" />
                  <span>100% Private (No Cloud)</span>
                </span>
              </div>
            </div>

            {/* Right: Extracted Output */}
            <div className="space-y-4">
              <div className="text-left">
                <div className="text-xs font-semibold uppercase tracking-wider text-amber-600">
                  Instant Output
                </div>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  Editable Text & Code
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  CleanShot X detects characters instantly without sending pixels to third-party servers. Indentations, quotes, and symbols are preserved accurately.
                </p>
              </div>

              {/* Interactive Copy Button */}
              <button
                type="button"
                onClick={handleCopyOcr}
                className="w-full py-3.5 px-6 rounded-2xl bg-[#0d44e8] hover:bg-[#0b3ac7] text-white font-semibold text-sm shadow-lg shadow-blue-600/20 hover:shadow-blue-600/30 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                {isScanning ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Analyzing Image Pixels...</span>
                  </>
                ) : copied ? (
                  <>
                    <Check size={16} />
                    <span>Copied 148 Characters to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Simulate OCR Recognition (⇧⌘O)</span>
                  </>
                )}
              </button>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 text-left text-xs text-slate-600">
                <div className="font-semibold text-slate-800 mb-1">Supported Languages:</div>
                <div className="text-[11px] text-slate-500 leading-relaxed">
                  English, German, French, Spanish, Italian, Portuguese, Chinese, Japanese, Korean, and Ukrainian.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
