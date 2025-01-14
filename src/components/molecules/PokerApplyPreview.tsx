import { motion } from "framer-motion";
import WelcomeScreen from "./../../assets/illustrations/WelcomeScreen.png";
import HomeScreen from "./../../assets/illustrations/HomeScreen.png";
import DesignSystemScreen from "./../../assets/illustrations/DesignSystemScreen.png";
import ProfileScreen from "./../../assets/illustrations/ProfileScreen.png";
import LoginScreen from "./../../assets/illustrations/LoginScreen.png";
import NoteScreen from "./../../assets/illustrations/NoteScreen.png";
import PhotoTabScreen from "./../../assets/illustrations/PhotoTabScreen.png";
import clsx from "clsx";

export function PokerApplyPreview() {
	return (
		<motion.div
			initial="initial"
			whileHover="end"
			className={clsx(
				"grid grid-cols-[180px_180px_180px_180px_180px_180px_180px] gap-2 overflow-hidden p-4",
				"absolute top-0 left-0 bg-stone-900/5 "
			)}
		>
			<div className="flex flex-col gap-2">
				<motion.div
					className="w-full"
					variants={{
						initial: {
							y: 0,
						},
						end: {
							y: "2%",
						},
					}}
				>
					<img
						src={WelcomeScreen}
						className="w-full h-full object-contain"
						alt="welcome screen"
					/>
				</motion.div>
			</div>
			<div className="flex flex-col gap-2">
				<motion.div
					className="w-full"
					variants={{
						initial: {
							y: 0,
						},
						end: {
							y: "-100%",
						},
					}}
				>
					<img
						src={HomeScreen}
						className="w-full h-full object-contain"
						alt="home screen for profile"
					/>
				</motion.div>
				<motion.div
					className="w-full"
					variants={{
						initial: {
							y: 0,
						},
						end: {
							y: "-100%",
						},
					}}
				>
					<img
						src={DesignSystemScreen}
						className="w-full h-full object-contain"
						alt="design system screen"
					/>
				</motion.div>
			</div>
			<div className="flex flex-col gap-2">
				<motion.div
					className="w-full"
					variants={{
						initial: {
							y: 0,
						},
						end: {
							y: "2%",
						},
					}}
				>
					<img
						src={ProfileScreen}
						className="w-full h-full object-contain"
						alt="profile screen"
					/>
				</motion.div>
			</div>
			<div className="flex flex-col gap-2">
				<motion.div
					className="w-full"
					variants={{
						initial: {
							y: 0,
						},
						end: {
							y: "-100%",
						},
					}}
				>
					<img
						src={NoteScreen}
						className="w-full h-full object-contain"
						alt="profile screen"
					/>
				</motion.div>
				<motion.div
					className="w-full"
					variants={{
						initial: {
							y: 0,
						},
						end: {
							y: "-100%",
						},
					}}
				>
					<img
						src={LoginScreen}
						className="w-full h-full object-contain"
						alt="profile screen"
					/>
				</motion.div>
			</div>
			<div className="flex flex-col gap-2">
				<motion.div
					className="w-full"
					variants={{
						initial: {
							y: 0,
						},
						end: {
							y: "2%",
						},
					}}
				>
					<img
						src={PhotoTabScreen}
						className="w-full h-full object-contain"
						alt="profile screen"
					/>
				</motion.div>
			</div>
		</motion.div>
	);
}
