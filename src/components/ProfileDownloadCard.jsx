import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { companyInfo } from '../data/leoaxisData';
import { 
  FileText, 
  Download, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles,
  Shield,
  FileCheck2
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ProfileDownloadCard() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 }
      });
    } catch {
      // ignore
    }
    setDownloaded(true);
  };

  return (
    <section id="profile-deck" className="py-20 relative overflow-hidden bg-gradient-to-b from-white via-gray-50/50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-blue-200/90 bg-gradient-to-br from-blue-50/60 via-white to-indigo-50/40 p-8 sm:p-12 shadow-xl shadow-blue-900/5 relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Info Column */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/70 text-blue-800 text-xs font-semibold mb-4">
                <FileCheck2 className="w-3.5 h-3.5 text-[#0d44e8]" />
                <span>OFFICIAL CORPORATE CAPABILITIES DECK</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-gray-950 tracking-tight">
                Download the LeoAxis 2026 Company Profile
              </h2>

              <p className="mt-4 text-base text-gray-600 leading-relaxed font-normal">
                A comprehensive overview of LeoAxis Technologies Pvt. Ltd., our engineering methodology, Government of Telangana project case studies, client portfolio, AI for schools frameworks, and institutional training curricula.
              </p>

              {/* Deck Highlights Checklist */}
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>28+ Full Client Case Studies & Links</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>DPIIT & NVIDIA Inception Credentials</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>AWS Architecture & SLA Guarantees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>India & Ireland Office Contacts</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href={companyInfo.profilePdf.path}
                  download={companyInfo.profilePdf.filename}
                  onClick={handleDownload}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0d44e8] hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20 group"
                >
                  <Download className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
                  <span>{downloaded ? 'Downloading Deck...' : `Download Profile PDF (${companyInfo.profilePdf.size})`}</span>
                </a>

                <a
                  href={companyInfo.profilePdf.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-gray-50 text-gray-800 font-medium text-sm border border-gray-200/90 transition-all shadow-xs"
                >
                  <span>Preview in Browser</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                </a>
              </div>
            </div>

            {/* Right Preview Card / Document Visual */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="w-full max-w-sm rounded-2xl border border-gray-200/80 bg-white p-6 shadow-xl shadow-gray-200/50 relative">
                {/* PDF Badge Header */}
                <div className="flex items-center justify-between pb-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-red-50 text-red-600 flex items-center justify-center font-bold text-xs">
                      PDF
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900 leading-tight">LEOAXIS_Portfolio.pdf</div>
                      <div className="text-[11px] text-gray-500">{companyInfo.profilePdf.size} • Verified Clean</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                    {companyInfo.profilePdf.version}
                  </span>
                </div>

                {/* PDF Document Visual Illustration */}
                <div className="my-5 rounded-xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 p-6 text-white text-center shadow-inner relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:12px_12px] opacity-30" />
                  
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 mx-auto flex items-center justify-center mb-3">
                      <FileText className="w-6 h-6 text-blue-400" />
                    </div>
                    <div className="text-base font-black tracking-wider text-white">LEOAXIS</div>
                    <div className="text-[10px] tracking-widest text-blue-300 font-mono mt-0.5">INNOVATE • DEVELOP • DELIVER</div>
                    <div className="mt-4 pt-3 border-t border-white/10 text-xs text-slate-300 font-mono">
                      Corporate Capabilities & Case Studies
                    </div>
                  </div>
                </div>

                {/* Bottom details */}
                <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
                  <span className="flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-emerald-600" />
                    Official Release
                  </span>
                  <span>PDF Format</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
