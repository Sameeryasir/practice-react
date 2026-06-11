import { Star, Quote } from 'lucide-react'
import SectionWrapper, { Container, FadeIn } from './ui/SectionWrapper'
import { TESTIMONIALS } from '../data/content'

function TestimonialCard({ testimonial }) {
  return (
    <div className="flex h-[360px] w-[340px] shrink-0 flex-col rounded-2xl glass p-6 shadow-lg shadow-slate-900/5 md:h-[360px] md:w-[380px] md:p-7">
      <Quote className="h-7 w-7 shrink-0 text-primary/20" />
      <p className="mt-3 min-h-0 flex-1 overflow-hidden text-sm leading-relaxed text-slate-600 line-clamp-[8]">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="shrink-0 pt-4">
        <div className="flex items-center gap-1">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
          ))}
        </div>
        <div className="mt-3 border-t border-slate-100 pt-3">
          <p className="font-display font-bold text-dark">{testimonial.name}</p>
          <p className="text-sm text-slate-500">{testimonial.location}</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const doubled = [...TESTIMONIALS, ...TESTIMONIALS]

  return (
    <SectionWrapper id="reviews">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Real feedback from homeowners who trust Bridges Home Services.
          </p>
        </FadeIn>
      </Container>

      <div className="relative mt-10 overflow-hidden">
        <div className="pointer-events-none absolute top-0 bottom-0 left-0 z-10 w-20 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute top-0 right-0 bottom-0 z-10 w-20 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max gap-6 animate-scroll-left hover:[animation-play-state:paused]">
          {doubled.map((t, i) => (
            <TestimonialCard key={`${t.name}-${i}`} testimonial={t} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
