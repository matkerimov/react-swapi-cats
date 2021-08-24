import React, {useEffect, useState} from 'react';
import axios from "axios";

const Cat = () => {
    const [cats, setCats] = useState([])
    const [cat, setCat] = useState({})
    const handleChange= (e) =>{
        const selected = cats.find(el => el.id === e.target.value)
        setCat(selected)
    }
    useEffect(()=>{
        axios("https://api.thecatapi.com/v1/breeds")
            .then(({data})=> setCats(data))
    }, [])
    return (
        <div>
            <select onChange={handleChange}>
                <option selected disabled>Choose..</option>
                {
                    cats.map(item =>
                        <option value={item.id} key={item.id}>{item.name}</option>
                    )
                }
            </select>

            <div>
                <img src={cat.image?.url} alt="" width="300"/>
                <div>Name: {cat.name}</div>
                <div>Description: {cat.description}</div>
            </div>

            {/*{*/}
            {/*    cat.id &&*/}
            {/*    <div>*/}
            {/*        <img src={cat.image.url} alt="" width="300"/>*/}
            {/*        <div>Name: {cat.name}</div>*/}
            {/*        <div>Description: {cat.description}</div>*/}
            {/*    </div>*/}
            {/*}*/}
        </div>
    );
};

export default Cat;