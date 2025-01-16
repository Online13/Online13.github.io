import { ClassValue } from "clsx";
import { PropsWithChildren, useEffect } from "react";
import { cn } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";
import { useScrollUpdate } from "@/stores/scroll-store";
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { ScrollView } from "@/components/atoms/view/ScrollView";

export function Layout() {
	const outlet = useOutlet();
	const location = useLocation();
	const updateScroll = useScrollUpdate();

	useEffect(() => {
		updateScroll(0, 0);
	}, [location]);

	return (
		<AnimatePresence mode="wait">
			<motion.main
				className="w-full h-full flex flex-col"
				key={location.pathname}
			>
				<Header />
				<ScrollView>
					<div className="w-full h-full">
						{outlet}
					</div>
					<Footer />
				</ScrollView>
			</motion.main>
		</AnimatePresence>
	);
}

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
