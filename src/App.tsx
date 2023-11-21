import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import { Fragment } from "react";

const router = createBrowserRouter(routes);

function App() {
	return (
		<Fragment>
			<RouterProvider router={router} />
		</Fragment>
	);
}

export default App;
