import { useEffect, useState } from "react";
import { getUsers } from "../services/api";

function Home() {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		getUsers()
			.then((data) => {
				console.log("Received:", data);
				setUsers(data);
			})
			.catch((error) => {
				console.error("Error:", error);
			});
	}, []);

	console.log("State before render:", users);
	console.log("Array?", Array.isArray(users));

	return (
		<div>
			<h1>Home Page Test</h1>
			<h1>Dashboard</h1>
			<ul>
				{users.map((user) => (
					<li key={user.id}>{user.name}</li>
				))}
			</ul>
			<h1>
				UofT Website <br /> Development Club
			</h1>
			<br />
			<br />
			<br />
			<br />
			<br />
			<h2>Real development skills for real projects. </h2>
			<h1>
				UofT Website <br /> Development Club
			</h1>
			<br />
			<br />
			<br />
			<br />
			<br />
			<h2>Real development skills for real projects. </h2>
		</div>
	);
}

export default Home;
