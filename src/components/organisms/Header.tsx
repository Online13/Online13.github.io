import { Link, NavLink } from "react-router-dom";

function Header() {
	return (
		<header className="w-full flex justify-between items-center">
			<div className="w-40">
				<h1>R</h1>
			</div>
			<nav>
				<ul className="flex items-center gap-x-20 text-lg">
					<li>
						<NavLink to="#about" target="_parent">
							about
						</NavLink>
					</li>
					<li>
						<NavLink to="#experiences" target="_parent">
							experiences
						</NavLink>
					</li>
					<li>
						<NavLink to="#project" target="_parent">
							project
						</NavLink>
					</li>
				</ul>
			</nav>
			<div className="w-40">
				<Link to="/contact">contact me</Link>
			</div>
		</header>
	);
}

export default Header;
