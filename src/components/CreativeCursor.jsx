import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CreativeCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 })
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only enable on desktop devices with fine pointer
    if (window.matchMedia('(pointer: coarse)').matches) return

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      if (!isVisible) setIsVisible(true)

      const target = e.target
      const isInteractive = target.closest('button, a, input, textarea, select, [role="button"]')
      setIsHoveringInteractive(!!isInteractive)
    }

    const handleMouseLeave = () => setIsVisible(false)

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [isVisible])

  if (!isVisible) return null

  return (
    <>
      {/* Outer ambient glow ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full"
        animate={{
          x: mousePosition.x - (isHoveringInteractive ? 24 : 16),
          y: mousePosition.y - (isHoveringInteractive ? 24 : 16),
          width: isHoveringInteractive ? 48 : 32,
          height: isHoveringInteractive ? 48 : 32,
          backgroundColor: isHoveringInteractive ? 'rgba(13, 68, 232, 0.12)' : 'rgba(13, 68, 232, 0.05)',
          borderColor: isHoveringInteractive ? 'rgba(13, 68, 232, 0.45)' : 'rgba(13, 68, 232, 0.2)',
          borderWidth: 1,
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.2,
        }}
      />

      {/* Center sharp dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full bg-[#0d44e8]"
        animate={{
          x: mousePosition.x - (isHoveringInteractive ? 4 : 3),
          y: mousePosition.y - (isHoveringInteractive ? 4 : 3),
          width: isHoveringInteractive ? 8 : 6,
          height: isHoveringInteractive ? 8 : 6,
          scale: isHoveringInteractive ? 1.4 : 1,
        }}
        transition={{
          type: 'spring',
          damping: 35,
          stiffness: 500,
        }}
      />
    </>
  )
}
