'use client'

import { motion } from 'framer-motion'
import { Search, MapPin, Palette, Code, CheckCircle, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We learn your business, audience, and goals. We audit your competitors to find opportunities they\'re missing.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Framework',
    description: 'We map out every page, user flow, and conversion point before a single line of code is written.',
    icon: MapPin,
  },
  {
    number: '03',
    title: 'Design',
    description: 'You see your website design before we build it. We refine until you love every pixel.',
    icon: Palette,
  },
  {
    number: '04',
    title: 'Development',
    description: 'Clean, fast, secure code. Every website is built for speed, SEO, and scalability from day one.',
    icon: Code,
  },
  {
    number: '05',
    title: 'Testing',
    description: 'Cross-browser, cross-device testing. Speed tests. Security audits. Nothing goes live until it\'s perfect.',
    icon: CheckCircle,
  },
  {
    number: '06',
    title: 'Launch & Scale',
    description: 'We launch your website, set up analytics, and provide ongoing support to keep growing your business.',
    icon: Rocket,
  },
]

export default function HowWeBuild() {
  return (
    <section id="how-we-build" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />
      <div className="absolute top-1/2 -left-96 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            How We <span className="text-primary">Build</span> Your Website
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every project follows the same proven 6-step process. No guessing. No delays. Just results.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group relative bg-card border border-primary/10 rounded-xl p-8 hover:border-primary/30 transition-all duration-300"
              >
                {/* Step Number Background */}
                <div className="absolute top-0 right-0 text-7xl font-bold text-primary/5 group-hover:text-primary/10 transition-colors duration-300">
                  {step.number}
                </div>

                {/* Content */}
                <div className="relative">
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>

                  {/* Step Number */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-bold text-primary">{step.number}</span>
                    <div className="flex-1 h-px bg-gradient-to-r from-primary/30 to-transparent" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl pointer-events-none" />
              </motion.div>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-border/30"
        >
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            This systematic approach ensures every website we build is optimized for results. Ready to start your project with us?
          </p>
          <a
            href={`https://wa.me/923033393222?text=Hi%20Omni%20Flow%2C%20I%27d%20like%20to%20discuss%20my%20project`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}
