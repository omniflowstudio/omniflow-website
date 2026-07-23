'use client'

import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

export default function FloatingContactButton() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href={`https://wa.me/919999999999?text=Hi%20Omni%20Flow%2C%20I%20would%20like%20to%20discuss%20my%20project`}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="fixed bottom-8 right-8 z-40"
    >
      {/* Pulsing background */}
      <motion.div
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
        className="absolute inset-0 bg-primary rounded-full opacity-20"
      />

      {/* Main button */}
      <motion.div
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
        className="relative w-14 h-14 bg-primary hover:bg-primary/90 rounded-full flex items-center justify-center text-primary-foreground shadow-lg hover:shadow-xl transition-all cursor-pointer"
      >
        <MessageCircle className="w-6 h-6" />
      </motion.div>

      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
        transition={{ duration: 0.2 }}
        className="absolute right-full top-1/2 -translate-y-1/2 mr-4 bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap pointer-events-none"
      >
        Chat with us!
      </motion.div>
    </motion.a>
  )
}
