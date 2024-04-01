import { Fragment } from "react";
import profileImage from "@/assets/images/profile.webp";
import clsx from "clsx";
import { AppearOnceView } from "@/components/atoms/presentations/appear-once-view";
import { OutlineText } from "@/components/atoms/typography/outline-text";

// const CLASSIC_GREETING = (
// 	<Fragment>
// 		<p>
// 			🎓 I am currently in the final stages of my Master's degree at MISA.
// 		</p>
// 		<p>
// 			🤵 I am <span className="font-semibold">self-taught</span>,{" "}
// 			<span className="font-semibold">proactive</span> and{" "}
// 			<span className="font-semibold">
// 				passionate about IT and Mathematics
// 			</span>
// 			. Being able to use mathematics in computer science made me learn
// 			computer science even more.
// 		</p>
// 		<p>
// 			💡 I’m React Js, <span className="font-semibold">Typescript</span> and
// 			CSS nerd. I love everything about 3D modeling, video games, and
// 			artificial intelligence, especially about Natural Language Processing.
// 		</p>
// 		<p>
// 			🏓 My hobbies are drawing, playing chess, playing video games, and
// 			manga.
// 		</p>
// 	</Fragment>
// );

const MAIN_GREETING = (
	<Fragment>
		<p>
			🤵 Exploring interface design and creation, when I was studying
			mathematics in my first year, was an exceptional adventure, and I
			haven't stopped since.💡 In parallel, I've been lucky enough to work on
			projects where I've gained experience with{" "}
			<span className="font-semibold">React</span>,{" "}
			<span className="font-semibold">Node js</span>,{" "}
			<span className="font-semibold">Python</span> and{" "}
			<span className="font-semibold">Typescript.</span>
		</p>
		<p>
			🎓 Now I'm preparing my final year intership at the LIMA Laboratory. In
			my spare time, I work on personal project and take part in hackathons.
		</p>
		<p>
			🏓 My hobbies are drawing, playing chess, playing video games, and
			manga.
		</p>
	</Fragment>
);

export function AboutSection() {
	return (
		<div id="about" className="relative z-10 w-full pt-20 pb-12">
			<div className="hidden lg:block absolute top-20 left-12">
				<OutlineText className="origin-top-right -rotate-90 -translate-x-full">
					About.
				</OutlineText>
			</div>
			<div className="w-full flex flex-col-reverse lg:flex-row justify-start items-center px-8 md:px-12 xl:px-24 2xl:px-72 gap-12 lg:gap-32">
				<div className="space-y-8 pb-8">
					<div className="max-w-lg space-y-6 text-xl lg:text-2xl">
						{MAIN_GREETING}
					</div>
				</div>
				<div className="">
					<AppearOnceView
						propagation={false}
						className={clsx(
							"w-[300px] aspect-square rounded-full overflow-hidden relative transition-transform animate-appear border border-black",
							"duration-700"
						)}
						classNameHidden="scale-0"
					>
						<div className="w-full h-full bg-stone-300 relative z-20">
							<img src={profileImage} className="w-full h-full" alt="" />
						</div>
					</AppearOnceView>
				</div>
			</div>
		</div>
	);
}
