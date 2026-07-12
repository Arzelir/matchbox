import "./Home.css";
import logotype from "../assets/logoType.png";

export default function Home() {
	return (
		<main className="home-page">
			{/* Hero Section */}
			<section className="hero">
				<img src={logotype} alt="Matchbox Logo" className="hero-logo" />

				<p className="hero-description">
					Matchbox connects players, amateurs and professionals alike, through
					events, clubs, and shared interests in different sports. Meet new
					people, discover opportunities, and become part of a growing
					community.
				</p>
			</section>

			{/* About */}
			<section className="about">
				<h2>About</h2>

				<p>
					Matchbox was made by two developers (Us!), as a project submission in
					2026 for United Hacks V7, an annual online hackathon event. Although
					it's not an officially published project, the prototype can be seen
					anytime you visit our Vercel website! We had an amazing time working
					on this project and would love to make a complete product using this
					idea!
				</p>
			</section>
		</main>
	);
}
