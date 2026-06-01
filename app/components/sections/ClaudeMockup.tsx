import { Pencil, Clock, Star, ArrowUp } from 'lucide-react'

const sequences = [
  {
    user: 'Rédige une mise en demeure pour SARL Méridien, facture F-2025-731, 14 200 €, délai 15 jours.',
    claude: `Mise en demeure

SARL Méridien · Réf. 2026-0418

Maître, agissant pour le compte de la société susvisée, nous vous mettons en demeure de procéder au règlement de la somme de 14 200 euros au titre de la facture n° F-2025-731...

✓ Références vérifiées · ✓ Art. 1344 C. civ. · ✓ Signable`,
  },
  {
    user: "Quels sont les risques si j'utilise ChatGPT gratuit pour mes dossiers ?",
    claude: `Trois risques majeurs :

1. Secret professionnel — art. 226-13 CP : vos données clients partent hors UE sans DPA.
2. Hallucinations — en décembre 2025, un avocat a cité des arrêts fictifs devant le TA d'Orléans.
3. AI Act art. 4 : sanction jusqu'à 15 M€ si votre cabinet ne forme pas son personnel.`,
  },
]

// Script vanilla JS pour l'animation (contourne les problèmes d'hydratation React)
const animationScript = `
(function() {
  const sequences = ${JSON.stringify(sequences)};
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
    userBubble.style.opacity = '1';
    claudeResponse.style.opacity = '1';
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
    userBubble.style.opacity = '0';
    claudeResponse.style.opacity = '0';
    userText.textContent = '';
    claudeText.textContent = '';

    await sleep(200);
    if (!active) return;

    // Show user bubble
    userBubble.style.opacity = '1';
    await typeText(userText, seq.user, userCursor, 35);
    if (!active) return;

    await sleep(400);
    if (!active) return;

    // Show claude response
    claudeResponse.style.opacity = '1';
    await typeText(claudeText, seq.claude, claudeCursor, 18);
    if (!active) return;

    await sleep(2500);
    if (!active) return;

    // Fade out
    userBubble.style.opacity = '0';
    claudeResponse.style.opacity = '0';
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
})();
`

export function ClaudeMockup() {
  return (
    <div className="bg-[#1C1917] border border-white/[0.08] rounded-card overflow-hidden h-[420px] w-full flex flex-col shadow-mockup max-md:h-[400px] max-md:max-w-[340px] max-md:mx-auto">
      {/* CSS for animations */}
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .typing-cursor {
          display: none;
          animation: blink 0.53s step-end infinite;
          color: #DA7756;
          margin-left: 1px;
        }
        #claude-user-bubble,
        #claude-response {
          transition: opacity 0.3s ease;
        }
      `}</style>

      {/* Title bar */}
      <div className="bg-[#252220] h-11 px-4 shrink-0 flex items-center gap-2">
        <div className="flex gap-2">
          <span className="w-3 h-3 rounded-full bg-[#FF5F57]" />
          <span className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
          <span className="w-3 h-3 rounded-full bg-[#28C840]" />
        </div>
        <span className="w-px h-5 bg-white/10 mx-2" />
        <span className="text-[13px] text-white/50">claude.ai</span>
        <svg className="ml-auto" width="18" height="18" viewBox="0 0 24 24" fill="none">
          <path d="M12 2.5c-1.1 3-2.6 5.1-5 6.5 2.4 1.4 3.9 3.5 5 6.5 1.1-3 2.6-5.1 5-6.5-2.4-1.4-3.9-3.5-5-6.5z" fill="#DA7756" />
          <path d="M6 14.5c-.7 1.9-1.7 3.3-3.2 4.2 1.5.9 2.5 2.3 3.2 4.2.7-1.9 1.7-3.3 3.2-4.2-1.5-.9-2.5-2.3-3.2-4.2z" fill="#DA7756" opacity="0.7" />
        </svg>
      </div>

      {/* Main */}
      <div className="flex-1 flex min-h-0">
        {/* Sidebar */}
        <div className="w-11 shrink-0 bg-[#1C1917] border-r border-white/[0.08] flex flex-col items-center gap-5 pt-4">
          <Pencil className="w-[18px] h-[18px] text-white opacity-30" />
          <Clock className="w-[18px] h-[18px] text-white opacity-30" />
          <Star className="w-[18px] h-[18px] text-white opacity-30" />
        </div>

        {/* Chat */}
        <div
          id="claude-chat"
          className="flex-1 p-4 overflow-y-auto flex flex-col justify-end gap-4"
        >
          {/* User bubble */}
          <div
            id="claude-user-bubble"
            className="flex justify-end"
            style={{ opacity: 0 }}
          >
            <div className="bg-[#2C2925] border border-white/10 rounded-[18px_18px_4px_18px] px-3.5 py-2.5 max-w-[85%] text-sm text-white/85 leading-[1.5]">
              <span id="claude-user-text"></span>
              <span id="claude-user-cursor" className="typing-cursor">▋</span>
            </div>
          </div>

          {/* Claude response */}
          <div
            id="claude-response"
            className="flex gap-2.5 items-start"
            style={{ opacity: 0 }}
          >
            <div className="w-6 h-6 shrink-0 rounded-full bg-accent text-white font-body font-bold text-xs flex items-center justify-center">
              C
            </div>
            <div className="text-sm text-white/80 leading-[1.6] whitespace-pre-wrap flex-1">
              <span id="claude-text"></span>
              <span id="claude-cursor" className="typing-cursor">▋</span>
            </div>
          </div>
        </div>
      </div>

      {/* Input bar */}
      <div className="bg-[#252220] border-t border-white/[0.08] h-12 shrink-0 px-4 flex items-center gap-2.5">
        <span className="text-[13px] text-white/25">Message Claude...</span>
        <span className="ml-auto w-7 h-7 rounded-full bg-accent flex items-center justify-center">
          <ArrowUp className="w-3.5 h-3.5 text-white" strokeWidth={2.4} />
        </span>
      </div>

      {/* Animation script - runs after DOM is ready */}
      <script dangerouslySetInnerHTML={{ __html: animationScript }} />
    </div>
  )
}
