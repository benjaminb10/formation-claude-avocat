import { Check } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { ClaudeMockup } from './ClaudeMockup'

const badges = [
  { label: 'Qualiopi' },
  { label: 'FIF-PL' },
  { label: 'Claude Team' },
  { label: '4 heures' },
]

export function Hero() {
  return (
    <section className="py-[90px] max-md:py-14" id="hero">
      <div className="wrap">
        <div className="grid grid-cols-[54fr_46fr] gap-[60px] items-center max-md:grid-cols-1 max-md:gap-10">
          {/* Left */}
          <div>
            <p className="eyebrow">FORMATION INTRA-CABINET · FRANCE ENTIÈRE</p>
            <h1 className="text-h1 font-heading font-extrabold mt-[18px] mb-[22px] max-md:text-4xl">
              Formez votre cabinet à{' '}
              <span className="text-accent">Claude.</span> En une demi-journée.
            </h1>
            <p className="text-lg text-text max-w-[460px] leading-[1.6] max-md:max-w-none">
              La formation 100% dédiée à Claude pour les avocats français.
              Conforme secret professionnel, AI Act et recommandations CNB.
            </p>

            <div className="flex gap-3.5 mt-[30px] flex-wrap max-md:flex-col">
              <Button asChild>
                <a href="#contact">Demander un devis</a>
              </Button>
              <Button asChild variant="ghost">
                <a href="#programme">Voir le programme ↓</a>
              </Button>
            </div>

            <div className="flex flex-wrap gap-2 mt-[26px]">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className="inline-flex items-center gap-[7px] whitespace-nowrap bg-white border border-border rounded-pill px-[13px] py-[7px] text-[13px] font-medium text-ink"
                >
                  <span className="inline-flex items-center justify-center w-[15px] h-[15px] rounded-[3px] bg-accent text-white text-[9px] font-bold">
                    <Check className="w-2.5 h-2.5" strokeWidth={3} />
                  </span>
                  {badge.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            <ClaudeMockup />
          </div>
        </div>
      </div>
    </section>
  )
}
