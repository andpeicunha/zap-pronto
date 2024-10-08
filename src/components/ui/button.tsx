import { Slot } from '@radix-ui/react-slot'
import { type VariantProps, cva } from 'class-variance-authority'
import * as React from 'react'

import { cn } from '@/utils'

const buttonVariants = cva(
  [
    'inline-flex items-center justify-center',
    'whitespace-nowrap',
    'rounded-md text-sm font-normal',
    'ring-offset-background transition-colors',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:opacity-50 disabled:cursor-not-allowed disabled:!bg-gray-300 disabled:!text-gray-500',
  ],
  {
    variants: {
      variant: {
        default: 'bg-primary hover:!bg-primary-foreground text-white',
        secondary: 'bg-secondary text-white hover:bg-secondary-foreground',
        highlight: 'bg-highlight hover:!bg-highlight-foreground text-primary font-medium',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        'icon-menu': '!justify-start text-primary [&_svg:only-of-type]:!ml-6 [&_svg:only-of-type]:!mr-4',
      },
      size: {
        default: 'px-8 py-3 text-lg',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10 !text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
