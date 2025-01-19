import { motion } from "framer-motion";
import BsInfra from "./../../assets/illustrations/BottomSheetInfra.png";
import GeoInfraScreen from "./../../assets/illustrations/GeoInfraScreen.png";

export function GeoInfraPreview() {
	return (
		<motion.div
			initial="initial"
			whileInView="end"
			className="w-full h-full relative flex items-center gap-4 bg-stone-900/5 overflow-hidden"
		>
			<motion.div
				variants={{
					initial: {
						y: "100%",
					},
					end: {
						y: 0,
					},
				}}
				className="w-full h-full flex items-end justify-end pt-12 origin-bottom"
			>
				<img src={BsInfra} alt="" />
			</motion.div>
			<motion.div
				className="w-full h-full p-8"
				whileHover="end"
				variants={{
					initial: {
						y: 0,
					},
					end: {
						y: "-50%",
					},
				}}
			>
				<img src={GeoInfraScreen} alt="" className="w-[250px]" />
			</motion.div>
		</motion.div>
	);
}
