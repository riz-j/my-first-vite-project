import { useEffect, useState } from 'react';
import axios from 'axios';

function CharactersList() {
    const [list, setList] = useState([]);

    const handleDelete = (e) => {
        axios.delete(`http://localhost:4000/characters/delete/${e.target.id}`)
            .then(() => {
                console.log(`Delete attempted on ID: ${e.target.id}`);
                location.reload(); // refreshes page
            }).catch(err => console.log(`Error: ${err}`))
    }

    useEffect(() => {
        axios.get('http://localhost:4000/characters')
        .then(response => setList(
            response.data.map(characters => 

                <p key={characters._id}>
                    Name: {characters.name}, Role: {characters.role} 
                    <a onClick={handleDelete} id={characters._id}> Delete</a>
                </p>

            )))
    }, [])

    return (
        <div>
            { list }
        </div>
    )
}

export default CharactersList;