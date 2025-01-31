import { useScrollUpdate } from "@/stores/scroll-store";
import { PropsWithChildren, useLayoutEffect, useRef } from "react";

export function ScrollView({ children }: PropsWithChildren) {
	const ref = useRef<HTMLDivElement>(null);
	const updateScroll = useScrollUpdate();

	useLayoutEffect(() => {
		const abortController = new AbortController();
		ref.current?.addEventListener(
			"scroll",
			(e) => {
				const me = ref.current as HTMLDivElement;
				const target = e.target as HTMLDivElement;
				const scrollPercent =
					Math.round(target.scrollTop) /
					(target.scrollHeight -
						Math.round(me.getBoundingClientRect().height));
				updateScroll(scrollPercent);
			},
			{
				signal: abortController.signal,
			}
		);

		return () => abortController.abort();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div ref={ref} className="w-full h-full overflow-auto">
			{children}
		</div>
	);
}
