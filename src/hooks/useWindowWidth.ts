import { Store } from "@/type";
import { useSyncExternalStore } from "react";

class WindowWidthStore implements Store<number> {
	private onResize: () => void;

	constructor() {
		this.onResize = () => {};
		this.subscribe = this.subscribe.bind(this);
		this.unsubscribe = this.unsubscribe.bind(this);
	}

	unsubscribe(): void {
		window.removeEventListener("resize", this.onResize);
	}

	subscribe(onStoreChange: () => void): () => void {
		this.onResize = onStoreChange;
		window.addEventListener("resize", this.onResize);
		return this.unsubscribe;
	}

	getSnapshot() {
		return window.innerWidth;
	}
}

const windowSizeStore = new WindowWidthStore();

export function useWindowWidth() {
	return useSyncExternalStore(
		windowSizeStore.subscribe,
		windowSizeStore.getSnapshot
	);
}
