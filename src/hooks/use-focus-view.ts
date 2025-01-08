import { useHandleMouse } from "./use-handle-mouse";
import { useInView } from "./use-in-view";
// import { useInView } from "react-intersection-observer";

export function useFocusView({
	threshold,
	id,
}: {
	threshold: number;
	id: string;
}) {
	const { ref, inView } = useInView({
		threshold,
		id,
	});
	const { isDisabled, onMouseEnter, onMouseLeave } = useHandleMouse();

	return { inView, ref, isDisabled, onMouseEnter, onMouseLeave };
}
