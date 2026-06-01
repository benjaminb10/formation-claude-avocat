import { AlertTriangle, Lock, Landmark } from 'lucide-react'

const risks = [
  {
    num: '01',
    icon: AlertTriangle,
    category: 'Jurisprudence',
    title: 'Hallucinations',
    text: "TA d'Orléans, décembre 2025. Un avocat a cité des arrêts fictifs produits par une IA grand public. Les outils non spécialisés n'ont pas accès à Légifrance et inventent des jurisprudences avec l'assurance du fait établi.",
    ref: "TA d'Orléans · Déc. 2025",
  },
  {
    num: '02',
    icon: Lock,
    category: 'Code pénal',
    title: 'Secret professionnel',
    text: "Article 226-13 du Code pénal. Article 66-5 de la loi du 31 décembre 1971. Les plans gratuits transmettent vos données hors UE sans DPA. C'est une violation du secret professionnel passible de sanctions disciplinaires et pénales.",
    ref: 'Art. 226-13 CP · Art. 66-5',
  },
  {
    num: '03',
    icon: Landmark,
    category: 'Règlement UE',
    title: 'AI Act, article 4',
    text: "Applicable depuis le 2 février 2025. Tout cabinet utilisant l'IA doit former son personnel. Sanction : jusqu'à 15 millions d'euros ou 3% du CA mondial. Le 2 août 2026, les obligations sur les systèmes à haut risque entrent en vigueur.",
    ref: 'Règlement (UE) 2024/1689',
  },
]

export function Contexte() {
  return (
    <section className="py-[100px] bg-surface max-md:py-16" id="contexte">
      <div className="wrap">
        <p className="eyebrow">LE CONTEXTE</p>
        <h2 className="text-h2 font-heading font-bold mt-3.5 max-w-[680px] max-md:text-[28px]">
          Trois risques que votre cabinet ne peut plus ignorer.
        </h2>
        <p className="text-[17px] text-text mt-5 max-w-[660px] mb-12">
          En décembre 2025, un avocat français a reçu la première mise en garde
          d'un magistrat pour avoir cité des jurisprudences inexistantes
          générées par IA. Ce n'est pas un cas isolé.
        </p>

        <div className="grid grid-cols-3 gap-5 max-md:grid-cols-1">
          {risks.map((risk) => (
            <div
              key={risk.num}
              className="relative bg-white border border-border rounded-card p-7 overflow-hidden flex flex-col transition-all duration-200 hover:shadow-card hover:border-accent/35"
            >
              <div className="absolute top-2 right-[18px] font-heading font-extrabold text-[88px] leading-none text-accent/[0.08] pointer-events-none">
                {risk.num}
              </div>

              <div className="flex items-center gap-3 mb-5">
                <div className="w-[46px] h-[46px] shrink-0 rounded-[10px] bg-accent-light text-accent flex items-center justify-center">
                  <risk.icon className="w-[22px] h-[22px]" strokeWidth={1.6} />
                </div>
                <div className="font-body text-eyebrow font-medium uppercase text-muted">
                  {risk.category}
                </div>
              </div>

              <h3 className="font-heading font-bold text-h3 mb-3">
                {risk.title}
              </h3>
              <p className="text-[15px] leading-[1.65] flex-1">{risk.text}</p>

              <div className="mt-5 pt-[18px] border-t border-border">
                <span className="inline-flex items-center gap-2 font-body text-[12.5px] text-ink font-medium">
                  <span className="w-[7px] h-[7px] rounded-full bg-accent shrink-0" />
                  {risk.ref}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
