import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Eye, 
  EyeOff, 
  Pin, 
  Command, 
  Layers, 
  Crosshair, 
  Cpu, 
  Apple, 
  Sparkles,
  Check,
  Folder,
  FileImage,
  FileText
} from 'lucide-react'

export default function MacWorkflowSection({ onNotify }) {
  const [hideIcons, setHideIcons] = useState(false)

  const handleToggleHide = () => {
    setHideIcons(!hideIcons)
    if (onNotify) {
      onNotify(
        !hideIcons ? 'Desktop Icons Hidden' : 'Desktop Icons Visible',
        !hideIcons ? 'Your Mac desktop is now pristine for screenshots.' : 'Desktop icons restored.'
      )
    }
  }

  return (
    <section id="macos-features" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-semibold uppercase tracking-wider mb-3 border border-slate-200/80">
            <Apple size={13} className="text-slate-900" />
            <span>macOS Integration</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Feels right at home in macOS.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Crafted with deep respect for Apple's Human Interface Guidelines. CleanShot X integrates smoothly into your daily muscle memory, menu bar, and shortcuts.
          </p>
        </div>

        {/* 6 Native Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          
          {/* Card 1: Hide Desktop Icons (With Interactive Toggle!) */}
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-[#0d44e8] flex items-center justify-center">
                  {hideIcons ? <EyeOff size={18} /> : <Eye size={18} />}
                </div>
                <button
                  type="button"
                  onClick={handleToggleHide}
                  className={`text-xs px-2.5 py-1 rounded-lg border font-semibold transition-all cursor-pointer ${
                    hideIcons ? 'bg-blue-600 text-white border-blue-600' : 'bg-white text-slate-700 border-slate-200'
                  }`}
                >
                  {hideIcons ? 'Icons Hidden' : 'Hide Icons'}
                </button>
              </div>

              <h3 className="text-lg font-bold text-slate-900">Hide Desktop Icons</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Messy desktop covered with random files? CleanShot temporarily hides them with one click before capturing so your screen looks spotless.
              </p>
            </div>

            {/* Simulated Desktop Preview with togglable files */}
            <div className="mt-6 p-4 rounded-2xl bg-gradient-to-tr from-sky-100 via-indigo-50 to-blue-100 border border-slate-200/60 min-h-[90px] flex items-center justify-center transition-all">
              <motion.div
                animate={{ opacity: hideIcons ? 0 : 1, scale: hideIcons ? 0.9 : 1 }}
                transition={{ duration: 0.2 }}
                className="flex items-center gap-4 text-slate-700"
              >
                <div className="flex flex-col items-center gap-1">
                  <Folder size={24} className="text-blue-500 fill-blue-500/20" />
                  <span className="text-[9px] font-medium">Projects</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FileImage size={24} className="text-emerald-500" />
                  <span className="text-[9px] font-medium">Mockup.png</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <FileText size={24} className="text-amber-500" />
                  <span className="text-[9px] font-medium">Notes.txt</span>
                </div>
              </motion.div>
              {hideIcons && (
                <span className="text-xs font-semibold text-blue-700 font-mono">
                  ✨ Clean Desktop
                </span>
              )}
            </div>
          </div>

          {/* Card 2: Pin Screenshots */}
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4">
                <Pin size={18} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Pin Floating Windows</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Need to reference a design spec or code snippet while working? Pin captured screenshots to stay permanently visible on top of all fullscreen apps.
              </p>
            </div>

            <div className="mt-6 p-3.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span className="font-mono font-medium">Shortcut: ⌘P</span>
              <span className="text-[10px] text-amber-600 font-semibold bg-amber-50 px-2 py-0.5 rounded">Always on top</span>
            </div>
          </div>

          {/* Card 3: Custom Global Shortcuts */}
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center mb-4">
                <Command size={18} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Custom Global Hotkeys</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Easily remap macOS default screenshot hotkeys (<kbd className="font-mono text-xs">⇧⌘3</kbd>, <kbd className="font-mono text-xs">⇧⌘4</kbd>, <kbd className="font-mono text-xs">⇧⌘5</kbd>) directly to CleanShot X with zero friction.
              </p>
            </div>

            <div className="mt-6 p-3.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span className="font-mono font-medium">100% Configurable</span>
              <span className="text-[10px] text-purple-600 font-semibold bg-purple-50 px-2 py-0.5 rounded">Global Hooks</span>
            </div>
          </div>

          {/* Card 4: Window Shadow Control */}
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4">
                <Layers size={18} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Window Shadow Control</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Capture windows with authentic macOS transparent drop shadows, or strip shadows entirely to fit clean web layouts and dark mode blogs.
              </p>
            </div>

            <div className="mt-6 p-3.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span className="font-mono font-medium">Shadow: On / Off</span>
              <span className="text-[10px] text-emerald-600 font-semibold bg-emerald-50 px-2 py-0.5 rounded">Pixel Perfect</span>
            </div>
          </div>

          {/* Card 5: Crosshair & Pixel Loupe */}
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-rose-100 text-rose-700 flex items-center justify-center mb-4">
                <Crosshair size={18} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Crosshair & Color Loupe</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Align selections to exact pixel boundaries with a live 10× magnified crosshair loupe that reports hex color codes and dimensions.
              </p>
            </div>

            <div className="mt-6 p-3.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span className="font-mono font-medium">10× Loupe</span>
              <span className="text-[10px] text-rose-600 font-semibold bg-rose-50 px-2 py-0.5 rounded">HEX / RGB</span>
            </div>
          </div>

          {/* Card 6: Apple Silicon Native */}
          <div className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-2xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4">
                <Cpu size={18} />
              </div>
              <h3 className="text-lg font-bold text-slate-900">Apple Silicon Native</h3>
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                100% native Universal binary optimized for M1, M2, M3, and M4 Apple Silicon architectures. Instant responsiveness and negligible battery usage.
              </p>
            </div>

            <div className="mt-6 p-3.5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span className="font-mono font-medium">M1 / M2 / M3 / M4</span>
              <span className="text-[10px] text-indigo-600 font-semibold bg-indigo-50 px-2 py-0.5 rounded">Universal Binary</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
