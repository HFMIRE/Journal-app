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
        },
        body: JSON.stringify({ username, password }),
      };
      const response = await fetch("/login", requestOption);
      if (response.ok) {
        const { token, userid } = await response.json();
        localStorage.setItem("token", token);
        console.log(token);
        localStorage.setItem("userid", userid);
        console.log(userid);
      }
    } catch (err) {
      console.log(err + "is a error");
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
        goto="/getallentries"
      />
      <Link to={"/addentry"}>
        <Go />
      </Link>
      <Zombieing />
    </div>
  );
};

export default Login;
