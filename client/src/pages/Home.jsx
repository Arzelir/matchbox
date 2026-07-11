import { getUsers } from "../services/api";


function Home() {

        const [users, setUsers] = useState([]);
    
        useEffect(() => {
            getUsers()
                .then(setUsers);
        }, []);

    return (
      
      <div>
            <h1>Home Page Test</h1>
            <h1>Dashboard</h1>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
  );
}

export default Home;