'use client'

import { motion } from 'framer-motion'
import { ChevronRight, MessageCircle, Star, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Pricing from '@/components/Pricing'
import Portfolio from '@/components/Portfolio'
import HowWeBuild from '@/components/HowWeBuild'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import FloatingContactButton from '@/components/FloatingContactButton'

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <Services />
      <Pricing />
      <Portfolio />
      <HowWeBuild />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
      <FloatingContactButton />
    </main>
  )
}
