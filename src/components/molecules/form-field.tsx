import * as React from "react";
import { Label } from "@/components/atoms/label";
import { Input, InputProps } from "@/components/atoms/input";
import { Typography } from "@/components/atoms/typography";
import { cn } from "@/lib/utils";

interface FormFieldProps extends InputProps {
  label: string;
  errorMsg?: string;
  description?: string;
}

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, errorMsg, description, className, ...props }, ref) => {
    return (
      <div className={cn("grid w-full items-center gap-1.5", className)}>
        <Label htmlFor={props.id} className={errorMsg ? "text-red-500" : ""}>
          {label}
        </Label>
        <Input ref={ref} error={!!errorMsg} {...props} />
        {description && !errorMsg && (
          <Typography variant="span" className="text-xs text-muted-foreground">
            {description}
          </Typography>
        )}
        {errorMsg && (
          <Typography variant="span" className="text-xs text-red-500">
            {errorMsg}
          </Typography>
        )}
      </div>
    );
  }
);
FormField.displayName = "FormField";
