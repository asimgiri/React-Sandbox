import React, { useState, useEffect } from 'react';

export default function FetchData() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        fetch('https://api.github.com/users')
            .then(response => response.json())
            .then((data) => {
                setUsers(data)
            })
            .catch(error => console.log(error))
    }

    console.log(users[0])

    return (
        <div>
                
        </div>
    )
}