'use client'

import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl md:text-4xl font-bold text-foreground text-center mb-8 leading-tight text-balance"
        >
          Digital Agency for Custom Web & App Development: Empowering Global Brands
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-lg text-muted-foreground leading-relaxed text-center"
        >
          Omni Flow is a full-service digital agency specializing in custom web design, web development, mobile app development, and digital marketing for businesses worldwide. We&apos;ve helped 400+ local and 50+ global clients across web design, e-commerce, SMM, and workflow automation launch high-performing websites built for speed, SEO, and conversions. From discovery to launch, our proven 6-step process delivers custom digital solutions — no templates, no shortcuts — tailored to your business goals.
        </motion.p>
      </div>
    </section>
  )
}
