import { useEffect, useRef, useState } from 'react'
import { useInView, motion, useSpring, useTransform } from 'framer-motion'

function Counter({ value, suffix = '' }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })
  const spring = useSpring(0, { duration: 2000, bounce: 0 })
  const display = useTransform(spring, (v) => Math.round(v))
  const [shown, setShown] = useState(0)

  useEffect(() => {
    if (isInView) spring.set(value)
  }, [isInView, spring, value])

  useEffect(() => {
    return display.on('change', (v) => setShown(v))
  }, [display])

  return (
    <span ref={ref}>
      {shown}
      {suffix}
    </span>
  )
}

export default function AnimatedCounter({ value, suffix, text }) {
  if (text) {
    return (
      <motion.span
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="font-display text-4xl font-bold tracking-tight text-dark md:text-5xl"
      >
        {text}
      </motion.span>
    )
  }

  return (
    <span className="font-display text-4xl font-bold tracking-tight text-dark md:text-5xl">
      <Counter value={value} suffix={suffix} />
    </span>
  )
}
