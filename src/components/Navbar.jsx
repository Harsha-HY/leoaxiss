import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, Menu, X, Sparkles, ExternalLink, ShieldCheck, Download, Laptop } from 'lucide-react'

export default function Navbar({ onOpenPurchase, onNotify }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [featuresDropdownOpen, setFeaturesDropdownOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const featureLinks = [
    { title: 'Quick Access Overlay', desc: 'Floating preview thumbnail with instant actions', href: '#quick-access' },
    { title: 'Annotations', desc: 'Highlight, arrow, blur, magnifier & step counters', href: '#annotations' },
    { title: 'CleanShot Cloud', desc: 'Instant upload, custom domain & shareable links', href: '#cloud' },
    { title: 'Scrolling Capture', desc: 'Capture long pages, documents & code blocks', href: '#scrolling' },
    { title: 'Screen Recording', desc: 'Record screen, webcam, mic & Studio Mode', href: '#recording' },
    { title: 'Background Tool', desc: 'Beautify screenshots with gradients & padding', href: '#background-tool' },
    { title: 'Text Recognition (OCR)', desc: 'Copy non-selectable text from anywhere', href: '#ocr' },
    { title: 'macOS Workflows', desc: 'Hide desktop icons, pin floating windows', href: '#macos-features' },
  ]

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'glass-nav py-3.5 shadow-sm'
            : 'bg-white/70 backdrop-blur-md py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 rounded-xl bg-gradient-to-tr from-[#0d44e8] to-[#3b82f6] p-0.5 shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
                <div className="w-full h-full bg-[#0d44e8] rounded-[10px] flex items-center justify-center">
                  {/* CleanShot Camera Aperture icon */}
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
              <div className="flex items-center gap-1.5 font-bold tracking-tight text-slate-900 text-lg">
                <span>CleanShot</span>
                <span className="text-xs px-1.5 py-0.5 rounded-md bg-blue-50 text-[#0d44e8] font-mono border border-blue-200/60 font-semibold">
                  X
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1">
              {/* Features Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setFeaturesDropdownOpen(true)}
                onMouseLeave={() => setFeaturesDropdownOpen(false)}
              >
                <a
                  href="#features"
                  className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100/60 transition-colors inline-flex items-center gap-1"
                >
                  <span>Features</span>
                  <ChevronDown size={14} className={`transition-transform duration-200 ${featuresDropdownOpen ? 'rotate-180 text-blue-600' : 'text-slate-400'}`} />
                </a>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {featuresDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.98 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.98 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 w-80 p-3 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/90 z-50 grid gap-1 mt-1"
                    >
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider px-3 py-1">
                        Core Capabilities
                      </div>
                      {featureLinks.map((item) => (
                        <a
                          key={item.title}
                          href={item.href}
                          onClick={() => setFeaturesDropdownOpen(false)}
                          className="p-2.5 rounded-xl hover:bg-blue-50/70 transition-colors group/item block"
                        >
                          <div className="text-xs font-semibold text-slate-800 group-hover/item:text-blue-600 flex items-center justify-between">
                            <span>{item.title}</span>
                          </div>
                          <div className="text-[11px] text-slate-500 mt-0.5 line-clamp-1">{item.desc}</div>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#pricing"
                className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100/60 transition-colors"
              >
                Pricing
              </a>
              <a
                href="#cloud"
                className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100/60 transition-colors"
              >
                CleanShot Cloud
              </a>
              <a
                href="#testimonials"
                className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100/60 transition-colors"
              >
                Reviews
              </a>
              <a
                href="#faq"
                className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 rounded-lg hover:bg-slate-100/60 transition-colors"
              >
                FAQ
              </a>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={() => onNotify('CleanShot Cloud Login', 'Redirecting to cloud authentication...')}
                className="text-sm font-medium text-slate-600 hover:text-slate-900 px-3 py-2 transition-colors cursor-pointer"
              >
                Sign In
              </button>

              <button
                type="button"
                onClick={() => onOpenPurchase('basic')}
                className="px-5 py-2 rounded-full bg-[#0d44e8] hover:bg-[#0b3ac7] text-white text-sm font-semibold shadow-md shadow-blue-600/20 hover:shadow-blue-600/35 active:scale-[0.98] transition-all cursor-pointer flex items-center gap-1.5"
              >
                <span>Get CleanShot X</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center gap-2">
              <button
                type="button"
                onClick={() => onOpenPurchase('basic')}
                className="px-3.5 py-1.5 rounded-full bg-[#0d44e8] text-white text-xs font-semibold"
              >
                Buy Now
              </button>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-200/80 bg-white/95 backdrop-blur-xl px-4 py-4 space-y-2"
            >
              <div className="text-[11px] font-semibold text-slate-400 uppercase px-2">Navigation</div>
              <a
                href="#features"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Features
              </a>
              <a
                href="#quick-access"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Quick Access Overlay
              </a>
              <a
                href="#annotations"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Built-in Annotation
              </a>
              <a
                href="#cloud"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                CleanShot Cloud
              </a>
              <a
                href="#pricing"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Pricing & Plans
              </a>
              <a
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-lg text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                FAQ
              </a>
              <div className="pt-2 border-t border-slate-100 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false)
                    onOpenPurchase('basic')
                  }}
                  className="w-full py-2.5 rounded-xl bg-[#0d44e8] text-white text-sm font-semibold text-center"
                >
                  Get CleanShot X — $29
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  )
}
