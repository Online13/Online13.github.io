import SocialNetworkLinks from "../molecules/SocialNetworkLinks";

export function Footer() {
	return (
		<footer className="h-12 bg-[#0E0F12] text-slate-100">
			<div className="container h-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
				<p className="text-base">
					Designed & Built by <span className="font-medium">@Rayane</span>
				</p>
				<div className="inline-block">
					<SocialNetworkLinks />
				</div>
			</div>
		</footer>
	);
}
