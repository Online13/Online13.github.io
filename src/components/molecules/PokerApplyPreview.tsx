import { motion, MotionConfig } from "framer-motion";
import WelcomeScreen from "./../../assets/illustrations/WelcomeScreen.png";
import ProfileScreen from "./../../assets/illustrations/ProfileScreen.png";
import { ProjectCard } from "./ProjectCard";

const title = "PokerApply";
const subtitle = "A chat app for poker player";

export function PokerApplyPreview() {
	return (
		<MotionConfig
			transition={{
				duration: 2,
				ease: "anticipate",
			}}
		>
			<ProjectCard>
				<ProjectCard.Preview>
					<motion.div
						className="w-full p-2 pt-6"
						variants={{
							initial: {
								y: "-100%",
							},
							end: {
								y: 0,
							},
						}}
					>
						<img
							src={ProfileScreen}
							className="w-full"
							alt="welcome screen"
						/>
					</motion.div>
					<motion.div
						className="w-full p-2 pt-6"
						variants={{
							initial: {
								y: "-100%",
							},
							end: {
								y: 0,
							},
						}}
					>
						<img
							src={WelcomeScreen}
							className="w-full"
							alt="welcome screen"
						/>
					</motion.div>
				</ProjectCard.Preview>
				<ProjectCard.About>
					<ProjectCard.Title>{title}</ProjectCard.Title>
					<ProjectCard.Description>{subtitle}</ProjectCard.Description>
				</ProjectCard.About>
			</ProjectCard>
		</MotionConfig>
	);
}

{
	/* <motion.div
initial="initial"
whileHover="end"
className={clsx(
	"grid grid-cols-[180px_180px_180px_180px_180px_180px_180px] gap-2 overflow-hidden p-4",
	"absolute top-0 left-0 bg-stone-900/5 "
)}
> */
}
// <div className="flex flex-col gap-2">
// 							<motion.div
// 								className="w-full"
// 								variants={{
// 									initial: {
// 										y: 0,
// 									},
// 									end: {
// 										y: "2%",
// 										x: -180,
// 									},
// 								}}
// 							>
// 								<img
// 									src={WelcomeScreen}
// 									className="w-full h-full object-contain"
// 									alt="welcome screen"
// 								/>
// 							</motion.div>
// 						</div>
// 						<div className="flex flex-col gap-2">
// 							<motion.div
// 								className="w-full"
// 								variants={{
// 									initial: {
// 										y: 0,
// 									},
// 									end: {
// 										y: "-100%",
// 										x: -180,
// 									},
// 								}}
// 							>
// 								<img
// 									src={HomeScreen}
// 									className="w-full h-full object-contain"
// 									alt="home screen for profile"
// 								/>
// 							</motion.div>
// 							<motion.div
// 								className="w-full"
// 								variants={{
// 									initial: {
// 										y: 0,
// 									},
// 									end: {
// 										y: "-100%",
// 										x: -180,
// 									},
// 								}}
// 							>
// 								<img
// 									src={DesignSystemScreen}
// 									className="w-full h-full object-contain"
// 									alt="design system screen"
// 								/>
// 							</motion.div>
// 						</div>
// 						<div className="flex flex-col gap-2">
// 							<motion.div
// 								className="w-full"
// 								variants={{
// 									initial: {
// 										y: 0,
// 									},
// 									end: {
// 										y: "2%",
// 										x: -180,
// 									},
// 								}}
// 							>
// 								<img
// 									src={ProfileScreen}
// 									className="w-full h-full object-contain"
// 									alt="profile screen"
// 								/>
// 							</motion.div>
// 						</div>
// 						<div className="flex flex-col gap-2">
// 							<motion.div
// 								className="w-full"
// 								variants={{
// 									initial: {
// 										y: 0,
// 									},
// 									end: {
// 										y: "-100%",
// 										x: -180,
// 									},
// 								}}
// 							>
// 								<img
// 									src={NoteScreen}
// 									className="w-full h-full object-contain"
// 									alt="profile screen"
// 								/>
// 							</motion.div>
// 							<motion.div
// 								className="w-full"
// 								variants={{
// 									initial: {
// 										y: 0,
// 									},
// 									end: {
// 										y: "-100%",
// 										x: -180,
// 									},
// 								}}
// 							>
// 								<img
// 									src={LoginScreen}
// 									className="w-full h-full object-contain"
// 									alt="profile screen"
// 								/>
// 							</motion.div>
// 						</div>
// 						<div className="flex flex-col gap-2">
// 							<motion.div
// 								className="w-full"
// 								variants={{
// 									initial: {
// 										y: 0,
// 									},
// 									end: {
// 										y: "2%",
// 										x: -180,
// 									},
// 								}}
// 							>
// 								<img
// 									src={PhotoTabScreen}
// 									className="w-full h-full object-contain"
// 									alt="profile screen"
// 								/>
// 							</motion.div>
// 						</div>
// </motion.div>
//
