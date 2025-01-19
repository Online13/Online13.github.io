import HomePage from "@/pages/HomePage";
import { ProjectPage } from "@/pages/ProjectPage";
import { RouteObject } from "react-router-dom";
import { Layout, MotionBox } from "./Layout";
import { AboutPage } from "@/pages/AboutPage";
import { path } from "./path";

const routes: RouteObject[] = [
	{
		element: <Layout />,
		children: [
			{
				path: path.root,
				element: (
					<MotionBox>
						<HomePage />
					</MotionBox>
				),
			},
			{
				path: path.project.root,
				element: (
					<MotionBox>
						<ProjectPage />
					</MotionBox>
				),
			},
			{
				path: path.about,
				element: (
					<MotionBox>
						<AboutPage />
					</MotionBox>
				),
			},
		],
	},
];

export default routes;
