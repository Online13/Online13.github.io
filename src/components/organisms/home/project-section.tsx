import clsx from "clsx";

type ProjectViewProps = {
	title: string;
	leftMode?: boolean;
};

function ProjectView({ title, leftMode = true }: ProjectViewProps) {
	return (
		<div className="w-full">
			<div className="w-full py-12 px-8 z-30 space-y-2 flex items-start justify-between">
				<div className="space-y-4">
					<h2 className="text-5xl font-semibold">{title}</h2>
					<div className="flex items-center gap-2">
						{["React", "Typescript", "Node"].map((lang, id) => (
							<div
								key={`lang-${id}`}
								className={clsx(
									"border px-4 rounded-lg leading-[40px] bg-white flex items-center justify-center",
									"cursor-pointer active:scale-95"
								)}
							>
								<span className="h-8">{lang}</span>
							</div>
						))}
					</div>
				</div>
				<div className="">
					<p className="max-w-lg text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatem sequi deserunt cumque rerum similique.
					</p>
				</div>
			</div>
			{/* Image */}
			<div
				className={clsx("w-full aspect-video bg-black/20 z-20", {
					"order-2": leftMode,
				})}
			></div>
			<hr className="mt-16" />
		</div>
	);
}

export function ProjectSection() {
	return (
		<div className="relative z-10 w-full bg-white" id="projects">
			<div className="w-full px-40 py-20">
				<div className="w-full gap-8 px-20">
					{/* filtering */}
					<div className="pt-8 space-y-12">
						{["Chester App", "Redax App"].map((title, id) => (
							<ProjectView
								key={`project-${id}`}
								title={title}
								leftMode={id % 2 === 0}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
