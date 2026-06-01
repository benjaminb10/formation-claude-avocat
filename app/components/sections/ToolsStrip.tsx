const tools = [
  { name: 'Claude', display: <span className="wm-claude"><span className="text-accent text-xl mr-1">✳</span>Claude</span> },
  { name: 'Légifrance', display: <span className="wm-legifrance">Légi<b>france</b></span> },
  { name: 'Word', display: <span className="wm-word flex items-center gap-[7px]"><span className="inline-flex items-center justify-center w-[26px] h-[26px] rounded bg-[#2B579A] text-white font-heading font-extrabold text-base">W</span>Word</span> },
  { name: 'Doctrine', display: <span className="wm-doctrine">Doctrine</span> },
  { name: 'Dalloz', display: <span className="wm-dalloz">Dalloz</span> },
  { name: 'Anthropic', display: <span className="wm-anthropic">Anthropic</span> },
]

export function ToolsStrip() {
  return (
    <section className="bg-white py-[52px] border-b border-border max-md:py-10" id="outils">
      <div className="wrap">
        <div className="text-center font-body text-eyebrow font-medium uppercase tracking-[0.14em] text-muted mb-[30px]">
          OUTILS COUVERTS PENDANT LA FORMATION
        </div>
        <div className="flex flex-wrap items-center justify-center gap-[28px_52px] max-md:gap-[22px_36px]">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center justify-center h-[34px] opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-200 text-[22px] text-[#4A4F6B] whitespace-nowrap tracking-tight font-heading font-bold max-md:text-lg"
            >
              {tool.display}
            </div>
          ))}
        </div>
        <div className="text-center text-sm text-muted mt-[30px] max-w-[560px] mx-auto leading-[1.5]">
          Vous repartez avec une méthode applicable à votre stack, quel que soit
          votre éditeur juridique.
        </div>
      </div>
    </section>
  )
}
