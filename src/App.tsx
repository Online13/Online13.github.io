import { motion, MotionConfig } from "framer-motion";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import routes from "./routes";
import { useFont } from "./hooks/use-font";
import { LoadingOverlay } from "./components/molecules/SplashScreen";
import { interFont } from "./assets/fonts/inter";
import { Sidebar } from "./components/template/Sidebar";
import { useSidebarContent } from "./stores/sidebar-content.store";

const router = createBrowserRouter(routes);
const fonts = [...interFont];

const sidebarVariants = {
	open: {
		x: -600,
	},
	close: {
		x: 0,
	},
};

const mainVariants = {
	open: {
		x: -600,
		opacity: 0.2
	},
	close: {
		x: 0,
		opacity: 1
	},
};

function App() {
	const isLoadingFont = useFont(fonts);
	const { open, closeSidebar } = useSidebarContent();
	const currentVariant = open ? "open" : "close";

	return (
		<MotionConfig transition={{ ease: "easeInOut", duration: 0.6 }}>
			<motion.div className="w-screen overflow-hidden h-full flex flex-row">
				<motion.div
					animate={currentVariant}
					variants={mainVariants}
					className="w-screen shrink-0 relative"
				>
					<LoadingOverlay loading={isLoadingFont}>
						<RouterProvider router={router} />
					</LoadingOverlay>
					{open && (
						<motion.div
							onClick={() => {
								closeSidebar();
							}}
							initial={{ backdropFilter: "blur(0px)" }}
							animate={{ backdropFilter: "blur(4px)" }}
							exit={{ backdropFilter: "blur(0px)" }}
							className="fixed inset-0 z-40"
						/>
					)}
				</motion.div>
				<motion.div
					animate={currentVariant}
					variants={sidebarVariants}
					className="w-[600px] shrink-0 h-full relative"
				>
					<Sidebar />
				</motion.div>
			</motion.div>
		</MotionConfig>
	);
}

export default App;
