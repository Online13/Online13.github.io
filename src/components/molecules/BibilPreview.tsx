import { motion } from "framer-motion";
import { ChooseMockup } from "../atoms/illustration/bibil/ChooseMockup";
import { CustomerMockup } from "../atoms/illustration/bibil/CustomerMockup";
import { ProviderMockup } from "../atoms/illustration/bibil/ProviderMockup";
import { cn } from "@/utils";

const title = "Bibil";
const subtitle = "An app for easy car rentals in Madagascar.";

export function BibilPreview() {
	return (
		<motion.div
			initial="initial"
			whileHover="end"
			className="group border-b border-b-border cursor-pointer duration-500 rounded-md mt-4"
		>
			<div
				className={cn(
					"w-full h-[420px] border border-border hover:border-primary rounded-xl overflow-hidden z-20 flex relative"
				)}
			>
				<motion.div
					variants={{
						initial: { flex: 3 },
						end: { flex: 2 },
					}}
					className="flex-[3]"
				>
					<motion.div
						variants={{
							initial: { height: "100%", opacity: 1 },
							end: { height: 0, padding: 0, opacity: 0 },
						}}
						className="space-y-4 py-4 flex flex-1 items-center justify-center overflow-hidden"
					>
						<div className="transition-[padding]">
							<h2 className="text-xl lg:text-2xl font-semibold text-[#002AFF]">
								{title}
							</h2>
							<h2 className="text-xl lg:text-2xl font-semibold max-w-sm text-stone-500">
								{subtitle}
							</h2>
						</div>
					</motion.div>
					<div className="flex flex-1 items-center">
						<motion.div
							variants={{
								initial: { y: 0 },
								end: { y: 20 },
							}}
						>
							<motion.div className="w-full px-2">
								<CustomerMockup />
							</motion.div>
						</motion.div>
						<motion.div
							variants={{
								initial: { y: 0 },
								end: { y: 50 },
							}}
						>
							<motion.div className="w-full px-2">
								<ChooseMockup />
							</motion.div>
						</motion.div>
					</div>
				</motion.div>
				<motion.div
					variants={{
						initial: { flex: 2 },
						end: { flex: 1 },
					}}
				>
					<motion.div
						className="w-full p-2 pt-6"
						variants={{
							initial: {
								y: 0,
							},
							end: {
								y: 0,
								paddingTop: 0
							},
						}}
					>
						<ProviderMockup />
					</motion.div>
				</motion.div>
			</div>
		</motion.div>
	);
}

{
	/* <motion.div
			initial="initial"
			whileHover="end"
			className="w-full h-full relative flex items-center bg-stone-900/5"
		>
			<div className="w-full h-full">
				<motion.div
					className="w-9/12 py-4 mx-auto"
					// variants={{
					// 	initial: {
					// 		y: "-5%",
					// 	},
					// 	end: {
					// 		y: 0,
					// 	},
					// }}
				>
					<ProviderMockup />
				</motion.div>
			</div>
			<div className="w-full h-full grid grid-rows-2">
				<div className="w-full h-full flex items-end">
					<motion.div
						className="w-9/12 shrink-0 grow-1 py-4 mx-auto"
						// variants={{
						// 	initial: {
						// 		y: "20%",
						// 	},
						// 	end: {
						// 		y: 0,
						// 	},
						// }}
					>
						<CustomerMockup />
					</motion.div>
				</div>
				<div className="w-full h-full">
					<motion.div
						className="w-9/12 py-4 mx-auto"
						// variants={{
						// 	initial: {
						// 		y: "-1%",
						// 	},
						// 	end: {
						// 		y: 0,
						// 	},
						// }}
					>
						<ChooseMockup />
					</motion.div>
				</div>
			</div>
		</motion.div> */
}

{
	/* <motion.div
			initial="initial"
			whileHover="end"
			className="w-full h-full relative grid grid-cols-3 bg-stone-900/5 overflow-hidden"
		>
			<div className="w-full h-full flex items-center justify-center #bg-[#007AFF]">
				<motion.div
					className="w-44 h-full py-4"
					variants={{
						initial: {
							y: 100,
							width: 271,
						},
						end: {
							y: 0,
							width: 171,
						},
					}}
				>
					<ProviderMockup />
				</motion.div>
			</div>
			<div className="w-full h-full flex items-center justify-center #bg-[#05C7BB]">
				<motion.div
					className="w-44 h-full py-4"
					variants={{
						initial: {
							y: 50,
							width: 271,
						},
						end: {
							y: 0,
							width: 171,
						},
					}}
				>
					<ChooseMockup />
				</motion.div>
			</div>
			<div className="w-full h-full flex items-center justify-center #bg-[#8A3FFC]">
				<motion.div
					className="w-44 h-full py-4"
					variants={{
						initial: {
							y: 100,
							width: 271,
						},
						end: {
							y: 0,
							width: 171,
						},
					}}
				>
					<CustomerMockup />
				</motion.div>
			</div>
		</motion.div> */
}
