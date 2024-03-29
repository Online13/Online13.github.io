import { Store } from "@/type";
import { wait } from "@/utils/async";
import { useMemo, useSyncExternalStore } from "react";

export type FontData = {
	name: string;
	path: string;
	options: FontFaceDescriptors;
};

class FontStore implements Store<FontFaceSetLoadStatus> {
	private fonts: FontFace[];
	constructor(fonts: FontData[]) {
		this.fonts = fonts.map((font) => {
			return new FontFace(font.name, `url(${font.path})`, font.options);
		});
		this.subscribe = this.subscribe.bind(this);
		this.unsubscribe = this.unsubscribe.bind(this);

		for (const font of this.fonts) {
			document.fonts.add(font);
			font.load();
		}
	}

	unsubscribe() {
		this.fonts.forEach((font) => {
			document.fonts.delete(font);
		});
	}

	subscribe(onStoreChange: () => void) {
		document.fonts.onloadingerror = () => {
			console.log("Font loading error...");
		};

		Promise.all([document.fonts.ready, wait(1200)]).then(() => {
			onStoreChange();
		});

		return this.unsubscribe;
	}

	getSnapshot() {
		return document.fonts.status;
	}
}

export function useFont(fonts: FontData[]) {
	const fontStore = useMemo(() => new FontStore(fonts), [fonts]);
	const status = useSyncExternalStore(
		fontStore.subscribe,
		fontStore.getSnapshot
	);
	const isLoading = status === "loading";

	return isLoading;
}
