import React, { useState, useEffect } from 'react'

export default function ThemeSwitcher() {
  const [activeTheme, setActiveTheme] = useState('indigo-terracotta')
  const [activeLabel, setActiveLabel] = useState('Indigo & Sunset')

  useEffect(() => {
    try {
      const saved = localStorage.getItem('leoaxis_dual_theme')
      const savedLabel = localStorage.getItem('leoaxis_dual_theme_label')
      if (saved && savedLabel) {
        applyTheme(saved, savedLabel)
      }
    } catch (e) {}
  }, [])

  const applyTheme = (themeKey, label) => {
    setActiveTheme(themeKey)
    setActiveLabel(label)
    document.documentElement.setAttribute('data-dual-theme', themeKey)
    document.body.setAttribute('data-dual-theme', themeKey)
    try {
      localStorage.setItem('leoaxis_dual_theme', themeKey)
      localStorage.setItem('leoaxis_dual_theme_label', label)
    } catch (e) {}
  }

  const themes = [
    { key: 'indigo-terracotta', label: 'Indigo & Sunset', c1: '#4f46e5', c2: '#ea580c' },
    { key: 'violet-lime', label: 'Violet & Cyber Lime', c1: '#7c3aed', c2: '#84cc16' },
    { key: 'emerald-amber', label: 'Emerald & Amber', c1: '#059669', c2: '#d97706' },
    { key: 'obsidian-cyan', label: 'Obsidian & Cyan', c1: '#0f172a', c2: '#0284c7' }
  ]

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 bg-[#fffefa]/95 backdrop-blur-xl border border-[#ebdcc8] shadow-2xl rounded-full px-4 py-2.5 transition-all duration-300 hover:shadow-indigo-500/15">
      <div className="flex items-center gap-2 text-xs font-bold text-[#574f45] pr-2.5 border-r border-[#ebdcc8]">
        <span className="w-3 h-3 rounded-full dual-gradient-bg animate-pulse" />
        <span className="hidden sm:inline">Cream + Dual:</span>
        <span className="text-[#1c1917] font-black">{activeLabel}</span>
      </div>
      <div className="flex items-center gap-1.5">
        {themes.map((t) => (
          <button
            key={t.key}
            type="button"
            onClick={() => applyTheme(t.key, t.label)}
            title={`Cream + ${t.label}`}
            className={`w-6 h-6 rounded-full flex overflow-hidden transition-all hover:scale-110 cursor-pointer ${
              activeTheme === t.key
                ? 'ring-2 ring-offset-2 ring-indigo-500 scale-105'
                : 'ring-1 ring-stone-300 hover:ring-2 hover:ring-stone-500'
            }`}
          >
            <span className="w-1/2 h-full" style={{ backgroundColor: t.c1 }} />
            <span className="w-1/2 h-full" style={{ backgroundColor: t.c2 }} />
          </button>
        ))}
      </div>
    </div>
  )
}
