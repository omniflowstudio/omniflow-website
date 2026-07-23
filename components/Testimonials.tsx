'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'James Wilson',
    company: 'Tech Startup Inc',
    role: 'CEO',
    content: 'Omni Flow transformed our digital presence. Their team delivered an exceptional website that increased our conversions by 150%.',
    avatar: '👨‍💼',
    rating: 5,
  },
  {
    name: 'Lisa Martinez',
    company: 'Fashion Boutique Co',
    role: 'Founder',
    content: 'The mobile app they built for us is intuitive and beautiful. Our customers love the seamless shopping experience.',
    avatar: '👩‍💼',
    rating: 5,
  },
  {
    name: 'David Thompson',
    company: 'Enterprise Solutions',
    role: 'CTO',
    content: 'Professional, reliable, and innovative. Omni Flow went above and beyond to deliver exactly what we needed.',
    avatar: '👨‍💻',
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-background" />
      <div className="absolute bottom-0 -right-96 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

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
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from businesses we&apos;ve helped succeed with our digital solutions
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group bg-card border border-primary/10 rounded-xl p-8 hover:border-primary/30 transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                &quot;{testimonial.content}&quot;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-6 border-t border-border/30">
                <div className="text-4xl">{testimonial.avatar}</div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/30 text-center"
        >
          {[
            { number: '500+', label: 'Happy Clients' },
            { number: '98%', label: 'Satisfaction Rate' },
            { number: '2M+', label: 'Users Impacted' },
          ].map((stat, i) => (
            <div key={i}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
