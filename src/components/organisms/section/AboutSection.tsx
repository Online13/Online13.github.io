import clsx from "clsx";
import { motion } from "framer-motion";

interface Props {
	className?: string;
}

export function AboutSection({ className }: Props) {
	return (
		<div
			id="about"
			className={clsx(
				"z-10 w-full flex flex-col items-center border-b border-border py-10 relative",
				className
			)}
		>
			<div className="w-full container relative">
				<div className="w-full">
					<div className="w-full space-y-4">
						<h2 className="text-xl lg:text-2xl font-semibold">About.</h2>
						<div className="text-base">
							<motion.div
								className="space-y-6 text-stone-700"
								transition={{
									delay: 0.3,
									type: "spring",
									visualDuration: 0.8,
									bounce: 0.5,
								}}
								initial={{ opacity: 0, y: 50 }}
								animate={{ opacity: 1, y: 0 }}
							>
								<p>
									I'm an independent developer specializing in{" "}
									<b>software engineering</b> and{" "}
									<b>artificial intelligence</b>, with a focus on
									natural language processing (NLP).
								</p>
								<p>
									Over the years, I've had the privilege of working on
									diverse projects, from creating mobile applications
									for ministries in Madagascar to redesigning
									applications and improving their architecture for
									better scalability. Recently, I've been focusing on
									crafting intuitive interfaces that enhance user
									experiences, while also diving deeper into research
									and development in NLP to address complex problems
									and create innovative solutions.
								</p>
								<p>
									Thanks for visiting—feel free to reach out! I'm
									always open to collaborating and exchanging ideas.
								</p>
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
