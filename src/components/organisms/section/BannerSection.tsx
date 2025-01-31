import clsx from "clsx";
import { motion, MotionConfig } from "framer-motion";
import SocialNetworkLinks from "@/components/molecules/SocialNetworkLinks";
import profileImage from "@/assets/images/profile.webp";

interface Props {
	className?: string;
}

export function BannerSection({ className }: Props) {
	return (
		<MotionConfig
			transition={{
				delay: 0.3,
				duration: 0.8,
			}}
		>
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
								<div className="text-2xl lg:text-3xl font-semibold">
									<div>
										<h1 className="space-x-2 md:space-x-2 text-left flex items-center overflow-hidden">
											<motion.span
												initial={{ opacity: 0, y: 200 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.8, delay: 0.4 }}
											>
												Hi, I'm
											</motion.span>
											<motion.span
												initial={{ opacity: 0, y: 200 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.8, delay: 0.6 }}
												className="text-primary"
											>
												Rayane
											</motion.span>
											<motion.span
												initial={{ opacity: 0, y: 200 }}
												animate={{ opacity: 1, y: 0 }}
												transition={{ duration: 0.8, delay: 0.8 }}
											>
												and
											</motion.span>
										</h1>
									</div>
									<div>
										<h1 className="space-x-2 text-left flex items-center overflow-hidden">
											{["I'm a ", "Software engineer "].map(
												(text, i) => (
													<motion.span
														key={text}
														initial={{ opacity: 0, y: 200 }}
														animate={{ opacity: 1, y: 0 }}
														transition={{
															duration: 0.8,
															delay: 1.2 + i * 0.3,
														}}
													>
														{text}
													</motion.span>
												)
											)}
										</h1>
									</div>
								</div>
							</div>
							<motion.p
								initial={{ opacity: 0, y: 10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.6, duration: 0.8 }}
								className="max-w-xl text-left text-base text-stone-700"
							>
								Creating software that is simple, functional, and
								visually appealing, with a focus on smooth user
								experiences.
							</motion.p>
						</div>
						<div className="inline-block">
							<SocialNetworkLinks />
						</div>
					</div>
				</div>
			</div>
		</MotionConfig>
	);
}
