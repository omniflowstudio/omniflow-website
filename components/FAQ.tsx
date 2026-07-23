'use client'

import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'How long does a typical project take?',
    answer: 'Project timelines vary based on complexity. Our Starter packages typically take 2-4 weeks, Professional 4-8 weeks, and Enterprise solutions are custom. We always provide a detailed timeline during the consultation phase.',
  },
  {
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes! All our packages include post-launch support. Starter includes 1 month, Professional includes 3 months, and Enterprise includes 6+ months of dedicated support including updates, maintenance, and performance monitoring.',
  },
  {
    question: 'Can you integrate with our existing systems?',
    answer: 'Absolutely. We specialize in seamless integrations with existing platforms, APIs, and third-party services. We&apos;ll assess your current infrastructure and design solutions that work perfectly with your ecosystem.',
  },
  {
    question: 'What if I need revisions after the project is complete?',
    answer: 'We include unlimited revisions during the development phase. After launch, revisions are part of your included support period. Additional changes beyond that are billed at our standard rates.',
  },
  {
    question: 'Do you offer hosting and deployment?',
    answer: 'While we focus on design and development, we can recommend and help set up reliable hosting solutions. We ensure your project is deployed on enterprise-grade infrastructure with optimal performance.',
  },
  {
    question: 'How do you ensure my website is secure?',
    answer: 'Security is built into every project. We implement SSL certificates, regular security audits, data encryption, and follow industry best practices. All our solutions comply with GDPR and other data protection regulations.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-card/50" />
      <div className="absolute top-1/2 -left-96 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services and process
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="bg-card border border-primary/10 rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-card/80 transition-colors text-left"
              >
                <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 border-t border-primary/10 bg-card/50">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Additional Help */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-12 border-t border-border/30"
        >
          <p className="text-foreground mb-4">Didn&apos;t find your answer?</p>
          <a
            href={`https://wa.me/919999999999?text=Hi%20Omni%20Flow%2C%20I%20have%20a%20question`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
          >
            Contact Us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
