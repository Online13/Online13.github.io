import { FontData } from "@/type";
import { wait } from "@/utils/async";
import { useRef, useSyncExternalStore } from "react";

function createFontStore(_fonts: FontData[]) {
	const fonts = _fonts.map((font) => {
		return new FontFace(font.name, `url(${font.path})`, font.options);
	});
	for (const font of fonts) {
		document.fonts.add(font);
		font.load();
	}

	const unsubscribe = () => {
		fonts.forEach((font) => {
			document.fonts.delete(font);
		});
	};

	const subscribe = (onStoreChange: () => void) => {
		document.fonts.onloadingerror = () => {
			console.log("Font loading error...");
		};

		Promise.all([document.fonts.ready, wait(1200)]).then(() => {
			onStoreChange();
		});

		return unsubscribe;
	};

	const getSnapshot = () => {
		return document.fonts.status;
	};

	return {
		unsubscribe,
		subscribe,
		getSnapshot,
	};
}

type FontStore = ReturnType<typeof createFontStore>;

export function useFont(fonts: FontData[]) {
	const fontStore = useRef<FontStore | null>(null);
	if (fontStore.current === null) {
		fontStore.current = createFontStore(fonts);
	}

	const status = useSyncExternalStore(
		fontStore.current.subscribe,
		fontStore.current.getSnapshot
	);
	const isLoading = status === "loading";

	return isLoading;
}
