import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import React from "react";
import { cn } from "./utils"; // Ensure you import the `cn` function for class merging

export const Dialog = DialogPrimitive.Root;
export const DialogTrigger = DialogPrimitive.Trigger;
export const DialogClose = DialogPrimitive.Close;

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ children, className, ...props }, ref) => (
  <DialogPrimitive.Portal>
    <DialogPrimitive.Overlay className="fixed inset-0 bg-black bg-opacity-50 z-50" />
    <DialogPrimitive.Content
      ref={ref}
      {...props}
      className={cn(
        "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-50",
        className
      )}
    >
      {children}
      <DialogPrimitive.Close className="absolute top-3 right-3">
        <X className="w-5 h-5" />
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPrimitive.Portal>
));

export const DialogHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <div className={cn("mb-4", className)}>{children}</div>;

export const DialogTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => <h2 className={cn("text-xl font-semibold", className)}>{children}</h2>;
