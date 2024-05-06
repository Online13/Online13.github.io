import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import { useFont } from "./hooks/useFont";
import { calibreFont } from "./assets/fonts/calibre";
import { SplashScreen } from "./components/molecules/SplashScreen";
import { loraFont } from "./assets/fonts/lora";

const router = createBrowserRouter(routes);
function App() {
	const isLoadingLoraFont = useFont(loraFont);
	const isLoadingCalibreFont = useFont(calibreFont);

	if (isLoadingCalibreFont && isLoadingLoraFont) {
		return <SplashScreen />;
	}

	return <RouterProvider router={router} />;
}

export default App;
