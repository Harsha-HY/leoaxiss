import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  UploadCloud, 
  Link2, 
  Globe, 
  Lock, 
  Timer, 
  MessageSquare, 
  ShieldCheck, 
  Copy, 
  Check, 
  Sparkles,
  Eye,
  Share2
} from 'lucide-react'

export default function CloudSection({ onOpenPurchase, onNotify }) {
  const [copiedLink, setCopiedLink] = useState(false)
  const [passwordActive, setPasswordActive] = useState(false)
  const [expiresIn, setExpiresIn] = useState('7 days')

  const handleCopyLink = () => {
    setCopiedLink(true)
    if (onNotify) {
      onNotify('Link Copied to Clipboard!', 'https://cln.sh/m7X8qP — Ready to paste anywhere.')
    }
    setTimeout(() => setCopiedLink(false), 2200)
  }

  return (
    <section id="cloud" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[500px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[400px] bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-3 border border-blue-500/30">
            <UploadCloud size={13} />
            <span>CleanShot Cloud</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Share screenshots in a flash.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Instantly upload your captures to our blazing-fast cloud. A shareable link is copied straight to your clipboard, ready to paste into Slack, iMessage, email, or tickets.
          </p>
        </div>

        {/* Cloud Interactive Showcase Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Cloud Feature Highlights */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-3">
                <Link2 size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Instant Upload & Link Copy</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                As soon as you capture or finish recording, the file is compressed and uploaded. The short link <code className="text-blue-400 font-mono">cln.sh/...</code> lands immediately on your clipboard.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <div className="w-10 h-10 rounded-xl bg-cyan-600/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-3">
                <Globe size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Custom Domain & Custom Branding</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                CleanShot Pro lets you host captures under your own domain (e.g. <span className="text-cyan-400 font-mono">shots.youragency.com</span>) with your company logo and custom accent colors.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-800/80 border border-slate-700/80">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-3">
                <Lock size={20} />
              </div>
              <h3 className="text-lg font-bold text-white">Password Protection & Self-Destruction</h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 leading-relaxed">
                Protect sensitive unreleased designs with passwords. Set links to automatically self-destruct after 24 hours, 7 days, or 30 days.
              </p>
            </div>
          </div>

          {/* Right Column: CleanShot Cloud Web Viewer Interface */}
          <div className="lg:col-span-7">
            <div className="bg-slate-800/90 rounded-3xl p-5 sm:p-7 shadow-2xl border border-slate-700/90 backdrop-blur-xl">
              
              {/* Browser-style address bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/80 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <div className="w-3 h-3 rounded-full bg-amber-500" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500" />
                </div>
                
                {/* URL Pill */}
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-700 text-xs font-mono text-slate-300 max-w-sm w-full mx-4 justify-between">
                  <div className="flex items-center gap-1.5 truncate">
                    <Lock size={12} className="text-emerald-400 shrink-0" />
                    <span>cln.sh/m7X8qP</span>
                  </div>
                  <button
                    onClick={handleCopyLink}
                    className="text-blue-400 hover:text-blue-300 p-0.5 rounded cursor-pointer transition-colors"
                    title="Copy URL"
                  >
                    {copiedLink ? <Check size={12} className="text-emerald-400" /> : <Copy size={12} />}
                  </button>
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Eye size={14} />
                  <span>1,429</span>
                </div>
              </div>

              {/* Shared Asset Preview */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-700/70 p-4 sm:p-6 mb-5">
                {/* Custom Branding Header */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-[#0d44e8] text-white flex items-center justify-center font-bold text-xs">
                      A
                    </div>
                    <span className="text-xs font-semibold text-slate-200">Acme Design Studio</span>
                  </div>
                  <span className="text-[11px] font-mono text-slate-400">Captured 14 mins ago</span>
                </div>

                {/* Screenshot inside viewer */}
                <div className="rounded-xl overflow-hidden shadow-lg border border-slate-800 bg-slate-900">
                  <div className="h-44 sm:h-52 bg-gradient-to-tr from-blue-900 via-indigo-900 to-slate-900 flex flex-col items-center justify-center p-4 text-center">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-2 shadow-inner">
                      <Sparkles size={24} className="text-blue-400" />
                    </div>
                    <div className="text-sm font-bold text-white">Mobile Onboarding Flow V3</div>
                    <div className="text-xs text-slate-400 mt-1">High-Res PNG • 2880 × 1800 retina</div>
                  </div>
                </div>

                {/* Comments Thread Overlay */}
                <div className="mt-4 pt-3 border-t border-slate-800 space-y-2.5">
                  <div className="flex items-start gap-2.5 text-left">
                    <div className="w-6 h-6 rounded-full bg-blue-500 text-white font-bold text-[10px] flex items-center justify-center shrink-0">
                      JS
                    </div>
                    <div className="flex-1 bg-slate-900 p-2.5 rounded-xl border border-slate-800 text-xs">
                      <div className="flex items-center justify-between text-slate-400 text-[10px]">
                        <span className="font-semibold text-slate-200">Jessica (Design Lead)</span>
                        <span>2 mins ago</span>
                      </div>
                      <p className="text-slate-300 mt-0.5">
                        Love this iteration! Can we soften the shadow on the primary button slightly?
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cloud Sharing Controls Bar */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs">
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => {
                      setPasswordActive(!passwordActive)
                      if (onNotify) onNotify(passwordActive ? 'Password Removed' : 'Password Protection Set', 'Passcode: clean2026')
                    }}
                    className={`px-3 py-1.5 rounded-lg border transition-all flex items-center gap-1.5 cursor-pointer ${
                      passwordActive
                        ? 'bg-purple-600/30 border-purple-500 text-purple-300'
                        : 'bg-slate-900 border-slate-700 text-slate-400 hover:text-slate-200'
                    }`}
                  >
                    <Lock size={12} />
                    <span>{passwordActive ? 'Password Protected' : 'Add Password'}</span>
                  </button>

                  <div className="flex items-center gap-1 text-slate-400 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-700">
                    <Timer size={12} />
                    <span>Expires: {expiresIn}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleCopyLink}
                  className="px-4 py-2 rounded-xl bg-[#0d44e8] hover:bg-[#0b3ac7] text-white font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-md shadow-blue-600/30"
                >
                  {copiedLink ? <Check size={14} /> : <Copy size={14} />}
                  <span>{copiedLink ? 'Copied!' : 'Copy Share Link'}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
