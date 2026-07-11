import { useEffect, useState } from "react";
import { getUsers } from "../services/api";


function Home() {

    const [users, setUsers] = useState([]);

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

    return (

        <div>
            <h1>Home Page Test</h1>
            <h1>Dashboard</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {JSON.stringify(user)}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;