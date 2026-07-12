import "./EventCard.css";
import { Link } from "react-router-dom";


export default function EventCard({ event }) {
	console.log("EventCard ", event);
	return (
		<div className="event-card">
			<h3>{event.name}</h3>

			<p>
				<strong>Date:</strong> {event.date}
			</p>

			<p>
				<strong>Location:</strong> {event.location}
			</p>

			<p>{event.description}</p>
		</div>
	);
}
