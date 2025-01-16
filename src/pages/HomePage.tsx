import { AboutSection } from "@/components/organisms/section/AboutSection";
import { BannerSection } from "@/components/organisms/section/BannerSection";
import { ContactSection } from "@/components/organisms/section/ContactSection";
import { ProjectSection } from "@/components/organisms/section/ProjectSection";
import { ProposalSection } from "@/components/organisms/section/ProposalSection";
import { ServiceSection } from "@/components/organisms/section/ServiceSection";
import { usePageTheme } from "@/stores/page-store";
import { PropsWithChildren } from "react";

function HomePage() {
	return (
		<PageProvider>
			<BannerSection />
			<AboutSection />
			<ServiceSection />
			<ProposalSection />
			<ProjectSection />
			<ContactSection />
		</PageProvider>
	);
}

function PageProvider({ children }: PropsWithChildren) {
	const { bg, color } = usePageTheme();
	return (
		<div
			id="home"
			className="w-full h-full overflow-hidden transition-colors duration-700"
			style={{
				backgroundColor: bg,
				color,
			}}
		>
			{children}
		</div>
	);
}
export default HomePage;
