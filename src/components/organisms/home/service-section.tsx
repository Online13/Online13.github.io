import { useSpring, animated, useTransition } from "@react-spring/web";
import clsx from "clsx";
import { ReactNode, useState } from "react";
import { Parallax } from "react-scroll-parallax";

type ServiceProps = {
	id: number;
	title: string;
	focus: boolean;
	speed: number;
	focusOnOther: boolean;
	description: ReactNode;
	onClick(id: number): void;
};

const SHOW_CONTENT_TRANSITION = {
	from: { opacity: 0 },
	enter: { opacity: 1 },
	leave: { opacity: 0 },
	exitBeforeEnter: true,
	config: {
		mass: 2,
		friction: 5,
		tension: 80,
		duration: 700,
	},
};

function Service(props: ServiceProps) {
	const { id, title, focus, speed, description, focusOnOther, onClick } =
		props;

	const [focusStyle] = useSpring(
		{
			flexBasis: focus ? "70%" : "0px",
			config: {
				duration: 300,
			},
		},
		[focus]
	);

	const [blurStyle] = useSpring(
		{
			scale: focusOnOther ? 0.5 : 1,
			rotate: focusOnOther ? -90 : 0,
			delay: 200,
			config: {
				tension: 120,
				friction: 14,
			},
		},
		[focusOnOther]
	);

	const showContentTransition = useTransition(focus, SHOW_CONTENT_TRANSITION);

	return (
		<animated.div
			onClick={() => {
				onClick(id);
			}}
			style={{
				transition: "flex-basis 700ms,background-color 300ms,color 300ms",
				...focusStyle,
			}}
			className={clsx(
				"flex-shrink flex-grow h-full relative",
				"space-y-4 px-8 py-20 hover:bg-black hover:text-white cursor-pointer group",
				{
					"bg-black text-white": focus,
				}
			)}
		>
			<Parallax
				speed={speed}
				className="w-full h-full flex justify-center items-center gap-12 absolute top-0 left-0"
			>
				<animated.h2
					style={blurStyle}
					className="text-6xl text-center font-semibold group-hover:scale-110"
				>
					{title}
				</animated.h2>
				{showContentTransition(
					(style, item) =>
						item && (
							<animated.p
								style={style}
								className="max-w-[460px] max-h-[80%] overflow-hidden text-xl"
							>
								{description}
							</animated.p>
						)
				)}
			</Parallax>
		</animated.div>
	);
}

export function ServiceSection() {
	const [focus, setFocus] = useState(-1);
	const [progress, setProgress] = useState(0);

	return (
		<Parallax
			onProgressChange={(p) => setProgress(p)}
			className="w-full bg-[whitesmoke] overflow-hidden"
		>
			<div className="w-full h-[300px] flex items-center">
				<Service
					id={0}
					title="Engineering"
					speed={progress >= 0.5 ? 0 : -10}
					focus={focus === 0}
					focusOnOther={focus !== 0 && focus !== -1}
					onClick={(id) => {
						setFocus((f) => (f === -1 || f !== id ? id : -1));
					}}
					description={
						<>
							I offer engineering services that provide smart solutions
							for your technical needs. From planning to execution, we're
							here to make your projects a reality.
						</>
					}
				/>
				<Service
					id={1}
					title="Design"
					speed={progress >= 0.5 ? 0 : -20}
					focus={focus === 1}
					focusOnOther={focus !== 1 && focus !== -1}
					onClick={(id) => {
						setFocus((f) => (f === -1 || f !== id ? id : -1));
					}}
					description={
						<>
							I specialize in custom product and system design. Whether
							you need to develop a new product or improve an existing
							one, our team of designers will guide you through every
							step of the process.
						</>
					}
				/>
				<Service
					id={2}
					title="Modelisation"
					speed={progress >= 0.5 ? 0 : -30}
					focus={focus === 2}
					focusOnOther={focus !== 2 && focus !== -1}
					onClick={(id) => {
						setFocus((f) => (f === -1 || f !== id ? id : -1));
					}}
					description={
						<>
							With my expertise in mathematical modeling and artificial
							intelligence, we can help you analyze complex data, predict
							behaviors, and optimize processes. Our models provide
							valuable insights to make informed decisions and maximize
							performance.
						</>
					}
				/>
			</div>
		</Parallax>
	);
}
