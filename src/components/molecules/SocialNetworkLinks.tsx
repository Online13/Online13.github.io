import { Link } from "react-router-dom";
import {
	GithubIcon,
	LinkedinIcon,
	FacebookIcon,
	EmailIcon,
	WhatsAppIcon,
} from "@/components/atoms/icons";

function SocialLink({
	to,
	children,
}: {
	to: string;
	children: React.ReactNode;
}) {
	return (
		<Link
			to={to}
			target="_blank"
			className="w-full flex justify-center items-center rounded-lg hover:bg-stone-500/20 hover:scale-125 hover:rotate-12 transition-transform duration-200 py-2 px-2"
		>
			{children}
		</Link>
	);
}

function SocialNetworkLinks() {
	return (
		<div className="w-full flex justify-between items-center gap-2">
			<SocialLink to="mailto:rratiarivelo@gmail.com">
				<EmailIcon />
			</SocialLink>
			<SocialLink to="https://github.com/Online13/">
				<GithubIcon />
			</SocialLink>
			<SocialLink to="https://www.linkedin.com/in/nekena-rayane-ratiarivelo-2115751b9/">
				<LinkedinIcon />
			</SocialLink>
			<SocialLink to="https://wa.me/261341313373">
				<WhatsAppIcon />
			</SocialLink>
			<SocialLink to="https://web.facebook.com/Online.Nk13/">
				<FacebookIcon />
			</SocialLink>
		</div>
	);
}

export default SocialNetworkLinks;
