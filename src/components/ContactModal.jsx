import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { companyInfo } from '../data/leoaxisData';
import { 
  X, 
  Send, 
  MessageSquare, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Sparkles,
  Building2,
  Calendar
} from 'lucide-react';
import confetti from 'canvas-confetti';

export default function ContactModal({ isOpen, onClose, initialContext = 'general' }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: initialContext === 'attendance' ? 'Attendance SaaS Whitelabel' : initialContext === 'schools' ? 'AI for Schools Lab' : 'Web & Mobile Engineering',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello LeoAxis Technologies, I would like to inquire about ${formData.service}. My name is ${formData.name || 'a prospective client'} (${formData.phone || 'no phone provided'}). Message: ${formData.message || 'Looking for technical consultation.'}`
    );
    window.open(`https://wa.me/919618076715?text=${text}`, '_blank');
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-950/60 backdrop-blur-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-gray-200/90 overflow-hidden"
        >
          {/* Header */}
          <div className="px-6 py-5 bg-gradient-to-r from-gray-50 via-blue-50/40 to-gray-50 border-b border-gray-200/80 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white border border-gray-200/90 p-1 flex items-center justify-center shadow-xs shrink-0">
                <img src="/favicon.png" alt="LeoAxis" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-base font-bold text-gray-950">
                  {submitted ? 'Inquiry Received' : 'Schedule Technical Consultation'}
                </h3>
                <p className="text-xs text-gray-500">
                  Direct connection with LeoAxis Solutions Engineering Hub
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-gray-200/70 hover:bg-gray-300 text-gray-600 flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8">
            {submitted ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mx-auto flex items-center justify-center shadow-inner">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h4 className="text-2xl font-black text-gray-950">Thank you, {formData.name || 'there'}!</h4>
                <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                  Your inquiry has been routed to our technical engineering lead in Hyderabad. We review all architectural requests within 12 hours.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Continue on WhatsApp Immediately</span>
                  </button>

                  <button
                    onClick={onClose}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium text-xs transition-colors"
                  >
                    Close Window
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0d44e8] focus:ring-1 focus:ring-[#0d44e8] transition-all bg-gray-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Work Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. anand@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0d44e8] focus:ring-1 focus:ring-[#0d44e8] transition-all bg-gray-50/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Phone / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0d44e8] focus:ring-1 focus:ring-[#0d44e8] transition-all bg-gray-50/50"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">Service / Requirement</label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0d44e8] focus:ring-1 focus:ring-[#0d44e8] transition-all bg-gray-50/50 text-gray-800"
                    >
                      <option value="Web & Mobile Engineering">Custom Web & Mobile Development</option>
                      <option value="AI for Schools Lab">AI for Schools & Robotics Lab</option>
                      <option value="Attendance SaaS Whitelabel">Attendance Management SaaS (Whitelabel)</option>
                      <option value="AWS Cloud & DevOps">AWS Cloud Migration & DevOps</option>
                      <option value="Digital Marketing & SEO">Digital Marketing & SEO Scale</option>
                      <option value="College Training Bootcamp">College IT Training & Placement Drive</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Project Details or Requirements</label>
                  <textarea
                    rows={3}
                    placeholder="Briefly describe your objectives, timeframe, and requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 text-sm focus:outline-none focus:border-[#0d44e8] focus:ring-1 focus:ring-[#0d44e8] transition-all bg-gray-50/50"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#0d44e8] hover:bg-blue-700 text-white font-semibold text-sm transition-all shadow-md shadow-blue-500/20"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Consultation Request</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200/80 font-semibold text-xs transition-colors"
                  >
                    <MessageSquare className="w-4 h-4 text-emerald-600" />
                    <span>Instant WhatsApp Chat</span>
                  </button>
                </div>

                <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-500">
                  <span className="flex items-center gap-1">
                    <Phone className="w-3 h-3 text-[#0d44e8]" />
                    Direct Dial: +91 96180 76715
                  </span>
                  <span>Strict NDA • No Spam Guarantee</span>
                </div>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
