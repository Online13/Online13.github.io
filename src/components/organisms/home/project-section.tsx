import { AppearBox } from "@/components/atoms/presentations/appear-box";
import { OutlineText } from "@/components/atoms/typography/outline-text";
import clsx from "clsx";

type ProjectPreviewProps = {
	title: string;
};

function ProjectPreview({ title }: ProjectPreviewProps) {
	return (
		<div className="">
			<div
				className={clsx(
					"w-full aspect-video border border-black z-20 flex justify-center items-center"
				)}
			>
				<span className="text-2xl text-slate-500">comming soon...</span>
			</div>
			<div className="w-full pt-8 pb-12 px-4 z-30 space-y-2 flex items-start justify-between">
				<div className="space-y-4">
					<h2 className="text-3xl font-semibold">{title}</h2>
					<p className="max-w-lg text-xl text-stone-500 group-hover:text-black">
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
		<div
			className="relative z-10 w-full bg-white px-8 md:px-12 lg:px-32 xl:px-72 pb-20 pt-12 lg:pt-24"
			id="projects"
		>
			<div className="block lg:hidden pb-8">
				<AppearBox className="text-5xl font-semibold">
					Projects & Case study
				</AppearBox>
			</div>
			<div className="w-full">
				{/* filtering */}
				<div className="pt-8 grid grid-cols-1 md:grid-cols-2 md:gap-12">
					<div className="">
						<ProjectPreview title="Chester App" />
						<ProjectPreview title="Peasy" />
					</div>
					<div className="md:pt-24 relative">
						<div className="hidden lg:block absolute -top-14 left-0 h-2/3">
							<OutlineText className="opacity-40">Projects.</OutlineText>
						</div>
						<ProjectPreview title="Redax App" />
						<div className="active:scale-95 transition-transform duration-200 ease-out cursor-pointer aspect-video border border-black flex justify-center items-center">
							<span className="text-3xl">See more work</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
