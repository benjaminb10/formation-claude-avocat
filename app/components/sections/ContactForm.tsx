import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { CheckCircle } from 'lucide-react'
import { Button } from '~/components/ui/button'
import { Input } from '~/components/ui/input'
import { Textarea } from '~/components/ui/textarea'
import { Label } from '~/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '~/components/ui/select'

const formSchema = z.object({
  nom: z.string().min(1, 'Veuillez entrer votre nom'),
  email: z.string().email('Veuillez entrer un email valide'),
  cabinet: z.string().min(1, 'Veuillez entrer le nom du cabinet'),
  taille: z.enum(['1-5', '5-15', '15-30', '30+'], {
    errorMap: () => ({ message: 'Veuillez sélectionner une taille' }),
  }),
  message: z.string().max(2000).optional(),
})

type FormData = z.infer<typeof formSchema>

const reassurances = [
  'Réponse personnelle sous 24 heures, pas un email automatique.',
  'Devis adapté à la taille et aux pratiques de votre cabinet.',
  'Finançable FIF-PL, OPCO Atlas ou CPF. On vous accompagne.',
]

const financeTags = ['FIF-PL', 'OPCO Atlas', 'CPF']

export function ContactForm() {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    try {
      setError(null)
      // TODO: Replace with server function call when TanStack Start API stabilizes
      // For now, simulate a successful submission
      console.log('Form data:', data)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      setSuccess(true)
    } catch {
      setError('Une erreur est survenue. Veuillez réessayer.')
    }
  }

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

            <div className="h-px bg-white/[0.08] my-8" />

            <div className="flex gap-6 items-center flex-wrap">
              {financeTags.map((tag) => (
                <span
                  key={tag}
                  className="bg-white/[0.06] border border-white/10 rounded-pill px-3.5 py-2 text-[13px] text-white/50"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-[#161829] border border-white/[0.08] rounded-[14px] p-9 max-md:p-7">
            {success ? (
              <div className="text-center py-8">
                <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="font-heading font-bold text-xl text-white mb-2">
                  Demande envoyée !
                </h3>
                <p className="text-white/50">
                  Nous vous répondons sous 24 heures.
                </p>
              </div>
            ) : (
              <>
                <div className="mb-7">
                  <div className="font-heading font-bold text-lg text-white">
                    Demander un devis
                  </div>
                  <div className="text-sm text-white/40 mt-1">
                    Réponse sous 24h · Confidentiel
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="grid grid-cols-2 gap-3 max-md:grid-cols-1">
                    <div className="mb-4">
                      <Label>Votre nom</Label>
                      <Input
                        {...register('nom')}
                        placeholder="Maître Dupont"
                      />
                      {errors.nom && (
                        <p className="text-accent text-xs mt-1">
                          {errors.nom.message}
                        </p>
                      )}
                    </div>
                    <div className="mb-4">
                      <Label>Email professionnel</Label>
                      <Input
                        {...register('email')}
                        type="email"
                        placeholder="dupont@cabinet.fr"
                      />
                      {errors.email && (
                        <p className="text-accent text-xs mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-4">
                    <Label>Nom du cabinet</Label>
                    <Input {...register('cabinet')} />
                    {errors.cabinet && (
                      <p className="text-accent text-xs mt-1">
                        {errors.cabinet.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <Label>Nombre d'avocats</Label>
                    <Select
                      onValueChange={(value) =>
                        setValue('taille', value as FormData['taille'])
                      }
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1-5">1-5</SelectItem>
                        <SelectItem value="5-15">5-15</SelectItem>
                        <SelectItem value="15-30">15-30</SelectItem>
                        <SelectItem value="30+">30+</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.taille && (
                      <p className="text-accent text-xs mt-1">
                        {errors.taille.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-4">
                    <Label>Message</Label>
                    <Textarea
                      {...register('message')}
                      rows={3}
                      placeholder="Votre spécialité, vos enjeux actuels avec l'IA..."
                    />
                  </div>

                  {error && (
                    <p className="text-accent text-sm mb-4">{error}</p>
                  )}

                  <Button
                    type="submit"
                    size="full"
                    className="mt-2"
                    disabled={isSubmitting}
                  >
                    {isSubmitting
                      ? 'Envoi en cours...'
                      : 'Recevoir un devis sous 24 heures'}
                  </Button>

                  <p className="text-xs text-white/25 text-center mt-3.5">
                    Données non transmises à des tiers
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
