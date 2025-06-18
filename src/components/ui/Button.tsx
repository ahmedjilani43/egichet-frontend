import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline"
  children: ReactNode
}

export function Button({ variant = "default", className = "", children, ...props }: ButtonProps) {
  const baseStyles = "px-4 py-2 rounded-md font-medium transition-colors"
  const variants = {
    default: "bg-blue-600 text-white hover:bg-blue-700",
    outline: "border border-gray-300 text-gray-700 hover:bg-gray-50",
  }

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
