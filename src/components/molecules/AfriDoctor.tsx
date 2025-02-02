import { ProjectCard } from "./ProjectCard";

const title = "AfriDoctor";
const subtitle = "A platform to connect doctor and patient.";
export function AfriDoctorPreview() {
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
