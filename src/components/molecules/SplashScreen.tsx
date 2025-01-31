import { motion } from "framer-motion";
import { PropsWithChildren, useState } from "react";

export function LoadingOverlay({
	loading,
	children,
}: PropsWithChildren<{ loading: boolean }>) {
	const variantKey = loading ? "loading" : "done";
	const [mountChildren, setMountChildren] = useState(false);

	return (
		<div className="w-full h-full flex flex-col font-inter relative">
			{/* loading screen */}
			<motion.div
				animate={variantKey}
				variants={{
					loading: { height: "100%" },
					done: { height: 0 },
				}}
				transition={{
					delay: 1.6,
					duration: 1,
				}}
				onAnimationComplete={(d) => {
					console.log(d);
					setMountChildren(true);
				}}
				className="absolute inset-0 w-full bg-stone-900"
			></motion.div>
			{/* main */}
			{mountChildren && (
				<motion.div
					animate={variantKey}
					initial="loading"
					variants={{
						loading: { opacity: 0, y: -100 },
						done: { opacity: 1, y: 0 },
					}}
					transition={{
						duration: 0.8,
						easings: ["easeInOut"],
					}}
					className="w-full h-full"
				>
					{children}
				</motion.div>
			)}
		</div>
	);
}
