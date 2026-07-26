import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import type { ButtonHTMLAttributes } from "react";
const buttonVariants = cva("inline-flex items-center justify-center rounded-lg text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", { variants: { variant: { default: "bg-sky text-white shadow-lg shadow-sky/20 hover:-translate-y-0.5 hover:bg-[#1266d6]", outline: "border border-white/50 bg-white/10 text-white backdrop-blur hover:bg-white hover:text-ink", dark: "bg-ink text-white hover:-translate-y-0.5 hover:bg-navy" }, size: { default: "h-11 px-5", lg: "h-12 px-6 text-base" } }, defaultVariants: { variant: "default", size: "default" } });
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}
export function Button({ className, variant, size, ...props }: ButtonProps) { return <button className={cn(buttonVariants({ variant, size }), className)} {...props} />; }
