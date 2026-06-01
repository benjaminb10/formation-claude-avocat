import * as React from 'react'
import { cn } from '~/lib/utils'

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'w-full bg-white/[0.04] border border-white/10 text-white rounded-[8px] px-4 py-3 font-body text-[15px]',
          'placeholder:text-white/20',
          'transition-all duration-150 ease-out resize-y min-h-[84px]',
          'focus:outline-none focus:border-accent focus:ring-[3px] focus:ring-accent/15',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Textarea.displayName = 'Textarea'

export { Textarea }
