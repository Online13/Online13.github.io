import { cn } from "@/lib/shadcn/utils";
import { PropsWithChildren } from "react";

type OutlineTextProps = PropsWithChildren<{
	className?: string;
}>

export function OutlineText({ className, children }: OutlineTextProps) {
	return (
		<h2
			className={cn(
				"text-9xl font-bold text-white opacity-70",
				className
			)}
			style={{
				WebkitTextStroke: "2px black",
			}}
		>
			{children}
		</h2>
	);
}