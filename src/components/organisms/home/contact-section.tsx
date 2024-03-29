import { AppearText } from "@/components/atoms/presentations/appear-text";
import clsx from "clsx";
import { useRef } from "react";

export function ContactSection() {
	const nameRef = useRef<HTMLInputElement | null>(null);
	const emailRef = useRef<HTMLInputElement | null>(null);
	const messageRef = useRef<HTMLTextAreaElement | null>(null);

	return (
		<div className="relative px-8 md:px-12 lg:px-24 xl:px-32 2xl:px-72 z-10 w-full">
			<div className="w-full pb-12 xl:space-y-20 pt-24 xl:pt-0 grid grid-cols-1 xl:grid-cols-2 xl:gap-12">
				<div className="flex flex-col justify-center gap-4">
					<div className="flex flex-col">
						<AppearText
							className="text-6xl font-semibold whitespace-nowrap"
							texts={[<>Let's make something</>]}
						/>
						<AppearText
							className="text-6xl font-semibold whitespace-nowrap"
							texts={[<>amazing together.</>]}
						/>
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
						"relative z-30 max-w-[500px]",
						"bg-white"
					)}
				>
					<div className="font-sans py-8 xl:p-8 space-y-4">
						<div className="space-y-2">
							<div className="space-y-1">
								<label htmlFor="" className="text-lg font-medium">
									Name
								</label>
								<input
									type="text"
									ref={nameRef}
									className={clsx(
										"w-full h-10 px-3 text-base placeholder:text-sm p-0 relative z-30",
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
										"w-full h-10 px-3 text-base placeholder:text-sm p-0 relative z-30",
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
										"w-full border border-stone-400 resize-none p-3",
										"border border-stone-400/50 bg-white"
									)}
								></textarea>
							</div>
							<div className="flex justify-end">
								<button
									className={clsx(
										"px-4 h-9 rounded-md",
										"text-sm font-semibold font-sans",
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
