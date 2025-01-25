import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";
import { useScrollUpdate } from "@/stores/scroll-store";
import { Header } from "@/components/template/Header";
import { Footer } from "@/components/template/Footer";
import { ScrollView } from "@/components/atoms/view/ScrollView";

export function Layout() {
	const outlet = useOutlet();
	const location = useLocation();
	const updateScroll = useScrollUpdate();

	useEffect(() => {
		updateScroll(0, 0);
	}, [location, updateScroll]);

	return (
		<AnimatePresence mode="wait">
			<motion.main
				className="w-full h-full flex flex-col"
				key={location.pathname}
			>
				<Header />
				<ScrollView>
					<div className="w-full">{outlet}</div>
					<Footer />
				</ScrollView>
			</motion.main>
		</AnimatePresence>
	);
}
