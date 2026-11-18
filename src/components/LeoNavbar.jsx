import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, 
  X, 
  Phone, 
  ArrowUpRight, 
  Download
} from 'lucide-react'
import { companyInfo } from '../data/leoaxisData'
import { LEOAXIS_LOGO_DATA_URI } from '../data/logoDataUri'

// Official LeoAxis Logo Embedded Image
const LEOAXIS_LOGO_SRC = LEOAXIS_LOGO_DATA_URI;

export default function LeoNavbar({ onOpenContact, onNotify }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'glass-nav py-3.5 shadow-sm'
          : 'bg-[#faf5ea]/90 backdrop-blur-md py-4 sm:py-5 border-b border-[#ebdcc8]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Official LeoAxis Logo & Brand Identity */}
          <a href="#top" className="flex items-center gap-3 group">
            <div className="h-11 px-2.5 rounded-xl bg-[#fffefa] border border-[#ebdcc8] flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform shrink-0">
              <img 
                src={LEOAXIS_LOGO_SRC} 
                alt="LeoAxis Technologies Logo" 
                className="h-8 w-auto object-contain"
                onError={(e) => {
                  e.currentTarget.onerror = null;
                  e.currentTarget.src = '/favicon.png';
                }}
              />
            </div>

            <div className="flex flex-col text-left">
              <div className="font-extrabold tracking-[-0.035em] text-[#1c1917] text-2xl leading-none font-display flex items-baseline">
                <span>Leo</span><span className="text-[#4f46e5] font-black">Axis</span>
              </div>
              <span className="text-[8.5px] font-mono tracking-[0.22em] text-[#78716c] font-bold uppercase mt-1">
                TECHNOLOGIES PVT LTD
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-[#574f45]">
            <a
              href="#selected-work"
              className="hover:text-dual-1 transition-colors"
            >
              Work
            </a>

            <a
              href="#services"
              className="hover:text-dual-1 transition-colors"
            >
              Services
            </a>

            <a
              href="#impact-programs"
              className="hover:text-dual-1 transition-colors"
            >
              Impact
            </a>

            <a
              href="#portfolio"
              className="hover:text-dual-1 transition-colors flex items-center gap-1.5"
            >
              <span>All 20+ projects</span>
              <span className="w-1.5 h-1.5 rounded-full bg-dual-1" />
            </a>

            <a
              href="#partners"
              className="hover:text-dual-1 transition-colors"
            >
              Partners
            </a>

            <a
              href="#why-us"
              className="hover:text-dual-1 transition-colors"
            >
              About
            </a>
          </nav>

          {/* Right Action CTAs: Dual Global Hotline Numbers (India HQ + Europe Hub) */}
          <div className="hidden sm:flex items-center gap-3">
            <div className="hidden md:flex items-center gap-1.5 text-xs font-mono font-bold text-[#574f45]">
              <a
                href="tel:+919618076715"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#fffefa] border border-[#ebdcc8] hover:border-[#2563eb] hover:text-[#2563eb] transition-all shadow-2xs whitespace-nowrap"
                title="India Headquarters (Hyderabad)"
              >
                <span className="text-[12px]">🇮🇳</span>
                <span>+91 96180 76715</span>
              </a>
              <a
                href="tel:+353892542002"
                className="flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#fffefa] border border-[#ebdcc8] hover:border-[#2563eb] hover:text-[#2563eb] transition-all shadow-2xs whitespace-nowrap"
                title="Europe Hub (Dublin, Ireland)"
              >
                <span className="text-[12px]">🇪🇺</span>
                <span>+353 (89) 254 2002</span>
              </a>
            </div>

            <button
              type="button"
              onClick={() => onOpenContact('consultation')}
              className="px-5 sm:px-6 py-2.5 rounded-full dual-gradient-bg hover:opacity-90 text-white text-xs sm:text-sm font-bold dual-shadow-button active:scale-95 transition-all cursor-pointer flex items-center gap-1.5 shrink-0"
            >
              <span>Start a project</span>
              <ArrowUpRight size={14} />
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenContact('consultation')}
              className="px-3 py-1.5 rounded-full dual-gradient-bg text-white text-xs font-semibold"
            >
              Consult
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#574f45] hover:text-[#1c1917] hover:bg-[#f3ebdd] transition-colors"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-[#ebdcc8] bg-[#faf5ea]/95 backdrop-blur-xl px-4 py-4 space-y-2 text-left"
          >
            <div className="text-[11px] font-semibold text-[#8c8174] uppercase px-2">Navigation</div>
            <a href="#selected-work" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-[#1c1917] hover:bg-[#f3ebdd]">
              Work
            </a>
            <a href="#services" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-[#1c1917] hover:bg-[#f3ebdd]">
              Services
            </a>
            <a href="#impact-programs" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-[#1c1917] hover:bg-[#f3ebdd]">
              Impact (AI for Schools, Training, Community)
            </a>
            <a href="#portfolio" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-[#1c1917] hover:bg-[#f3ebdd]">
              All 20+ projects
            </a>
            <a href="#partners" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-[#1c1917] hover:bg-[#f3ebdd]">
              Partners &amp; Recognition
            </a>
            <a href="#why-us" onClick={() => setMobileMenuOpen(false)} className="block px-3 py-2 rounded-lg text-sm font-medium text-[#1c1917] hover:bg-[#f3ebdd]">
              About LeoAxis
            </a>

            <div className="pt-2 border-t border-[#ebdcc8] grid grid-cols-2 gap-2 text-xs font-mono font-bold text-[#1c1917]">
              <a
                href="tel:+919618076715"
                className="py-2 px-2 rounded-lg bg-[#fffefa] border border-[#ebdcc8] text-center flex items-center justify-center gap-1"
              >
                <span>🇮🇳 +91 96180 76715</span>
              </a>
              <a
                href="tel:+353892542002"
                className="py-2 px-2 rounded-lg bg-[#fffefa] border border-[#ebdcc8] text-center flex items-center justify-center gap-1"
              >
                <span>🇪🇺 +353 (89) 254 2002</span>
              </a>
            </div>

            <div className="pt-1 flex flex-col gap-2">
              <a
                href={companyInfo.profilePdf.path}
                download={companyInfo.profilePdf.filename}
                className="w-full py-2.5 px-4 rounded-xl border border-[#ebdcc8] bg-[#fffefa] text-[#1c1917] font-semibold text-xs text-center flex items-center justify-center gap-2"
              >
                <Download size={13} />
                <span>Download Company Profile (PDF)</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false)
                  onOpenContact('consultation')
                }}
                className="w-full py-2.5 rounded-xl dual-gradient-bg text-white text-xs font-semibold text-center cursor-pointer"
              >
                Schedule Free Architecture Audit
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
