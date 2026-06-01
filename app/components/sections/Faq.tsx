import { Plus, Minus } from 'lucide-react'

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

// Script vanilla JS pour l'accordion (contourne les problèmes d'hydratation React)
const accordionScript = `
(function() {
  function init() {
    const items = document.querySelectorAll('[data-faq-item]');

    items.forEach(item => {
      const trigger = item.querySelector('[data-faq-trigger]');
      const content = item.querySelector('[data-faq-content]');
      const iconPlus = item.querySelector('[data-icon-plus]');
      const iconMinus = item.querySelector('[data-icon-minus]');
      const iconBox = item.querySelector('[data-icon-box]');

      if (!trigger || !content) return;

      trigger.addEventListener('click', () => {
        const isOpen = item.getAttribute('data-state') === 'open';

        // Close all other items
        items.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.setAttribute('data-state', 'closed');
            const otherContent = otherItem.querySelector('[data-faq-content]');
            const otherPlus = otherItem.querySelector('[data-icon-plus]');
            const otherMinus = otherItem.querySelector('[data-icon-minus]');
            const otherBox = otherItem.querySelector('[data-icon-box]');
            if (otherContent) {
              otherContent.style.maxHeight = '0px';
              otherContent.style.opacity = '0';
            }
            if (otherPlus) {
              otherPlus.style.opacity = '1';
              otherPlus.style.transform = 'rotate(0deg)';
            }
            if (otherMinus) otherMinus.style.opacity = '0';
            if (otherBox) {
              otherBox.style.backgroundColor = 'white';
              otherBox.style.borderColor = '#E3E5EE';
            }
          }
        });

        // Toggle current item
        if (isOpen) {
          item.setAttribute('data-state', 'closed');
          content.style.maxHeight = '0px';
          content.style.opacity = '0';
          if (iconPlus) {
            iconPlus.style.opacity = '1';
            iconPlus.style.transform = 'rotate(0deg)';
          }
          if (iconMinus) iconMinus.style.opacity = '0';
          if (iconBox) {
            iconBox.style.backgroundColor = 'white';
            iconBox.style.borderColor = '#E3E5EE';
          }
        } else {
          item.setAttribute('data-state', 'open');
          content.style.maxHeight = content.scrollHeight + 'px';
          content.style.opacity = '1';
          if (iconPlus) {
            iconPlus.style.opacity = '0';
            iconPlus.style.transform = 'rotate(90deg)';
          }
          if (iconMinus) iconMinus.style.opacity = '1';
          if (iconBox) {
            iconBox.style.backgroundColor = '#DA7756';
            iconBox.style.borderColor = '#DA7756';
          }
        }
      });
    });

    // Open first item by default
    const firstItem = items[0];
    if (firstItem) {
      firstItem.setAttribute('data-state', 'open');
      const content = firstItem.querySelector('[data-faq-content]');
      const iconPlus = firstItem.querySelector('[data-icon-plus]');
      const iconMinus = firstItem.querySelector('[data-icon-minus]');
      const iconBox = firstItem.querySelector('[data-icon-box]');
      if (content) {
        content.style.maxHeight = content.scrollHeight + 'px';
        content.style.opacity = '1';
      }
      if (iconPlus) {
        iconPlus.style.opacity = '0';
        iconPlus.style.transform = 'rotate(90deg)';
      }
      if (iconMinus) iconMinus.style.opacity = '1';
      if (iconBox) {
        iconBox.style.backgroundColor = '#DA7756';
        iconBox.style.borderColor = '#DA7756';
      }
    }
  }

  // Wait for DOM to be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    requestAnimationFrame(init);
  }
})();
`

export function Faq() {
  return (
    <section className="py-[100px] bg-surface max-md:py-16" id="faq">
      <style>{`
        [data-faq-content] {
          transition: max-height 0.3s ease-out, opacity 0.3s ease-out;
          overflow: hidden;
        }
        [data-icon-plus], [data-icon-minus] {
          transition: opacity 0.3s ease, transform 0.3s ease;
        }
        [data-icon-box] {
          transition: background-color 0.2s ease, border-color 0.2s ease;
        }
        [data-faq-trigger]:hover [data-icon-box] {
          border-color: #DA7756 !important;
        }
      `}</style>

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
          <div className="border-t border-border">
            {faqItems.map((item) => (
              <div
                key={item.id}
                data-faq-item
                data-state="closed"
                className="border-b border-border"
              >
                <button
                  type="button"
                  data-faq-trigger
                  className="flex w-full items-center justify-between py-[22px] font-heading font-bold text-[16.5px] text-ink transition-colors hover:text-accent cursor-pointer text-left"
                >
                  {item.question}
                  <div
                    data-icon-box
                    className="relative w-7 h-7 shrink-0 rounded-[8px] border border-border bg-white"
                  >
                    <Plus
                      data-icon-plus
                      className="absolute inset-0 m-auto h-3 w-3 text-ink"
                      style={{ opacity: 1, transform: 'rotate(0deg)' }}
                    />
                    <Minus
                      data-icon-minus
                      className="absolute inset-0 m-auto h-3 w-3 text-white"
                      style={{ opacity: 0 }}
                    />
                  </div>
                </button>
                <div
                  data-faq-content
                  style={{ maxHeight: '0px', opacity: 0 }}
                >
                  <div className="pb-6 pr-12 text-[15px] text-text leading-[1.7]">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Accordion script - runs after DOM is ready */}
      <script dangerouslySetInnerHTML={{ __html: accordionScript }} />
    </section>
  )
}
