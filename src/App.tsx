import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import { useFont } from "./hooks/use-font";
import { LoadingOverlay } from "./components/molecules/SplashScreen";
import { interFont } from "./assets/fonts/inter";

const router = createBrowserRouter(routes);
const fonts = [...interFont];

function App() {
	const isLoadingFont = useFont(fonts);

	return (
		<LoadingOverlay loading={isLoadingFont}>
			<RouterProvider router={router} />
		</LoadingOverlay>
	);
}

export default App;
