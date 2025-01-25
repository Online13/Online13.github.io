import { ClassValue } from "clsx";
import { PropsWithChildren } from "react";
import { cn } from "@/utils";
import { motion } from "framer-motion";

const TRANSITION_PAGE_FADE_MOVE = {
	initial: { opacity: 0, y: -100 },
	animate: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: 100 },
	transition: {
		duration: 0.4,
		easings: ["easeInOut"],
	},
};

export function MotionBox({
	children,
	className,
}: PropsWithChildren<{ className?: ClassValue }>) {
	return (
		<motion.div
			className={cn("w-full h-full", className)}
			{...TRANSITION_PAGE_FADE_MOVE}
		>
			{children}
		</motion.div>
	);
}
