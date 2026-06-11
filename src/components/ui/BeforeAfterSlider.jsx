import { useState, useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { GripVertical } from 'lucide-react'

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = '',
  aspectClass = 'aspect-[4/3]',
  showHint = true,
  beforePosition = 'center',
  afterPosition = 'center',
}) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef(null)
  const isDragging = useRef(false)

  const updatePosition = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    const x = clientX - rect.left
    const percent = Math.min(Math.max((x / rect.width) * 100, 2), 98)
    setPosition(percent)
  }, [])

  const handlePointerDown = (e) => {
    isDragging.current = true
    updatePosition(e.clientX)
    e.currentTarget.setPointerCapture(e.pointerId)
  }

  const handlePointerMove = (e) => {
    if (!isDragging.current) return
    updatePosition(e.clientX)
  }

  const handlePointerUp = (e) => {
    isDragging.current = false
    e.currentTarget.releasePointerCapture(e.pointerId)
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full select-none overflow-hidden rounded-2xl ${aspectClass} ${className}`}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      {/* After image — fills entire frame */}
      <img
        src={afterImage}
        alt={afterLabel}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ objectPosition: afterPosition }}
        draggable={false}
      />

      {/* Before image — clipped, same frame size */}
      <div
        className="absolute inset-y-0 left-0 z-[1] overflow-hidden"
        style={{ width: `${position}%` }}
      >
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="absolute inset-y-0 left-0 h-full object-cover"
          style={{
            width: `${(100 / position) * 100}%`,
            objectPosition: beforePosition,
          }}
          draggable={false}
        />
      </div>

      {/* Divider */}
      <div
        className="absolute top-0 bottom-0 z-10 w-0.5 -translate-x-1/2 bg-white shadow-lg"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl ring-4 ring-secondary/25">
          <GripVertical className="h-5 w-5 text-secondary" />
        </div>
      </div>

      <span className="absolute top-3 left-3 z-10 rounded-lg bg-primary px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
        {beforeLabel}
      </span>
      <span className="absolute top-3 right-3 z-10 rounded-lg bg-secondary px-2.5 py-1 text-[11px] font-semibold text-white backdrop-blur-sm">
        {afterLabel}
      </span>

      {showHint && (
        <motion.p
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 2, repeat: 3 }}
          className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 rounded-full bg-white/90 px-3 py-1 text-[11px] font-medium text-slate-600 shadow-md backdrop-blur-sm"
        >
          Drag to compare
        </motion.p>
      )}
    </div>
  )
}
