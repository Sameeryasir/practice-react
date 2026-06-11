import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, Phone } from 'lucide-react'
import SectionWrapper, { Container, FadeIn } from './ui/SectionWrapper'
import { FAQ_ITEMS, COMPANY } from '../data/content'

function AccordionItem({ item, isOpen, onToggle }) {
  return (
    <motion.div
      layout
      className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition-all hover:shadow-md ${
        isOpen ? 'border-secondary/30 shadow-secondary/5' : 'border-slate-100'
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-base font-semibold text-dark md:text-lg">{item.question}</span>
        <div
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg transition-colors ${
            isOpen ? 'bg-secondary text-white' : 'bg-secondary/10 text-secondary'
          }`}
        >
          {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="border-t border-slate-100 px-6 pb-5 pt-4 text-sm leading-relaxed text-slate-600 md:text-base">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <SectionWrapper id="faq" className="bg-slate-50">
      <Container>
        {/* Centered heading */}
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">FAQ</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Have a question? We have answers. If you do not see what you are looking for, give us a call. We are always happy to help.
          </p>
        </FadeIn>

        {/* Accordion — centered below */}
        <FadeIn delay={0.1} className="mx-auto mt-10 max-w-3xl">
          <div className="space-y-3">
            {FAQ_ITEMS.map((item, i) => (
              <AccordionItem
                key={item.question}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </div>
        </FadeIn>

        {/* Help CTA — navy + red accents */}
        <FadeIn delay={0.2} className="mx-auto mt-8 max-w-3xl">
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary/10 bg-white p-6 shadow-sm sm:flex-row sm:px-8">
            <div className="text-center sm:text-left">
              <p className="font-display text-lg font-bold text-dark">Still have questions?</p>
              <p className="mt-1 text-sm text-slate-600">Our team is available 24/7 for emergency support.</p>
            </div>
            <a
              href={`tel:${COMPANY.phone}`}
              className="inline-flex items-center gap-2 rounded-xl bg-secondary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-secondary/90"
            >
              <Phone className="h-4 w-4" />
              Call Us Now
            </a>
          </div>
        </FadeIn>
      </Container>
    </SectionWrapper>
  )
}
