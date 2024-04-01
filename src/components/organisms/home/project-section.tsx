import { AppearBox } from "@/components/atoms/presentations/appear-box";
import { OutlineText } from "@/components/atoms/typography/outline-text";
import { gsap, useGSAP } from "@/lib/gsap";
import clsx from "clsx";
import { PropsWithChildren, useRef } from "react";

type ProjectPreviewProps = {
	title: string;
};

function ProjectBox({ children }: PropsWithChildren) {
	const rootRef = useRef<HTMLDivElement | null>(null);
	useGSAP(() => {
		gsap.from(rootRef.current, {
			y: 200,
			opacity: 0,
			scrollTrigger: {
				trigger: rootRef.current,
				start: "top 90%",
			},
		});
	}, []);

	return (
		<div className="w-full cursor-pointer group" ref={rootRef}>
			{children}
		</div>
	);
}

function ProjectPreview({ title }: ProjectPreviewProps) {
	return (
		<ProjectBox>
			{/* Image */}
			<div
				className={clsx(
					"w-full aspect-video border border-black z-20 opacity-20 group-hover:opacity-100",
					{}
				)}
			></div>
			<div className="w-full pt-8 pb-12 px-4 z-30 space-y-2 flex items-start justify-between">
				<div className="space-y-4">
					<h2 className="text-3xl font-semibold">{title}</h2>
					<p className="max-w-lg text-xl text-stone-500 group-hover:text-black">
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
						Voluptatem sequi deserunt cumque rerum similique.
					</p>
				</div>
			</div>
		</ProjectBox>
	);
}
export function ProjectSection() {
	return (
		<div
			className="relative z-10 w-full bg-white px-8 md:px-12 lg:px-32 xl:px-72 pb-20 pt-12 lg:pt-24"
			id="projects"
		>
			<div className="hidden lg:block absolute top-0 left-12 h-2/3 pt-20">
				<div className="sticky top-20">
					<OutlineText className="origin-top-right -rotate-90 -translate-x-full">
						Projects.
					</OutlineText>
				</div>
			</div>
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
					<div className="md:mt-24">
						<ProjectPreview title="Redax App" />
						<ProjectBox>
							<div className="active:scale-95 transition-transform duration-200 ease-out cursor-pointer aspect-video border border-black flex justify-center items-center">
								<span className="text-3xl">See more work</span>
							</div>
						</ProjectBox>
					</div>
				</div>
			</div>
		</div>
	);
}
