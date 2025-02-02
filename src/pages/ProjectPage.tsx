import { AfriDoctorPreview } from "@/components/molecules/AfriDoctor";
import { BibilPreview } from "@/components/molecules/BibilPreview";
import { CrsPreview } from "@/components/molecules/CrsPreview";
import { GeoInfraPreview } from "@/components/molecules/GeoInfraPreview";
import { PokerApplyPreview } from "@/components/molecules/PokerApplyPreview";
import { TenafliPreview } from "@/components/molecules/TenafliPreview";
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
		<div className="w-full container py-12">
			<BibilPreview />
			<PokerApplyPreview />
			<GeoInfraPreview />
			<TenafliPreview />
			<CrsPreview />
			<AfriDoctorPreview />
		</div>
	);
}
