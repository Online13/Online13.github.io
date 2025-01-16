import { ScrollArea } from "@/components/ui/scroll-area";
import { useScrollUpdate } from "@/stores/scroll-store";
import { PropsWithChildren } from "react";

export function ScrollView({ children }: PropsWithChildren) {
	const updateScroll = useScrollUpdate();
	return (
		<ScrollArea
			onScroll={(e) => {
				const target = e.target as never as {
					scrollTop: number;
					scrollHeight: number;
				};
				updateScroll(target.scrollTop, target.scrollHeight);
			}}
			className="w-full h-full"
		>
			{children}
		</ScrollArea>
	);
}
