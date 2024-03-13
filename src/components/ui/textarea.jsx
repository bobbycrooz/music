import { cn } from "@/lib/utils"

import * as React from "react";



const Textarea = React.forwardRef(
      ({ className, error, ...props }, ref) =>
      {
            return (
                  <textarea
                        className={cn(
                              "flex min-h-[80px] h-24 p-4 w-full rounded-[12px] border bg-transparent px-4 py-4 text-sm shadow-sm transition-colors resize-none file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:font-[450] placeholder:text-gray-000 focus-visible:outline-none focus-visible:border-none focus-visible:ring-1 disabled:cursor-not-allowed disabled:opacity-50",
                              error
                                    ? "border-error-foreground focus-visible:ring-error-foreground"
                                    : "border-input focus-visible:ring-ring",
                              className
                        )}
                        ref={ref}
                        {...props}
                  />
            );
      }
);

Textarea.displayName = "Textarea";

export { Textarea };
