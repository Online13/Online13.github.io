import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { AboutSection } from "@/components/organisms/section/AboutSection";
import { BannerSection } from "@/components/organisms/section/BannerSection";
import { ContactSection } from "@/components/organisms/section/ContactSection";
import { ProjectSection } from "@/components/organisms/section/ProjectSection";
import { ProposalSection } from "@/components/organisms/section/ProposalSection";
import { ServiceSection } from "@/components/organisms/section/ServiceSection";
import { TableContent } from "@/components/organisms/TableContent";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useScrollUpdate } from "@/stores/scroll-store";
import { PropsWithChildren } from "react";

function HomePage() {
	return (
		<div id="home" className="w-full h-full overflow-hidden">
			<ScrollProvider>
				<Header />
				<div className="w-full">
					<BannerSection />
					<AboutSection />
					<ServiceSection />
					<ProposalSection />
					<ProjectSection />
					<ContactSection />
				</div>
				<Footer />
			</ScrollProvider>
		</div>
	);
}

function ScrollProvider({ children }: PropsWithChildren) {
	const updateScroll = useScrollUpdate();
	return (
		<ScrollArea
			onScroll={(e) => {
				const target = e.target as never as {
					scrollTop: number;
					scrollHeight: number;
				};
				updateScroll(target.scrollTop, target.scrollHeight);
			}}
			className="w-full h-full"
		>
			{children}
		</ScrollArea>
	);
}

export default HomePage;
