import { Footer } from "@/components/organisms/Footer";
import { Header } from "@/components/organisms/Header";
import { AboutSection } from "@/components/organisms/section/AboutSection";
import { BannerSection } from "@/components/organisms/section/BannerSection";
import { ContactSection } from "@/components/organisms/section/ContactSection";
import { ProjectSection } from "@/components/organisms/section/ProjectSection";
import { ProposalSection } from "@/components/organisms/section/ProposalSection";
import { ServiceSection } from "@/components/organisms/section/ServiceSection";
import { ScrollArea } from "@/components/ui/scroll-area";
import { usePageTheme } from "@/stores/page-store";
import { useScrollUpdate } from "@/stores/scroll-store";
import { PropsWithChildren } from "react";

function HomePage() {
	return (
		<PageProvider>
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
		</PageProvider>
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
