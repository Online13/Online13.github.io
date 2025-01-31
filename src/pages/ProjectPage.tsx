import { AfriDoctorPreview } from "@/components/molecules/AfriDoctor";
import { BibilPreview } from "@/components/molecules/BibilPreview";
import { CrsPreview } from "@/components/molecules/CrsPreview";
import { GeoInfraPreview } from "@/components/molecules/GeoInfraPreview";
import { PokerApplyPreview } from "@/components/molecules/PokerApplyPreview";
import { ProjectPreview } from "@/components/molecules/ProjectPreview";
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
		<div className="w-full container pb-12">
			<BibilPreview />
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
			<ProjectPreview
				title="Tenafli"
				subtitle="A home service marketplace mobile app."
				preview={<TenafliPreview />}
			/>
			<ProjectPreview
				title="CRS-IPM"
				subtitle="An app to manage the information contained in PERSUAP document."
				preview={<CrsPreview />}
			/>
			<ProjectPreview
				title="AfriDoctor"
				subtitle="A platform to connect doctor and patient."
				preview={<AfriDoctorPreview />}
			/>
		</div>
	);
}
