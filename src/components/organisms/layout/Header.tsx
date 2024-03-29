import { Link, NavLink } from "react-router-dom";

function Header() {
	return (
		<header className="w-full flex justify-between items-center">
			<div className="w-40">
				<h1>R</h1>
			</div>
			<nav className="flex items-center gap-14">
				<ul className="flex items-center gap-x-14 text-xl font-medium">
					<li className="hover:underline">
						<NavLink to="#about" target="_parent">
							About
						</NavLink>
					</li>
					<li className="hover:underline">
						<NavLink to="#projects" target="_parent">
							Projects
						</NavLink>
					</li>
				</ul>
				<div className="">
					<Link to="/contact" className="text-xl hover:underline font-medium whitespace-nowrap">
						Contact me
					</Link>
				</div>
			</nav>
		</header>
	);
}

export default Header;
