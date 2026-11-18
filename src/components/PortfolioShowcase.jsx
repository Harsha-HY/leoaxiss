import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, ExternalLink, ArrowRight, Sparkles, Smartphone, Eye } from 'lucide-react';
import { clientProjects, demoProjects } from '../data/leoaxisData';

export default function PortfolioShowcase({ onOpenContact, onNotify }) {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Government',
    'IT Services',
    'Design',
    'Food & Hospitality',
    'Education',
    'E-Commerce',
    'Healthcare',
    'NGO'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? clientProjects
    : clientProjects.filter((p) => {
        if (selectedCategory === 'Design') return p.category === 'Design' || p.category === 'Fashion';
        return p.category === selectedCategory;
      });

  return (
    <section id="portfolio" className="py-24 bg-gradient-to-b from-white via-slate-50/60 to-white relative overflow-hidden border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-blue-50 text-[#0d44e8] text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-200/80 shadow-xs">
            <Globe className="w-3.5 h-3.5 text-[#0d44e8]" />
            <span>AUTHENTIC CLIENT WORK AS SHIPPED ON LEOAXIS</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-gray-950 tracking-tight">
            28+ Live Client Projects & Platforms
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed font-normal">
            Real websites, government portals, and native mobile applications engineered by LeoAxis Technologies across India, Ireland, and Australia.
          </p>

          {/* CleanShot-style Pill Filter Bar */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 max-w-4xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#0d44e8] text-white shadow-md shadow-blue-600/30 ring-2 ring-[#0d44e8]/20'
                    : 'bg-white text-gray-600 hover:text-gray-900 hover:bg-gray-100 border border-gray-200/80 shadow-xs'
                }`}
              >
                {cat}
                {cat === 'All' && (
                  <span className="ml-1.5 opacity-80 font-mono text-[10px]">({clientProjects.length})</span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Real Client Projects Grid with LeoAxis Visual Photos */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => {
              const previewSrc = project.screenshot || `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&embed=screenshot.url`;

              return (
                <motion.div
                  key={project.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  className="group rounded-3xl bg-white border border-gray-200/90 shadow-xs hover:shadow-2xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Photo / Screenshot Window (As Given in LeoAxis) */}
                  <div className="relative h-56 overflow-hidden bg-slate-900 border-b border-gray-100">
                    {/* Fallback Layer: Client Logo on colored gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.fallbackColor || 'from-slate-800 to-blue-900'} flex items-center justify-center p-8 z-0`}>
                      {project.logo ? (
                        <img 
                          src={project.logo} 
                          alt={project.name} 
                          className="h-16 w-auto max-w-[160px] object-contain drop-shadow-xl" 
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                          }}
                        />
                      ) : (
                        <span className="text-white font-black text-2xl text-center leading-tight drop-shadow-md px-4">
                          {project.name}
                        </span>
                      )}
                    </div>

                    {/* Screenshot Photo Layer */}
                    <img
                      src={previewSrc}
                      alt={project.name}
                      className="absolute inset-0 w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 z-10"
                      onError={(e) => {
                        const img = e.currentTarget;
                        if (project.screenshot && img.src.includes(project.screenshot)) {
                          img.src = `https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&embed=screenshot.url`;
                        } else {
                          img.style.display = 'none';
                        }
                      }}
                    />

                    {/* Category pill on top-left */}
                    <span className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-semibold z-20 flex items-center gap-1.5 border border-white/20 shadow-xs">
                      {project.category}
                    </span>

                    {/* Hover Overlay with Action Button */}
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="absolute inset-0 bg-gray-950/40 opacity-0 group-hover:opacity-100 backdrop-blur-xs transition-all duration-300 flex items-center justify-center z-30"
                    >
                      <span className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300 px-5 py-2.5 rounded-full bg-white text-[#0d44e8] text-xs font-bold shadow-xl flex items-center gap-1.5">
                        <span>{project.url.includes("play.google.com") ? "View on Play Store" : "Visit Live Platform"}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </span>
                    </a>
                  </div>

                  {/* Card Content Footer */}
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                          {project.client}
                        </span>
                        {project.featured && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-50 text-[#0d44e8]">
                            Govt Featured
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-bold text-gray-950 group-hover:text-[#0d44e8] transition-colors leading-snug">
                        {project.name}
                      </h3>

                      <p className="text-xs sm:text-sm text-gray-600 mt-1.5 leading-relaxed font-normal">
                        {project.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
                      <span className="text-xs font-semibold text-gray-400">
                        Verified Deployment
                      </span>
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold text-[#0d44e8] hover:text-blue-800 transition-colors"
                      >
                        <span>{project.url.includes("play.google.com") ? "Play Store" : "Visit"}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Demo Projects Section (As Given in LeoAxis) */}
        <div className="mt-24 pt-16 border-t border-gray-200/80">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold text-[#0d44e8] uppercase tracking-wider">
              INDUSTRY TEMPLATES & ARCHITECTURES
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-gray-950 mt-1 tracking-tight">
              Ready-to-Deploy Vertical Demonstrations
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Turnkey architectural blueprints engineered for rapid custom deployment across commerce, dining, fitness, and real estate.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {demoProjects.map((demo) => (
              <a
                key={demo.title}
                href={demo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-3xl bg-white border border-gray-200/80 shadow-xs hover:shadow-xl hover:border-blue-400 transition-all duration-300 overflow-hidden block"
              >
                <div className="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    src={demo.image}
                    alt={demo.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20">
                    {demo.category}
                  </span>
                  <div className="absolute inset-0 bg-gray-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-4 py-2 rounded-full bg-white text-[#0d44e8] text-xs font-bold shadow-md flex items-center gap-1.5">
                      <span>Launch Interactive Demo</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <h4 className="text-base font-bold text-gray-950 group-hover:text-[#0d44e8] transition-colors">
                    {demo.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                    {demo.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
