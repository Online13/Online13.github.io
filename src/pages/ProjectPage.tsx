import { BibilPreview } from "@/components/molecules/BibilPreview";
import { GeoInfraPreview } from "@/components/molecules/GeoInfraPreview";
import { PokerApplyPreview } from "@/components/molecules/PokerApplyPreview";
import { ProjectPreview } from "@/components/molecules/ProjectPreview";
import { ProjectBannerSection } from "@/components/organisms/section/ProjectBannerSection";

export function ProjectPage() {
	return (
		<div id="project">
			<ProjectBannerSection />
			<ListSection />
		</div>
	);
}

export function ListSection() {
	return (
		<div className="w-full container pb-12">
			<ProjectPreview
				title="Bibil"
				subtitle="An app for easy car rentals in Madagascar."
				preview={<BibilPreview />}
			/>
			<ProjectPreview
				title="PokerApply"
				subtitle="A chat app for poker player"
				preview={<PokerApplyPreview />}
			/>
			<ProjectPreview
				title="Geo-Infrastructure"
				subtitle="An app for infrastructure mapping in Madagascar."
				preview={<GeoInfraPreview />}
			/>
		</div>
	);
}
