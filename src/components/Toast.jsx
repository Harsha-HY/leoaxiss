import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle2, Copy, Sparkles, X } from 'lucide-react'

export default function Toast({ toast, onClose }) {
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-slate-900/95 text-white px-4 py-3 rounded-xl shadow-2xl backdrop-blur-md border border-slate-700/60 max-w-sm"
        >
          <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
            {toast.icon === 'copy' ? <Copy size={16} /> : <CheckCircle2 size={16} />}
          </div>
          <div className="flex-1 pr-1">
            <p className="text-sm font-medium text-slate-100">{toast.title}</p>
            {toast.message && (
              <p className="text-xs text-slate-400 mt-0.5">{toast.message}</p>
            )}
          </div>
          <button 
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-md transition-colors"
          >
            <X size={14} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
