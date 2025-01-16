import {
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";

export function ModelingSidebarContent() {
	return (
		<SheetContent className="w-[600px] max-w-none sm:max-w-none ">
			<SheetHeader>
				<SheetTitle>Creating Predictive Models:</SheetTitle>
				<SheetDescription>
					I build AI and mathematical models to predict future outcomes
					based on historical data, ensuring accurate forecasts.
				</SheetDescription>
			</SheetHeader>
			<div className="py-8">
				<div className="space-y-2 text-gray-700 text-sm">
					<div className="py-2">
						<h3 className="font-semibold">Simulating Scenarios:</h3>
						<p>
							I use modeling techniques to simulate real-world scenarios,
							helping to test and refine strategies in a virtual
							environment.
						</p>
					</div>
					<div className="py-2">
						<h3 className="font-semibold">Optimizing Systems:</h3>
						<p>
							My models focus on optimizing processes, improving
							decision-making, and solving complex problems efficiently.
						</p>
					</div>
					<div className="py-2">
						<h3 className="font-semibold">Custom AI Solutions:</h3>
						<p>
							I design tailored models to meet unique project needs,
							ensuring they align with business goals and technical
							requirements.
						</p>
					</div>
					<div className="py-2">
						<h3 className="font-semibold">Continuous Improvement:</h3>
						<p>
							I monitor and fine-tune models over time, adapting them to
							changing data and ensuring sustained performance.
						</p>
					</div>
				</div>
			</div>
		</SheetContent>
	);
}
