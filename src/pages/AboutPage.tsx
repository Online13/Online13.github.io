import { cn } from "@/utils";
import profileImage from "@/assets/images/profile.webp";
import myCatImage from "@/assets/images/minou.jpg";
import usImage from "@/assets/images/us.jpg";
import nearHomeImage from "@/assets/images/near-home.jpg";

export function AboutPage() {
	return (
		<div id="about">
			{/* <BannerSection /> */}
			<AboutSection />
			<EducationSection />
			<SkillsSection />
			<RewardSection />
		</div>
	);
}

export function BannerSection() {
	return (
		<div
			className={cn(
				"w-full py-10 flex flex-col justify-center items-center border-y border-border relative"
			)}
		>
			<h1 className="text-xl lg:text-2xl font-semibold">About.</h1>
		</div>
	);
}

export function AboutSection() {
	return (
		<div
			id="about"
			className={cn(
				"z-10 w-full flex flex-col items-center border-b border-border py-10 relative"
			)}
		>
			<div className="w-full container relative space-y-8">
				<div className="w-full">
					<div className="w-full grid grid-cols-3 items-center gap-8">
						<div className="">
							<img
								src={profileImage}
								className="w-full h-full aspect-square rounded-md"
								alt=""
							/>
						</div>
						<div className="space-y-2 text-stone-700 col-span-2">
							<h2 className="text-lg lg:text-xl font-semibold">
								About.
							</h2>
							<p className="text-base">
								I'm an independent developer specializing in software
								engineering, particularly in web and mobile development,
								with expertise in artificial intelligence and natural
								language processing (NLP). Combining a background in
								mathematics with a passion for creating impactful
								solutions, I focus on delivering tailored digital
								experiences and innovative tools.
							</p>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-3 gap-4">
					<div className="">
						<img
							src={myCatImage}
							alt=""
							className="aspect-video object-cover rounded-md"
						/>
					</div>
					<div className="">
						<img
							src={usImage}
							alt=""
							className="aspect-video object-cover rounded-md"
						/>
					</div>
					<div className="">
						<img
							src={nearHomeImage}
							alt=""
							className="aspect-video object-cover rounded-md"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export function EducationSection() {
	return (
		<div
			id="about"
			className={cn(
				"z-10 w-full flex flex-col items-center border-b border-border py-10 relative"
			)}
		>
			<div className="w-full container relative space-y-8">
				<h2 className="text-lg lg:text-xl font-semibold">Education</h2>
			</div>
		</div>
	);
}

export function SkillsSection() {
	return (
		<div
			id="about"
			className={cn(
				"z-10 w-full flex flex-col items-center border-b border-border py-10 relative"
			)}
		>
			<div className="w-full container relative space-y-8">
				<h2 className="text-lg lg:text-xl font-semibold">Skills</h2>
			</div>
		</div>
	);
}

export function RewardSection() {
	return (
		<div
			id="about"
			className={cn(
				"z-10 w-full flex flex-col items-center border-b border-border py-10 relative"
			)}
		>
			<div className="w-full container relative space-y-8">
				<h2 className="text-lg lg:text-xl font-semibold">Reward</h2>
			</div>
		</div>
	);
}
