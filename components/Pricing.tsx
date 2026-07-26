'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Check } from 'lucide-react'

const features = [
  'Responsive Website Design',
  'Complete SEO Optimization',
  'Performance & Security',
  'Analytics & Conversion Tracking',
  'Mobile App Development',
  'E-commerce Integration',
  'Content Management System',
  'Social Media Integration',
  'Ongoing Support & Maintenance',
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />
      <div className="absolute top-1/2 -right-96 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Custom <span className="text-primary">Pricing</span> For Every Project
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Every business is unique. That&apos;s why we don&apos;t believe in one-size-fits-all pricing. We work directly with you to understand your needs and create a custom package that delivers real value.
          </p>
        </motion.div>

        {/* Main CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary/20 to-accent/10 border-2 border-primary/50 rounded-2xl p-12 mb-12 text-center animate-pulse-glow"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Let&apos;s Discuss Your Project
          </h3>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Share your vision, budget, and timeline. We&apos;ll provide a custom quotation tailored to your specific requirements within 24 hours.
          </p>
          <a
            href={`https://wa.me/923033393222?text=Hi%20Omni%20Flow%2C%20I%20would%20like%20to%20discuss%20my%20project%20and%20get%20a%20custom%20quote`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Get Custom Quote on WhatsApp
          </a>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-card border border-primary/10 rounded-2xl p-8 mb-12"
        >
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            What&apos;s Included in Every Project
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Why Custom Pricing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-foreground mb-4">Why Custom Pricing?</h3>
          <ul className="space-y-3 text-muted-foreground max-w-2xl mx-auto mb-8">
            <li>✓ Your budget works for you — not the other way around</li>
            <li>✓ No hidden costs or surprise fees</li>
            <li>✓ Flexible payment terms and project timelines</li>
            <li>✓ Scale your project up or down based on your needs</li>
            <li>✓ Direct access to our team for transparent communication</li>
          </ul>
          <p className="text-muted-foreground mb-6">
            Ready to get started? Reach out to us on WhatsApp, and let&apos;s create something amazing together.
          </p>
          <a
            href={`https://wa.me/923033393222?text=Hi%20Omni%20Flow%2C%20I%20want%20to%20discuss%20pricing%20for%20my%20project`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  )
}
