import React from 'react';
import { 
  companyInfo, 
  services, 
  governmentProjects, 
  partners 
} from '../data/leoaxisData';
import { LEOAXIS_LOGO_DATA_URI } from '../data/logoDataUri';
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
              <div className="h-11 px-2.5 rounded-xl bg-[#fffefa] border border-[#ebdcc8] flex items-center justify-center shadow-xs shrink-0">
                <img 
                  src={LEOAXIS_LOGO_DATA_URI} 
                  alt="LeoAxis Technologies Logo" 
                  className="h-8 w-auto object-contain"
                />
              </div>
              <div className="flex flex-col text-left">
                <div className="font-extrabold tracking-[-0.035em] text-[#1c1917] text-2xl leading-none font-display flex items-baseline">
                  <span>Leo</span><span className="text-[#4f46e5] font-black">Axis</span>
                </div>
                <div className="text-[8.5px] font-mono tracking-[0.22em] text-[#78716c] font-bold uppercase mt-1">
                  TECHNOLOGIES PVT LTD
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
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#1c1917] hover:text-[#2563eb]"
                >
                  <Phone size={13} className="text-[#2563eb]" />
                  <span>🇮🇳 {companyInfo.indiaOffice.phone}</span>
                </a>
                <a 
                  href={`tel:${companyInfo.irelandOffice.phoneRaw}`} 
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#1c1917] hover:text-[#2563eb]"
                >
                  <Phone size={13} className="text-[#2563eb]" />
                  <span>🇪🇺 {companyInfo.irelandOffice.phone}</span>
                </a>
                <a 
                  href={`mailto:${companyInfo.indiaOffice.email}`} 
                  className="flex items-center gap-1.5 text-xs font-semibold text-[#1c1917] hover:text-[#2563eb]"
                >
                  <Mail size={13} className="text-[#ea580c]" />
                  <span>{companyInfo.indiaOffice.email}</span>
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
