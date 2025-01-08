import clsx from "clsx";

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
