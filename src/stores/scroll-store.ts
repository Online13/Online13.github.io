import { create } from "zustand";

interface State {
	y: number;
}

interface Action {
	updateY: (y: number) => void;
}

interface Store extends State, Action {}

export const useScrollStore = create<Store>()((set) => ({
	y: 0,
	updateY: (y: number) => set({ y }),
}));
