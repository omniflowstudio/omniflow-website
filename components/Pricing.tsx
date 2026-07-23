'use client'

import { motion } from 'framer-motion'
import { Check, MessageCircle, ArrowRight } from 'lucide-react'

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for small projects and startups',
    features: [
      'Responsive Website',
      'Up to 5 Pages',
      'Basic SEO Optimization',
      'Performance Optimization',
      'Mobile Responsive Design',
      '1 Month Support',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'Ideal for growing businesses',
    features: [
      'Everything in Starter',
      'Up to 15 Pages',
      'Advanced SEO Optimization',
      'CMS Integration',
      'E-commerce Ready',
      'Analytics & Tracking',
      'Social Media Integration',
      '3 Months Support',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For complex, large-scale solutions',
    features: [
      'Everything in Professional',
      'Unlimited Pages',
      'Custom Integrations',
      'API Development',
      'Advanced Analytics',
      'Dedicated Support Team',
      'Performance Monitoring',
      '6+ Months Support',
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />
      <div className="absolute top-1/2 -right-96 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

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
            Transparent <span className="text-primary">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the perfect plan for your project needs. All plans include our commitment to excellence.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={!plan.highlighted ? { y: -5 } : undefined}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                plan.highlighted
                  ? 'bg-gradient-to-br from-primary/20 to-accent/10 border-2 border-primary/50 scale-105 md:scale-110 shadow-xl'
                  : 'bg-card border border-primary/10 hover:border-primary/30'
              }`}
            >
              {/* Badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full">
                  Most Popular
                </div>
              )}

              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-8">{plan.description}</p>

              {/* Features */}
              <ul className="space-y-4 flex-1 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <a
                href={`https://wa.me/923033393222?text=Hi%20Omni%20Flow%2C%20I%27m%20interested%20in%20the%20${plan.name}%20plan%20and%20would%20like%20pricing%20information`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-3 px-4 rounded-lg font-medium transition-colors flex items-center justify-center gap-2 text-center ${
                  plan.highlighted
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'border border-primary/50 text-foreground hover:bg-primary/10'
                }`}
              >
                <MessageCircle className="w-4 h-4" />
                Get Pricing
              </a>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16 pt-8 border-t border-border/30"
        >
          <p className="text-muted-foreground mb-6">
            All plans include free consultation, unlimited revisions during development, and post-launch support. Contact us on WhatsApp for custom quotes and package details tailored to your specific needs.
          </p>
          <a
            href={`https://wa.me/923033393222?text=Hi%20Omni%20Flow%2C%20I%20would%20like%20to%20discuss%20pricing%20and%20packages`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            Get Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  )
}
