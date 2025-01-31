import { ArrowRight } from "lucide-react";
import { ServiceCard } from "../card/ServiceCard";
import clsx from "clsx";
import { useSidebarContent } from "@/stores/sidebar-content.store";

interface Props {
	className?: string;
}
export function ServiceSection({ className }: Props) {
	const { openSidebar } = useSidebarContent();

	return (
		<div
			className={clsx(
				"w-full border-b border-border py-10 relative",
				className
			)}
		>
			<div className="container space-y-8">
				<h2 className="text-xl lg:text-2xl font-semibold">Services.</h2>
				<div className="w-full">
					<ServiceCard onClick={() => openSidebar("software-eng")}>
						<ServiceCard.Header>
							<ServiceCard.Title title="Engineering" />
							<ServiceCard.Description description="Providing smart solutions from planning to execution for technical projects." />
						</ServiceCard.Header>
						<ServiceCard.Action>
							<ArrowRight />
						</ServiceCard.Action>
					</ServiceCard>
					<ServiceCard onClick={() => openSidebar("design")}>
						<ServiceCard.Header>
							<ServiceCard.Title title="Design" />
							<ServiceCard.Description description="I craft cohesive design systems and intuitive UI/UX for seamless, user-friendly experiences." />
						</ServiceCard.Header>
						<ServiceCard.Action>
							<ArrowRight />
						</ServiceCard.Action>
					</ServiceCard>
					<ServiceCard onClick={() => openSidebar("modeling")}>
						<ServiceCard.Header>
							<ServiceCard.Title title="Modelisation" />
							<ServiceCard.Description description="Utilizing AI and mathematical models to analyze data, predict behaviors, and optimize processes." />
						</ServiceCard.Header>
						<ServiceCard.Action>
							<ArrowRight />
						</ServiceCard.Action>
					</ServiceCard>
				</div>
			</div>
		</div>
	);
}
