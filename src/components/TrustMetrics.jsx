import { motion } from 'framer-motion'
import { Container, FadeIn } from './ui/SectionWrapper'
import AnimatedCounter from './ui/AnimatedCounter'
import { TRUST_METRICS } from '../data/content'

export default function TrustMetrics() {
  return (
    <section className="relative -mt-8 pb-8 md:-mt-12">
      <Container>
        <FadeIn>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {TRUST_METRICS.map((metric, i) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="group relative overflow-hidden rounded-2xl glass p-6 text-center shadow-lg shadow-slate-900/5 md:p-8"
              >
                <div className="absolute inset-0 bg-primary/5 opacity-0 transition-opacity group-hover:opacity-100" />
                <div className="relative">
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} text={metric.text} />
                  <p className="mt-2 text-sm font-medium text-slate-500">{metric.label}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </FadeIn>
      </Container>
    </section>
  )
}
