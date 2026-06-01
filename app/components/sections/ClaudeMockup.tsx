import { Pencil, Clock, Star, ArrowUp } from 'lucide-react'

export function ClaudeMockup() {
  return (
    <div className="bg-[#1C1917] border border-white/[0.08] rounded-card overflow-hidden h-[420px] w-full flex flex-col shadow-mockup max-md:h-[400px] max-sm:h-[340px] max-md:mx-4 max-sm:mx-3">
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
        <div className="w-11 shrink-0 bg-[#1C1917] border-r border-white/[0.08] flex flex-col items-center gap-5 pt-4 max-sm:hidden">
          <Pencil className="w-[18px] h-[18px] text-white opacity-30" />
          <Clock className="w-[18px] h-[18px] text-white opacity-30" />
          <Star className="w-[18px] h-[18px] text-white opacity-30" />
        </div>

        {/* Chat */}
        <div
          id="claude-chat"
          className="flex-1 p-4 max-sm:p-3 overflow-y-auto flex flex-col justify-end gap-4 max-sm:gap-3"
        >
          {/* User bubble */}
          <div
            id="claude-user-bubble"
            className="flex justify-end opacity-0"
          >
            <div className="bg-[#2C2925] border border-white/10 rounded-[18px_18px_4px_18px] px-3.5 py-2.5 max-w-[85%] max-sm:max-w-[95%] text-sm text-white/85 leading-[1.5]">
              <span id="claude-user-text"></span>
              <span id="claude-user-cursor" className="typing-cursor">▋</span>
            </div>
          </div>

          {/* Claude response */}
          <div
            id="claude-response"
            className="flex gap-2.5 items-start opacity-0"
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
    </div>
  )
}
