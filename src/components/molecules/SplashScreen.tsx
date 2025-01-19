import { motion } from "framer-motion";
import { PropsWithChildren, useState } from "react";

export function LoadingOverlay({
	loading,
	children,
}: PropsWithChildren<{ loading: boolean }>) {
	const variantKey = loading ? "loading" : "done";
	const [mountChildren, setMountChildren] = useState(false);

	return (
		<div className="w-full h-full flex flex-col font-inter">
			{/* loading screen */}
			<motion.div
				animate={variantKey}
				variants={{
					loading: { height: "100%" },
					done: { height: 0 },
				}}
				transition={{
					delay: 1.6,
				}}
				onAnimationComplete={(d) => {
					console.log(d)
					setMountChildren(true);
				}}
				className="fixed inset-0 w-full h-full"
			>
				<motion.div
					animate={variantKey}
					initial="loading"
					variants={{
						loading: { height: "100%" },
						done: { height: 0 },
					}}
					transition={{
						duration: 0.8,
					}}
					className="flex items-center justify-center w-full bg-white"
				>
					<motion.div
						animate={variantKey}
						variants={{
							loading: { scale: 1 },
							done: { scale: 0 },
						}}
						className="flex justify-center items-center space-x-1 text-sm text-gray-700"
					>
						<svg
							fill="none"
							className="w-6 h-6 animate-spin"
							viewBox="0 0 32 32"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								clipRule="evenodd"
								d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
								fill="currentColor"
								fillRule="evenodd"
							/>
						</svg>

						<div>Loading ...</div>
					</motion.div>
				</motion.div>
				{/* loading background */}
				<motion.div
					animate={variantKey}
					initial="loading"
					variants={{
						loading: { height: 0 },
						done: { height: "100%" },
					}}
					transition={{
						duration: 0.8,
					}}
					className="w-full bg-stone-900"
				></motion.div>
			</motion.div>
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
