import React from 'react';

const User = ({ user }) => {
    const { name, email, address } = user;
    return (
        <div className="user">
            <h2><span>Name:</span> {name}</h2>
            <h3><span>Email:</span> {email}</h3>
            <h4><span>City:</span> {address.city}</h4>
        </div>
    )
}

export default User;