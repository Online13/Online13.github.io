import { SidebarContentType } from "@/type";
import { create } from "zustand";

type Store = {
	open: boolean;
	closeSidebar(): void;
	content: SidebarContentType | null;
	openSidebar(content: SidebarContentType): void;
};

export const useSidebarContent = create<Store>()((set) => ({
	open: false,
	content: null,
	openSidebar: (content) => set({ open: true, content }),
	closeSidebar: () => set({ open: false }),
}));
