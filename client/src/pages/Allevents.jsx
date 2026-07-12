import "./Allevents.css";

import EventCard from "../components/EventCard";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEvents } from "../services/api";

export default function Allevents() {
	// Placeholder data
	// Later replace this with data fetched from your database
	const [events, setEvents] = useState([]);

	// Fetching data from API for Events
	useEffect(() => {
		getEvents()
			.then(data => {
				console.log("Received:", data);
				setEvents(data);
			})
			.catch(error => {
				console.error("Error:", error);
			});
	}, []);


	console.log("Events:", events);

	return (
		<main className="events-page">
			<section className="events-intro">
				<h1>Events</h1>

				<p>
					Look for local practice matches, team building exercises, and
					community events. Whether you are interested in a new sport, looking
					for a match, or learning new skills, there is a place for you on one
					of the available teams.
				</p>

				<div className="join-buttons">
					<Link to="/match/3">
						<button>Find Teammates!</button>
					</Link>
				</div>
			</section>

			<section className="event-list">
				<h2>Upcoming Events</h2>

				<div className="events-container">
					{events.map((event) => (
						<div key={event.id}>
							<EventCard event={event} />

							<Link to={`/match/${event.id}`}>
								<button>Find Teammates!</button>
							</Link>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
