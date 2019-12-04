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

    console.log(users)

    return (
        <div className="container">
            {users.map((value, index) => {
                return (
                    <div key={index} className="users">
                        <img src={value.avatar_url} alt="" />
                        <p>{value.login}</p>
                        <p>{value.html_url}</p>
                    </div>
                )
            })}
        </div>
    )
}