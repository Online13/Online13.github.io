import clsx from "clsx";
import { ReactNode } from "react";
import { AppearOnceView } from "./appear-once-view";

type AppearTextProps = {
	texts: ReactNode[];
	className?: string;
};

export function AppearText({ texts, className = "" }: AppearTextProps) {
	return (
		<AppearOnceView propagation className={clsx(className)}>
			{(appear) =>
				texts.map((text, i) => {
					return (
						<div
							key={`text-${i}`}
							className="inline-block"
							style={{
								clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)",
							}}
						>
							<div
								className={clsx(
									"relative transition-all duration-1000 ease-in-out",
									{
										"translate-y-0 opacity-100": appear,
										"translate-y-[100px] opacity-0": !appear,
									}
								)}
							>
								{text}
							</div>
						</div>
					);
				})
			}
		</AppearOnceView>
	);
}
