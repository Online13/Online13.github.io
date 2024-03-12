import { useState } from "react";
import { Parallax } from "react-scroll-parallax";

export function ServiceSection() {
	const [progress, setProgress] = useState(0);
	console.log(progress);

	return (
		<Parallax
			onProgressChange={(p) => setProgress(p)}
			className="w-full bg-[whitesmoke] overflow-hidden px-44 py-20 space-y-12"
		>
			<div className="w-full h-full grid grid-cols-3 gap-x-6">
				<Parallax className="py-6 px-6 space-y-4">
					<h2 className="text-6xl text-center font-semibold">Engineering</h2>
					{/* <p className="max-w-[460px] text-lg">
						I offer engineering services that provide smart solutions for
						your technical needs. From planning to execution, we're here
						to make your projects a reality.
					</p> */}
				</Parallax>
				<Parallax className="py-6 px-6 space-y-4">
					<h2 className="text-6xl text-center font-semibold">Design</h2>
					{/* <p className="max-w-[460px] text-lg">
						I specialize in custom product and system design. Whether you
						need to develop a new product or improve an existing one, our
						team of designers will guide you through every step of the
						process.
					</p> */}
				</Parallax>
				<Parallax className="py-6 px-6 space-y-4">
					<h2 className="text-6xl text-center font-semibold">Modelisation</h2>
					{/* <p className="max-w-[460px] text-lg">
						With my expertise in mathematical modeling and artificial
						intelligence, we can help you analyze complex data, predict
						behaviors, and optimize processes. Our models provide valuable
						insights to make informed decisions and maximize performance.
					</p> */}
				</Parallax>
			</div>
		</Parallax>
	);
}
