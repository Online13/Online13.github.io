import { ArrowRight } from "lucide-react";
import { ServiceCard } from "../card/ServiceCard";
import clsx from "clsx";

interface Props {
	className?: string;
}
export function ServiceSection({ className }: Props) {
	return (
		<div
			className={clsx(
				"w-full border-b border-border py-10 relative",
				className
			)}
		>
			<div className="container space-y-4">
				<h2 className="text-lg lg:text-xl font-semibold">Services</h2>
				<div className="w-full">
					<ServiceCard>
						<ServiceCard.Header>
							<ServiceCard.Title title="Engineering" />
							<ServiceCard.Description description="Providing smart solutions from planning to execution for technical projects." />
						</ServiceCard.Header>
						<ServiceCard.Action>
							<ArrowRight />
						</ServiceCard.Action>
					</ServiceCard>
					<ServiceCard>
						<ServiceCard.Header>
							<ServiceCard.Title title="Design" />
							<ServiceCard.Description description="I craft cohesive design systems and intuitive UI/UX for seamless, user-friendly experiences." />
						</ServiceCard.Header>
						<ServiceCard.Action>
							<ArrowRight />
						</ServiceCard.Action>
					</ServiceCard>
					<ServiceCard>
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
