'use client'

import { motion } from 'framer-motion'
import { Code2, Smartphone, TrendingUp, Palette, Zap, BarChart3 } from 'lucide-react'

const services = [
  {
    icon: Code2,
    title: 'Web Design & Development',
    description: 'Beautiful, responsive websites built with modern technologies that convert visitors into customers.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile apps that deliver exceptional user experiences on iOS and Android.',
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing campaigns that boost your online presence and drive qualified leads.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Palette,
    title: 'UI/UX Design',
    description: 'Intuitive and visually stunning interfaces that provide seamless user experiences across all devices.',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Speed up your applications with advanced optimization techniques for better user engagement.',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights',
    description: 'Data-driven strategies backed by comprehensive analytics to measure and improve ROI.',
    color: 'from-orange-500 to-orange-600',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />

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
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to transform your business and achieve your goals
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group bg-card border border-primary/10 rounded-xl p-8 hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${service.color} p-0.5 mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full bg-card rounded-lg flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{service.description}</p>

                {/* Hover effect line */}
                <div className="mt-6 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
