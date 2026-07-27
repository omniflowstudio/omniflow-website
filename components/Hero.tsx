'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'
import Counter from './Counter'

export default function Hero() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  })
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content — unchanged */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          {/* ...badge, heading, paragraph, buttons, stats — all stay exactly as they are... */}
        </motion.div>

        {/* Right Visual — now shown on mobile too, order-first so it appears above text on small screens */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{ y: parallaxY }}
          className="relative order-first md:order-last mb-8 md:mb-0"
        >
          <motion.div
            animate={{ y: [-20, 20, -20] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden border border-primary/20 bg-card/50"
          >
            <Image
              src="/hero-visual.png"
              alt="Digital transformation visualization"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
          </motion.div>

          {/* Floating card — hidden on very small screens to avoid overlap issues, shown from sm up */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="hidden sm:block absolute -bottom-8 -left-8 bg-card border border-primary/30 rounded-lg p-4 shadow-xl max-w-xs"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">Fast Delivery</p>
                <p className="text-xs text-muted-foreground">In 30 days or less</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
