import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  attendanceProduct 
} from '../data/leoaxisData';
import { 
  MapPin, 
  CheckCircle2, 
  BarChart3, 
  FileSpreadsheet, 
  ExternalLink, 
  ShieldCheck, 
  Smartphone, 
  Users,
  Radio,
  ArrowRight,
  Clock,
  Sparkles
} from 'lucide-react';

export default function AttendanceProductSection({ onOpenContact }) {
  const [activeTab, setActiveTab] = useState('geofence');
  const [simulatedRadius, setSimulatedRadius] = useState(150); // meters

  return (
    <section id="attendance" className="py-28 relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white">
      {/* Background glow & subtle grid */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[550px] bg-gradient-to-tr from-blue-400/10 to-indigo-400/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold mb-4 shadow-xs"
          >
            <Radio className="w-3.5 h-3.5 text-[#0d44e8] animate-pulse" />
            <span>IN-BUILT PROPRIETARY SAAS PRODUCT</span>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-950 tracking-tight"
          >
            {attendanceProduct.headline}
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal"
          >
            {attendanceProduct.desc}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="mt-6 flex flex-wrap items-center justify-center gap-3"
          >
            <a 
              href={attendanceProduct.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#0d44e8] hover:bg-blue-700 text-white font-medium text-sm transition-all shadow-md shadow-blue-500/20 group"
            >
              <span>Launch Live SaaS Demo</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>

            <button 
              onClick={() => onOpenContact && onOpenContact('attendance')}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white hover:bg-gray-50 text-gray-800 font-medium text-sm border border-gray-200/80 transition-all shadow-xs"
            >
              <span>Request Whitelabel Deployment</span>
              <ArrowRight className="w-4 h-4 text-gray-500" />
            </button>
          </motion.div>
        </div>

        {/* Product Showcase Window (CleanShot X macOS Window Styling) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-gray-200/90 bg-white/95 backdrop-blur-xl shadow-2xl shadow-blue-900/10 overflow-hidden mb-16"
        >
          {/* Window Chrome Header */}
          <div className="px-6 py-4 bg-gray-50/80 border-b border-gray-200/70 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs font-semibold text-gray-600 pl-2 border-l border-gray-200">
                LeoAxis AcademicTracker™ Cloud Console
              </span>
            </div>

            {/* Interactive Tab Switcher */}
            <div className="flex items-center bg-gray-200/60 p-1 rounded-xl text-xs font-medium text-gray-600">
              <button 
                onClick={() => setActiveTab('geofence')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'geofence' 
                    ? 'bg-white text-gray-950 font-semibold shadow-xs' 
                    : 'hover:text-gray-950'
                }`}
              >
                Geofence Verification
              </button>
              <button 
                onClick={() => setActiveTab('analytics')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'analytics' 
                    ? 'bg-white text-gray-950 font-semibold shadow-xs' 
                    : 'hover:text-gray-950'
                }`}
              >
                Live Analytics
              </button>
              <button 
                onClick={() => setActiveTab('screenshot')}
                className={`px-3 py-1.5 rounded-lg transition-all ${
                  activeTab === 'screenshot' 
                    ? 'bg-white text-gray-950 font-semibold shadow-xs' 
                    : 'hover:text-gray-950'
                }`}
              >
                System Screenshot
              </button>
            </div>
          </div>

          {/* Window Interior Content */}
          <div className="p-6 sm:p-10 bg-gradient-to-b from-white to-gray-50/30">
            {activeTab === 'geofence' && (
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Visual Map Simulator */}
                <div className="lg:col-span-7 bg-slate-900 rounded-2xl p-6 relative overflow-hidden text-white shadow-inner min-h-[360px] flex flex-col justify-between">
                  {/* Subtle Radar Background Effect */}
                  <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-40" />
                  
                  {/* Radar Circles */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full border border-blue-500/20 pointer-events-none animate-ping opacity-25" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-blue-400/40 pointer-events-none" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-emerald-400/50 bg-emerald-500/10 pointer-events-none" />

                  {/* Header bar */}
                  <div className="relative z-10 flex items-center justify-between border-b border-slate-800 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                      <span className="text-xs font-mono tracking-wider text-slate-300">CAMPUS GPS BOUNDARY VERIFIED</span>
                    </div>
                    <span className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 font-mono">
                      Radius: {simulatedRadius}m
                    </span>
                  </div>

                  {/* Interactive Pin Point */}
                  <div className="relative z-10 py-10 flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 border-2 border-emerald-400 flex items-center justify-center shadow-lg shadow-emerald-500/30 mb-3">
                      <MapPin className="w-7 h-7 text-emerald-400" />
                    </div>
                    <span className="text-sm font-semibold text-white">Main Academic Building A</span>
                    <span className="text-xs text-slate-400 mt-0.5">Lat 17.3850° N, Long 78.4867° E (Hyderabad Hub)</span>
                    
                    <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/40">
                      <ShieldCheck className="w-3.5 h-3.5" />
                      <span>Check-In Authorized (Within Perimeter)</span>
                    </div>
                  </div>

                  {/* Bottom radius control */}
                  <div className="relative z-10 pt-4 border-t border-slate-800 flex items-center justify-between gap-4">
                    <span className="text-xs text-slate-400">Simulate Geofence Fence Limit:</span>
                    <div className="flex items-center gap-2">
                      {[100, 150, 250].map((r) => (
                        <button
                          key={r}
                          onClick={() => setSimulatedRadius(r)}
                          className={`text-xs px-2.5 py-1 rounded font-mono transition-colors ${
                            simulatedRadius === r 
                              ? 'bg-[#0d44e8] text-white font-bold' 
                              : 'bg-slate-800 text-slate-400 hover:text-white'
                          }`}
                        >
                          {r}m
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Info Checklist */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#0d44e8] flex items-center justify-center font-bold">
                        <Smartphone className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">Zero Proxy Check-Ins</h4>
                        <p className="text-xs text-gray-500 mt-0.5">Device GPS hardware + timestamp validation locks attendance to exact campus footprint.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                        <Clock className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">Instant Class Synchronization</h4>
                        <p className="text-xs text-gray-500 mt-0.5">Professors and HODs receive real-time rosters as students check in via QR or mobile pass.</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-gray-200/80 shadow-xs">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                        <Users className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-gray-900">Whitelabel & Multi-Tenant</h4>
                        <p className="text-xs text-gray-500 mt-0.5">Deploy under your college or corporate domain with custom logos, RBAC roles, and email alerts.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-2">
                    <a 
                      href={attendanceProduct.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold transition-colors"
                    >
                      <span>Explore Live Railway Deployment Console</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'analytics' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Today's Total Attendance</div>
                  <div className="text-4xl font-black text-gray-900">96.8%</div>
                  <div className="mt-2 text-xs text-emerald-600 font-semibold flex items-center gap-1">
                    <span>↑ 4.2%</span> vs last week average
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 mt-4 overflow-hidden">
                    <div className="bg-[#0d44e8] h-full rounded-full" style={{ width: '96.8%' }} />
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Active Checked-In Students</div>
                  <div className="text-4xl font-black text-gray-900">482 / 500</div>
                  <div className="mt-2 text-xs text-blue-600 font-semibold flex items-center gap-1">
                    <span>Active right now across 12 lecture halls</span>
                  </div>
                  <div className="w-full bg-gray-100 rounded-full h-2 mt-4 overflow-hidden">
                    <div className="bg-emerald-500 h-full rounded-full" style={{ width: '96.4%' }} />
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-xs">
                  <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Automated Audit Reports</div>
                  <div className="text-4xl font-black text-gray-900">1-Click</div>
                  <div className="mt-2 text-xs text-purple-600 font-semibold flex items-center gap-1">
                    <span>Export full monthly logs to Excel / PDF</span>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <span className="px-2.5 py-1 rounded bg-gray-100 text-gray-700 text-xs font-mono">.XLSX</span>
                    <span className="px-2.5 py-1 rounded bg-gray-100 text-gray-700 text-xs font-mono">.PDF</span>
                    <span className="px-2.5 py-1 rounded bg-gray-100 text-gray-700 text-xs font-mono">CSV</span>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'screenshot' && (
              <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-lg bg-gray-900">
                <img 
                  src={attendanceProduct.screenshot} 
                  alt="LeoAxis Attendance Management System UI" 
                  className="w-full h-auto object-cover max-h-[520px]"
                />
                <div className="absolute bottom-4 right-4 bg-gray-950/80 backdrop-blur-md px-4 py-2 rounded-xl text-white text-xs border border-white/10 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#0d44e8]" />
                  <span>Real Screenshot of Production Dashboard</span>
                </div>
              </div>
            )}
          </div>
        </motion.div>

        {/* 4 3D Visual Feature Cards (CleanShot X style) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. Geofence Check-in */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="group rounded-3xl bg-white border border-gray-200/90 shadow-xs hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="relative h-36 bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 p-4 flex flex-col justify-between text-white border-b border-gray-100">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-blue-300 font-bold">GPS SATELLITE LOCK</span>
                <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-400/30">± 2m Precision</span>
              </div>
              <div className="flex items-center gap-3 my-auto">
                <div className="w-9 h-9 rounded-xl bg-blue-600/30 border border-blue-400/40 flex items-center justify-center text-blue-300">
                  <MapPin className="w-5 h-5 text-blue-400 animate-bounce" />
                </div>
                <div className="font-mono text-xs text-slate-300">
                  <div>17.3850° N, 78.4867° E</div>
                  <div className="text-[10px] text-emerald-400">Campus Perimeter Verified</div>
                </div>
              </div>
              <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between border-t border-white/10 pt-1.5">
                <span>Zero Hardware Needed</span>
                <span className="text-blue-300 font-semibold">100% Anti-Proxy</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold text-gray-950 mb-1.5 group-hover:text-[#0d44e8] transition-colors">Geofence Check-in</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-normal">
                Hardware GPS radius verification preventing proxy attendance entirely. Students must be inside physical campus gates to check in.
              </p>
            </div>
          </motion.div>

          {/* 2. Real-Time Sync */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="group rounded-3xl bg-white border border-gray-200/90 shadow-xs hover:border-emerald-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="relative h-36 bg-gradient-to-br from-emerald-950 via-slate-900 to-teal-950 p-4 flex flex-col justify-between text-white border-b border-gray-100">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-emerald-300 font-bold">WEBSOCKET MULTI-NODE</span>
                <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded border border-emerald-400/30">&lt; 15ms Latency</span>
              </div>
              <div className="grid grid-cols-3 gap-2 my-auto text-center font-mono text-xs">
                <div className="p-1.5 rounded bg-slate-800/80">
                  <div className="text-[9px] text-slate-400">Web App</div>
                  <div className="font-bold text-emerald-400">Sync Active</div>
                </div>
                <div className="p-1.5 rounded bg-slate-800/80">
                  <div className="text-[9px] text-slate-400">Mobile</div>
                  <div className="font-bold text-blue-400">Instant</div>
                </div>
                <div className="p-1.5 rounded bg-slate-800/80">
                  <div className="text-[9px] text-slate-400">Admin</div>
                  <div className="font-bold text-purple-400">Live DB</div>
                </div>
              </div>
              <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between border-t border-white/10 pt-1.5">
                <span>Automatic Failover</span>
                <span className="text-emerald-400 font-semibold">99.9% Uptime</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold text-gray-950 mb-1.5 group-hover:text-emerald-600 transition-colors">Real-Time Sync</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-normal">
                Lectures, multi-department batches, and corporate branches sync instantaneously across devices and cloud databases without delays.
              </p>
            </div>
          </motion.div>

          {/* 3. Live Analytics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="group rounded-3xl bg-white border border-gray-200/90 shadow-xs hover:border-purple-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="relative h-36 bg-gradient-to-br from-purple-950 via-slate-900 to-indigo-950 p-4 flex flex-col justify-between text-white border-b border-gray-100">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-purple-300 font-bold">CAMPUS HEALTH INDEX</span>
                <span className="bg-purple-500/20 text-purple-300 px-2 py-0.5 rounded border border-purple-400/30">96.4% Present</span>
              </div>
              <div className="flex items-center justify-between my-auto px-2">
                <div className="space-y-1 text-xs font-mono">
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-emerald-400"></span><span className="text-slate-300">Present: 96.4%</span></div>
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-amber-400"></span><span className="text-slate-300">Late: 2.8%</span></div>
                  <div className="flex items-center gap-1.5"><span className="w-2 h-2 rounded-full bg-rose-400"></span><span className="text-slate-300">Absent: 0.8%</span></div>
                </div>
                <div className="w-14 h-14 rounded-full border-4 border-emerald-400 border-t-amber-400 border-r-rose-400 flex items-center justify-center font-black text-xs font-mono text-emerald-400">
                  96%
                </div>
              </div>
              <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between border-t border-white/10 pt-1.5">
                <span>Dropout Risk Monitor</span>
                <span className="text-purple-300 font-semibold">Automated Alerts</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold text-gray-950 mb-1.5 group-hover:text-purple-600 transition-colors">Live Analytics</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-normal">
                Instant visual indicators for student dropout risks, irregular patterns, and faculty load analytics with automated email notifications.
              </p>
            </div>
          </motion.div>

          {/* 4. Automated Reports */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="group rounded-3xl bg-white border border-gray-200/90 shadow-xs hover:border-amber-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden"
          >
            <div className="relative h-36 bg-gradient-to-br from-amber-950 via-slate-900 to-orange-950 p-4 flex flex-col justify-between text-white border-b border-gray-100">
              <div className="flex items-center justify-between text-[11px] font-mono">
                <span className="text-amber-300 font-bold">1-CLICK REPORT ENGINE</span>
                <span className="bg-amber-500/20 text-amber-300 px-2 py-0.5 rounded border border-amber-400/30">.XLSX & .PDF</span>
              </div>
              <div className="my-auto bg-slate-900/90 rounded border border-slate-700 p-1.5 text-[9px] font-mono text-slate-300">
                <div className="grid grid-cols-4 gap-1 text-slate-400 border-b border-slate-800 pb-1 font-bold">
                  <span>Roll No</span><span>Name</span><span>Percent</span><span>Status</span>
                </div>
                <div className="grid grid-cols-4 gap-1 pt-1 text-emerald-400">
                  <span>#401</span><span>P. Sharma</span><span>98.5%</span><span>Eligible</span>
                </div>
              </div>
              <div className="text-[10px] text-slate-400 font-mono flex items-center justify-between border-t border-white/10 pt-1.5">
                <span>NCVET & State Format</span>
                <span className="text-amber-300 font-semibold">Instant Export</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-base font-bold text-gray-950 mb-1.5 group-hover:text-amber-600 transition-colors">Automated Reports</h3>
              <p className="text-xs text-gray-600 leading-relaxed font-normal">
                One-click export by student, class, or institutional department in official Excel (.xlsx) and PDF formats ready for state audits.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
