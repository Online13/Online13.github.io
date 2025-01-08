import clsx from "clsx";

interface Props {
	inView: boolean;
	isDisabled?: boolean;
}

export function FocusView({ inView, isDisabled = false }: Props) {
	if (isDisabled && inView) {
		return;
	}

	return (
		<div
			className={clsx(
				"duration-500",
				"w-full h-full absolute z-40 inset-0 bg-white/50 backdrop-blur-md transition-opacity",
				!inView && "opacity-100",
				inView && "opacity-0"
			)}
		/>
	);
}
