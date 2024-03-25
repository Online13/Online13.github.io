import Lottie from "lottie-react";
import anim from "src/assets/animations/ui.json";

export function ProposalSection() {
	return (
		<div className="py-12 flex items-center px-44">
			<div className="w-full space-y-4 pl-32">
				<p className="max-w-lg text-xl pl-4 py-2 border-l-[6px] border-l-transparent">
					I've worked on various global projects, creating mobile apps for
					governments and web solutions for NGOs, always prioritizing
					user-friendly experiences tailored to individual requirements.
				</p>
				<p className="max-w-lg text-xl pl-4 py-2 border-l-[6px] border-l-transparent">
					I've honed my skills at TeamTic and Afridoctor, specializing in
					React development, where I've contributed to dynamic projects,
					crafting intuitive user interfaces and implementing innovative
					features.
				</p>
				<p className="max-w-lg text-xl pl-4 py-2 border-l-[6px] border-l-transparent">
					Moreover, at Tenafli, I've focused on mobile app development,
					leveraging React Native to create efficient and user-friendly
					solutions. Simultaneously, at Tenafli and MNDPT, I've delved into
					backend development, ensuring robust and reliable systems to
					support critical processes and data management.
				</p>
			</div>
			<div className="w-full py-4 px-12">
				<Lottie animationData={anim} />
			</div>
		</div>
	);
}
