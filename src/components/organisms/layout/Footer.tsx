import SocialNetworkLinks from "src/components/molecules/SocialNetworkLinks";

function Footer() {
	return (
		<footer className="px-40 py-4 bg-[#0E0F12] text-slate-100 flex items-center justify-between">
			<p>
				Designed & Built by <span className="font-medium">@Rayane</span>
			</p>
			<SocialNetworkLinks />
		</footer>
	);
}

export default Footer;
