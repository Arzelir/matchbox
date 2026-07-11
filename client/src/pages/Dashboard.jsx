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
                    <li key={user.user_id}>
                        <img 
                            src={user.picture_path}
                            alt={user.name}
                            width="100"
                        />

                        <h2>{user.name}</h2>

                        <p>{user.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;