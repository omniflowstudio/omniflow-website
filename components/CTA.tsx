'use client'

import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'

export default function CTA() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Let&apos;s discuss your project and create a digital solution that drives real results for your business.
          </p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={`https://wa.me/919999999999?text=Hi%20Omni%20Flow%2C%20I%27m%20ready%20to%20start%20my%20project`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Start a Conversation
            </a>
            <a
              href="#pricing"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-primary/50 text-foreground rounded-lg hover:bg-primary/10 transition-colors font-semibold text-lg"
            >
              View Pricing
              <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-12 pt-8 border-t border-border/30 flex flex-col sm:flex-row items-center justify-center gap-8 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <span className="text-2xl">⭐</span>
              <span>4.9/5 Average Rating</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">👥</span>
              <span>500+ Satisfied Clients</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl">🚀</span>
              <span>100+ Projects Delivered</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
