import { Link, NavLink } from "react-router-dom";

function Header() {
	return (
		<header className="w-full flex justify-between items-center">
			<div className="w-40">
				<h1>R</h1>
			</div>
			<nav className="flex items-center gap-14">
				<ul className="flex items-center gap-x-14 text-lg">
					<li>
						<NavLink to="#about" target="_parent">
							About
						</NavLink>
					</li>
					<li>
						<NavLink to="#projects" target="_parent">
							Projects
						</NavLink>
					</li>
				</ul>
				<div className="w-40">
					<Link to="/contact">contact me</Link>
				</div>
			</nav>
		</header>
	);
}

export default Header;
