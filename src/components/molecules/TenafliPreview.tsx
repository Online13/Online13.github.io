import { ProjectCard } from "./ProjectCard";

const title = "Tenafli";
const subtitle = "A home service marketplace mobile app.";
export function TenafliPreview() {
	return (
		<ProjectCard>
			<ProjectCard.Preview></ProjectCard.Preview>
			<ProjectCard.About>
				<ProjectCard.Title>{title}</ProjectCard.Title>
				<ProjectCard.Description>{subtitle}</ProjectCard.Description>
			</ProjectCard.About>
		</ProjectCard>
	);
}
