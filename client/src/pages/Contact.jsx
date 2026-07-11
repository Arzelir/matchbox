import "./Contact.css";

import { FaInstagram, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
	return (
		<main className="contact-page">
			<div className="contact-container">
				<h1>Contact</h1>

				<p>
					Have a question, want to collaborate, or interested in joining the
					team? Feel free to reach out through any of the links below. We would
					love to hear from you.
				</p>

				<div className="contact-links">
					<a href="mailto:example@email.com">
						<FaEnvelope />
						Email
					</a>

					<a
						href="https://instagram.com/design.shatat"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaInstagram />
						Instagram
					</a>

					<a
						href="https://github.com/shatat-ah"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaGithub />
						GitHub
					</a>

					<a
						href="https://linkedin.com/in/yourusername"
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
