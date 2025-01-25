import { ScrollArea } from "@/components/ui/scroll-area";
import { useScrollUpdate } from "@/stores/scroll-store";
import { PropsWithChildren } from "react";

export function ScrollView({ children }: PropsWithChildren) {
	const updateScroll = useScrollUpdate();
	return (
		<div
			onScroll={(e) => {
				const target = e.target as never as {
					scrollTop: number;
					scrollHeight: number;
				};
				console.log(target.scrollTop, target.scrollHeight);
				updateScroll(target.scrollTop, target.scrollHeight);
			}}className="w-full h-full overflow-auto"
		>
			{children}
		</div>
	);
}
