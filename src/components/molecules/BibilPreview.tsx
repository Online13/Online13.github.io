import { motion } from "framer-motion";
import { ChooseMockup } from "../atoms/illustration/bibil/ChooseMockup";
import { CustomerMockup } from "../atoms/illustration/bibil/CustomerMockup";
import { ProviderMockup } from "../atoms/illustration/bibil/ProviderMockup";

export function BibilPreview() {
	return (
		<motion.div
			initial="initial"
			whileHover="end"
			className="w-full h-full relative flex flex-row items-center justify-center gap-4 bg-stone-900/5 overflow-hidden"
		>
			<motion.div
				className="h-full py-4"
				variants={{
					initial: {
						y: "-5%",
					},
					end: {
						y: 0,
					},
				}}
			>
				<ProviderMockup />
			</motion.div>
			<motion.div
				className="h-full py-4"
				variants={{
					initial: {
						y: "20%",
					},
					end: {
						y: 0,
					},
				}}
			>
				<ChooseMockup />
			</motion.div>
			<motion.div
				className="h-full py-4"
				variants={{
					initial: {
						y: "-1%",
					},
					end: {
						y: 0,
					},
				}}
			>
				<CustomerMockup />
			</motion.div>
		</motion.div>
	);
}
