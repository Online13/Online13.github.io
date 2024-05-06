import { Link } from "react-router-dom";
import {
	GithubIcon,
	LinkedinIcon,
	FacebookIcon,
	EmailIcon,
	WhatsAppIcon,
} from "@/components/atoms/icons";

function SocialNetworkLinks() {
	return (
		<div className="w-full flex justify-between items-center gap-2">
			<Link
				className="w-full flex justify-center items-center rounded-lg hover:bg-slate-300 py-2 px-2"
				to="mailto:rratiarivelo@gmail.com"
			>
				<EmailIcon />
			</Link>
			<Link
				className="w-full flex justify-center items-center rounded-lg hover:bg-slate-300 py-2 px-2"
				to="https://github.com/Online13/"
			>
				<GithubIcon />
			</Link>
			<Link
				className="w-full flex justify-center items-center rounded-lg hover:bg-slate-300 py-2 px-2"
				to="https://www.linkedin.com/in/nekena-rayane-ratiarivelo-2115751b9/"
			>
				<LinkedinIcon />
			</Link>
			<Link
				className="w-full flex justify-center items-center rounded-lg hover:bg-slate-300 py-2 px-2"
				to="https://wa.me/261341313373"
			>
				<WhatsAppIcon />
			</Link>
			<Link
				className="w-full flex justify-center items-center rounded-lg hover:bg-slate-300 py-2 px-2"
				to="https://web.facebook.com/Online.Nk13/"
			>
				<FacebookIcon />
			</Link>
		</div>
	);
}

export default SocialNetworkLinks;
