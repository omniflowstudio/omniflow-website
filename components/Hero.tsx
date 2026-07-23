'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 rounded-full border border-primary/30 bg-primary/10 mb-6"
          >
            <span className="text-sm text-primary font-medium">Welcome to Omni Flow</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            <span className="text-balance">
              Transform Your Business with{' '}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Digital Excellence
              </span>
            </span>
          </h1>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-xl">
            We create stunning web experiences, powerful digital marketing campaigns, and innovative mobile apps that drive real results for your business.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={`https://wa.me/919999999999?text=Hi%20Omni%20Flow%2C%20I%20would%20like%20to%20discuss%20my%20project`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-3 border border-primary/50 text-foreground rounded-lg hover:bg-primary/10 transition-colors font-medium"
            >
              Let&apos;s Chat
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-border/30">
            {[
              { number: '100+', label: 'Projects' },
              { number: '50+', label: 'Happy Clients' },
              { number: '5+', label: 'Years Experience' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
              >
                <div className="text-2xl font-bold text-primary">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full h-96 rounded-2xl overflow-hidden border border-primary/20 bg-card/50">
            <Image
              src="/hero-visual.png"
              alt="Digital transformation visualization"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20" />
          </div>

          {/* Floating card */}
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-8 -left-8 bg-card border border-primary/30 rounded-lg p-4 shadow-xl max-w-xs"
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
