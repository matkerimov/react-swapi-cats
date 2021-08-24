import {useState, useEffect} from 'react';
import axios from "axios";

const App = () => {
    const [users, setUsers]  = useState([])
    useEffect( () =>{
        axios('https://jsonplaceholder.typicode.com/users')
            .then(res => setUsers(res.data))
    }, [])
    return (
        <div>
            {
                users.map(user => (
                    <div key={user.id}>
                        <div>{user.name}</div>
                        <div>{user.email}</div>
                    </div>
                ))
            }
        </div>
    );
};

export default App;
