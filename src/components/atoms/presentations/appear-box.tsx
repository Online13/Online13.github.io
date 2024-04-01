import { cn } from "@/lib/shadcn/utils";
import { gsap, useGSAP } from "@/lib/gsap";
import { PropsWithChildren, useRef } from "react";

type AppearBoxProps = PropsWithChildren<{
	delay?: number;
	className?: string;
}>;

export function AppearBox({ delay = 0, children, className }: AppearBoxProps) {
	const rootRef = useRef<HTMLDivElement | null>(null);
	const containerRef = useRef<HTMLDivElement | null>(null);
	useGSAP(
		() => {
			gsap.from(containerRef.current, {
				opacity: 0,
				delay: delay,
				yPercent: 100,
				scrollTrigger: {
					trigger: rootRef.current,
					start: "top center"
				},
			});
		},
		{ dependencies: [delay], scope: rootRef }
	);

	return (
		<div
			ref={rootRef}
			className={cn("overflow-hidden", className)}
			style={{
				clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
			}}
		>
			<div ref={containerRef}>{children}</div>
		</div>
	);
}
