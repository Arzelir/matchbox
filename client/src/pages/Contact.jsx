import "./Contact.css";

import { FaInstagram, FaGithub, FaLinkedin, FaLink } from "react-icons/fa";

export default function Contact() {
	return (
		<main className="contact-page">
			<div className="contact-container">
				<h1>Contact</h1>

				<p>
					Have a question, want to collaborate, or interested in joining the
					team? Feel free to reach out through any of the links below. We would
					love to hear from you! Lastly, if you want to learn more about United
					Hacks, you can take a look at their website as well!
				</p>

				<div className="contact-links">
					<a href="https://unitedhacks.hackunited.org/">
						<FaLink />
						United Hacks
					</a>

					<a
						href="https://instagram.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram />
						Instagram
					</a>

					<a
						href="https://github.com/Arzelir/matchbox"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub />
						GitHub
					</a>

					<a
						href="https://linkedin.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLinkedin />
						LinkedIn
					</a>
				</div>
			</div>
		</main>
	);
}
