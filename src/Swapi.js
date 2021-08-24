import React, {useEffect, useState} from 'react';
import axios from "axios";

const Swapi = () => {
    const [id, setId] = useState('1')
    const [person, setPerson] = useState({})
    // const [counter, setCounter] = useState(0)
    const getPerson = (e) => {
        setId(Math.min(e.target.value,83))
    }
    useEffect(() => {
        axios(`https://swapi.dev/api/people/${id}`)
            .then(res => setPerson(res.data))
    }, [id])
    const less = () => {
        // setCounter(counter - 1)
        setId(+id - 1)
        if ( +id === 1) {
            return setId (83)
        }

    }
    const more = () => {
        // setCounter(counter + 1)
        setId(+id + 1)
        if ( +id === 83) {
            return setId(1)
        }
    }




    return (
        <div key={person.id}>
            <button onClick={less}>-</button>
            <input onChange={getPerson} type="number" value={id}/>
            <button onClick={more}>+</button>
            <div>{person.name}</div>
        </div>
    );
};

export default Swapi;
























