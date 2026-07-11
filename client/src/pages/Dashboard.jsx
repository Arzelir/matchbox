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

    console.log("State before render:", users);
console.log("Array?", Array.isArray(users));


    return (

        <div>
            <h1>Dashboard page test</h1>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;