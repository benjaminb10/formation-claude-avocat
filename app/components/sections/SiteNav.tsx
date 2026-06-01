import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useScrolled } from '~/lib/hooks/useScrolled'
import { Button } from '~/components/ui/button'
import { cn } from '~/lib/utils'

const navLinks = [
  { href: '#programme', label: 'Programme' },
  { href: '#formateurs', label: 'Formateurs' },
  { href: '#temoignage', label: 'Témoignage' },
  { href: '#contact', label: 'Contact' },
]

export function SiteNav() {
  const scrolled = useScrolled()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <>
      <nav
        className={cn(
          'sticky top-0 z-[100] h-16 bg-white border-b border-border transition-shadow duration-[250ms]',
          scrolled && 'shadow-nav'
        )}
      >
        <div className="max-w-wrap mx-auto px-8 h-full flex items-center justify-between gap-6">
          <a href="#" className="font-heading font-bold text-lg text-ink">
            Formation Claude pour Avocats
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text hover:text-ink transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </div>

          <Button asChild variant="nav" size="sm" className="hidden md:inline-flex">
            <a href="#contact">Demander un devis</a>
          </Button>

          <button
            className="md:hidden flex flex-col gap-[5px] p-1.5 bg-transparent border-none cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? (
              <X className="w-6 h-6 text-ink" />
            ) : (
              <>
                <span className="block w-[22px] h-0.5 bg-ink" />
                <span className="block w-[22px] h-0.5 bg-ink" />
                <span className="block w-[22px] h-0.5 bg-ink" />
              </>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          'fixed top-16 left-0 right-0 bottom-0 bg-white z-[99] flex-col p-6 gap-1',
          mobileOpen ? 'flex' : 'hidden'
        )}
      >
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setMobileOpen(false)}
            className="text-lg py-3.5 border-b border-border text-ink font-heading font-bold"
          >
            {link.label}
          </a>
        ))}
        <Button asChild className="mt-5 py-3.5 text-[15px] font-heading font-bold">
          <a href="#contact" onClick={() => setMobileOpen(false)}>
            Demander un devis
          </a>
        </Button>
      </div>
    </>
  )
}
