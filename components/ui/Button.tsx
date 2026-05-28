import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline";
}

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center font-semibold text-sm px-6 py-3 rounded-md transition-opacity";
  const variants = {
    primary: "bg-brand-green text-brand-dark hover:opacity-90",
    outline: "border border-brand-green text-brand-green hover:bg-brand-green hover:text-brand-dark",
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}
