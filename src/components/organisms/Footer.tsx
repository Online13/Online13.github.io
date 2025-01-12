import { motion } from "framer-motion";
import SocialNetworkLinks from "../molecules/SocialNetworkLinks";

export function Footer() {
	return (
		<motion.footer
			className="h-56 bg-[#0E0F12] text-slate-100 relative"
			initial={{ scaleY: 0.5 }}
			whileInView={{ scaleY: 1 }}
			viewport={{ amount: 0.1 }}
			style={{ transformOrigin: "bottom" }}
		>
			<div className="container h-full flex flex-col md:flex-row justify-between gap-4 md:gap-0 py-4">
				<p className="text-base">
					Designed & Built by <span className="font-medium">@Rayane</span>
				</p>
				<div className="inline-block">
					<SocialNetworkLinks />
				</div>
			</div>
		</motion.footer>
	);
}
