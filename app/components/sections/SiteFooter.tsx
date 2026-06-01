const footerLinks = [
  {
    title: 'Formation',
    links: [
      { label: 'Programme', href: '#programme' },
      { label: 'Formateurs', href: '#formateurs' },
      { label: 'Témoignages', href: '#temoignage' },
      { label: 'FAQ', href: '#faq' },
    ],
  },
  {
    title: 'Ressources',
    links: [
      { label: 'Claude.ai', href: 'https://claude.ai', external: true },
      { label: 'Anthropic', href: 'https://anthropic.com', external: true },
      { label: 'Légifrance', href: 'https://legifrance.gouv.fr', external: true },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'WhatsApp', href: 'https://wa.me/33620546538', external: true },
      { label: 'contact@formation-claude.fr', href: 'mailto:contact@formation-claude.fr' },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="bg-dark border-t border-white/[0.08]">
      <div className="wrap">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 max-md:grid-cols-2 max-md:gap-8 max-sm:grid-cols-1">
          {/* Brand */}
          <div>
            <div className="font-heading font-bold text-xl text-white mb-4">
              Formation Claude
              <span className="block text-accent text-sm font-medium mt-1">pour Avocats</span>
            </div>
            <p className="text-[14px] text-white/40 leading-[1.6] max-w-[280px]">
              La formation 100% dédiée à Claude pour les cabinets d'avocats français. Conforme secret professionnel, AI Act et recommandations CNB.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.1] transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.1] transition-all"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Links columns */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-heading font-bold text-[13px] text-white/60 uppercase tracking-[0.1em] mb-5">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="text-[14px] text-white/40 hover:text-white transition-colors inline-flex items-center gap-1.5"
                    >
                      {link.label}
                      {link.external && (
                        <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-white/[0.06] flex justify-between items-center gap-4 text-[13px] text-white/30 max-md:flex-col max-md:gap-3 max-md:text-center">
          <div>© 2026 Formation Claude pour Avocats. Tous droits réservés.</div>
          <div className="flex gap-6 max-md:gap-4">
            <a href="#" className="hover:text-white/60 transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-white/60 transition-colors">Confidentialité</a>
            <a href="#" className="hover:text-white/60 transition-colors">CGV</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
