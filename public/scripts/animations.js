// ClaudeMockup Animation
(function() {
  function initClaudeChat() {
    const sequences = [
      {
        user: 'Rédige une mise en demeure pour SARL Méridien, facture F-2025-731, 14 200 €, délai 15 jours.',
        claude: `Mise en demeure

SARL Méridien · Réf. 2026-0418

Maître, agissant pour le compte de la société susvisée, nous vous mettons en demeure de procéder au règlement de la somme de 14 200 euros au titre de la facture n° F-2025-731...

✓ Références vérifiées · ✓ Art. 1344 C. civ. · ✓ Signable`
      },
      {
        user: "Quels sont les risques si j'utilise ChatGPT gratuit pour mes dossiers ?",
        claude: `Trois risques majeurs :

1. Secret professionnel — art. 226-13 CP : vos données clients partent hors UE sans DPA.
2. Hallucinations — en décembre 2025, un avocat a cité des arrêts fictifs devant le TA d'Orléans.
3. AI Act art. 4 : sanction jusqu'à 15 M€ si votre cabinet ne forme pas son personnel.`
      }
    ];

    let seqIndex = 0;
    let active = true;

    const chatContainer = document.getElementById('claude-chat');
    const userBubble = document.getElementById('claude-user-bubble');
    const userText = document.getElementById('claude-user-text');
    const claudeResponse = document.getElementById('claude-response');
    const claudeText = document.getElementById('claude-text');
    const userCursor = document.getElementById('claude-user-cursor');
    const claudeCursor = document.getElementById('claude-cursor');

    if (!chatContainer || !userText || !claudeText) return;

    // Check reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      userBubble.classList.remove('opacity-0');
      userBubble.classList.add('opacity-100');
      claudeResponse.classList.remove('opacity-0');
      claudeResponse.classList.add('opacity-100');
      userText.textContent = sequences[0].user;
      claudeText.textContent = sequences[0].claude;
      userCursor.style.display = 'none';
      claudeCursor.style.display = 'none';
      return;
    }

    const sleep = ms => new Promise(r => setTimeout(r, ms));

    async function typeText(element, text, cursor, speed) {
      cursor.style.display = 'inline';
      for (let i = 0; i <= text.length; i++) {
        if (!active) return;
        element.textContent = text.slice(0, i);
        chatContainer.scrollTop = chatContainer.scrollHeight;
        await sleep(speed);
      }
      cursor.style.display = 'none';
    }

    async function runSequence() {
      const seq = sequences[seqIndex];

      // Reset
      userBubble.classList.add('opacity-0');
      userBubble.classList.remove('opacity-100');
      claudeResponse.classList.add('opacity-0');
      claudeResponse.classList.remove('opacity-100');
      userText.textContent = '';
      claudeText.textContent = '';

      await sleep(200);
      if (!active) return;

      // Show user bubble
      userBubble.classList.remove('opacity-0');
      userBubble.classList.add('opacity-100');
      await typeText(userText, seq.user, userCursor, 35);
      if (!active) return;

      await sleep(400);
      if (!active) return;

      // Show claude response
      claudeResponse.classList.remove('opacity-0');
      claudeResponse.classList.add('opacity-100');
      await typeText(claudeText, seq.claude, claudeCursor, 18);
      if (!active) return;

      await sleep(2500);
      if (!active) return;

      // Fade out
      userBubble.classList.add('opacity-0');
      userBubble.classList.remove('opacity-100');
      claudeResponse.classList.add('opacity-0');
      claudeResponse.classList.remove('opacity-100');
      await sleep(300);

      seqIndex = (seqIndex + 1) % sequences.length;
    }

    async function loop() {
      while (active) {
        await runSequence();
        await sleep(500);
      }
    }

    // Start animation
    loop();

    // Cleanup on navigation
    window.addEventListener('beforeunload', () => { active = false; });
  }

  // Programme scroll-spy
  function initProgrammeScrollSpy() {
    const menuItems = document.querySelectorAll('[data-module-menu]');
    const slides = document.querySelectorAll('[data-module-slide]');
    const container = document.getElementById('programme-container');

    if (!menuItems.length || !slides.length || !container) return;

    let currentIndex = 0;

    function setActive(index) {
      if (index === currentIndex) return;
      currentIndex = index;

      // Update menu
      menuItems.forEach((item, i) => {
        if (i === index) {
          item.classList.add('opacity-100', 'border-l-accent');
          item.classList.remove('opacity-50', 'border-l-transparent');
          item.querySelector('[data-num]').classList.add('text-accent');
          item.querySelector('[data-num]').classList.remove('text-muted');
        } else {
          item.classList.remove('opacity-100', 'border-l-accent');
          item.classList.add('opacity-50', 'border-l-transparent');
          item.querySelector('[data-num]').classList.remove('text-accent');
          item.querySelector('[data-num]').classList.add('text-muted');
        }
      });

      // Update slides
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.remove('opacity-0', 'translate-y-4');
          slide.classList.add('opacity-100', 'translate-y-0');
        } else {
          slide.classList.add('opacity-0', 'translate-y-4');
          slide.classList.remove('opacity-100', 'translate-y-0');
        }
      });
    }

    // Click handlers
    menuItems.forEach((item, i) => {
      item.addEventListener('click', () => setActive(i));
    });

    // Scroll spy
    function onScroll() {
      const containerRect = container.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;

      // Calculate progress through the section
      const sectionTop = containerRect.top;
      const sectionHeight = containerRect.height;
      const scrollProgress = (viewportCenter - sectionTop) / sectionHeight;

      // Map scroll progress to module index
      const newIndex = Math.min(
        Math.max(0, Math.floor(scrollProgress * 5)),
        4
      );

      if (containerRect.top < viewportCenter && containerRect.bottom > viewportCenter) {
        setActive(newIndex);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });

    // Initial state
    setActive(0);
  }

  // FAQ Accordion
  function initFaqAccordion() {
    const items = document.querySelectorAll('[data-faq-item]');

    if (!items.length) return;

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

  // Initialize when DOM is ready
  // Wait for React to finish rendering (createRoot clears and re-renders)
  function init() {
    initClaudeChat();
    initProgrammeScrollSpy();
    initFaqAccordion();
  }

  function waitForElements() {
    // Check if key elements exist (React has finished rendering)
    const hasChat = document.getElementById('claude-chat');
    const hasFaq = document.querySelector('[data-faq-item]');

    if (hasChat || hasFaq) {
      init();
    } else {
      // Retry after a short delay
      setTimeout(waitForElements, 100);
    }
  }

  // Start checking after DOM is loaded
  // Wait longer initially to ensure React's createRoot has finished rendering
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setTimeout(waitForElements, 500));
  } else {
    setTimeout(waitForElements, 500);
  }
})();
