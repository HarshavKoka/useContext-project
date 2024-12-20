import React, { useContext } from 'react';
import { LoginContext } from './LoginContext.jsx';

function Profile() {
    const { username } = useContext(LoginContext); // Consume the context value

    return (
        <>
            <h1>User</h1>
            <h2>Hello,friends a very very warm  Welcome Username: {username}</h2>
        </>
    );
}

export default Profile;
