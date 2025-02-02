import { cn } from "@/utils";
import { PropsWithChildren } from "react";
import { motion } from "framer-motion";

type ProjectPreviewProps = PropsWithChildren;

export function ProjectCard({ children }: ProjectPreviewProps) {
	return (
		<motion.div
			initial="initial"
			whileHover="end"
			className="group cursor-pointer duration-500 rounded-md mt-4"
		>
			<div
				className={cn(
					"w-full h-[420px] border border-border hover:border-primary rounded-xl overflow-hidden z-20 flex relative"
				)}
			>
				{children}
			</div>
		</motion.div>
	);
}

ProjectCard.About = function About({
	children,
	className,
}: PropsWithChildren<{ className?: string }>) {
	return (
		<motion.div className="flex-[3] h-full relative">
			<div className="h-full space-y-4 py-4 flex flex-1 items-center justify-center overflow-hidden">
				<div className={cn("transition-[padding]", className)}>
					{children}
				</div>
			</div>
		</motion.div>
	);
};

ProjectCard.Title = function Title({ children }: PropsWithChildren) {
	return (
		<h2 className="text-xl lg:text-2xl font-semibold text-[#002AFF]">
			{children}
		</h2>
	);
};

ProjectCard.Description = function Description({
	children,
}: PropsWithChildren) {
	return (
		<h2 className="text-xl lg:text-2xl font-semibold max-w-sm text-stone-500">
			{children}
		</h2>
	);
};

ProjectCard.Preview = function Preview({ children }: PropsWithChildren) {
	return <motion.div className="flex-[2]">{children}</motion.div>;
};
