import { motion } from 'framer-motion'

export default function SectionWrapper({ children, id, className = '' }) {
  return (
    <section id={id} className={`relative py-14 md:py-16 lg:py-20 ${className}`}>
      {children}
    </section>
  )
}

export function FadeIn({ children, delay = 0, className = '', direction = 'up' }) {
  const offsets = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: -40 },
    right: { y: 0, x: 40 },
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...offsets[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function Container({ children, className = '' }) {
  return (
    <div className={`mx-auto w-full max-w-7xl px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}
