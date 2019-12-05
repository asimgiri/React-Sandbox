import React, { useState, useEffect } from 'react';

export default function Axios() {
    const [users, setUsers] = useState([])
    const axios = require('axios');

    // useEffect(() => {
    //     fetchReq();
    // }, [])

    const fetchReq = () => {

        // Make a request for a user with a given ID
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(function (response) {
                setUsers(u => response.data)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    const postReq = () => {
        axios.post('https://jsonplaceholder.typicode.com/users', {
            name: 'Jack',
            username: 'JackHammet',
            email: 'hammetjack@biz.net',
            phone: '078-953-8756',
            website: 'hammetmanufauctures.com',
            company: {
                name: 'Hammet Manufactures',
                catchPhrase: 'Manufacturing products creating history',
                bs: 'alligned with the technos'
            }
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    console.log(users);

    return (
        <div>
            {users.map((value, index) => {
                return (
                    <p key={index}>{value.id}</p>
                )
            })}
            <button onClick={() => fetchReq()}>Fetch Data</button>
            <br />
            <button onClick={() => postReq()}>Post Data</button>
        </div>
    )
}