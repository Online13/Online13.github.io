import { motion } from "framer-motion";
import { PropsWithChildren } from "react";

export function SplashScreen({
	loading,
	children,
}: PropsWithChildren<{ loading: boolean }>) {
	const variantKey = loading ? "loading" : "done";

	return (
		<div className="w-full h-full flex flex-col">
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
			<motion.div
				animate={variantKey}
				initial="loading"
				variants={{
					loading: { height: 0 },
					done: { height: "100%" },
				}}
				transition={{
					duration: 0.8,
					delay: 2,
				}}
				className="w-full"
			>
				{children}
			</motion.div>
		</div>
	);
}
