'use client'

import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Team', href: '#team' },
    { label: 'FAQ', href: '#faq' },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2"
        >
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold">OF</span>
          </div>
          <span className="text-xl font-bold text-foreground hidden sm:inline">Omni Flow</span>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="hidden md:flex items-center gap-8"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.a
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          href={`https://wa.me/919999999999?text=Hi%20Omni%20Flow%2C%20I%20would%20like%20to%20discuss%20my%20project`}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
        >
          Contact Now
        </motion.a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-card rounded-lg transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-card border-b border-border"
        >
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href={`https://wa.me/919999999999?text=Hi%20Omni%20Flow%2C%20I%20would%20like%20to%20discuss%20my%20project`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium text-center"
            >
              Contact Now
            </a>
          </div>
        </motion.div>
      )}
    </header>
  )
}
