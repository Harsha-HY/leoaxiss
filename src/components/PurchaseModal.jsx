import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, X, ShieldCheck, Download, Sparkles, CreditCard, Apple, ArrowRight } from 'lucide-react'
import confetti from 'canvas-confetti'

export default function PurchaseModal({ isOpen, onClose, defaultPlan = 'basic', onNotify }) {
  const [selectedPlan, setSelectedPlan] = useState(defaultPlan)
  const [billingCycle, setBillingCycle] = useState('annual')
  const [step, setStep] = useState('select') // 'select' | 'success'
  const [email, setEmail] = useState('')

  const handleCheckout = (e) => {
    e.preventDefault()
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#0d44e8', '#3b82f6', '#60a5fa', '#93c5fd']
    })
    setStep('success')
    if (onNotify) {
      onNotify('License Key Generated!', 'Check your email for download instructions and activation key.')
    }
  }

  const handleDownloadTrial = () => {
    confetti({
      particleCount: 60,
      spread: 50,
      origin: { y: 0.7 }
    })
    setStep('success')
    if (onNotify) {
      onNotify('Download Started', 'CleanShot X DMG is downloading. Double-click to install.')
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-200/80 overflow-hidden z-10 my-8"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50/50">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-blue-700 to-blue-500 flex items-center justify-center shadow-sm">
                  <div className="w-3.5 h-3.5 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-1 h-1 rounded-full bg-white" />
                  </div>
                </div>
                <span className="font-semibold text-slate-900 text-sm">CleanShot X Checkout</span>
              </div>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full hover:bg-slate-200/60 flex items-center justify-center text-slate-500 hover:text-slate-800 transition-colors"
              >
                <X size={16} />
              </button>
            </div>

            {step === 'select' ? (
              <div className="p-6 sm:p-8">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-slate-900 tracking-tight">Choose your CleanShot license</h3>
                  <p className="text-sm text-slate-600 mt-1">
                    Native macOS capture and recording powerhouse. 30-day money-back guarantee.
                  </p>
                </div>

                {/* Plan Toggle */}
                <div className="grid grid-cols-2 gap-3 mb-6 p-1 bg-slate-100 rounded-xl">
                  <button
                    type="button"
                    onClick={() => setSelectedPlan('basic')}
                    className={`py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                      selectedPlan === 'basic'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    CleanShot Basic
                    <span className="block text-[11px] font-normal text-slate-500">$29 one-time</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedPlan('pro')}
                    className={`py-2.5 px-4 text-xs sm:text-sm font-semibold rounded-lg transition-all relative ${
                      selectedPlan === 'pro'
                        ? 'bg-white text-slate-900 shadow-sm'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <span className="absolute -top-2 right-2 bg-blue-600 text-[10px] text-white px-2 py-0.5 rounded-full font-medium">
                      POPULAR
                    </span>
                    CleanShot Pro
                    <span className="block text-[11px] font-normal text-slate-500">$8/mo billed yearly</span>
                  </button>
                </div>

                {/* Features included */}
                <div className="bg-slate-50 rounded-2xl p-4 mb-6 border border-slate-100">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3">
                    Included with {selectedPlan === 'basic' ? 'Basic' : 'Pro'}:
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-blue-600 shrink-0" />
                      <span>Full access to 50+ capture, annotation & recording tools</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-blue-600 shrink-0" />
                      <span>
                        {selectedPlan === 'basic'
                          ? '1 GB CleanShot Cloud storage'
                          : 'Unlimited CleanShot Cloud storage'}
                      </span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check size={14} className="text-blue-600 shrink-0" />
                      <span>
                        {selectedPlan === 'basic'
                          ? '1 year of free app updates (keep app forever)'
                          : 'Continuous app updates & new features included'}
                      </span>
                    </li>
                    {selectedPlan === 'pro' && (
                      <>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-blue-600 shrink-0" />
                          <span>Custom domain (shots.yourcompany.com) & custom branding</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <Check size={14} className="text-blue-600 shrink-0" />
                          <span>Self-destructing links, advanced tags & team permissions</span>
                        </li>
                      </>
                    )}
                  </ul>
                </div>

                <form onSubmit={handleCheckout} className="space-y-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 mb-1">
                      Email address for license key delivery
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-[#0d44e8] hover:bg-[#0b3ac7] text-white font-semibold text-sm shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Proceed to Secure Checkout — {selectedPlan === 'basic' ? '$29.00' : '$96.00/yr'}</span>
                    <ArrowRight size={16} />
                  </button>
                </form>

                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <button
                    type="button"
                    onClick={handleDownloadTrial}
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-1.5"
                  >
                    <Download size={13} />
                    Or download free 30-day trial
                  </button>
                  <div className="flex items-center gap-1 text-slate-400">
                    <ShieldCheck size={14} />
                    <span>256-bit SSL encrypted</span>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-8 text-center">
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 border border-emerald-200 flex items-center justify-center mx-auto mb-4">
                  <Check size={32} />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">You're all set!</h3>
                <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
                  Thank you for supporting CleanShot X. We've sent your activation key and DMG download link to <span className="font-semibold text-slate-800">{email || 'your email'}</span>.
                </p>

                <div className="mt-6 p-4 bg-slate-50 border border-slate-200/80 rounded-xl text-left max-w-sm mx-auto">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">Your Demo License Key:</div>
                  <div className="font-mono text-xs font-semibold text-slate-800 bg-white p-2.5 rounded-lg border border-slate-200 flex items-center justify-between">
                    <span>CSX-9824-A19F-78C2-Q81L</span>
                    <span className="text-[10px] text-blue-600 font-sans font-medium">Valid</span>
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={onClose}
                    className="py-2.5 px-6 rounded-xl bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-colors"
                  >
                    Return to Homepage
                  </button>
                  <a
                    href="#download"
                    onClick={(e) => {
                      e.preventDefault()
                      onClose()
                      if (onNotify) onNotify('Downloading CleanShot X', 'CleanShot-X-4.7.dmg (28.4 MB)')
                    }}
                    className="py-2.5 px-6 rounded-xl border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors flex items-center justify-center gap-2"
                  >
                    <Download size={14} />
                    Download CleanShot-X.dmg
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
