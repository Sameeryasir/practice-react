import { motion } from 'framer-motion'
import { Phone, ArrowRight } from 'lucide-react'
import SectionWrapper, { Container, FadeIn } from './ui/SectionWrapper'
import { COMPANY } from '../data/content'

export default function Contact() {
  return (
    <SectionWrapper id="contact" className="pb-0">
      <Container>
        <FadeIn>
          <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-12 text-center md:px-14 md:py-14">
            <div className="absolute top-0 right-0 left-0 h-1 bg-secondary" />
            <div className="absolute -top-20 right-0 h-56 w-56 rounded-full bg-secondary/15 blur-3xl" />
            <div className="absolute -bottom-16 left-0 h-48 w-48 rounded-full bg-white/5 blur-3xl" />

            <div className="relative mx-auto max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                Get In Touch
              </span>
              <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-white sm:text-4xl">
                Ready to Start Your Project?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-white/75 md:text-base">
                Talk directly with {COMPANY.owner} for a free estimate. Real craftsmanship, honest pricing and reliable service.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <motion.a
                  href={`tel:${COMPANY.phone}`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-secondary px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-secondary/25 transition-colors hover:bg-secondary/90 sm:w-auto"
                >
                  <Phone className="h-4 w-4" />
                  Call {COMPANY.phoneDisplay}
                </motion.a>
                <motion.a
                  href={`mailto:${COMPANY.email}?subject=Free%20Estimate%20Request`}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/20 sm:w-auto"
                >
                  Get Free Estimate
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </motion.a>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </SectionWrapper>
  )
}
