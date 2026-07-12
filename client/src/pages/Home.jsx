import "./Home.css";
import logotype from "../assets/logoType.png";

export default function Home() {
	return (
		<main className="home-page">
			{/* Hero Section */}
			<section className="hero">
				<img src={logotype} alt="Matchbox Logo" className="hero-logo" />

				<p className="hero-description">
					Matchbox connects students through events, clubs, and shared
					interests. Meet new people, discover opportunities, and become part of
					a growing community.
				</p>
			</section>

			{/* About */}
			<section className="about">
				<h2>About</h2>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vel
					orci non turpis ultrices malesuada. Donec faucibus, lorem eget
					volutpat facilisis, nisl odio commodo erat, vitae posuere velit lectus
					sed purus.
				</p>

				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra,
					neque non feugiat faucibus, purus justo luctus risus, vitae viverra
					nunc metus sed tortor.
				</p>
			</section>
		</main>
	);
}
