const formateurs = [
  {
    name: '[Prénom NOM]',
    role: 'Formateur Claude',
    initials: 'FN',
    creds: [
      { label: 'Expérience', value: '15 ans' },
      { label: 'Spécialité', value: 'Skills & MCP' },
      { label: 'Média', value: 'BFM Business · 2026' },
    ],
    bio: [
      "[Prénom NOM] forme les cabinets d'avocats et les directions juridiques à l'usage opérationnel de Claude. Chaque session part de vos actes réels, pas de slides théoriques sur l'IA générative.",
      "Spécialiste du déploiement d'outils IA dans des environnements exigeants, il connaît les contraintes de confidentialité et de fiabilité propres aux métiers du droit, et construit chaque atelier autour d'elles, sans jamais se substituer au juriste.",
      "[Référence notable : BFM Business, intervention, publication...]",
    ],
    tags: ['Claude spécialiste', 'Déploiement IA', 'Pédagogie'],
  },
  {
    name: '[Prénom NOM]',
    role: 'Formateur Claude',
    initials: 'FN',
    creds: [
      { label: 'Expérience', value: '[X] ans' },
      { label: 'Spécialité', value: 'Claude · Formation' },
      { label: 'Référence', value: '[à compléter]' },
    ],
    bio: [
      "[Prénom NOM] accompagne les professionnels du droit dans la prise en main concrète de Claude, du premier prompt jusqu'aux Skills partagés en équipe.",
      '[Parcours à compléter : expertise IA / produit / formation, sans positionnement juridique.]',
      '[Référence notable : intervention, publication...]',
    ],
    tags: ['IA appliquée', '[à personnaliser]', '[à personnaliser]'],
  },
]

export function Formateurs() {
  return (
    <section className="py-[100px] max-md:py-16" id="formateurs">
      <div className="wrap">
        <p className="eyebrow">VOS FORMATEURS</p>
        <h2 className="text-h2 font-heading font-bold mt-3.5 max-md:text-[28px]">
          Deux formateurs. Une méthode.
        </h2>
        <p className="text-[17px] text-text mt-5 max-w-[580px]">
          On part d'un acte réel de votre cabinet. On le produit avec Claude. On
          vérifie chaque référence.
        </p>

        <div className="grid grid-cols-2 gap-6 mt-12 max-w-[1100px] max-md:grid-cols-1">
          {formateurs.map((f, idx) => (
            <div
              key={idx}
              className="relative bg-white border border-border rounded-2xl overflow-hidden p-9 transition-all duration-[250ms] hover:shadow-card-hover hover:border-accent/[0.28]"
            >
              <div className="absolute top-[18px] right-7 font-heading font-extrabold text-[56px] leading-none text-ink/5 pointer-events-none">
                {String(idx + 1).padStart(2, '0')}
              </div>

              <div className="flex gap-5 items-center mb-[26px]">
                {/* Placeholder photo */}
                <div className="w-[84px] h-[84px] rounded-2xl bg-[#EEF0F6] flex items-center justify-center font-heading font-extrabold text-[26px] text-[#A6ABC4] shrink-0">
                  {f.initials}
                </div>
                <div>
                  <div className="font-heading font-extrabold text-[23px] text-ink tracking-tight">
                    {f.name}
                  </div>
                  <div className="inline-flex items-center gap-[7px] whitespace-nowrap text-xs text-accent uppercase tracking-[0.1em] mt-[7px] font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {f.role}
                  </div>
                </div>
              </div>

              <div className="mb-6 border-t border-border">
                {f.creds.map((cred, i) => (
                  <div
                    key={i}
                    className="flex justify-between items-baseline gap-4 py-[11px] px-0.5 border-b border-border"
                  >
                    <span className="text-[13px] text-muted shrink-0 whitespace-nowrap">
                      {cred.label}
                    </span>
                    <span className="font-body font-medium text-sm text-ink text-right whitespace-nowrap">
                      {cred.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mb-3">
                {f.bio.map((para, i) => (
                  <p
                    key={i}
                    className="text-[14.5px] text-text leading-[1.7] mb-3 last:mb-0"
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div className="flex flex-wrap gap-2 mt-[22px]">
                {f.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-white text-accent border border-accent/[0.32] rounded-pill px-3 py-1.5 text-xs font-medium whitespace-nowrap"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
