import { BibilPreview } from "@/components/molecules/BibilPreview";
import { GeoInfraPreview } from "@/components/molecules/GeoInfraPreview";
import { PokerApplyPreview } from "@/components/molecules/PokerApplyPreview";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { ReactNode } from "react";

interface Props {
	className?: string;
}

export function ProjectSection({ className }: Props) {
	return (
		<div
			className={clsx(
				"relative z-10 w-full border-b border-border py-10",
				className
			)}
			id="projects"
		>
			{/* <FocusView /> */}
			<div className="container">
				<h2 className="text-lg lg:text-xl font-semibold">Projects</h2>
				<div className="w-full">
					<ProjectPreview
						title="Bibil"
						subtitle="An app for easy car rentals in Madagascar."
						preview={<BibilPreview />}
					/>
					<ProjectPreview
						title="PokerApply"
						subtitle="A chat app for poker player"
						preview={<PokerApplyPreview />}
					/>
					<ProjectPreview
						title="Geo-Infrastructure"
						subtitle="An app for infrastructure mapping in Madagascar."
						preview={<GeoInfraPreview />}
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
	preview?: ReactNode;
};

function ProjectPreview({ title, subtitle, preview }: ProjectPreviewProps) {
	return (
		<div className="border-b border-b-border hover:bg-sky-50/20 cursor-pointer">
			<div className="w-full pt-8 pb-4 z-30 space-y-2 flex items-start justify-between">
				<div className="space-y-4">
					<div className="">
						<h2 className="text-lg lg:text-xl font-semibold text-[#002AFF]">
							{title}
						</h2>
						<h2 className="text-base font-semibold max-w-lg">
							{subtitle}
						</h2>
					</div>
				</div>
			</div>
			<div
				className={clsx(
					"w-full h-[420px] border border-border rounded-xl overflow-hidden z-20 flex justify-center items-center relative"
				)}
			>
				{preview}
			</div>
		</div>
	);
}
