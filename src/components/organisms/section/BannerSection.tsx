import clsx from "clsx";
import SocialNetworkLinks from "@/components/molecules/SocialNetworkLinks";
import profileImage from "@/assets/images/profile.webp";

interface Props {
	className?: string;
}

export function BannerSection({ className }: Props) {
	return (
		<div
			className={clsx(
				"w-full py-20 flex flex-col justify-center items-center border-y border-border relative",
				className
			)}
		>
			<div className="inset-0 flex flex-col justify-center space-y-14 w-full container">
				<div className="space-y-4">
					<div className="grid gap-2">
						<div className="flex items-center gap-6">
							<div
								className={clsx(
									"w-[100px] aspect-square rounded-full overflow-hidden transition-transform animate-appear border border-black",
									"duration-700",
								)}
							>
								<div className="w-full h-full bg-stone-300 relative z-20">
									<img
										src={profileImage}
										className="w-full h-full"
										alt=""
									/>
								</div>
							</div>
							<div className="text-2xl lg:text-3xl font-semibold">
								<div>
									<h1 className="space-x-2 md:space-x-4 text-left">
										Hi, I’m{" "}
										<span className="text-[#002AFF]">Rayane</span> and
									</h1>
								</div>
								<div>
									<h1 className="space-x-2 text-left">
										<span className="">I’m a</span>
										<span className="">software engineer.</span>
									</h1>
								</div>
							</div>
						</div>
						<p className="max-w-xl text-left text-base text-slate-900">
							I find true satisfaction in crafting captivating user
							interfaces and software solutions, seamlessly blending
							aesthetics and functionality.
						</p>
					</div>
					<div className="inline-block">
						<SocialNetworkLinks />
					</div>
				</div>
			</div>
		</div>
	);
}
