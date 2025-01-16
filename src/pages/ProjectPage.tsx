import { BibilPreview } from "@/components/molecules/BibilPreview";
import { GeoInfraPreview } from "@/components/molecules/GeoInfraPreview";
import { PokerApplyPreview } from "@/components/molecules/PokerApplyPreview";
import { ProjectPreview } from "@/components/molecules/ProjectPreview";
import { cn } from "@/utils";

export function ProjectPage() {
	return (
		<div id="project">
			<BannerSection />
			<ListSection />
		</div>
	);
}

export function BannerSection() {
	return (
		<div
			className={cn(
				"w-full py-10 flex flex-col justify-center items-center border-y border-border relative"
			)}
		>
			<h1 className="text-xl lg:text-2xl font-semibold">Projects.</h1>
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
