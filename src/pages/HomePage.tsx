import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { AboutSection } from "@/components/organisms/section/AboutSection";
import { BannerSection } from "@/components/organisms/section/BannerSection";
import { ContactSection } from "@/components/organisms/section/ContactSection";
import { ProjectSection } from "@/components/organisms/section/ProjectSection";
import { ProposalSection } from "@/components/organisms/section/ProposalSection";
import { ServiceSection } from "@/components/organisms/section/ServiceSection";
import { ScrollArea } from "@/components/ui/scroll-area";

function HomePage() {
	return (
		<div className="w-full h-full overflow-hidden">
			<ScrollArea className="w-full h-full">
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
			</ScrollArea>
		</div>
	);
}

export default HomePage;
