import HomePage from "@/pages/HomePage";
import { RouteObject } from "react-router-dom";

const routes: RouteObject[] = [
	{
		path: "",
		children: [
			{
				path: "",
				element: <HomePage />,
			},
		],
	},
];

export default routes;
