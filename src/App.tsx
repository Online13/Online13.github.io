import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import { useFont } from "./hooks/useFont";
import { fonts } from "./assets/fonts/calibre";
import { SplashScreen } from "./components/molecules/SplashScreen";

const router = createBrowserRouter(routes);
function App() {
	const isLoading = useFont(fonts);

	if (isLoading) {
		return (
			<SplashScreen />
		);
	}

	return <RouterProvider router={router} />;
}

export default App;
