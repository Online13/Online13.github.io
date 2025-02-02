import { motion, MotionConfig } from "framer-motion";
import { ChooseMockup } from "../atoms/illustration/bibil/ChooseMockup";
import { ProviderMockup } from "../atoms/illustration/bibil/ProviderMockup";
import { ProjectCard } from "./ProjectCard";

const title = "Bibil";
const subtitle = "An app for easy car rentals in Madagascar.";

export function BibilPreview() {
	return (
		<MotionConfig
			transition={{
				duration: 2,
				ease: "anticipate",
			}}
		>
			<ProjectCard>
				<ProjectCard.About>
					<ProjectCard.Title>{title}</ProjectCard.Title>
					<ProjectCard.Description>{subtitle}</ProjectCard.Description>
				</ProjectCard.About>
				<ProjectCard.Preview>
					<motion.div
						className="w-full p-2 pt-6"
						variants={{
							initial: {
								y: 0,
							},
							end: {
								y: "-100%",
							},
						}}
						transition={{
							duration: 2,
							ease: "anticipate",
						}}
					>
						<ProviderMockup />
					</motion.div>
					<motion.div
						className="w-full p-2 pt-6"
						variants={{
							initial: {
								y: 0,
							},
							end: {
								y: "-100%",
							},
						}}
						transition={{
							duration: 2,
							ease: "anticipate",
						}}
					>
						<ChooseMockup />
					</motion.div>
				</ProjectCard.Preview>
			</ProjectCard>
		</MotionConfig>
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
