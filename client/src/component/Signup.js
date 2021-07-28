import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <form>
        <h1>Signup</h1>
        <label htmlFor="username">
          Name:
          <input
            id="username"
            value={username}
            placeholder="Name"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            id="password"
            value={password}
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <Link to={"/login"}>
          <button>Register</button>
        </Link>
      </form>
    </div>
  );
};

export default Signup;
