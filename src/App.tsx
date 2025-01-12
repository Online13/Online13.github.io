import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import { useFont } from "./hooks/use-font";
import { calibreFont } from "./assets/fonts/calibre";
import { SplashScreen } from "./components/molecules/SplashScreen";
import { loraFont } from "./assets/fonts/lora";

const router = createBrowserRouter(routes);
const fonts = [...loraFont, ...calibreFont];

function App() {
	const isLoadingFont = useFont(fonts);

	return (
		<SplashScreen loading={isLoadingFont}>
			<RouterProvider router={router} />
		</SplashScreen>
	);
}

export default App;
