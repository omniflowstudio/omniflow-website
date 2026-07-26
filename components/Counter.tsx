'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

interface CounterProps {
  number: number
  label: string
  delay?: number
}

export default function Counter({ number, label, delay = 0 }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = number / 50
      let current = 0

      const interval = setInterval(() => {
        current += increment
        if (current >= number) {
          setCount(number)
          clearInterval(interval)
        } else {
          setCount(Math.floor(current))
        }
      }, 20)

      return () => clearInterval(interval)
    }, delay * 1000)

    return () => clearTimeout(timer)
  }, [number, delay])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="text-2xl font-bold text-primary">{count}+</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  )
}
