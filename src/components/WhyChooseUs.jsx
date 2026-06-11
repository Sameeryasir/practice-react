import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import SectionWrapper, { Container, FadeIn } from './ui/SectionWrapper'
import { WHY_CHOOSE_US } from '../data/content'

export default function WhyChooseUs() {
  return (
    <SectionWrapper id="why-us" className="bg-slate-50">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Why Bridges</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Why Choose Us
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We combine old-fashioned reliability with modern service standards because your home deserves the best.
          </p>
        </FadeIn>

        {/* 2×2 feature card grid — distinct from Process timeline */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {WHY_CHOOSE_US.map((item, i) => {
            const Icon = Icons[item.icon]
            const accent = i % 2 === 0 ? 'primary' : 'secondary'

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-8 shadow-sm transition-shadow hover:shadow-xl hover:shadow-primary/5"
              >
                {/* Top accent bar */}
                <div className={`absolute top-0 right-0 left-0 h-1 ${accent === 'primary' ? 'bg-primary' : 'bg-secondary'}`} />

                <div className={`mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl ${accent === 'primary' ? 'bg-primary' : 'bg-secondary'} shadow-lg transition-transform group-hover:scale-110`}>
                  <Icon className="h-7 w-7 text-white" />
                </div>

                <h3 className="font-display text-xl font-bold text-dark">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>

                {/* Subtle corner decoration */}
                <div className={`absolute -right-6 -bottom-6 h-24 w-24 rounded-full opacity-[0.06] ${accent === 'primary' ? 'bg-primary' : 'bg-secondary'}`} />
              </motion.div>
            )
          })}
        </div>

        {/* Trust strip below cards */}
        <FadeIn delay={0.3}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 rounded-2xl border border-slate-200/80 bg-white px-8 py-6 shadow-sm">
            {['Licensed & Insured', 'Free Estimates', 'Satisfaction Guaranteed', 'Local & Trusted'].map((label) => (
              <span key={label} className="flex items-center gap-2 text-sm font-medium text-slate-600">
                <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                {label}
              </span>
            ))}
          </div>
        </FadeIn>
      </Container>
    </SectionWrapper>
  )
}
