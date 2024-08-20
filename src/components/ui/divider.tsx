import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const dividerVariants = cva(
  "bg-grey rounded-full",
  {
    variants: {
      variant: {
        horizontal:
          "w-full h-1",
        vertical:
          "h-ful w-1",
      },
    },
    defaultVariants: {
      variant: "horizontal",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof dividerVariants> {}

function Divider({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(dividerVariants({ variant }), className)} {...props} />
  )
}

export { Divider, dividerVariants }
