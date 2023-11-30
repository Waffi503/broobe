import * as React from "react"
import { createPortal } from 'react-dom';
import { cn } from "@/lib/utils"

const Modal = React.forwardRef(({ className, open,onClose, children ,...props }, ref) => {
    if(!open) return null;
    return createPortal(
    (<div
      className={cn(
        "fixed inset-0 z-40 bg-background/80 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      )}
      onClick={onClose }
      ref={ref}
      {...props} >
        <div
        onClick={(e)=> e.stopPropagation()} 
        className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg  sm:rounded-lg">
        {children}
        </div>
    </div>
        
        ),document.body 
  );
})
Modal.displayName = "Modal"

export { Modal }
