import React, { useState } from 'react'
import Login from './Login.jsx'
import Profile from './profile.jsx';
import { LoginContext } from './LoginContext.jsx';

const App = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [username, setUsername] = useState("")

  return (<>
    <div className='App'><LoginContext.Provider value={{ username, setUsername, setShowProfile }}>
      {showProfile ? <Profile /> : <Login />}
    </LoginContext.Provider></div>
  </>
  );
}

export default App