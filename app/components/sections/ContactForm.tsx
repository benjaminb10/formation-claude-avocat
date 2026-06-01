import { MessageCircle } from 'lucide-react'
import { Button } from '~/components/ui/button'

const WHATSAPP_NUMBER = '33620546538'
const WHATSAPP_MESSAGE = 'Bonjour, je souhaite en savoir plus sur la formation Claude pour avocats.'

const reassurances = [
  'Réponse personnelle sous 24 heures, pas un email automatique.',
  'Devis adapté à la taille et aux pratiques de votre cabinet.',
]

export function ContactForm() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`

  return (
    <section className="bg-dark py-[120px] max-md:py-[72px]" id="contact">
      <div className="wrap">
        <div className="grid grid-cols-2 gap-20 items-center max-w-[1000px] mx-auto max-md:grid-cols-1 max-md:gap-10">
          {/* Left */}
          <div>
            <h2 className="font-heading font-extrabold text-[44px] text-white text-left max-w-[400px] leading-[1.1] max-md:text-[30px] max-md:max-w-none">
              Quinze minutes pour tout comprendre.
            </h2>
            <p className="text-[17px] text-white/50 mt-[18px] mb-10">
              Vous nous décrivez votre cabinet. On vous propose un format.
            </p>

            <div className="flex flex-col gap-5">
              {reassurances.map((item, i) => (
                <div key={i} className="flex gap-3.5 items-start">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#DA7756"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="shrink-0 mt-0.5"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M8.5 12.5l2.5 2.5 4.5-5" />
                  </svg>
                  <span className="text-[15px] text-white/70 leading-[1.5]">
                    {item}
                  </span>
                </div>
              ))}
            </div>

          </div>

          {/* Right - WhatsApp CTA */}
          <div className="bg-[#161829] border border-white/[0.08] rounded-[14px] p-9 max-md:p-7 text-center">
            <div className="w-20 h-20 bg-[#25D366]/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-10 h-10 text-[#25D366]" />
            </div>

            <h3 className="font-heading font-bold text-xl text-white mb-2">
              Réservez un créneau
            </h3>
            <p className="text-white/50 text-[15px] mb-8">
              Échangeons directement sur WhatsApp pour définir vos besoins.
            </p>

            <Button
              asChild
              size="full"
              className="bg-[#25D366] hover:bg-[#20BD5A] text-white"
            >
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Discuter sur WhatsApp
              </a>
            </Button>

            <p className="text-xs text-white/25 mt-4">
              Réponse sous 24h · Confidentiel
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
