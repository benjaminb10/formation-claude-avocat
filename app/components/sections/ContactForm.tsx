import { Button } from '~/components/ui/button'

const WHATSAPP_NUMBER = '33620546538'
const WHATSAPP_MESSAGE = 'Bonjour, je souhaite en savoir plus sur la formation Claude pour avocats.'

const reassurances = [
  'Réponse personnelle sous 24 heures, pas un email automatique.',
  'Devis adapté à la taille et aux pratiques de votre cabinet.',
]

// Official WhatsApp logo SVG
function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 448 512"
      fill="currentColor"
      className={className}
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  )
}

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
              <WhatsAppIcon className="w-10 h-10 text-[#25D366]" />
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
                <WhatsAppIcon className="w-5 h-5 mr-2" />
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
