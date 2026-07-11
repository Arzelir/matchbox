import { useEffect, useState } from "react";
import { getUsers } from "../services/api";


function Home() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then(data => {
                console.log("API data:", data);
                setUsers(data);
            });
    }, []);

    return (

        <div>
            <h1>Home Page Test</h1>
            <h1>Dashboard</h1>
            <ul>
                {Array.isArray(users) && users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Home;