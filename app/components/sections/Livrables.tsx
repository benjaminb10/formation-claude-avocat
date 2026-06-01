const livrables = [
  {
    num: '01',
    title: 'Mise en demeure',
    text: "Faits, qualification juridique, fondements légaux, délai, conséquences. Conforme aux standards du cabinet. 8 minutes au lieu d'une heure.",
    tag: '8 min · Signable',
    stripOpacity: '100',
  },
  {
    num: '02',
    title: "Fiche d'arrêt",
    text: 'Parties, faits, procédure, question de droit, solution, portée. Format calibré sur votre pratique. Idéal pour préparer les plaidoiries.',
    tag: 'Standard cabinet',
    stripOpacity: '70',
  },
  {
    num: '03',
    title: 'Recherche Légifrance',
    text: "Via le connecteur MCP officiel. Chaque arrêt est vérifiable en un clic. L'hallucination jurisprudentielle devient structurellement impossible.",
    tag: 'MCP Légifrance',
    stripOpacity: '50',
  },
  {
    num: '04',
    title: 'Dossier de plaidoirie',
    text: "Tamponnage, numérotation, bordereau, extraction des jurisprudences, fiches d'arrêt. Une demi-journée de travail réduite à vingt minutes.",
    tag: '20 min · Complet',
    stripOpacity: '35',
  },
]

export function Livrables() {
  return (
    <section className="py-[100px] bg-surface max-md:py-16" id="livrables">
      <div className="wrap">
        <p className="eyebrow">CE QUE VOUS SAUREZ FAIRE</p>
        <h2 className="text-h2 font-heading font-bold mt-3.5 max-w-[620px] max-md:text-[28px]">
          Quatre actes maîtrisés à la fin de la session.
        </h2>

        <div className="grid grid-cols-2 gap-5 mt-12 max-w-[1100px] max-md:grid-cols-1">
          {livrables.map((liv) => (
            <div
              key={liv.num}
              className="bg-white border border-border rounded-card overflow-hidden transition-shadow duration-200 hover:shadow-card"
            >
              <div
                className="h-2"
                style={{ background: `rgba(218,119,86,${parseInt(liv.stripOpacity) / 100})` }}
              />
              <div className="flex gap-4 items-start p-7">
                <div className="font-heading font-extrabold text-[52px] text-accent leading-none w-14 shrink-0">
                  {liv.num}
                </div>
                <div>
                  <h3 className="font-heading font-bold text-[17px] text-ink mb-2">
                    {liv.title}
                  </h3>
                  <p className="text-[15px] text-text leading-[1.65]">
                    {liv.text}
                  </p>
                </div>
              </div>
              <div className="px-7 pb-5">
                <span className="inline-block bg-surface border border-border rounded-full px-3 py-1 text-[11px] text-[#8B8FAA] uppercase tracking-[0.08em]">
                  {liv.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
