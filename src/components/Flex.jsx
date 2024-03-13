import * as React from "react";

import { cn } from "@/lib/utils";


const Flex = React.forwardRef(({ className, between, center, ...props }, ref) => <div ref={ref} className={cn(className, "flex items-center", between && "justify-between", center && "justify-center")} {...props} />);

Flex.col = React.forwardRef(({ className, between, center, ...props }, ref) => <div ref={ref} className={cn(className, "flex flex-col w-auto", between && "justify-between", center && "justify-center")} {...props} />);

Flex.col.displayName = "FlexCol"


Flex.displayName = "Flex";

export { Flex };
