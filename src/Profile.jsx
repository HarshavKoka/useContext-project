import React, { useContext } from 'react';
import { LoginContext } from './LoginContext.jsx';

function Profile() {
    const { username } = useContext(LoginContext); // Consume the context value

    return (
        <>
            <h1>User</h1>
            <h2>Hello, a well very warm good Welcome Username: {username}</h2>
        </>
    );
}

export default Profile;
