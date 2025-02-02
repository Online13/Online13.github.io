import { motion } from "framer-motion";
import { cn } from "@/utils";

export function ProjectBannerSection() {
	return (
		<div
			className={cn(
				"w-full py-16 flex flex-col justify-center items-center border-y border-border relative"
			)}
		>
			<h1 className="overflow-hidden flex items-center text-xl lg:text-2xl font-semibold">
				<motion.span
					initial={{ opacity: 0, y: 200 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.3, duration: 0.8 }}
				>
					Projects.
         </motion.span>
			</h1>
		</div>
	);
}
