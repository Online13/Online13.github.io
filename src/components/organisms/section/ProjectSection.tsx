import { motion } from "framer-motion";
import { BibilPreview } from "@/components/molecules/BibilPreview";
import { GeoInfraPreview } from "@/components/molecules/GeoInfraPreview";
import { PokerApplyPreview } from "@/components/molecules/PokerApplyPreview";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Link } from "react-router-dom";

interface Props {
	className?: string;
}

export function ProjectSection({ className }: Props) {
	return (
		<div
			className={clsx(
				"relative z-10 w-full border-b border-border py-10",
				className
			)}
			id="projects"
		>
			{/* <FocusView /> */}
			<div className="container space-y-8">
				<div className="flex justify-between items-center">
					<h2 className="text-xl lg:text-2xl font-semibold">
						Selected projects.
					</h2>
					<Link to="project">
						<span className="text-base underline">See more</span>
					</Link>
				</div>
				<div className="w-full">
					<BibilPreview />
					<PokerApplyPreview />
					<GeoInfraPreview />
				</div>
				<div className="w-full flex items-center justify-center pt-12">
					<Link to="project">
						<motion.div
							whileTap={{
								scale: 0.9,
							}}
							transition={{ easings: ["backOut"] }}
							initial={{ scale: 1 }}
						>
							<Button size="lg" variant="secondary">
								<span className="relative top-[2px]">See more</span>
							</Button>
						</motion.div>
					</Link>
				</div>
			</div>
		</div>
	);
}
