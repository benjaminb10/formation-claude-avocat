import { Check } from 'lucide-react'

const modules = [
  {
    num: '01',
    title: 'Cadre & confidentialité',
    duration: '30 min',
    description:
      'On pose le cadre avant de toucher au moindre dossier : quels plans Claude utiliser, sous quel encadrement juridique, et avec quelles garanties pour le secret professionnel.',
    points: [
      'Plans Free / Pro / Team / Enterprise comparés',
      'DPA, RGPD et obligations CNB',
      'AI Act article 4 · audit express de votre stack',
    ],
  },
  {
    num: '02',
    title: "L'interface Claude",
    duration: '60 min',
    description:
      "Prise en main complète de l'environnement de travail : organiser ses dossiers, choisir le bon modèle, et brancher Légifrance pour des jurisprudences réellement sourcées.",
    points: [
      'Projets par dossier et mémoire contextuelle',
      'Opus / Sonnet / Haiku : lequel, quand',
      'Connecteur Légifrance via MCP · zéro hallucination',
    ],
  },
  {
    num: '03',
    title: 'Les Skills',
    duration: '60 min',
    description:
      "On construit en direct un Skill « Mise en demeure » calibré sur les standards de votre cabinet, réutilisable par toute l'équipe en un clic.",
    points: [
      "Création d'un Skill pas à pas",
      'Calibrage sur vos modèles de cabinet',
      'Partage et bonnes pratiques en équipe',
    ],
  },
  {
    num: '04',
    title: 'Cowork',
    duration: '60 min',
    description:
      "Un dossier de plaidoirie complet monté ensemble : de la numérotation des pièces jusqu'aux fiches d'arrêt, en passant par l'extraction des jurisprudences citées.",
    points: [
      'Numérotation des pièces et bordereau',
      'Extraction des jurisprudences citées',
      "Fiches d'arrêt générées automatiquement",
    ],
  },
  {
    num: '05',
    title: 'Claude dans Word',
    duration: '30 min',
    description:
      'Le complément officiel Anthropic (avril 2026) intégré à votre traitement de texte : éditer, réviser et appliquer vos Skills sans quitter Word.',
    points: [
      'Complément officiel Anthropic',
      'Édition par sélection · suivi de modifications natif',
      'Skills partagés depuis Claude.ai',
    ],
  },
]

export function Programme() {
  return (
    <section className="py-[100px] max-md:py-16" id="programme">
      <div className="wrap">
        <div className="mb-5">
          <p className="eyebrow">PROGRAMME</p>
          <h2 className="text-h2 font-heading font-bold mt-3.5 max-w-[600px] max-md:text-[28px]">
            5 modules. 4 heures. Les vrais actes du cabinet.
          </h2>
          <p className="text-[17px] text-text mt-5 max-w-[560px]">
            Chaque module part d'un acte réel. Vous repartez avec des Skills
            configurés sur vos standards. Tout se déroule en visio, en direct
            avec vos équipes.
          </p>
        </div>

        <div
          id="programme-container"
          className="grid grid-cols-[288px_1fr] gap-14 items-start max-md:grid-cols-1 max-md:gap-0"
        >
          {/* Menu - hidden on mobile */}
          <div className="sticky top-[104px] flex flex-col max-md:hidden">
            {modules.map((mod, index) => (
              <button
                key={mod.num}
                data-module-menu
                className={`flex gap-4 items-center py-[18px] pl-[18px] cursor-pointer border-t border-border border-l-2 transition-all duration-300 text-left bg-transparent ${
                  index === modules.length - 1 ? 'border-b' : ''
                } ${index === 0 ? 'opacity-100 border-l-accent' : 'opacity-50 border-l-transparent'}`}
              >
                <span
                  data-num
                  className={`font-heading font-extrabold text-xl transition-colors duration-300 ${
                    index === 0 ? 'text-accent' : 'text-muted'
                  }`}
                >
                  {mod.num}
                </span>
                <span className="flex flex-col gap-0.5">
                  <span className="font-heading font-bold text-[15px] text-ink">
                    {mod.title}
                  </span>
                  <span className="text-xs text-muted">{mod.duration} · Visio</span>
                </span>
              </button>
            ))}
          </div>

          {/* Slides - Desktop */}
          <div className="sticky top-[104px] max-md:hidden">
            <div className="relative w-full h-[420px]">
              {modules.map((mod, index) => (
                <div
                  key={mod.num}
                  data-module-slide
                  className={`absolute inset-0 bg-white border border-border rounded-[14px] p-11 overflow-hidden shadow-[0_16px_48px_rgba(12,14,26,0.1)] transition-all duration-500 ${
                    index === 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                  style={{ borderColor: index === 0 ? 'rgba(218,119,86,0.25)' : undefined }}
                >
                  <div className="absolute -top-1.5 right-6 font-heading font-extrabold text-[130px] leading-none text-accent/[0.07] pointer-events-none">
                    {mod.num}
                  </div>
                  <div className="flex items-center gap-3 font-body text-xs font-medium uppercase tracking-[0.1em] text-accent mb-3.5">
                    Module {mod.num} · {mod.duration}
                    <span className="inline-flex items-center gap-1.5 bg-surface border border-border rounded-full px-2.5 py-[3px] text-muted tracking-[0.06em]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2DB36B]" />
                      Visio
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-[30px] text-ink mb-3.5 tracking-tight">
                    {mod.title}
                  </h3>
                  <p className="text-[17px] text-text leading-[1.65] max-w-[560px] mb-6">
                    {mod.description}
                  </p>
                  <ul className="list-none flex flex-col gap-2.5">
                    {mod.points.map((point, i) => (
                      <li
                        key={i}
                        className="relative pl-7 text-[15px] text-ink leading-[1.45]"
                      >
                        <span className="absolute left-0 top-0.5 w-[18px] h-[18px] rounded-full bg-accent-light flex items-center justify-center">
                          <Check className="w-3 h-3 text-accent" strokeWidth={3} />
                        </span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile: all slides stacked */}
          <div className="hidden max-md:flex max-md:flex-col max-md:gap-4">
            {modules.map((mod) => (
              <div
                key={mod.num}
                className="relative w-full bg-white border border-border rounded-[14px] p-[30px_24px_28px] overflow-hidden"
              >
                <div className="absolute -top-1.5 right-3.5 font-heading font-extrabold text-[96px] leading-none text-accent/[0.07] pointer-events-none">
                  {mod.num}
                </div>
                <div className="flex items-center gap-3 font-body text-xs font-medium uppercase tracking-[0.1em] text-accent mb-3.5">
                  Module {mod.num} · {mod.duration}
                </div>
                <h3 className="font-heading font-bold text-2xl text-ink mb-3.5 tracking-tight">
                  {mod.title}
                </h3>
                <p className="text-base text-text leading-[1.65] mb-6">
                  {mod.description}
                </p>
                <ul className="list-none flex flex-col gap-2.5">
                  {mod.points.map((point, i) => (
                    <li
                      key={i}
                      className="relative pl-7 text-[15px] text-ink leading-[1.45]"
                    >
                      <span className="absolute left-0 top-0.5 w-[18px] h-[18px] rounded-full bg-accent-light flex items-center justify-center">
                        <Check className="w-3 h-3 text-accent" strokeWidth={3} />
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
