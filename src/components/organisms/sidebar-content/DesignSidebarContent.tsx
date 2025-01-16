import {
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";

export function DesignSidebarContent() {
	return (
		<SheetContent className="w-[600px] max-w-none sm:max-w-none ">
			<SheetHeader>
				<SheetTitle>Research and Analysis:</SheetTitle>
				<SheetDescription>
					I start by understanding the user’s needs and behaviors to create
					a strong design foundation.
				</SheetDescription>
			</SheetHeader>
			<div className="py-8">
				<div className="space-y-2 text-gray-700 text-sm">
					<div className="py-2">
						<h3 className="font-semibold">System Design:</h3>
						<p>
							I build cohesive design systems that ensure consistency
							across the entire project.
						</p>
					</div>
					<div className="py-2">
						<h3 className="font-semibold">Prototyping:</h3>
						<p>
							I create interactive prototypes to visualize the user flow
							and gather feedback early.
						</p>
					</div>
					<div className="py-2">
						<h3 className="font-semibold">UI/UX Optimization:</h3>
						<p>
							I focus on creating interfaces that are both functional and
							visually appealing for a smooth user experience.
						</p>
					</div>
					<div className="py-2">
						<h3 className="font-semibold">Testing and Refining:</h3>
						<p>
							I test the design with real users to refine and improve it
							until it’s perfect.
						</p>
					</div>
				</div>
			</div>
		</SheetContent>
	);
}
