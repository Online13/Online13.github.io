import { ProjectCard } from "./ProjectCard";

const title = "CRS-IPM";
const subtitle =
	"An app to manage the information contained in PERSUAP document.";

export function CrsPreview() {
	return (
		<ProjectCard>
			<ProjectCard.About>
				<ProjectCard.Title>{title}</ProjectCard.Title>
				<ProjectCard.Description>{subtitle}</ProjectCard.Description>
			</ProjectCard.About>
			<ProjectCard.Preview></ProjectCard.Preview>
		</ProjectCard>
	);
}
