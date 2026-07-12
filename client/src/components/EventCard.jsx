import "./EventCard.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getEvents } from "../services/api";


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

export default function EventCard({ event }) {
	console.log(event);
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

			<Link to={`/match/${event.event_id}`}>
				<button>Find Teammates!</button>
			</Link>
		</div>
	);
}
