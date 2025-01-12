import { create } from "zustand";

interface State {
	y: number;
	height: number;
}

interface Action {
	updateY: (y: number, height: number) => void;
}

interface Store extends State, Action {}

export const useScrollStore = create<Store>()((set) => ({
	y: 0,
	height: 0,
	updateY: (y: number, height: number) => set({ y, height }),
}));

export const useScrollValue = () => useScrollStore((store) => store.y);

export const useScrollHeight = () => useScrollStore((store) => store.height);

export const useScrollUpdate = () => useScrollStore((store) => store.updateY);
