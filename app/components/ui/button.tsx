import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '~/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap font-heading font-bold text-[15px] transition-all duration-[180ms] ease-out cursor-pointer disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        default:
          'bg-accent text-white rounded-[8px] hover:bg-accent-hover',
        ghost:
          'bg-transparent border border-ink text-ink rounded-[8px] hover:bg-ink hover:text-white',
        nav:
          'bg-accent text-white rounded-[8px] hover:bg-accent-hover font-medium text-sm font-body',
      },
      size: {
        default: 'px-7 py-3.5',
        sm: 'px-5 py-2.5 text-sm',
        lg: 'px-7 py-4 text-base',
        full: 'w-full py-4 text-[15px]',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'

export { Button, buttonVariants }
