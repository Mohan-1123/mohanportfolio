import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { motion } from 'framer-motion'

export default function StatCounter({ value, suffix, label }) {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true })
  const started = useRef(false)

  useEffect(() => {
    if (inView && !started.current) {
      started.current = true
      const duration = 1800
      const steps = 60
      const increment = value / steps
      let current = 0
      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)
    }
  }, [inView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.5 }}
      className="text-center p-6 glass rounded-2xl"
    >
      <div className="text-4xl font-bold text-gradient mb-2">
        {count}{suffix}
      </div>
      <div className="text-text-secondary text-sm font-medium">{label}</div>
    </motion.div>
  )
}
