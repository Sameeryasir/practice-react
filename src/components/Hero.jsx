import { motion } from 'framer-motion'
import { Phone, ArrowRight, Shield, Clock, Heart, Headphones, BadgeCheck, Star } from 'lucide-react'
import { Container } from './ui/SectionWrapper'
import BeforeAfterSlider from './ui/BeforeAfterSlider'
import { COMPANY } from '../data/content'
import { FEATURED_PROJECT } from '../data/projects'

const trustItems = [
  { icon: Shield, label: 'Licensed & Insured' },
  { icon: Clock, label: 'Fast Response' },
  { icon: Heart, label: 'Customer Focused' },
]

const floatingCards = [
  { icon: Headphones, label: '24/7 Support', position: '-top-3 -left-3 md:-left-6', delay: 0 },
  { icon: Star, label: 'Top Rated Service', position: '-bottom-3 -right-3 md:-right-6', delay: 0.2 },
]

export default function Hero() {
  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pt-24 pb-16 md:pt-28">
      <div className="absolute inset-0 bg-background">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-1/4 right-1/4 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 h-56 w-56 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-40" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Trusted Home Service Experts
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-dark sm:text-5xl lg:text-[3.25rem]"
            >
              Keeping Your Home{' '}
              <span className="text-secondary">
                Comfortable, Safe & Running Smoothly
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="mt-6 text-lg leading-relaxed text-slate-600"
            >
              Professional heating, cooling, maintenance and home service solutions delivered with reliability, transparency and care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 flex flex-wrap gap-4"
            >
              <button
                onClick={scrollToContact}
                className="group flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-primary/25 transition-all hover:bg-primary/90 hover:shadow-2xl"
              >
                Get Free Estimate
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href={`tel:${COMPANY.phone}`}
                className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-7 py-3.5 text-sm font-semibold text-dark shadow-sm backdrop-blur-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <Phone className="h-4 w-4 text-primary" />
                Call Now
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.65 }}
              className="mt-10 flex flex-wrap gap-6"
            >
              {trustItems.map((item) => (
                <div key={item.label} className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-slate-600">{item.label}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — balanced before/after + caption card below */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto w-full max-w-xl lg:max-w-none"
          >
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-primary/10 blur-md" />

              {/* Slider only — fixed aspect ratio frame */}
              <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-slate-900/15">
                {FEATURED_PROJECT && (
                  <BeforeAfterSlider
                    beforeImage={FEATURED_PROJECT.beforeImage}
                    afterImage={FEATURED_PROJECT.afterImage}
                    aspectClass={FEATURED_PROJECT.aspectClass}
                    beforePosition={FEATURED_PROJECT.beforePosition}
                    afterPosition={FEATURED_PROJECT.afterPosition}
                    showHint={false}
                  />
                )}
              </div>

              {floatingCards.map((card) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + card.delay }}
                  className={`absolute ${card.position} z-20 animate-float-slow`}
                  style={{ animationDelay: `${card.delay * 2}s` }}
                >
                  <div className="flex items-center gap-2.5 rounded-xl glass px-3 py-2.5 shadow-lg">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                      <card.icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-xs font-semibold text-dark">{card.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Caption below image — not overlapping photos */}
            {FEATURED_PROJECT && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-lg"
              >
                <div className="flex flex-wrap items-center gap-2">
                  {FEATURED_PROJECT.isLatest && (
                    <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      Latest Project
                    </span>
                  )}
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {FEATURED_PROJECT.category}
                  </span>
                  <span className="ml-auto hidden items-center gap-1.5 text-xs font-medium text-slate-400 sm:flex">
                    <BadgeCheck className="h-3.5 w-3.5 text-secondary" />
                    Licensed Professionals
                  </span>
                </div>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                  {FEATURED_PROJECT.caption}
                </p>
              </motion.div>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  )
}
