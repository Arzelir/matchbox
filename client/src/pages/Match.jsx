import "./Match.css";
import { HiCheck, HiX } from "react-icons/hi";

export default function Match() {
	// Placeholder data
	const currentMatch = {
		image: "https://placehold.co/720x1280?text=9%3A16+Photo",
		title: "John Doe",
		age: 24,
		location: "Toronto, ON",
		bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. This will eventually come from your database.",
		interests: ["Photography", "Hiking", "Coffee", "Movies", "Gaming"],
	};

	return (
		<main className="match-page">
			<div className="match-container">
				<div className="match-image">
					<img src={currentMatch.image} alt={currentMatch.title} />
				</div>

				<div className="match-sidebar">
					<section className="match-info">
						<h1>
							{currentMatch.title}, {currentMatch.age}
						</h1>

						<h3>{currentMatch.location}</h3>

						<p>{currentMatch.bio}</p>
					</section>

					<section className="match-buttons">
						<button className="reject-btn">
							<HiX />
						</button>

						<button className="accept-btn">
							<HiCheck />
						</button>
					</section>
				</div>
			</div>
		</main>
	);
}
