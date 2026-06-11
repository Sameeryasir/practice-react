import logoNavbar from '../../assets/Logo1.png'
import logoFooter from '../../assets/Logo3.png'

export default function Logo({ className = '', size = 'md', variant = 'navbar' }) {
  const logoImage = variant === 'footer' ? logoFooter : logoNavbar

  const sizes = {
    sm: 'h-10',
    md: 'h-14 sm:h-16',
    lg: variant === 'footer' ? 'h-20 sm:h-24' : 'h-16 sm:h-20',
  }

  return (
    <a href="#home" className={`group inline-flex shrink-0 items-center ${className}`}>
      <img
        src={logoImage}
        alt="Bridges Home Services"
        className={`${sizes[size]} w-auto object-contain transition-transform duration-300 group-hover:scale-105`}
      />
    </a>
  )
}
