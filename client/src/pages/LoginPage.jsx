import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ setUsername, username }) => {
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    const objOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    };

    const res = await fetch("http://localhost:3000/login", objOptions);
    console.log("res: ", res);

    const user = await res.json();

    console.log("user.message: ", user.message);
    if (res.ok) {
      const newUsername = user.user.username;
      setUsername(newUsername);
      navigate(newUsername);
    }
  }

  return (
    <div>
      <h1>Login Here to see the light</h1>
      <form>
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
        <button
          onClick={(event) => {
            handleLogin(event);
          }}
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
