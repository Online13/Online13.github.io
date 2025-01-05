import profileImage from "@/assets/images/profile.webp";
import clsx from "clsx";

export function AboutSection() {
	return (
		<div
			id="about"
			className="z-10 w-full flex flex-col items-center border-b border-border py-10"
		>
			<div className="w-full container relative">
				<div
					className={clsx(
						"w-[300px] aspect-square rounded-full overflow-hidden transition-transform animate-appear border border-black",
						"duration-700",
						"absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-5"
					)}
				>
					<div className="w-full h-full bg-stone-300 relative z-20">
						<img src={profileImage} className="w-full h-full" alt="" />
					</div>
				</div>
				<div className="w-full">
					<div className="w-full space-y-2">
						<h2 className="text-lg lg:text-xl font-semibold">About</h2>
						<div className="space-y-6 text-base">
							<p>
								I'm an independent developer specializing in software
								engineering and artificial intelligence, with a focus on
								natural language processing (NLP).
							</p>
							<p>
								With a background in mathematics, I developed a passion
								for creating impactful solutions. Today, I work across
								web development, mobile development, UI/UX design, and
								artificial intelligence, delivering tailored digital
								experiences and innovative tools.
							</p>
							<p>
								Thanks for visiting—feel free to reach out! I'm always
								open to collaborating and exchanging ideas.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
