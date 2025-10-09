"use client"

import * as React from "react"

import { cn } from "@/lib/utils"

type ButtonOwnProps = {
  variant?: "default" | "outline" | "secondary" | (string & {})
  size?: "sm" | "lg" | "icon" | (string & {})
}

function Button({
  className,
  variant, // accepted for API compatibility
  size, // accepted for API compatibility
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonOwnProps) {
  return (
    <button
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:opacity-50 disabled:pointer-events-none",
        className
      )}
      {...props}
    />
  )
}

export { Button }



