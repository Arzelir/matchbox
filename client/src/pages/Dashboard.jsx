import { useEffect, useState } from "react";
import { getEvents, getUsers, getTeams } from "../services/api";


function Home() {

    const [events, setEvents] = useState([]);
    const [users, setUsers] = useState([]);
    const [teams, setTeams] = useState([]);

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

    useEffect(() => {
        getUsers()
            .then(data => {
                console.log("Received:", data);
                setUsers(data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, []);

    useEffect(() => {
        getTeams()
            .then(data => {
                console.log("Received:", data);
                setTeams(data);
            })
            .catch(error => {
                console.error("Error:", error);
            });
    }, []);

    return (

        <div>
            <h1>Dashboard page test</h1>
            <ul>
                {events.map((event) => (
                    <li key={event.event_id}>
                        <h2>{event.name}</h2>
                        <p>{event.date}</p>
                        <p>{event.location}</p>
                        <p>{event.sport}</p>
                        <p>{event.max_players}</p>
                        <p>{event.description}</p>
                    </li>
                ))}

                {users.map(user => (
                    <li key={user.user_id}>
                        <h2>{user.name}</h2>
                        <p>{user.email}</p>
                        <p>{user.description}</p>
                    </li>
                ))}

                {teams.map((team) => (
                    <div key={team.team_name}>
                        <h2>{team.team_name}</h2>
                        <p>{team.event_name}</p>
                    </div>
                ))}
            </ul>
        </div>
    );
}

export default Home;