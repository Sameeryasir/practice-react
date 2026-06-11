import { useState } from 'react'
import { Clock, ChevronDown } from 'lucide-react'
import { BUSINESS_HOURS } from '../../data/content'

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

const styles = {
  light: {
    wrapper: 'rounded-2xl border border-white/10 bg-white/10 backdrop-blur-sm',
    button: 'flex w-full items-center justify-between gap-3 p-4 text-left hover:bg-white/5',
    iconWrap: 'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary',
    title: 'text-white',
    subtitle: 'text-white/60',
    chevron: 'text-white/60',
    today: 'font-semibold text-white',
    day: 'text-white/70',
    closed: 'text-white/50',
    list: 'space-y-2 border-t border-white/10 px-4 pb-4 pt-3',
  },
  card: {
    wrapper: 'rounded-2xl border border-slate-100 bg-slate-50/80',
    button: 'flex w-full items-center justify-between gap-3 p-4 text-left hover:bg-white',
    iconWrap: 'flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary/10 text-secondary',
    title: 'text-dark',
    subtitle: 'text-slate-500',
    chevron: 'text-slate-400',
    today: 'font-semibold text-primary',
    day: 'text-slate-600',
    closed: 'text-slate-400',
    list: 'space-y-2 border-t border-slate-100/80 px-4 pb-4 pt-3',
  },
  dark: {
    wrapper: '',
    button: 'group flex w-full items-start gap-3 text-left hover:opacity-90',
    iconWrap:
      'flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-secondary ring-1 ring-white/10',
    title: 'text-sm font-semibold text-white',
    subtitle: 'text-xs text-slate-400',
    chevron: 'mt-1 text-slate-400',
    today: 'font-semibold text-white',
    day: 'text-slate-400',
    closed: 'text-slate-500',
    list: 'mt-2 space-y-2 pl-11',
  },
}

export default function BusinessHours({ variant = 'light', collapsible = false }) {
  const [open, setOpen] = useState(!collapsible)
  const today = DAY_NAMES[new Date().getDay()]
  const todayRow = BUSINESS_HOURS.find((row) => row.day === today)
  const s = styles[variant] || styles.light
  const isDark = variant === 'dark'

  return (
    <div className={s.wrapper}>
      <button
        type="button"
        onClick={() => collapsible && setOpen((v) => !v)}
        className={`${s.button} ${collapsible ? 'cursor-pointer' : 'cursor-default'}`}
        aria-expanded={collapsible ? open : undefined}
      >
        <span className={s.iconWrap}>
          <Clock className={isDark ? 'h-4 w-4' : 'h-5 w-5'} />
        </span>

        <div className="min-w-0 flex-1 pt-0.5">
          <p className={s.title}>Business Hours</p>
          {collapsible && !open && todayRow && (
            <p className={`mt-0.5 ${s.subtitle}`}>Today · {todayRow.hours}</p>
          )}
        </div>

        {collapsible && (
          <ChevronDown
            className={`h-4 w-4 shrink-0 transition-transform ${s.chevron} ${open ? 'rotate-180' : ''}`}
          />
        )}
      </button>

      {open && (
        <ul className={s.list}>
          {BUSINESS_HOURS.map((row) => {
            const isToday = row.day === today

            return (
              <li
                key={row.day}
                className={`flex items-center justify-between gap-4 text-sm ${
                  isToday ? s.today : s.day
                }`}
              >
                <span>{row.day}</span>
                <span className={!row.open ? s.closed : ''}>{row.hours}</span>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
