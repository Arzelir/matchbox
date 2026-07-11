import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/react.svg";
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
	return (
		<nav className="navbar">
			<div className="nav-logo">
				<a href="/#home">
					<img src={logo} alt="Web Dev Logo" />
				</a>
			</div>

			<div className="nav-container">
				<ul className="nav-links">
					<li>
						<a href="/#home">Home</a>
					</li>
					<li>
						<a href="/#about">About</a>
					</li>
					<li>
						<a href="/#team">The Team</a>
					</li>
					<li>
						<a href="/#projects">Projects</a>
					</li>

					<li>
						<a>|</a>
					</li>

					<li>
						<a
							className="nav-right"
							href="https://instagram.com/yourusername"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaInstagram />
						</a>
					</li>

					<li>
						<a
							className="nav-right"
							href="https://github.com/yourusername"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaGithub />
						</a>
					</li>

					<li>
						<a
							className="nav-right"
							href="https://linkedin.com/in/yourusername"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FaLinkedin />
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
}
