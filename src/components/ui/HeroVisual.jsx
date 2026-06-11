import { motion } from 'framer-motion'
import { Wrench, Thermometer, Home } from 'lucide-react'

/* Premium illustrated fallback when the hero photo is unavailable */
export default function HeroVisualFallback() {
  return (
    <div className="relative flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-3xl bg-slate-50">

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 flex flex-col items-center gap-6 px-8 text-center"
      >
        <div className="flex h-24 w-24 items-center justify-center rounded-3xl bg-primary shadow-2xl shadow-primary/30">
          <Home className="h-12 w-12 text-white" strokeWidth={1.5} />
        </div>
        <div className="space-y-2">
          <p className="font-display text-xl font-bold text-dark">Expert Home Services</p>
          <p className="text-sm text-slate-500">Heating · Cooling · Maintenance</p>
        </div>
        <div className="flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg">
            <Thermometer className="h-6 w-6 text-primary" />
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-lg">
            <Wrench className="h-6 w-6 text-secondary" />
          </div>
        </div>
      </motion.div>
    </div>
  )
}
