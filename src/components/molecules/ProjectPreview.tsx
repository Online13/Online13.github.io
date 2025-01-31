import { cn } from "@/utils";
import { ReactNode } from "react";
import { motion } from "framer-motion";

type ProjectPreviewProps = {
	title: string;
	subtitle: string;
	preview?: ReactNode;
};

export function ProjectPreview({
	preview,
}: ProjectPreviewProps) {
	return (
		<motion.div className="group border-b border-b-border cursor-pointer duration-500 rounded-md mt-4">
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
