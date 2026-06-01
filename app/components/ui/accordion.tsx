'use client'

import * as React from 'react'
import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { Plus, Minus } from 'lucide-react'
import { cn } from '~/lib/utils'

const Accordion = AccordionPrimitive.Root

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Item>
>(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn('border-b border-border', className)}
    {...props}
  />
))
AccordionItem.displayName = 'AccordionItem'

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Trigger>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Header className="flex">
    <AccordionPrimitive.Trigger
      ref={ref}
      className={cn(
        'flex flex-1 items-center justify-between py-[22px] font-heading font-bold text-[16.5px] text-ink transition-colors',
        'hover:text-accent [&[data-state=open]]:text-ink',
        'group cursor-pointer',
        className
      )}
      {...props}
    >
      {children}
      <div
        className={cn(
          'relative w-7 h-7 shrink-0 rounded-[8px] border border-border bg-white',
          'transition-all duration-200 ease-out',
          'group-hover:border-accent',
          'group-data-[state=open]:bg-accent group-data-[state=open]:border-accent'
        )}
      >
        <Plus
          className={cn(
            'absolute inset-0 m-auto h-3 w-3 text-ink transition-all duration-300',
            'group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0 group-data-[state=open]:text-white'
          )}
        />
        <Minus
          className={cn(
            'absolute inset-0 m-auto h-3 w-3 text-white opacity-0 transition-all duration-300',
            'group-data-[state=open]:opacity-100'
          )}
        />
      </div>
    </AccordionPrimitive.Trigger>
  </AccordionPrimitive.Header>
))
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof AccordionPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof AccordionPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <AccordionPrimitive.Content
    ref={ref}
    className="overflow-hidden text-[15px] text-text leading-[1.7] transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
    {...props}
  >
    <div className={cn('pb-6 pr-12', className)}>{children}</div>
  </AccordionPrimitive.Content>
))

AccordionContent.displayName = AccordionPrimitive.Content.displayName

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent }
