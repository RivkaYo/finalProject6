import "./App.css";
import React, { useState } from "react";

function App({ setCurrentUser, currentUser }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [user,setUser]= useState("");

  async function handleLogin(event) {
    event.preventDefault();
    console.log("here");
    const objOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username: username, password: password }),
    };

    fetch("http://localhost:3000/login", objOptions)
    .then(async (res)=>{
     const message = await res.json();
     let userc=message.user
     setUser(message.user);
     console.log(userc);
     console.log('res.status==200: ', res.status==200);
     if(res.status==200){
      
     }
     alert(message.message);

    })
    .catch((error)=>{
      console.log("error: ",error);
    })
    const res = await fetch("http://localhost:3000/login", objOptions);
    const user = await res.json();
  }

  return (
    <div>
      <h1>Welcome to our docs !</h1>
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
}

export default App;
