import { cn } from "@/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type ProjectPreviewProps = {
	title: string;
	subtitle: string;
	preview?: ReactNode;
};

export function ProjectPreview({
	title,
	subtitle,
	preview,
}: ProjectPreviewProps) {
	return (
		<motion.div className="group border-b border-b-border cursor-pointer duration-500 rounded-md mt-4">
			{/* <motion.div className="w-full pt-4 pb-4 z-30 space-y-2 flex items-start justify-between">
				<div className="space-y-4">
					<div className="transition-[padding] px-6">
						<h2 className="text-xl lg:text-2xl font-semibold text-[#002AFF]">
							{title}
						</h2>
						<h2 className="text-xl lg:text-2xl font-semibold max-w-md">
							{subtitle}
						</h2>
					</div>
				</div>
			</motion.div> */}
			<div
				className={cn(
					"w-full h-[420px] border border-border hover:border-primary rounded-xl overflow-hidden z-20 flex justify-center items-center relative"
				)}
			>
				{preview}
			</div>
		</motion.div>
	);
}
