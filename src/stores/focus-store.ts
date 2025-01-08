import { create } from "zustand";

export type Screen = "";

type State = {
	focusOn: string | null;
};

type Action = {
	updateFocus: (focusOn: string | null) => void;
};

type Store = State & Action;

export const useFocusStore = create<Store>()((set) => ({
  focusOn: null,
  updateFocus: (focusOn: string | null) => set({ focusOn }),
}));
