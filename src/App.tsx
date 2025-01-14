import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import { useFont } from "./hooks/use-font";
import { SplashScreen } from "./components/molecules/SplashScreen";
import { interFont } from "./assets/fonts/inter";

const router = createBrowserRouter(routes);
const fonts = [...interFont];

function App() {
	const isLoadingFont = useFont(fonts);

	return (
		<SplashScreen loading={isLoadingFont}>
			<RouterProvider router={router} />
		</SplashScreen>
	);
}

export default App;
