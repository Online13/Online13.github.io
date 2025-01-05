import { Button } from "@/components/ui/button";
import clsx from "clsx";

export function ProjectSection() {
	return (
		<div
			className="relative z-10 w-full border-b border-border py-10"
			id="projects"
		>
			<div className="container">
				<h2 className="text-lg lg:text-xl font-semibold">Projects</h2>
				<div className="w-full">
					<ProjectPreview
						title="Bibil"
						subtitle="An app for easy car rentals in Madagascar."
					/>
					<ProjectPreview
						title="Geo-Infrastructure"
						subtitle="An app for infrastructure mapping in Madagascar."
					/>
					<ProjectPreview
						title="My blob"
						subtitle="Journey through my ideas and insights."
					/>
				</div>
				<div className="pt-4">
					<Button size="sm">
						<span className="relative top-[2px]">See more</span>
					</Button>
				</div>
			</div>
		</div>
	);
}

type ProjectPreviewProps = {
	title: string;
	subtitle: string;
};

function ProjectPreview({ title, subtitle }: ProjectPreviewProps) {
	return (
		<div className="border-b border-b-border hover:bg-sky-50/20 cursor-pointer">
			<div className="w-full pt-8 pb-12 z-30 space-y-2 flex items-start justify-between">
				<div className="space-y-4">
					<div className="">
						<h2 className="text-xl font-semibold text-[#002AFF]">
							{title}
						</h2>
						<h2 className="text-base font-semibold max-w-lg">
							{subtitle}
						</h2>
					</div>
					<p className="max-w-lg text-base text-stone-500 group-hover:text-black">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatem sequi deserunt cumque rerum similique.
					</p>
				</div>
			</div>
			<div
				className={clsx(
					"w-full min-h-[420px] border border-black z-20 flex justify-center items-center"
				)}
			>
				<span className="text-2xl text-slate-500">comming soon...</span>
			</div>
		</div>
	);
}
