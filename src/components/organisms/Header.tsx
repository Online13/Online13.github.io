import clsx from "clsx";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { Link, NavLink } from "react-router-dom";
import { useScrollValue } from "@/stores/scroll-store";

export function Header() {
	const scrollValue = useScrollValue();
	const variantKey = scrollValue <= 450 ? "show" : "hidden";
	console.log(scrollValue)

	return (
		<Fragment>
			<motion.div
				animate={variantKey}
				style={{ transformOrigin: "top" }}
				variants={{
					show: { y: 0 },
					hidden: { y: "-100%" },
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
						<Link to="/">
							<h1 className="uppercase text-stone-500">N. Rayane</h1>
						</Link>
					</div>
					<nav className="flex items-center gap-8 text-sm">
						<ul className="flex items-center gap-x-4 font-medium">
							<li className="hover:underline">
								<NavLink to="/about">
									About
								</NavLink>
							</li>
							<li className="hover:underline">
								<NavLink to="/project">
									Projects
								</NavLink>
							</li>
						</ul>
						<div className="">
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
