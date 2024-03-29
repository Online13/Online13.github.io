import SocialNetworkLinks from "src/components/molecules/SocialNetworkLinks";

function Footer() {
	return (
		<footer className="px-8 md:px-12 lg:px-24 xl:px-32 2xl:px-72 py-4 bg-[#0E0F12] text-slate-100 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
			<p className="text-xl xl:text-2xl">
				Designed & Built by <span className="font-medium">@Rayane</span>
			</p>
			<div className="inline-block">
				<SocialNetworkLinks />
			</div>
		</footer>
	);
}

export default Footer;
