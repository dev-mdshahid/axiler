import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary disabled:pointer-events-none disabled:opacity-50",
        variant === "primary" &&
          "bg-brand-primary text-white hover:bg-brand-primary-dark active:scale-[0.98]",
        variant === "secondary" &&
          "bg-brand-secondary text-white hover:opacity-90",
        variant === "outline" &&
          "border border-neutral-300 bg-transparent text-foreground hover:bg-neutral-100",
        variant === "ghost" &&
          "bg-transparent text-foreground hover:bg-neutral-100",
        size === "sm" && "h-9 px-3 text-sm",
        size === "md" && "h-11 px-5 text-base",
        size === "lg" && "h-13 px-7 text-lg",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
