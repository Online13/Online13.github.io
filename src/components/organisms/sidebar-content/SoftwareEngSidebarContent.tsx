import {
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
} from "@/components/ui/sheet";

export function SoftwareEngSidebarContent() {
	return (
		<SheetContent className="w-[900px] max-w-none sm:max-w-none">
			<SheetHeader>
				<SheetTitle>Software Engineering</SheetTitle>
				<SheetDescription>
					I offer smart and customized solutions for technical projects,
					from start to finish:
				</SheetDescription>
			</SheetHeader>
			<div className="py-8">
				<div className="space-y-2 text-gray-700 text-sm">
					<div className="py-2">
						<h3 className="font-semibold">Understanding Needs:</h3>
						<p>
							I start by talking with the client to understand their
							goals and what they need.
						</p>
					</div>
					<div className="py-2">
						<h3 className="font-semibold">Planning and Design:</h3>
						<p>
							I create clear plans and designs to show how the project
							will look and work.
						</p>
					</div>
					<div className="py-2">
						<h3 className="font-semibold">Building the Solution:</h3>
						<p>
							I develop the project using the best tools and methods to
							make it repable and efficient.
						</p>
					</div>
					<div className="py-2">
						<h3 className="font-semibold">Testing:</h3>
						<p>
							I test everything to make sure it works as expected and
							meets the cpent’s needs.
						</p>
					</div>
					<div className="py-2">
						<h3 className="font-semibold">Delivery and Support:</h3>
						<p>
							After delivering the project, I provide support to ensure
							it works smoothly and make updates if needed.
						</p>
					</div>
				</div>
			</div>
		</SheetContent>
	);
}
