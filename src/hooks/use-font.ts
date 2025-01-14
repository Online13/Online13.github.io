import { FontData } from "@/type";
import { wait } from "@/utils/async";
import { useRef, useSyncExternalStore } from "react";

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


function createFontStore(_fonts: FontData[]) {
	const fonts = _fonts.map((font) => {
		return new FontFace(font.name, `url(${font.path})`, font.options);
	});
	for (const font of fonts) {
		font.load().then((loadedFont) => {
			document.fonts.add(loadedFont);
		});
		// document.fonts.add(font);
	}

	const unsubscribe = () => {
		fonts.forEach((font) => {
			document.fonts.delete(font);
		});
	};

	const subscribe = (onStoreChange: () => void) => {
		try {
			document.fonts.onloadingerror = () => {
				console.log("Font loading error...");
			};
	
			Promise.all([document.fonts.ready, wait(1200)]).then(() => {
				onStoreChange();
			});
		} catch (err) {
			console.log(err);
		}

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