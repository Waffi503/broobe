import * as React from "react"

import { cn } from "@/lib/utils"

const Button = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    (<button
      type={type}
      className={cn(
        "flex w-full rounded-md border border-input  text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2",
        className
      )}
      ref={ref}
      {...props} />)
  );
})
Button.displayName = "Button"

export { Button }
