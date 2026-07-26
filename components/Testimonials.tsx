'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Ali Kazmi',
    company: 'Kazmi Digital Marketing',
    content: 'Omni Flow completely transformed our online presence. Their team delivered an outstanding website that increased our leads by 200% within the first month.',
    initials: 'AK',
    bgColor: 'bg-blue-500',
    rating: 5,
  },
  {
    name: 'Ubaid Saleem',
    company: 'Saleem & Associates',
    content: 'Exceptional work from start to finish. The e-commerce platform they built for us is fast, secure, and user-friendly. Our sales have tripled!',
    initials: 'US',
    bgColor: 'bg-purple-500',
    rating: 5,
  },
  {
    name: 'Umer Sheikh',
    company: 'Sheikh Trading Group',
    content: 'Professional, reliable, and highly creative. Omni Flow understood our vision perfectly and delivered beyond our expectations. Highly recommended!',
    initials: 'US',
    bgColor: 'bg-green-500',
    rating: 5,
  },
  {
    name: 'Mariam Khan',
    company: 'Khan Fashion House',
    content: 'Working with Omni Flow was amazing. They created a stunning website that perfectly represents our brand. The design is gorgeous and conversion rates are up significantly.',
    initials: 'MK',
    bgColor: 'bg-pink-500',
    rating: 5,
  },
  {
    name: 'Michael Johnson',
    company: 'TechCore Solutions USA',
    content: 'Outstanding technical expertise and customer service. Omni Flow delivered our complex SaaS platform on time and exceeded all our technical requirements.',
    initials: 'MJ',
    bgColor: 'bg-yellow-500',
    rating: 5,
  },
  {
    name: 'Sarah Williams',
    company: 'Williams Creative Agency',
    content: 'Omni Flow is a game-changer for our agency. Their innovative solutions and attention to detail have impressed all our clients. We work with them on every major project now.',
    initials: 'SW',
    bgColor: 'bg-orange-500',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8, boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)' }}
              className="group bg-card border border-primary/10 rounded-xl p-8 hover:border-primary/50 transition-all duration-300"
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
                <div className={`w-12 h-12 rounded-full ${testimonial.bgColor} flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-sm">{testimonial.initials}</span>
                </div>
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.company}</p>
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
