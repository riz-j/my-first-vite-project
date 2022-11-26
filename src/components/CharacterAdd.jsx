import { useEffect, useState } from 'react';
import axios from 'axios';

function CharacterEdit() {
    const [name, setName] = useState('');
    const [role, setRole] = useState('');

    const handleChange = (e) => {
        if (e.target.id === "nameInput") {
            setName(e.target.value);
        } else if (e.target.id === "roleInput") {
            setRole(e.target.value);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const newDocument = {
            name: name,
            role: role
        }

        console.log(newDocument);

        axios.post('http://localhost:4000/characters/add', newDocument)
            .then(() => {
                console.log('New character upload attempted!');
                location.reload(); // Refreshes page
            }).catch(err => console.log(`Error: ${err}`))
        
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input id="nameInput" type="text" placeholder="name" onChange={handleChange} />
                <input id="roleInput" type="text" placeholder="role" onChange={handleChange} />
                <input type="submit" />
                <h1>Name: {name}</h1>
                <h1>Role: {role}</h1>
            </form>
        </div>
    )
}

export default CharacterEdit;