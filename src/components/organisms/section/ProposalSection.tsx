import clsx from "clsx";

interface Props {
	className?: string;
}

export function ProposalSection({ className }: Props) {
	return (
		<div
			className={clsx(
				"w-full border-b border-border py-10 relative",
				className
			)}
		>
			{/* <FocusView /> */}
			<div className="w-full h-full container">
				<div className="w-full h-full flex items-center">
					<p className="max-w-xl text-base py-2">
						Working for startups and governments, I've built helpful apps
						and websites for phones and computers. Every project taught me
						new ways to make them super user-friendly and easy to navigate
						! Now I can do both mobile apps and websites! Tech is my
						passion - it lets me solve problems and help people. That's
						why I keep learning new skills to build even better tools!
					</p>
				</div>
				{/* <div className="py-14 flex justify-center items-center relative">
					<ComputerIllustration />
				</div> */}
			</div>
		</div>
	);
}
