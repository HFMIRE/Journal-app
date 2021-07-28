import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <h1>Login</h1>
      <form>
        <h1>Login</h1>
        <label htmlFor="username">
          Name:
          <input
            id="username"
            value={username}
            placeholder="Name"
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <Link to={"/dashboard"}>
          <button>Register</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
