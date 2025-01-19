import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
	GithubIcon,
	LinkedinIcon,
	FacebookIcon,
	EmailIcon,
	WhatsAppIcon,
} from "@/components/atoms/icons";

const itemVariants = {
	hidden: {
		scale: 0,
		y: 30,
		opacity: 0,
	},
	show: {
		scale: 1,
		y: 0,
		opacity: 1,
		transition: {
			delayChildren: 1.3,
			staggerChildren: 0.25,
		},
	},
};

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
			className="group w-full flex justify-center items-center rounded-lg hover:bg-stone-500/20 hover:scale-125 hover:rotate-12 transition-transform duration-200 py-2 px-2"
		>
			{children}
		</Link>
	);
}

function SocialNetworkLinks() {
	return (
		<motion.div
			initial="hidden"
			whileInView="show"
			variants={itemVariants}
			viewport={{ once: true }}
			className="w-full flex justify-between items-center gap-2"
		>
			<motion.div variants={itemVariants}>
				<SocialLink to="mailto:rratiarivelo@gmail.com">
					<EmailIcon className="w-5 h-5 group-hover:scale-110" />
				</SocialLink>
			</motion.div>
			<motion.div variants={itemVariants}>
				<SocialLink to="https://github.com/Online13/">
					<GithubIcon className="w-5 h-5 group-hover:scale-110" />
				</SocialLink>
			</motion.div>
			<motion.div variants={itemVariants}>
				<SocialLink to="https://www.linkedin.com/in/nekena-rayane-ratiarivelo-2115751b9/">
					<LinkedinIcon className="w-5 h-5 group-hover:scale-110" />
				</SocialLink>
			</motion.div>
			<motion.div variants={itemVariants}>
				<SocialLink to="https://wa.me/261341313373">
					<WhatsAppIcon className="w-5 h-5 group-hover:scale-110" />
				</SocialLink>
			</motion.div>
			<motion.div variants={itemVariants}>
				<SocialLink to="https://web.facebook.com/Online.Nk13/">
					<FacebookIcon className="w-5 h-5 group-hover:scale-110" />
				</SocialLink>
			</motion.div>
		</motion.div>
	);
}

export default SocialNetworkLinks;
