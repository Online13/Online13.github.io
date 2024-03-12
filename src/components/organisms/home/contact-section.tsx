import clsx from "clsx";
import SocialNetworkLinks from "src/components/molecules/SocialNetworkLinks";

export function ContactSection() {
	return (
		<div className="relative px-44 z-10 w-full">
			<div className="w-full pb-12 space-y-20 grid grid-cols-2">
				<div className="space-y-10 flex flex-col justify-center">
					<h2 className="text-5xl font-semibold">
						Let's make something <br />
						amazing together
					</h2>
					<div className="">
						<div className="inline-block">
							<SocialNetworkLinks />
						</div>
					</div>
				</div>
				<div
					className={clsx(
						// " border border-stone-400 border-opacity-40 rounded-lg shadow-lg",
						"relative z-30 max-w-[500px]",
						"bg-white"
					)}
				>
					<div className="font-sans p-8 space-y-4">
						<h4 className="text-2xl font-semibold">Send me an email.</h4>
						<div className="space-y-2">
							<div className="space-y-1">
								<label htmlFor="" className="text-sm font-medium">
									Name
								</label>
								<input
									type="text"
									className={clsx(
										"w-full h-10 px-3 text-base placeholder:text-sm p-0 relative z-30",
										"border border-stone-400/50 rounded-md bg-white"
									)}
								/>
							</div>
							<div className="space-y-1">
								<label htmlFor="" className="text-sm font-medium">
									Email
								</label>
								<input
									type="text"
									className={clsx(
										"w-full h-10 px-3 text-base placeholder:text-sm p-0 relative z-30",
										"border border-stone-400/50 rounded-md bg-white"
									)}
								/>
							</div>
							<div className="space-y-1">
								<label htmlFor="" className="text-sm font-medium">
									Message
								</label>
								<textarea
									rows={5}
									className={clsx(
										"w-full border border-stone-400 resize-none p-3",
										"border border-stone-400/50 rounded-md bg-white"
									)}
								></textarea>
							</div>
							<div className="flex justify-end">
								<button
									className={clsx(
										"px-4 h-9 rounded-md",
										"text-sm font-semibold",
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
