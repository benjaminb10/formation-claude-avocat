import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '~/components/ui/accordion'

const faqItems = [
  {
    id: 'secret',
    question: 'Le secret professionnel est-il préservé ?',
    answer:
      "La formation utilise uniquement Claude Team ou Enterprise, couverts par un Data Processing Agreement RGPD-conforme. Aucune donnée client réelle n'est utilisée. Les cas pratiques s'appuient sur des faits fictifs ou anonymisés, conformément aux articles 226-13 du Code pénal et 66-5 de la loi du 31 décembre 1971.",
  },
  {
    id: 'difference',
    question: 'Quelle différence entre Claude Pro et Claude Team ?',
    answer:
      "Claude Pro est un plan grand public sans DPA. Claude Team inclut un DPA RGPD, garantit la non-utilisation des données pour l'entraînement des modèles, et permet la gestion centralisée des accès. C'est le minimum requis pour un usage professionnel en cabinet.",
  },
  {
    id: 'cnb',
    question: 'La formation est-elle conforme aux recommandations CNB ?',
    answer:
      "Oui. Le programme intègre les obligations du Règlement Intérieur National (articles 4 et 6) et les recommandations publiées par le CNB. Un mémo déontologique est remis à chaque participant.",
  },
  {
    id: 'aiact',
    question: "L'AI Act impose-t-il une formation à mon cabinet ?",
    answer:
      "Oui. L'article 4 du Règlement (UE) 2024/1689 impose depuis le 2 février 2025 que tout cabinet déployant l'IA garantisse un niveau suffisant de maîtrise par son personnel. Sanction maximale : 15 millions d'euros ou 3% du CA mondial.",
  },
  {
    id: 'participants',
    question: "Combien d'avocats peuvent participer ?",
    answer:
      'La formation est intra-cabinet, sans limite de participants. Pour les grands cabinets, nous recommandons des groupes par spécialité pour calibrer les cas pratiques.',
  },
  {
    id: 'financement',
    question: 'Est-ce finançable FIF-PL ou OPCO ?',
    answer:
      'Oui, via le FIF-PL pour les avocats libéraux, OPCO Atlas pour les cabinets employeurs, CPF pour les salariés. Nous fournissons tous les justificatifs.',
  },
  {
    id: 'ordinateur',
    question: 'Faut-il apporter son ordinateur ?',
    answer:
      'Recommandé mais pas obligatoire. Les cas pratiques peuvent être suivis individuellement (compte Claude Pro ou Team actif) ou projetés en démonstration. Support PDF remis à tous.',
  },
  {
    id: 'tarif',
    question: 'Quel est le tarif ?',
    answer:
      'Sur devis selon la taille du cabinet et le format choisi. Réponse sous 24 heures.',
  },
]

export function Faq() {
  return (
    <section className="py-[100px] bg-surface max-md:py-16" id="faq">
      <div className="wrap">
        <div className="grid grid-cols-[330px_1fr] gap-16 items-start mt-2 max-md:grid-cols-1 max-md:gap-7">
          {/* Left aside */}
          <div className="sticky top-[104px] max-md:static">
            <p className="eyebrow mb-3.5">QUESTIONS</p>
            <h2 className="text-[32px] font-heading font-bold leading-[1.12] max-md:text-[28px]">
              Les questions des associés gérants.
            </h2>
            <div className="mt-[30px] pt-[26px] border-t border-border">
              <p className="text-[15px] text-text mb-1">
                Une question qui n'est pas listée ici ?
              </p>
              <a
                href="#contact"
                className="font-medium text-accent text-[15px] hover:underline"
              >
                Posez-la directement →
              </a>
            </div>
          </div>

          {/* Right - Accordion */}
          <Accordion
            type="single"
            collapsible
            defaultValue="secret"
            className="border-t border-border"
          >
            {faqItems.map((item) => (
              <AccordionItem key={item.id} value={item.id}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
