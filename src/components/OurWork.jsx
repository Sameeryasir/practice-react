import { motion } from 'framer-motion'
import { Sparkles, Star } from 'lucide-react'
import SectionWrapper, { Container, FadeIn } from './ui/SectionWrapper'
import BeforeAfterSlider from './ui/BeforeAfterSlider'
import { BEFORE_AFTER_PROJECTS } from '../data/projects'

export default function OurWork() {
  const projects = BEFORE_AFTER_PROJECTS.filter((p) => p.beforeImage && p.afterImage)

  return (
    <SectionWrapper id="our-work" className="bg-slate-50">
      <Container className="relative">
        <FadeIn className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary">Real Results</span>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-dark sm:text-4xl">
            Before &amp; After
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            See the quality of our work with real projects from real homes across the GTA.
          </p>
        </FadeIn>

        <div className="mt-10 space-y-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-lg shadow-slate-900/5"
            >
              {/* Top accent — navy + red brand strip */}
              <div className="flex h-1">
                <div className="flex-1 bg-primary" />
                <div className="w-1/3 bg-secondary" />
              </div>

              <div className="grid lg:grid-cols-2">
                <div className="border-b border-slate-100 p-4 md:p-6 lg:border-r lg:border-b-0">
                  <BeforeAfterSlider
                    beforeImage={project.beforeImage}
                    afterImage={project.afterImage}
                    aspectClass={project.aspectClass || 'aspect-[4/3]'}
                    beforePosition={project.beforePosition || 'center'}
                    afterPosition={project.afterPosition || 'center'}
                    className="shadow-md"
                  />
                </div>

                <div className="flex flex-col justify-center p-6 md:p-10 lg:p-12">
                  <div className="flex flex-wrap items-center gap-2">
                    {project.isLatest && (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white">
                        <Star className="h-3.5 w-3.5 fill-white" />
                        Latest Project
                      </span>
                    )}
                    <span className="inline-flex w-fit items-center gap-1.5 rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                      <Sparkles className="h-3.5 w-3.5 text-secondary" />
                      {project.category}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-2xl font-bold text-dark md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    {project.caption}
                  </p>

                  {project.tags?.length > 0 && (
                    <div className="mt-6 flex flex-wrap gap-2">
                      {project.tags.map((tag, ti) => (
                        <span
                          key={tag}
                          className={`rounded-lg px-3 py-1.5 text-xs font-medium ${
                            ti % 2 === 0
                              ? 'border border-primary/15 bg-primary/5 text-primary'
                              : 'border border-secondary/15 bg-secondary/5 text-secondary'
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  )
}
