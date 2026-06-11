import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import { ArrowUpRight } from 'lucide-react'
import SectionWrapper, { Container, FadeIn } from './ui/SectionWrapper'
import { SERVICES } from '../data/content'

export default function Services() {
  return (
    <SectionWrapper id="services" className="bg-white">
      <div className="absolute inset-0 bg-white" />

      <Container className="relative">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">What We Do</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl lg:text-5xl">
            Premium Home Services
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Comprehensive solutions to keep every system in your home running at peak performance.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => {
            const Icon = Icons[service.icon]
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="brand-border group cursor-default p-6 shadow-lg shadow-slate-900/5 transition-shadow hover:shadow-xl hover:shadow-primary/10 md:p-8"
              >
                <div className="relative">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg ${service.color === 'secondary' ? 'bg-secondary' : 'bg-primary'}`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </motion.div>

                  <h3 className="font-display text-xl font-bold text-dark">{service.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{service.description}</p>

                  <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </SectionWrapper>
  )
}
