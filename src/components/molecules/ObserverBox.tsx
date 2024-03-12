import {
	HTMLAttributes,
	PropsWithChildren,
	useEffect,
	useMemo,
	useRef,
} from "react";

type ObserverBoxProps = PropsWithChildren<
	Omit<HTMLAttributes<HTMLDivElement>, "onChange"> & {
		threshold: number[];
		onChange(entry: IntersectionObserverEntry): void;
	}
>;

function ObserverBox({
	threshold,
	children,
	onChange,
	...rest
}: ObserverBoxProps) {
	const ref = useRef<HTMLDivElement | null>(null);
	const observer = useMemo(() => {
		const options = {
			root: null,
			threshold: threshold,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				onChange(entry);
			});
		}, options);

		return observer;
	}, [onChange, threshold]);

	useEffect(() => {
		if (ref.current === null) return;
		observer.observe(ref.current);
	}, [observer]);

	return (
		<div ref={ref} {...rest}>
			{children}
		</div>
	);
}

export default ObserverBox;
