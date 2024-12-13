import React, { useState, useContext } from 'react'
import { LoginContext } from './LoginContext';



function Login() {
    const { setUsername, setShowProfile } = useContext(LoginContext);
    return (

        <>
            <input
                type='text'
                placeholder='Username...'
                onChange={(event) => {
                    setUsername(event.target.value);
                }} />
            <input
                type='text' placeholder='password...' />
            <button onClick={() => { setShowProfile(true) }}>Login</button>
        </>
    );
}

export default Login;