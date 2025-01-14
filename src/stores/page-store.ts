import { create } from "zustand";

type State = {
	theme: "dark" | "light";
};

type Action = {
	updateTheme(bg: "dark" | "light"): void;
};

type Store = Action & State;

export const usePageStore = create<Store>()((set) => ({
	theme: "light",
	updateTheme(bg) {
		set({ theme: bg });
	},
}));

export const usePageTheme = () => {
	const theme = usePageStore((store) => store.theme);
	if (theme === "dark") {
		return {
			bg: "#0E0F12",
			color: "white",
		};
	} else {
		return {
			bg: "white",
			color: "#0E0F12",
		};
	}
};

export const usePageUpdateTheme = () =>
	usePageStore((store) => store.updateTheme);
