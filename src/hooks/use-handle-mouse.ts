import { useState } from "react";

export function useHandleMouse() {
	const [isDisabled, setIsDisabled] = useState(false);
	const handleMouseEnter = () => {
		setIsDisabled(true);
	};
	const handleMouseLeave = () => {
		setIsDisabled(false);
	};

	return {
		isDisabled,
		setIsDisabled,
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
	};
}
