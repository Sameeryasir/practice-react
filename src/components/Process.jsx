import { motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import SectionWrapper, { Container, FadeIn } from './ui/SectionWrapper'
import { PROCESS_STEPS } from '../data/content'

export default function Process() {
  return (
    <SectionWrapper id="process" className="overflow-hidden bg-white">
      <Container className="relative">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">How It Works</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Our Simple Process
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            From your first call to the final quality check. A seamless, stress-free experience every time.
          </p>
        </FadeIn>

        {/* --- Alternating zigzag timeline --- */}
        <div className="relative mx-auto mt-10 max-w-5xl">
          {/* Center vertical line */}
          <div className="absolute top-4 bottom-4 left-1/2 hidden w-0.5 -translate-x-1/2 bg-primary/15 md:block" />

          <div className="space-y-8 md:space-y-10">
            {PROCESS_STEPS.map((step, i) => {
              const isLeft = i % 2 === 0

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  className="relative"
                >
                  {/* Desktop: alternating left / right */}
                  <div className="hidden items-center md:grid md:grid-cols-2 md:gap-12">
                    {/* Left side */}
                    <div className={`${isLeft ? 'pr-10' : ''}`}>
                      {isLeft && <StepCard step={step} align="right" />}
                    </div>

                    {/* Right side */}
                    <div className={`${!isLeft ? 'pl-10' : ''}`}>
                      {!isLeft && <StepCard step={step} align="left" />}
                    </div>
                  </div>

                  {/* Center number badge */}
                  <div className="absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: 'spring', delay: i * 0.08 + 0.15 }}
                      className="flex h-12 w-12 items-center justify-center rounded-full border-4 border-white bg-primary text-sm font-bold text-white shadow-lg shadow-primary/25"
                    >
                      {step.step}
                    </motion.div>
                  </div>

                  {/* Mobile layout */}
                  <div className="flex gap-4 md:hidden">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-white shadow-md">
                      {step.step}
                    </div>
                    <StepCard step={step} mobile />
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </Container>
    </SectionWrapper>
  )
}

function StepCard({ step, align, mobile }) {
  return (
    <motion.div
      whileHover={{ y: -3 }}
      className={`rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-900/5 ${
        mobile ? 'flex-1' : 'max-w-md'
      } ${align === 'right' ? 'ml-auto text-right' : ''}`}
    >
      <div className={`flex items-start gap-3 ${align === 'right' ? 'flex-row-reverse' : ''}`}>
        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-secondary" />
        <div>
          <h3 className="font-display text-lg font-bold text-dark">{step.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-500">{step.description}</p>
        </div>
      </div>
    </motion.div>
  )
}
