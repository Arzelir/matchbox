import { useEffect, useState } from "react";
import { getEvents } from "../services/api";


function Home() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        getEvent()
            .then(data => {
                console.log("Received:", data);
                setEvents(data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, []);

    console.log("State before render:", events);
console.log("Array?", Array.isArray(events));


    return (

        <div>
            <h1>Dashboard page test</h1>
            <ul>
                {events.map((event) => (
                    <li key={event.event_id}>
                        <img 
                            src={event.picture_path}
                            alt={event.name}
                            width="100"
                        />

                        <h2>{event.name}</h2>

                        <p>{event.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;