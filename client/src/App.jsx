import './App.css'
import React, { useState } from "react";

function App({ setCurrentUser, currentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    alert("entered handle login function")
  }

  return (
    <div>
      <h1>Welcome to our docs !</h1>
      <h1>Login Here to see the light</h1>
      <label htmlFor="username">Username:</label>
      <br></br>
      <input
        placeholder="tzofia"
        type="text"
        className="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br></br>
      <br></br>
      <label htmlFor="password">PassWord:</label>
      <br></br>
      <input
        placeholder="123456"
        type="text"
        className="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br></br>
      <br></br>
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default App


