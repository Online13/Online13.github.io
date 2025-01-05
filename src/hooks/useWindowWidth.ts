import { useSyncExternalStore } from "react";

let onResize = () => {};

function unsubscribe(): void {
	window.removeEventListener("resize", onResize);
}

function subscribe(onStoreChange: () => void): () => void {
	onResize = onStoreChange;
	window.addEventListener("resize", onResize);
	return unsubscribe;
}

function getSnapshot() {
	return window.innerWidth;
}

export function useWindowWidth() {
	return useSyncExternalStore(subscribe, getSnapshot);
}
