import clsx from "clsx";
import { ReactNode, useCallback, useState } from "react";
import { Parallax } from "react-scroll-parallax";

type NoPropagationType = {
	propagation: false;
	children: ReactNode;
};

type WithPropagationType = {
	propagation: true;
	children(show: boolean): ReactNode;
};

type AppearProgressBase = {
	threshold?: number;
	className?: string;
	classNameAppear?: string;
	classNameHidden?: string;
	shouldShow(p: number): boolean;
};

type AppearProgressViewProps = AppearProgressBase &
	(NoPropagationType | WithPropagationType);



export function AppearProgressView({
	children,
	shouldShow,
	propagation,
	className = "",
	classNameAppear = "",
	classNameHidden = "",
}: AppearProgressViewProps) {
	const [show, setShow] = useState(false);
	const handleProgressChange = useCallback(
		(progress: number) => {
			setShow(shouldShow(progress));
		},
		[shouldShow]
	);

	return (
		<Parallax
			onProgressChange={handleProgressChange}
			className={clsx(className, {
				[classNameAppear]: show,
				[classNameHidden]: !show,
			})}
		>
			{propagation ? children(show) : children}
		</Parallax>
	);
}
