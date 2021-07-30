import React, { useState } from "react";
import UserDetailForm from "./UserDetailForm";
import { ReactComponent as Zombieing } from "../svg/Zombieing.svg";
import { ReactComponent as Go } from "../svg/Go.svg";
import { Link } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const requestOption = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //" Authorization": "Bearer" + localStorage.getItem("jwt"),
        },
        body: JSON.stringify({ username, password }),
      };
      const response = await fetch("/login", requestOption);
      if (response.ok) {
        response.sendStatus(201);
        // const jwt = await response.text();
        // localStorage.setItem("jwt", jwt);
      } else {
        response.sendStatus(403);
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <UserDetailForm
        title="Login"
        handleSubmit={handleSubmit}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
      <Link to={"/dashboard"}>
        <h4>Let's go to the Dashboard </h4>
        <Go />
      </Link>
      <Zombieing />
    </div>
  );
};

export default Login;
