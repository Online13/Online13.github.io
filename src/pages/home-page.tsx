import { AboutSection } from "src/components/organisms/home/about-section";
import { BannerSection } from "src/components/organisms/home/banner-section";
import { ContactSection } from "src/components/organisms/home/contact-section";
import { RewardSection } from "@/components/organisms/home/reward-section";
import { SkillSection } from "src/components/organisms/home/skill-section";
import Footer from "src/components/organisms/layout/Footer";

import { ParallaxProvider } from "react-scroll-parallax";
import { PropsWithChildren, useEffect, useRef, useState } from "react";
import { ServiceSection } from "@/components/organisms/home/service-section";

function ScrollContainer({ children }: PropsWithChildren) {
	const [scrollEl, setScrollElement] = useState<HTMLDivElement | undefined>(
		undefined
	);
	const ref = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		setScrollElement(ref.current || undefined);
	}, []);

	return (
		<div className="w-full h-full overflow-auto scroll-smooth" ref={ref}>
			<ParallaxProvider scrollContainer={scrollEl}>
				{children}
			</ParallaxProvider>
		</div>
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
			<RewardSection />
			<div className="w-full border-t border-t-black"></div>
			<SkillSection />
			<div className="w-full border-t border-t-black"></div>
			<ContactSection />
			<Footer />
		</ScrollContainer>
	);
}

export default HomePage;
