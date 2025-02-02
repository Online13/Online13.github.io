import { motion } from "framer-motion";
import SocialNetworkLinks from "../molecules/SocialNetworkLinks";

export function Footer() {
	return (
		<motion.footer
			layout
			className="h-56 bg-[#0E0F12] text-slate-100 relative"
			initial={{ y: "100%" }}
			whileInView={{ y: 0 }}
			viewport={{ amount: 0.9 }}
			style={{ transformOrigin: "bottom" }}
		>
			<div className=" relative z-30 container flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0 py-8 overflow-visible">
				<p className="text-sm">
					© This site was designed and developed by{" "}
					<span className="font-medium">@Rayane</span>
				</p>
				<div className="inline-block">
					<SocialNetworkLinks />
				</div>
			</div>
		</motion.footer>
	);
}
