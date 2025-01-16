import { cn } from "@/utils";
import { ReactNode } from "react";

type ProjectPreviewProps = {
	title: string;
	subtitle: string;
	preview?: ReactNode;
};

export function ProjectPreview({ title, subtitle, preview }: ProjectPreviewProps) {
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
				className={cn(
					"w-full h-[420px] border border-border rounded-xl overflow-hidden z-20 flex justify-center items-center relative"
				)}
			>
				{preview}
			</div>
		</div>
	);
}
