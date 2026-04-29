import * as React from "react";
import { cn } from "@/lib/utils";

type TypographyProps = React.HTMLAttributes<HTMLElement> & {
  variant?: "h1" | "h2" | "h3" | "p" | "span";
};

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ className, variant = "p", children, ...props }, ref) => {
    const Component = variant as React.ElementType;
    return (
      <Component ref={ref} className={cn(className)} {...props}>
        {children}
      </Component>
    );
  }
);
Typography.displayName = "Typography";
