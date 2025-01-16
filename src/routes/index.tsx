import HomePage from "@/pages/HomePage";
import { ProjectPage } from "@/pages/ProjectPage";
import { RouteObject } from "react-router-dom";
import { Layout, MotionBox } from "./Layout";
import { AboutPage } from "@/pages/AboutPage";

const routes: RouteObject[] = [
	{
		path: "",
		element: <Layout />,
		children: [
			{
				path: "",
				element: (
					<MotionBox>
						<HomePage />
					</MotionBox>
				),
			},
			{
				path: "project",
				element: <MotionBox>
					<ProjectPage />
				</MotionBox>,
			},
			{
				path: "about",
				element: <MotionBox>
					<AboutPage />
				</MotionBox>,
			},
		],
	},
];

export default routes;
