import * as React from "react";
import { cn } from "@/lib/utils";

// Note: We might need to install class-variance-authority and @radix-ui/react-slot if we want full Shadcn-like power, but for now I will implement a simpler version without those peer dependencies to keep it light, OR I will stick to simple props.
// Actually, using cva is very standard. I'll stick to a simple implementation without CVA if I didn't install it.
// I didn't install cva. I'll implement it with simple clsx logic or install cva. 
// I'll install cva and radix-slot in the next step to be professional, but for this step I will implement a robust button without them to save time, or use a simple switch.
// Let's use simple string interpolation for now to avoid ensuring extra deps, or I'll just install them. The plan didn't explicitly say "install shadcn", so I'll build a custom Button.

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "default", ...props }, ref) => {
        const baseStyles = "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 transition-all duration-300";

        const variants = {
            primary: "bg-gold hover:bg-[#C5A028] text-white shadow-md hover:shadow-lg",
            secondary: "bg-charcoal text-white hover:bg-black",
            outline: "border border-gold text-gold hover:bg-gold/10",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
        };

        const sizes = {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-12 rounded-md px-8 text-base",
            icon: "h-10 w-10",
        };

        return (
            <button
                className={cn(baseStyles, variants[variant], sizes[size], className)}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
