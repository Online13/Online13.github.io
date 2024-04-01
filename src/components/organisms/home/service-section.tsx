import { useWindowWidth } from "@/hooks/useWindowWidth";
import { gsap, useGSAP } from "@/lib/gsap";
import clsx from "clsx";
import { ReactNode, useRef, useState } from "react";
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

function Service(props: ServiceProps) {
	const width = useWindowWidth();
	const disabled = width < 1280;
	const { id, title, focus, speed, description, focusOnOther, onClick } =
		props;

	const rootRef = useRef<HTMLDivElement | null>(null);
	const titleRef = useRef<HTMLHeadingElement | null>(null);
	const descriptionRef = useRef<HTMLParagraphElement | null>(null);

	useGSAP(() => {
		gsap.to(descriptionRef.current, {
			width: focus ? "100%" : "0px",
			delay: 0.2
		});
		gsap.to(descriptionRef.current, {
			opacity: focus ? 1 : 0,
		});
	}, [focus]);

	useGSAP(() => {
		gsap.to(rootRef.current, {
			flexBasis: !disabled && focus ? "70%" : "0px",
			duration: 0.3,
		});
	}, [disabled, focus]);

	useGSAP(() => {
		gsap.to(titleRef.current, {
			scale: focusOnOther ? 0.5 : 1,
			rotate: !disabled && focusOnOther ? -90 : 0,
			delay: 0.2,
		});
	}, [disabled, focusOnOther]);


	return (
		<div
			ref={rootRef}
			onClick={() => {
				onClick(id);
			}}
			className={clsx(
				"xl:flex-shrink xl:flex-grow relative",
				"w-full h-full transition-[flex-basis_700ms,background-color_300ms,color_300ms]",
				"space-y-4 px-8 py-20 hover:bg-black hover:text-white cursor-pointer group",
				{
					"bg-black text-white testrok": focus,
				}
			)}
		>
			<Parallax
				speed={speed}
				disabled={disabled}
				className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-12 xl:absolute top-0 left-0 px-12"
			>
				<h2
					ref={titleRef}
					className="text-4xl md:text-5xl lg:text-6xl text-center font-semibold group-hover:scale-110 group-hover:underline"
				>
					{title}.
				</h2>
				<p
					ref={descriptionRef}
					className="max-w-[460px] max-h-[80%] overflow-hidden text-xl transition-all duration-500 line-clamp-4"
				>
					{description}
				</p>
			</Parallax>
		</div>
	);
}

export function ServiceSection() {
	const [focus, setFocus] = useState(-1);
	const [progress, setProgress] = useState(0);
	function speed(val: number) {
		if (progress >= 0.5) {
			return 0;
		} else {
			return val;
		}
	}

	return (
		<Parallax
			onProgressChange={(p) => setProgress(p)}
			className="w-full bg-[whitesmoke] overflow-hidden"
		>
			<div className="w-full h-[calc(190px*3)] xl:h-[250px] grid grid-rows-3 xl:flex xl:flex-row xl:items-center">
				<Service
					id={0}
					title="Engineering"
					speed={speed(-20)}
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
					speed={speed(-30)}
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
					speed={speed(-40)}
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
