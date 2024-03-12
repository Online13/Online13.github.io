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

type AppearOnceBase = {
	threshold?: number;
	className?: string;
	classNameAppear?: string;
	classNameHidden?: string;
};

type AppearOnceViewProps = AppearOnceBase &
	(NoPropagationType | WithPropagationType);

export function AppearOnceView({
	children,
	propagation,
	className = "",
	threshold = 0.3,
	classNameAppear = "",
	classNameHidden = "",
}: AppearOnceViewProps) {
	const [show, setShow] = useState(false);
	const handleProgressChange = useCallback(
		(progress: number) => {
			if (!show && progress > threshold) setShow(true);
		},
		[show, threshold]
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
