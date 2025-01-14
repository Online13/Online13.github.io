import clsx from "clsx";
import { motion } from "framer-motion";
import SocialNetworkLinks from "@/components/molecules/SocialNetworkLinks";
import profileImage from "@/assets/images/profile.webp";
import { TextLoop } from "@/components/ui/text-loop";
import { TextEffect } from "@/components/ui/text-effect";

interface Props {
	className?: string;
}

const TEXT_EFFECT_VARIANTS = {
	container: {
		hidden: {
			opacity: 0,
		},
		visible: {
			opacity: 1,
			transition: {
				staggerChildren: 0.05,
			},
		},
	},
	item: {
		hidden: {
			opacity: 0,
			rotateX: 90,
			y: 10,
		},
		visible: {
			opacity: 1,
			rotateX: 0,
			y: 0,
			transition: {
				duration: 0.2,
			},
		},
	},
};

export function BannerSection({ className }: Props) {
	return (
		<div
			className={clsx(
				"w-full py-10 flex flex-col justify-center items-center border-y border-border relative",
				className
			)}
		>
			<div className="inset-0 flex flex-col justify-center space-y-14 w-full container">
				<div className="space-y-4">
					<div className="grid gap-2">
						<div className="flex items-center gap-6">
							<motion.div
								initial={{ opacity: 0, scale: 0 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{
									delay: 4,
									duration: 0.4,
									type: "spring",
									visualDuration: 0.4,
									bounce: 0.5,
								}}
								className={clsx(
									"w-[100px] aspect-square rounded-full overflow-hidden border border-black"
								)}
							>
								<div className="w-full h-full bg-stone-300 relative z-20">
									<img
										src={profileImage}
										className="w-full h-full"
										alt=""
									/>
								</div>
							</motion.div>
							<div className="text-xl lg:text-2xl font-semibold">
								<div>
									<h1 className="space-x-2 md:space-x-2 text-left flex items-center">
										<TextEffect
											per="char"
											delay={0.5}
											variants={TEXT_EFFECT_VARIANTS}
										>
											Hi, I’m
										</TextEffect>
										<TextEffect
											per="char"
											delay={1}
											className="text-[#002AFF]"
										>
											Rayane
										</TextEffect>
										<TextEffect per="char" delay={1.5}>
											and
										</TextEffect>
									</h1>
								</div>
								<div>
									<h1 className="space-x-2 text-left flex items-center">
										<TextEffect per="char" delay={1.75}>
											I'm a
										</TextEffect>
										<TextLoop
											className="overflow-y-clip"
											transition={{
												type: "spring",
												stiffness: 900,
												damping: 80,
												mass: 10,
											}}
											variants={{
												initial: {
													y: 20,
													rotateX: 90,
													opacity: 0,
												},
												animate: {
													y: 0,
													rotateX: 0,
													opacity: 1,
												},
												exit: {
													y: -20,
													rotateX: -90,
													opacity: 0,
												},
											}}
										>
											<span className="">Software engineer.</span>
											<span>NLP engineer</span>
										</TextLoop>
									</h1>
								</div>
							</div>
						</div>
						<TextEffect
							as="p"
							per="char"
							delay={2}
							className="max-w-xl text-left text-base text-stone-700"
						>
							I find true satisfaction in crafting captivating user
							interfaces and software solutions, seamlessly blending
							aesthetics and functionality.
						</TextEffect>
					</div>
					<div className="inline-block">
						<SocialNetworkLinks />
					</div>
				</div>
			</div>
		</div>
	);
}
