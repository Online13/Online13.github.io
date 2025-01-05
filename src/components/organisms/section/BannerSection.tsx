import SocialNetworkLinks from "@/components/molecules/SocialNetworkLinks";
import WordReveal from "@/components/ui/word-reveal";

export function BannerSection() {
	return (
		<div className="w-full py-20 flex flex-col justify-center items-center border-y border-border relative">
			<div className="inset-0 flex flex-col justify-center space-y-14 w-full container">
				<div className="space-y-4">
					<div className="grid gap-2">
						<div className="font-semibold text-md lg:text-lg">
							<div className="flex items-center">
								<WordReveal
									text="Hi, I'm "
									className="font-semibold text-2xl lg:text-3xl"
								/>
								<WordReveal
									text="Rayane"
									className="text-[#002AFF] font-semibold text-2xl lg:text-3xl"
								/>
								<WordReveal
									text=" and"
									className="font-semibold text-2xl lg:text-3xl"
								/>
							</div>
							<div className="relative -top-[2px]">
								<WordReveal
									text="I'm a software engineer."
									className="font-semibold text-2xl lg:text-3xl"
								/>
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
