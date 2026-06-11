import { Phone, MapPin, Mail } from 'lucide-react'
import FacebookIcon from './ui/FacebookIcon'
import Logo from './ui/Logo'
import { Container } from './ui/SectionWrapper'
import BusinessHours from './ui/BusinessHours'
import { NAV_LINKS, COMPANY } from '../data/content'

function ContactRow({ icon: Icon, href, children, external }) {
  const inner = (
    <>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-secondary ring-1 ring-white/10">
        <Icon className="h-4 w-4" />
      </span>
      <span className="pt-1 text-sm leading-snug text-slate-400 transition-colors group-hover:text-white">
        {children}
      </span>
    </>
  )

  const className = 'group flex items-start gap-3'

  if (href) {
    return (
      <a href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined} className={className}>
        {inner}
      </a>
    )
  }

  return <div className={className}>{inner}</div>
}

export default function Footer() {
  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t-2 border-secondary/40 bg-dark">
      <Container className="py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo size="lg" variant="footer" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Professional home comfort and maintenance services you can trust. Serving the Greater Toronto Area with pride.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-slate-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + CTA combined */}
          <div className="lg:col-span-5">
            <h4 className="font-display text-xs font-bold uppercase tracking-widest text-white">Contact Us</h4>

            <p className="mt-3 text-base font-semibold text-white">{COMPANY.owner}</p>

            <div className="mt-4 space-y-3.5">
              <ContactRow icon={Phone} href={`tel:${COMPANY.phone}`}>
                {COMPANY.phoneDisplay}
              </ContactRow>
              <ContactRow icon={Mail} href={`mailto:${COMPANY.email}`}>
                {COMPANY.email}
              </ContactRow>
              <ContactRow icon={MapPin} href={COMPANY.maps} external>
                {COMPANY.address}
              </ContactRow>
              <ContactRow icon={FacebookIcon} href={COMPANY.facebook} external>
                Follow us on Facebook
              </ContactRow>
            </div>

            <div className="mt-5">
              <BusinessHours variant="dark" collapsible />
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-500">
            Licensed &amp; Insured Home Service Professionals
          </p>
        </div>
      </Container>
    </footer>
  )
}
