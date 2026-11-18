import React from 'react'
import { Apple, Heart } from 'lucide-react'

export default function Footer({ onOpenPurchase }) {
  return (
    <footer className="bg-slate-950 text-slate-400 py-16 sm:py-20 border-t border-slate-800 text-left text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section with Logo and Columns */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 mb-16">
          
          {/* Brand Info (Spans 2 cols on md) */}
          <div className="col-span-2">
            <a href="#" className="flex items-center gap-2.5 mb-4 group inline-flex">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0d44e8] to-[#3b82f6] p-0.5 shadow-md shadow-blue-500/20">
                <div className="w-full h-full bg-[#0d44e8] rounded-[10px] flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="9" />
                    <circle cx="12" cy="12" r="3.5" fill="white" />
                    <line x1="12" y1="3" x2="14" y2="8.5" />
                    <line x1="20.5" y1="8" x2="15.5" y2="10" />
                    <line x1="19.5" y1="16.5" x2="14" y2="14.5" />
                    <line x1="9.5" y1="19.5" x2="10" y2="14" />
                    <line x1="3.5" y1="13.5" x2="8.5" y2="12" />
                    <line x1="5.5" y1="6" x2="10" y2="9.5" />
                  </svg>
                </div>
              </div>
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-white text-lg">
                <span>CleanShot</span>
                <span className="text-xs px-1.5 py-0.5 rounded-md bg-blue-600/30 text-blue-400 font-mono border border-blue-500/40">
                  X
                </span>
              </div>
            </a>

            <p className="text-xs text-slate-400 max-w-sm leading-relaxed mb-6">
              CleanShot X provides over 50 features making it the ultimate screen capturing tool for macOS. Capture, annotate, record, and share in seconds.
            </p>

            {/* Cloud Status indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-[11px] text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>CleanShot Cloud: Operational (99.99%)</span>
            </div>
          </div>

          {/* Column 1: Features */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Features
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#quick-access" className="hover:text-white transition-colors">Quick Access Overlay</a></li>
              <li><a href="#annotations" className="hover:text-white transition-colors">Built-in Annotations</a></li>
              <li><a href="#cloud" className="hover:text-white transition-colors">CleanShot Cloud</a></li>
              <li><a href="#scrolling" className="hover:text-white transition-colors">Scrolling Capture</a></li>
              <li><a href="#recording" className="hover:text-white transition-colors">Screen Recording</a></li>
              <li><a href="#recording" className="hover:text-white transition-colors">Studio Mode</a></li>
              <li><a href="#background-tool" className="hover:text-white transition-colors">Background Tool</a></li>
              <li><a href="#ocr" className="hover:text-white transition-colors">Text Recognition (OCR)</a></li>
              <li><a href="#macos-features" className="hover:text-white transition-colors">Hide Desktop Icons</a></li>
            </ul>
          </div>

          {/* Column 2: Resources & Community */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Resources
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing & Plans</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">Frequently Asked Questions</a></li>
              <li><a href="#changelog" onClick={(e) => { e.preventDefault(); alert("CleanShot X 4.7 is out with Studio Mode, Auto-Zoom, and M4 Silicon support."); }} className="hover:text-white transition-colors">Release Notes (v4.7)</a></li>
              <li><a href="#docs" className="hover:text-white transition-colors">Documentation & Guides</a></li>
              <li><a href="#shortcuts" className="hover:text-white transition-colors">Keyboard Shortcuts Guide</a></li>
              <li><a href="#wallpapers" className="hover:text-white transition-colors">Free macOS Wallpapers</a></li>
              <li><a href="#teams" className="hover:text-white transition-colors">CleanShot for Enterprise</a></li>
            </ul>
          </div>

          {/* Column 3: Company & Legal */}
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Company
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li><a href="#" className="hover:text-white transition-colors">About CleanShot</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Support</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Security Overview</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Affiliate Program</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5">
            <Apple size={14} className="text-slate-400" />
            <span>CleanShot X is crafted with precision for macOS. Not affiliated with Apple Inc.</span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Twitter / X
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              GitHub
            </a>
            <a href="https://discord.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              Discord
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">
              YouTube
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
