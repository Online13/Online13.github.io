import clsx from "clsx";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useScrollValue } from "@/stores/scroll-store";
import { path } from "@/routes/path";

export function Header() {
	const scrollValue = useScrollValue();
	const variantKey = scrollValue <= 0.1 ? "show" : "hidden";

	return (
		<Fragment>
			<motion.div
				animate={variantKey}
				style={{ transformOrigin: "top" }}
				variants={{
					show: { height: "3rem" },
					hidden: { height: 0 },
				}}
				transition={{ type: "spring" }}
				className="w-full h-12"
			/>
			<motion.header
				animate={variantKey}
				style={{ transformOrigin: "top" }}
				variants={{
					show: { y: 0 },
					hidden: { y: "-100%" },
				}}
				transition={{ type: "spring" }}
				className={clsx(
					"absolute z-30 top-0 left-0 right-0 w-full h-12 backdrop-blur-xl bg-white/70",
					"border-b border-border"
				)}
			>
				<div className="w-full h-full container flex justify-between items-center ">
					{/* logo */}
					<div className="w-40">
						<Link to={path.root}>
							<h1 className="uppercase text-stone-500">N. Rayane</h1>
						</Link>
					</div>
					<nav className="flex items-center gap-8 text-sm">
						<ul className="flex items-center gap-x-4 font-medium">
							<li className="hover:underline">
								<NavLink to={path.about}>
									About
								</NavLink>
							</li>
							<li className="hover:underline">
								<NavLink to={path.project.root}>
									Projects
								</NavLink>
							</li>
						</ul>
						<div className={path.root}>
							<Link
								to="/"
								className="hover:underline font-medium whitespace-nowrap"
							>
								Contact me
							</Link>
						</div>
					</nav>
				</div>
			</motion.header>
		</Fragment>
	);
}
