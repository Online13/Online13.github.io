import { cn } from "@/utils";
import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

type ServiceProps = PropsWithChildren<{
	className?: string;
	onClick?: () => void;
}>;

export function ServiceCard(props: ServiceProps) {
	const { className, children } = props;

	return (
		<motion.div
			initial={{
				y: 20,
				opacity: 0,
			}}
			whileInView={{
				y: 0,
				opacity: 1,
			}}
			viewport={{ once: true }}
			transition={{ delay: 0.8 }}
			onClick={props.onClick}
			className={cn(
				"w-full h-full py-4 pr-4 group",
				"cursor-pointer flex justify-between items-center hover:bg-stone-100/70 hover:px-4 transition-[padding] duration-500 rounded-md",
				className
			)}
		>
			{children}
		</motion.div>
	);
}

type HeaderProps = PropsWithChildren<{ className?: string }>;

const Header = ({ className, children }: HeaderProps) => (
	<div className={cn("w-full space-y-1 grid grid-cols-3", className)}>
		{children}
	</div>
);

type TitleProps = { title: string };

const Title = ({ title }: TitleProps) => (
	<h2 className="text-lg font-semibold group-hover:text-primary">{title}.</h2>
);

type DescriptionProps = { description: string };

const Description = ({ description }: DescriptionProps) => (
	<p className="max-w-[460px] overflow-hidden text-base transition-all duration-500 line-clamp-4 col-span-2">
		{description}
	</p>
);

const Action = ({ children }: PropsWithChildren) => (
	<div className="">{children}</div>
);

ServiceCard.Header = Header;
ServiceCard.Title = Title;
ServiceCard.Description = Description;
ServiceCard.Action = Action;
