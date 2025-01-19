import { cn } from "@/utils";
import { SkillItem } from "@/components/atoms/items/SkillItem";
import { SKILLS_DATA } from "@/data/skills";
import { EducationItem } from "@/components/atoms/items/EducationItem";
import { PresentationSection } from "@/components/organisms/section/PresentationSection";

export function AboutPage() {
	return (
		<div id="about">
			<PresentationSection />
			<EducationsSection />
			<SkillSection />
			<RewardSection />
		</div>
	);
}

export function SkillSection() {
	return (
		<div
			id="about"
			className={cn(
				"z-10 w-full flex flex-col items-center border-b border-border py-10 relative"
			)}
		>
			<div className="w-full container relative space-y-8">
				<h2 className="text-lg lg:text-xl font-semibold">Skills</h2>
				<div className="">
					<p>
						Here are few technologies I actively work with to build
						projects and solve problems:
					</p>
					<div className="grid grid-cols-2 gap-x-2 pt-4">
						{SKILLS_DATA.map((skillCategory) => (
							<SkillItem
								key={skillCategory.category}
								category={skillCategory.category}
								skills={skillCategory.skills}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export function EducationsSection() {
	return (
		<div
			id="about"
			className={cn(
				"z-10 w-full flex flex-col items-center border-b border-border py-10 relative"
			)}
		>
			<div className="w-full container relative space-y-4">
				<h2 className="text-lg lg:text-xl font-semibold">Educations</h2>
				<div className="">
					<EducationItem
						place="University of Antananarivo - Madagascar"
						year="2019 - ongoing"
						title="Master 2 in Applied Mathematics Computer Science and Statistics (MISA)"
					/>
					<EducationItem
						place="NVIDIA - Deep Learning Institute"
						year="December 2022"
						title="Certificate - Fundamentals of deep learning"
					/>
					<EducationItem
						place="Alliance Française - Madagascar"
						year="March 2018"
						title="B2 level French language diploma"
					/>
				</div>
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
