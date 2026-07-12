import "./Allevents.css";

import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";

export default function Allevents() {
	// Placeholder data
	// Later replace this with data fetched from your database
	const events = [
		{
			id: 1,
			title: "Workshop",
			date: "September 15, 2026",
			location: "University of Toronto",
			description:
				"Learn the basics of modern web development by building a React application.",
		},
		{
			id: 2,
			title: "Design Sprint",
			date: "October 3, 2026",
			location: "Online",
			description:
				"Collaborate with designers and developers to prototype new ideas.",
		},
		{
			id: 2,
			title: "Design Sprint",
			date: "October 3, 2026",
			location: "Online",
			description:
				"Collaborate with designers and developers to prototype new ideas.",
		},
		{
			id: 3,
			title: "Hackathon",
			date: "November 20, 2026",
			location: "UTSC Campus",
			description: "Build a project with a team and showcase your skills.",
		},
	];

	return (
		<main className="events-page">
			<section className="events-intro">
				<h1>Events</h1>

				<p>
					Join our workshops, team projects, and community events. Whether you
					are interested in development, design, or learning new skills, there
					is a place for you on our team.
				</p>

				<div className="join-buttons">
					<Link to="/api/match?eventId=1">
						<button>Find Teammates!</button>
					</Link>
				</div>
			</section>

			<section className="event-list">
				<h2>Upcoming Events</h2>

				<div className="events-container">
					{events.map((event) => (
						<EventCard key={event.id} event={event} />
					))}
				</div>
			</section>
		</main>
	);
}
