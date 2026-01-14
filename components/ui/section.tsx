import { cn } from "@/lib/utils";
import React from "react";

export function Section({
    className,
    id,
    children,
    ...props
}: React.HTMLAttributes<HTMLElement>) {
    return (
        <section
            id={id}
            className={cn("py-16 md:py-24 lg:py-32 relative", className)}
            {...props}
        >
            {children}
        </section>
    );
}

export function Container({
    className,
    children,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn("container-custom", className)}
            {...props}
        >
            {children}
        </div>
    );
}
