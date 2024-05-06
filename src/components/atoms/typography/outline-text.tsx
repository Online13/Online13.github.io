import { cn } from "@/lib/shadcn/utils";
import { PropsWithChildren } from "react";

type OutlineTextProps = PropsWithChildren<{
	className?: string;
}>;

const STYLE = {
	WebkitTextStroke: "2px black",
};

export function OutlineText({ className, children }: OutlineTextProps) {
	return (
		<h2
			style={STYLE}
			className={cn("text-9xl font-bold text-white opacity-70", className)}
		>
			{children}
		</h2>
	);
}
