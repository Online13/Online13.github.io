import { motion } from "framer-motion";
import { BibilPreview } from "@/components/molecules/BibilPreview";
import { GeoInfraPreview } from "@/components/molecules/GeoInfraPreview";
import { PokerApplyPreview } from "@/components/molecules/PokerApplyPreview";
import { Button } from "@/components/ui/button";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { ProjectPreview } from "@/components/molecules/ProjectPreview";

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
			<div className="container">
				<h2 className="text-lg lg:text-xl font-semibold">Projects</h2>
				<div className="w-full">
					<ProjectPreview
						title="Bibil"
						subtitle="An app for easy car rentals in Madagascar."
						preview={<BibilPreview />}
					/>
					<ProjectPreview
						title="PokerApply"
						subtitle="A chat app for poker player"
						preview={<PokerApplyPreview />}
					/>
					<ProjectPreview
						title="Geo-Infrastructure"
						subtitle="An app for infrastructure mapping in Madagascar."
						preview={<GeoInfraPreview />}
					/>
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
