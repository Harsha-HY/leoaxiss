import React from 'react';
import { 
  companyInfo, 
  services, 
  governmentProjects, 
  partners 
} from '../data/leoaxisData';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ArrowUpRight, 
  Globe2, 
  ShieldCheck,
  MessageSquare
} from 'lucide-react';

export default function LeoFooter({ onOpenContact }) {
  return (
    <footer className="bg-[#f3ebdd] border-t border-[#ebdcc8] pt-16 pb-12 relative overflow-hidden text-[#574f45]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-16 border-b border-[#ebdcc8]">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#fffefa] border border-[#ebdcc8] p-1.5 flex items-center justify-center shadow-xs shrink-0">
                <svg viewBox="0 0 36 36" className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="36" height="36" rx="9" fill="url(#leo-ft-grad)" />
                  <path d="M18 7L27 12.5V23.5L18 29L9 23.5V12.5L18 7Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                  <path d="M18 7V29M9 12.5L27 23.5M27 12.5L9 23.5" stroke="white" strokeWidth="1.6" strokeLinecap="round"/>
                  <circle cx="18" cy="18" r="3" fill="white"/>
                  <defs>
                    <linearGradient id="leo-ft-grad" x1="0" y1="0" x2="36" y2="36" gradientUnits="userSpaceOnUse">
                      <stop stopColor="var(--dual-1, #4f46e5)"/>
                      <stop offset="1" stopColor="var(--dual-2, #ea580c)"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div>
                <div className="font-black text-xl text-[#1c1917] tracking-tight">
                  Leo<span className="text-dual-1">Axis</span>
                </div>
                <div className="text-[10px] font-mono tracking-widest text-[#78716c] uppercase font-bold">
                  Technologies Pvt Ltd
                </div>
              </div>
            </div>

            <p className="text-sm text-[#6b5e51] leading-relaxed max-w-sm">
              Innovating, developing, and delivering scalable enterprise platforms, mission-critical government infrastructure, and AI systems across India and Europe.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fffefa] border border-[#ebdcc8] text-xs font-medium text-[#1c1917]">
                <ShieldCheck size={14} className="text-emerald-600" />
                DPIIT #DIPP162791
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fffefa] border border-[#ebdcc8] text-xs font-medium text-[#1c1917]">
                <Globe2 size={14} className="text-dual-1" />
                Hyderabad &bull; Dublin
              </span>
            </div>
          </div>

          {/* Quick Links / Services */}
          <div className="lg:col-span-2 space-y-3 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1917]">
              Core Capabilities
            </h4>
            <ul className="space-y-2 text-sm text-[#6b5e51]">
              {services.slice(0, 5).map((srv) => (
                <li key={srv.id}>
                  <a href="#services" className="hover:text-dual-1 transition-colors">
                    {srv.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Institutional Platforms */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1917]">
              Key Deployments
            </h4>
            <ul className="space-y-2 text-sm text-[#6b5e51]">
              {governmentProjects.map((proj) => (
                <li key={proj.id}>
                  <a 
                    href={proj.liveUrl || '#'} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="hover:text-dual-1 transition-colors flex items-center gap-1"
                  >
                    <span>{proj.title}</span>
                    <ArrowUpRight size={12} className="opacity-60" />
                  </a>
                </li>
              ))}
              <li>
                <a href="#attendance" className="hover:text-dual-1 transition-colors">
                  AcademicTracker™ SaaS
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Offices */}
          <div className="lg:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#1c1917]">
              Corporate Offices
            </h4>
            <div className="space-y-2.5 text-xs text-[#6b5e51]">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-dual-1 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1c1917] block">India HQ:</strong>
                  {companyInfo.indiaOffice.address}
                </div>
              </div>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-dual-2 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#1c1917] block">European Operations:</strong>
                  {companyInfo.irelandOffice.address}
                </div>
              </div>
              <div className="pt-2 flex flex-col gap-1.5 border-t border-[#ebdcc8]">
                <a 
                  href={`tel:${companyInfo.indiaOffice.phoneRaw}`} 
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#1c1917] hover:text-dual-1"
                >
                  <Phone size={13} className="text-dual-1" />
                  {companyInfo.indiaOffice.phone}
                </a>
                <a 
                  href={`mailto:${companyInfo.indiaOffice.email}`} 
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#1c1917] hover:text-dual-1"
                >
                  <Mail size={13} className="text-dual-2" />
                  {companyInfo.indiaOffice.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#78716c] gap-4">
          <p>© {new Date().getFullYear()} LeoAxis Technologies Pvt. Ltd. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#top" className="hover:text-dual-1 transition-colors">Back to top ↑</a>
            <button 
              onClick={() => onOpenContact('general')} 
              className="text-dual-1 font-semibold hover:underline"
            >
              Start Consultation
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
