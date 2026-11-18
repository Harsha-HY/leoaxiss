import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Video, 
  Mic, 
  MicOff, 
  Volume2, 
  Camera, 
  Sparkles, 
  Play, 
  Pause, 
  Scissors, 
  MousePointer, 
  Zap, 
  Sliders,
  Check,
  Radio
} from 'lucide-react'

export default function RecordingSection({ onOpenPurchase, onNotify }) {
  const [recordMode, setRecordMode] = useState('video') // 'video' | 'gif'
  const [isRecording, setIsRecording] = useState(false)
  const [webcamActive, setWebcamActive] = useState(true)
  const [micActive, setMicActive] = useState(true)
  const [studioMode, setStudioMode] = useState(true)

  const handleToggleRecord = () => {
    setIsRecording(!isRecording)
    if (onNotify) {
      onNotify(
        !isRecording ? 'Recording Started' : 'Recording Finished',
        !isRecording ? 'Capturing 1080p @ 60 FPS with mic & system audio.' : 'Video ready in Studio Mode editor.'
      )
    }
  }

  return (
    <section id="recording" className="py-24 bg-slate-50/70 border-t border-slate-200/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-rose-700 text-xs font-semibold uppercase tracking-wider mb-3 border border-rose-200/60">
            <Video size={13} />
            <span>Screen Recording & Studio Mode</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Record video or GIF. Edit like a pro.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Record your screen, circular webcam, microphone, and internal macOS system audio simultaneously. CleanShot's Studio Mode makes product walk-throughs look effortlessly cinematic.
          </p>
        </div>

        {/* Main Recorder Interactive Studio Mockup */}
        <div className="relative max-w-5xl mx-auto bg-slate-900 rounded-3xl p-3 sm:p-6 shadow-2xl border border-slate-700/80 macos-shadow-lg text-white">
          
          {/* Top Control Bar */}
          <div className="flex flex-wrap items-center justify-between pb-4 border-b border-slate-800 gap-3">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
              </div>
              <span className="text-xs font-semibold text-slate-300">CleanShot Screen Recorder HUD</span>
            </div>

            {/* Mode Selector: Video vs GIF */}
            <div className="flex items-center gap-1 bg-slate-800 p-1 rounded-xl border border-slate-700">
              <button
                type="button"
                onClick={() => setRecordMode('video')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  recordMode === 'video' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                60 FPS Video (MP4)
              </button>
              <button
                type="button"
                onClick={() => setRecordMode('gif')}
                className={`px-3 py-1 text-xs font-semibold rounded-lg transition-all cursor-pointer ${
                  recordMode === 'gif' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
                }`}
              >
                Optimized GIF
              </button>
            </div>
          </div>

          {/* Recording Surface with Circular Webcam Bubble & Live Sound Bars */}
          <div className="relative mt-4 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 min-h-[420px] flex items-center justify-center border border-slate-800 overflow-hidden p-6 sm:p-10">
            
            {/* Studio Mode Background Gradient (Simulating video canvas) */}
            <div className="relative w-full max-w-2xl bg-gradient-to-tr from-indigo-950 via-slate-900 to-blue-950 rounded-2xl p-6 sm:p-8 border border-slate-700/60 shadow-2xl overflow-hidden">
              
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Demo Video Timeline</div>
                  <h4 className="text-base font-bold text-white mt-0.5">SaaS Feature Walkthrough</h4>
                </div>
                {isRecording && (
                  <div className="flex items-center gap-2 bg-rose-600/30 border border-rose-500/50 px-3 py-1 rounded-full text-rose-400 text-xs font-mono font-medium animate-pulse">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span>REC 00:04:18</span>
                  </div>
                )}
              </div>

              {/* Cursor Smoothing Visualization */}
              <div className="relative h-44 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center justify-center p-4">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center mx-auto mb-2">
                    <MousePointer size={18} />
                  </div>
                  <div className="text-xs font-semibold text-slate-200">
                    {studioMode ? 'Studio Mode Cursor Bezier Smoothing Active' : 'Raw Mouse Track'}
                  </div>
                  <div className="text-[11px] text-slate-400 mt-1">
                    Eliminates jittery mouse movements with smooth cinematic camera tracking.
                  </div>
                </div>

                {/* Simulated mouse click ripple */}
                <motion.div
                  animate={{ scale: [1, 2.2], opacity: [0.8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                  className="absolute top-1/3 left-1/3 w-8 h-8 rounded-full border-2 border-blue-400 pointer-events-none"
                />
              </div>

              {/* DRAGGABLE CIRCULAR WEBCAM OVERLAY (CleanShot signature webcam bubble) */}
              {webcamActive && (
                <div className="absolute bottom-6 right-6 z-20">
                  <div className="relative w-24 h-24 rounded-full border-4 border-white shadow-2xl overflow-hidden bg-gradient-to-tr from-amber-400 via-rose-500 to-indigo-600 flex items-center justify-center">
                    <div className="w-full h-full bg-slate-800 flex flex-col items-center justify-center text-center p-1">
                      <Camera size={18} className="text-slate-300 mb-1" />
                      <span className="text-[9px] font-semibold text-slate-300">FaceTime HD</span>
                      <span className="text-[8px] text-emerald-400 font-mono">1080p</span>
                    </div>
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-slate-900 text-[9px] font-mono px-2 py-0.5 rounded-full text-slate-300 border border-slate-700">
                    Webcam
                  </div>
                </div>
              )}
            </div>

            {/* FLOATING RECORDING HUD (Bottom of screen) */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-30 bg-slate-900/95 backdrop-blur-xl border border-slate-700/90 rounded-2xl p-2 px-4 shadow-2xl flex items-center gap-3 sm:gap-5">
              
              {/* Record / Stop Button */}
              <button
                type="button"
                onClick={handleToggleRecord}
                className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all cursor-pointer ${
                  isRecording
                    ? 'bg-rose-600 text-white shadow-lg shadow-rose-600/50'
                    : 'bg-rose-500 hover:bg-rose-600 text-white'
                }`}
                title={isRecording ? 'Stop Recording' : 'Start Recording'}
              >
                {isRecording ? <div className="w-3.5 h-3.5 bg-white rounded-xs" /> : <div className="w-3.5 h-3.5 bg-white rounded-full" />}
              </button>

              <div className="h-6 w-px bg-slate-700" />

              {/* Microphone Meter */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setMicActive(!micActive)}
                  className={`p-1.5 rounded-lg transition-colors cursor-pointer ${
                    micActive ? 'text-emerald-400 hover:bg-slate-800' : 'text-slate-500 hover:bg-slate-800'
                  }`}
                  title="Toggle Mic"
                >
                  {micActive ? <Mic size={15} /> : <MicOff size={15} />}
                </button>

                {/* Animated Audio Level EQ Bars */}
                <div className="flex items-end gap-0.5 h-4 w-10">
                  {[40, 75, 90, 60, 30].map((h, i) => (
                    <div
                      key={i}
                      style={{ height: micActive ? `${h}%` : '20%' }}
                      className={`w-1 rounded-full transition-all ${
                        micActive ? 'bg-emerald-400' : 'bg-slate-700'
                      }`}
                    />
                  ))}
                </div>
              </div>

              <div className="h-6 w-px bg-slate-700 hidden sm:block" />

              {/* Internal System Sound Indicator */}
              <div className="hidden sm:flex items-center gap-1.5 text-xs text-slate-300">
                <Volume2 size={15} className="text-blue-400" />
                <span className="text-[11px] font-mono">System Audio</span>
              </div>

              <div className="h-6 w-px bg-slate-700 hidden sm:block" />

              {/* Webcam Bubble Toggle */}
              <button
                type="button"
                onClick={() => setWebcamActive(!webcamActive)}
                className={`text-xs px-2.5 py-1 rounded-lg border transition-all cursor-pointer ${
                  webcamActive ? 'bg-blue-600/30 border-blue-500 text-blue-300' : 'bg-slate-800 border-slate-700 text-slate-400'
                }`}
              >
                Webcam Bubble
              </button>
            </div>
          </div>

          {/* Bottom Features Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 pt-5 border-t border-slate-800 text-left">
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <Zap size={14} className="text-amber-400" />
                Studio Mode Auto-Zoom
              </div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Automatically zooms into the active button or field when you click, focusing viewers' eyes on key actions.
              </p>
            </div>

            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <Radio size={14} className="text-emerald-400" />
                Lossless System Audio
              </div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Directly capture sound from games, video calls, or music apps without requiring confusing virtual audio cables.
              </p>
            </div>

            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <Scissors size={14} className="text-purple-400" />
                Instant Trimming & GIF Export
              </div>
              <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                Trim the beginning and end with a simple slider. Convert directly to lightweight GIFs for Slack and GitHub.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
