import { AnimatePresence, motion } from "framer-motion";
import { useLocation, useOutlet } from "react-router-dom";
import { Header } from "@/components/template/Header";
import { Footer } from "@/components/template/Footer";
import { ScrollView } from "@/components/atoms/view/ScrollView";

export function Layout() {
	const outlet = useOutlet();
	const location = useLocation();

	return (
		<div className="w-full h-screen overflow-hidden flex flex-col">
			<Header />
			<ScrollView>
				<AnimatePresence mode="wait">
					<motion.main className="w-full" key={location.pathname}>
						{outlet}
					</motion.main>
				</AnimatePresence>
				<Footer />
			</ScrollView>
		</div>
	);
}
