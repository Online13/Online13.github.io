import { create } from "zustand";

interface State {
	scrollValue: number;
}

interface Action {
	updateScrollValue: (value: number) => void;
}

interface Store extends State, Action {}

export const useScrollStore = create<Store>()((set) => ({
	scrollValue: 0,
	updateScrollValue: (value) => set({ scrollValue: value }),
}));

export const useScrollValue = () =>
	useScrollStore((store) => store.scrollValue);

export const useScrollUpdate = () =>
	useScrollStore((store) => store.updateScrollValue);
