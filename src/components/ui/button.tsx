/* eslint-disable react-refresh/only-export-components */
import * as React from "react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  " rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-secondary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/90",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: " px-4 py-2",
        sm: " rounded-md px-3",
        lg: " rounded-md px-8",
        icon: " w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);
type ButtonIconProp = {
  Icon?: React.ElementType;
  placement?: "right" | "left";
  iconSize?: number;
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & ButtonIconProp
>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      Icon,
      iconSize,
      placement,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {Icon && placement === "left" && (
          <div className="duration-200 ">
            <Icon size={iconSize} />
          </div>
        )}
        <Slottable>{props.children}</Slottable>
        {Icon && placement === "right" && (
          <div className="duration-200 ">
            <Icon size={iconSize} />
          </div>
        )}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
