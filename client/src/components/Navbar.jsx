import "./Navbar.css";

import logo from "../assets/logoColour.png";

import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
	return (
		<nav className="navbar">
			{/* LOGO */}
			<div className="nav-logo">
				<Link to="/">
					<img src={logo} alt="Logo" />
				</Link>
			</div>

			{/* NAVIGATION */}
			<ul className="nav-links">
				{/* HOME */}
				<li className="dropdown">
					<Link to="/">Home</Link>
				</li>

				{/* DESIGN */}
				<li className="dropdown">
					<Link to="/events">Events</Link>
				</li>

				{/* DEVELOPMENT */}
				<li className="dropdown">
					<Link to="/contact">Contact</Link>
				</li>

				<li className="divider">|</li>

				{/* SOCIALS */}

				<li>
					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram />
					</a>
				</li>

				<li>
					<a
						href="https://github.com/Arzelir/matchbox"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub />
					</a>
				</li>

				<li>
					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin />
					</a>
				</li>
			</ul>
		</nav>
	);
}
