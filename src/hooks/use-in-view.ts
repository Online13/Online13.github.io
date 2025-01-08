import { useFocusStore } from "@/stores/focus-store";
import { debounce } from "lodash";
import { useEffect, useRef, useState } from "react";

export function useInView({
	id,
	threshold,
}: {
	id: string;
	threshold: number;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const [inView, setInView] = useState(false);
	const { updateFocus } = useFocusStore();

	useEffect(() => {
		const root = document.querySelector("#home");
		if (!root) return;

		const debouncedHandleScroll = debounce(() => {
			if (ref.current) {
				const rect = ref.current.getBoundingClientRect();
				const bottomInView =
					rect.bottom <= window.innerHeight && rect.bottom >= 0; // Element visible at the bottom
				const inView =
					rect.top <= window.innerHeight * threshold && rect.bottom >= 0; // General in-view logic
				const focusInView = inView || bottomInView;
				setInView(focusInView);
				if (focusInView) {
					updateFocus(id);
				}
			}
		}, 100); // Adjust debounce interval as needed

		root.addEventListener("scroll", debouncedHandleScroll);
		debouncedHandleScroll(); // Initial check

		return () => {
			root.removeEventListener("scroll", debouncedHandleScroll);
		};
	}, [id, threshold, updateFocus]);

	return { ref, inView };
}
