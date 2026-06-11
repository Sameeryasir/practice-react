import { motion } from 'framer-motion'
import { Users, Receipt, Headphones, ShieldCheck } from 'lucide-react'
import SectionWrapper, { Container, FadeIn } from './ui/SectionWrapper'
import aboutImage from '../assets/About.jpg'

const features = [
  { icon: Users, title: 'Professional Team', desc: 'Skilled, courteous technicians you can trust in your home.', color: 'primary' },
  { icon: Receipt, title: 'Transparent Pricing', desc: 'Clear estimates with no hidden fees or surprise charges.', color: 'secondary' },
  { icon: Headphones, title: 'Reliable Support', desc: 'Responsive communication before, during and after every job.', color: 'primary' },
]

export default function About() {
  return (
    <SectionWrapper id="about">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
          {/* Image */}
          <FadeIn direction="left">
            <div className="relative">
              <div className="absolute -inset-3 rounded-3xl bg-primary/10 blur-xl" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <div className="absolute top-0 right-0 left-0 z-10 flex h-1">
                  <div className="flex-1 bg-primary" />
                  <div className="w-1/3 bg-secondary" />
                </div>
                <img
                  src={aboutImage}
                  alt="Bridges Home Services Cozy Oaks exterior build"
                  className="aspect-[4/3] w-full object-cover object-center"
                />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, type: 'spring' }}
                className="absolute -right-4 -bottom-4 rounded-2xl border border-slate-100 bg-white px-5 py-4 shadow-xl md:-right-8 md:-bottom-6"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary">
                    <ShieldCheck className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <p className="font-display text-lg font-bold text-dark">Trusted</p>
                    <p className="text-sm font-medium text-secondary">Local Experts</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn direction="right" delay={0.15}>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">Who We Are</span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
              About Bridges Home Services
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Founded with a simple mission to deliver home comfort solutions that families can depend on. Bridges Home Services has grown into a trusted name across the Greater Toronto Area.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              Our experienced team of licensed professionals brings years of hands-on expertise to every project, whether it is a routine maintenance visit or an urgent emergency repair. We believe great service starts with honesty, continues with quality workmanship and ends with your complete satisfaction.
            </p>
            <p className="mt-4 leading-relaxed text-slate-600">
              From heating and cooling to water heaters and duct cleaning, we treat every home as if it were our own with care, precision and respect.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {features.map((f, i) => (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ y: -3 }}
                  className={`rounded-2xl border bg-white p-4 shadow-sm transition-shadow hover:shadow-md ${
                    f.color === 'secondary' ? 'border-secondary/15' : 'border-primary/15'
                  }`}
                >
                  <div
                    className={`mb-3 flex h-10 w-10 items-center justify-center rounded-xl ${
                      f.color === 'secondary' ? 'bg-secondary/10' : 'bg-primary/10'
                    }`}
                  >
                    <f.icon className={`h-5 w-5 ${f.color === 'secondary' ? 'text-secondary' : 'text-primary'}`} />
                  </div>
                  <h3 className="font-display text-sm font-bold text-dark">{f.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </Container>
    </SectionWrapper>
  )
}
