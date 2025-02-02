import { motion, MotionConfig } from "framer-motion";
import GeoInfraScreen from "./../../assets/illustrations/GeoInfraScreen.png";
import { ProjectCard } from "./ProjectCard";

const title = "Geo-Infrastructure";
const subtitle = "An app for infrastructure mapping in Madagascar.";

export function GeoInfraPreview() {
	return (
		<MotionConfig
			transition={{
				duration: 2,
				ease: "anticipate",
			}}
		>
			<ProjectCard>
				<ProjectCard.About>
					<ProjectCard.Title>{title}</ProjectCard.Title>
					<ProjectCard.Description>{subtitle}</ProjectCard.Description>
				</ProjectCard.About>
				<ProjectCard.Preview>
					<motion.div
						className="w-full p-2 pt-6"
						variants={{
							initial: {
								y: 0,
							},
							end: {
								y: "-100%",
							},
						}}
					>
						<img src={GeoInfraScreen} alt="" className="w-full" />
					</motion.div>
					<motion.div
						className="w-full p-2 pt-6"
						variants={{
							initial: {
								y: 0,
							},
							end: {
								y: "-100%",
							},
						}}
					></motion.div>
				</ProjectCard.Preview>
			</ProjectCard>
		</MotionConfig>
	);
}

{
	/* <motion.div
						variants={{
							initial: {
								y: "100%",
							},
							end: {
								y: 0,
							},
						}}
						className="w-full h-full flex items-end justify-end pt-12 origin-bottom"
					>
						<img src={BsInfra} alt="" />
					</motion.div>
					<motion.div
						className="w-full h-full p-8"
						whileHover="end"
						variants={{
							initial: {
								y: 0,
							},
							end: {
								y: "-50%",
							},
						}}
					>
						<img src={GeoInfraScreen} alt="" className="w-[250px]" />
					</motion.div> */
}
