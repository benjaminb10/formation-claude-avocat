import { Star } from 'lucide-react'

export function Temoignage() {
  return (
    <section className="bg-dark py-[100px] max-md:py-16" id="temoignage">
      <div className="wrap">
        <p className="eyebrow !text-white/40">ILS ONT SUIVI LA FORMATION</p>

        <div className="grid grid-cols-[38fr_62fr] gap-20 items-center mt-9 max-md:grid-cols-1 max-md:gap-8">
          {/* Left - Photo & info */}
          <div>
            <img
              src="/assets/fabrice-taieb.png"
              alt="Maître Fabrice Taieb"
              className="w-[220px] h-[260px] rounded-card object-cover object-[center_20%] max-md:w-full max-md:h-[280px]"
            />
            <div className="font-heading font-bold text-lg text-white mt-5">
              Maître Fabrice Taieb
            </div>
            <div className="text-[13px] text-white/50 mt-1">Avocat</div>
            <div className="inline-block bg-white/[0.07] rounded-pill px-3.5 py-2 mt-3 text-[13px] text-white/60">
              Cabinet Fabrice Taieb
            </div>
          </div>

          {/* Right - Quote */}
          <div>
            <svg
              className="text-accent opacity-50"
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="currentColor"
            >
              <path d="M0 30c0-11 6-20 18-26l3 6c-7 4-11 9-12 15h9v17H0V30zm26 0c0-11 6-20 18-26l3 6c-7 4-11 9-12 15h9v17H26V30z" />
            </svg>
            <p className="font-heading font-bold text-[23px] text-white leading-[1.45] max-w-[520px] mt-4 max-md:text-xl">
              "En deux heures, mes collaborateurs produisaient des mises en
              demeure avec Claude. La semaine suivante, on a préparé un dossier
              de plaidoirie complet avec Cowork. C'est la première formation qui
              tient ses promesses."
            </p>
            <p className="text-[15px] text-white/50 mt-6">
              Formation suivie en mars 2026 · Droit des affaires
            </p>
            <div className="flex gap-1 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-accent fill-accent"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
