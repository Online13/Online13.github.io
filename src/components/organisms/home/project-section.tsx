import { AppearText } from "@/components/atoms/presentations/appear-text";
import clsx from "clsx";

type ProjectViewProps = {
	title: string;
	leftMode?: boolean;
};

function ProjectView({ title, leftMode = true }: ProjectViewProps) {
	return (
		<div className="w-full">
			{/* Image */}
			<div
				className={clsx(
					"w-full aspect-video border border-black z-20",
					{
						"order-2": leftMode,
					}
				)}
			></div>
			<div className="w-full pt-8 pb-12 px-4 z-30 space-y-2 flex items-start justify-between">
				<div className="space-y-4">
					<h2 className="text-3xl font-semibold">{title}</h2>
					<p className="max-w-lg text-xl">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatem sequi deserunt cumque rerum similique.
					</p>
				</div>
			</div>
		</div>
	);
}

export function ProjectSection() {

	return (
		<div className="relative z-10 w-full bg-white" id="projects">
			<div className="w-full px-8 md:px-12 lg:px-32 xl:px-72 pb-20">
				<div className="pt-12 lg:pt-24 pb-8">
					<AppearText
						className="text-5xl font-semibold"
						texts={["Projects & Case study"]}
					/>
				</div>
				<div className="w-full">
					{/* filtering */}
					<div className="pt-8 grid grid-cols-1 md:grid-cols-2 md:gap-12">
						<div className="">
							<ProjectView title="Chester App" />
							<ProjectView title="Peasy" />
						</div>
						<div className="md:mt-24">
							<ProjectView title="Redax App" />
							<div className="">
								<div className="active:scale-95 transition-transform duration-200 ease-out cursor-pointer aspect-video border border-black flex justify-center items-center">
									<span className="text-3xl">See more work</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
