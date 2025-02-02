import { useScrollUpdate } from "@/stores/scroll-store";
import { PropsWithChildren, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

export function ScrollView({ children }: PropsWithChildren) {
	const ref = useRef<HTMLDivElement>(null);
	const updateScroll = useScrollUpdate();
	const location = useLocation();
	console.log(location);

	useEffect(() => {
		const scrollRef = ref.current as HTMLDivElement;

		return () => {
			console.log(location.pathname);
			updateScroll(0);
			scrollRef.scrollTo({
				top: 0,
				behavior: "smooth",
			});
		};
	}, [location.pathname]);

	return (
		<div
			ref={ref}
			className="w-full h-full overflow-auto"
			onScroll={(e) => {
				const me = ref.current as HTMLDivElement;
				const target = e.target as HTMLDivElement;
				const scrollPercent =
					Math.round(target.scrollTop) /
					(target.scrollHeight -
						Math.round(me.getBoundingClientRect().height));
				updateScroll(scrollPercent);
			}}
		>
			{children}
		</div>
	);
}
