import { AppearBox } from "@/components/atoms/presentations/appear-box";
import clsx from "clsx";
import { useRef } from "react";

export function ContactSection() {
	const nameRef = useRef<HTMLInputElement | null>(null);
	const emailRef = useRef<HTMLInputElement | null>(null);
	const messageRef = useRef<HTMLTextAreaElement | null>(null);

	return (
		<div className="relative px-8 md:px-12 lg:px-24 xl:px-32 2xl:px-60 z-10 w-full">
			<div className="w-full pb-12 xl:space-y-20 pt-24 xl:pt-0 grid grid-cols-1 xl:grid-cols-2 xl:gap-12">
				<div className="w-full flex flex-col justify-center gap-4">
					<div className="w-full flex flex-col">
						<h2 className="text-6xl font-semibold whitespace-nowrap">
							<AppearBox>Let's make something</AppearBox>
							<AppearBox>
								amazing <span className="text-[#002AFF]">together</span>
								.
							</AppearBox>
						</h2>
					</div>
					<p className="text-2xl max-w-md">
						Want to work together? I probably do, too. Tell me about{" "}
						<span
							className="underline cursor-pointer hover:text-blue-700"
							onClick={() => {
								nameRef.current?.focus();
							}}
						>
							yourself
						</span>
						,{" "}
						<span
							className="underline cursor-pointer hover:text-blue-700"
							onClick={() => {
								emailRef.current?.focus();
							}}
						>
							your project
						</span>
						, or just drop me{" "}
						<span
							className="underline cursor-pointer hover:text-blue-700"
							onClick={() => {
								messageRef.current?.focus();
							}}
						>
							a line and say hello
						</span>
						.
					</p>
				</div>
				<div
					className={clsx(
						// " border border-stone-400 border-opacity-40 rounded-lg shadow-lg",
						"relative z-30 max-w-[800px]",
						"bg-white"
					)}
				>
					<div className="font-sans py-8 xl:p-8 space-y-4">
						<div className="space-y-4">
							<div className="space-y-1">
								<label htmlFor="" className="text-lg font-medium">
									Name
								</label>
								<input
									type="text"
									ref={nameRef}
									className={clsx(
										"text-2xl w-full h-12 px-3 placeholder:text-sm p-0 relative z-30",
										"border border-stone-400/50 bg-white"
									)}
								/>
							</div>
							<div className="space-y-1">
								<label htmlFor="" className="text-lg font-medium">
									Email
								</label>
								<input
									type="email"
									ref={emailRef}
									className={clsx(
										"text-2xl w-full h-12 px-3 placeholder:text-sm p-0 relative z-30",
										"border border-stone-400/50 bg-white"
									)}
								/>
							</div>
							<div className="space-y-1">
								<label htmlFor="" className="text-lg font-medium">
									Message
								</label>
								<textarea
									rows={5}
									ref={messageRef}
									className={clsx(
										"text-2xl w-full border border-stone-400 resize-none p-4",
										"border border-stone-400/50 bg-white"
									)}
								></textarea>
							</div>
							<div className="flex justify-end">
								<button
									className={clsx(
										"px-4 h-10",
										"text-sm font-normal font-sans uppercase",
										"bg-[#002AFF] text-white",
										"flex justify-center items-center",
										"active:scale-95 transition-transform"
									)}
								>
									Send email
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
