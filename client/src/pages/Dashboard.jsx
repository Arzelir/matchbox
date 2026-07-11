import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

function Dashboard() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers()
            .then(setUsers);
    }, []);

    return (
        <div>
            <h1>Dashboard</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;