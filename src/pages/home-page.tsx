import { AboutSection } from "src/components/organisms/home/about-section";
import { BannerSection } from "src/components/organisms/home/banner-section";
import { ContactSection } from "src/components/organisms/home/contact-section";
import { ProjectSection } from "@/components/organisms/home/project-section";
import Footer from "src/components/organisms/layout/Footer";

import { ParallaxProvider } from "react-scroll-parallax";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { ServiceSection } from "@/components/organisms/home/service-section";
import { ProposalSection } from "@/components/organisms/home/proposal-section";
import { ScrollArea } from "@/lib/shadcn/ui/scroll-area";
import { ScrollTrigger } from "@/lib/gsap";

function ScrollContainer({ children }: PropsWithChildren) {
	const [scrollEl, setScrollElement] = useState<HTMLDivElement | undefined>(
		undefined
	);
	const ref = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		ScrollTrigger.defaults({
			scroller: ref.current,
		});
		setScrollElement(ref.current || undefined);
	}, []);

	return (
		<ScrollArea className="w-full h-full scroll-smooth " ref={ref}>
			<ParallaxProvider scrollContainer={scrollEl}>
				{children}
			</ParallaxProvider>
		</ScrollArea>
	);
}

function HomePage() {
	return (
		<ScrollContainer>
			<BannerSection />
			<div className="w-full border-t border-t-black"></div>
			<AboutSection />
			<div className="w-full border-t border-t-black"></div>
			<ServiceSection />
			<div className="w-full border-t border-t-black"></div>
			<ProposalSection />
			<div className="w-full border-t border-t-black"></div>
			<ProjectSection />
			<div className="w-full border-t border-t-black"></div>
			<ContactSection />
			<Footer />
		</ScrollContainer>
	);
}

export default HomePage;
