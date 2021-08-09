import React, { useState } from "react";
import UserDetailForm from "./UserDetailForm";
import { useHistory } from "react-router-dom";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let history = useHistory();
  async function handleSubmit(e) {
    if (username.length > 3 || password > 3) {
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
        localStorage.setItem("userid", userid);
        history.push("/getallentries");
      }
    } else {
      console.log("Username & Password needs to be longer than 4 character");
    }
  }
  return (
    <div className="login">
      <UserDetailForm
        title="Login"
        handleSubmit={handleSubmit}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
    </div>
  );
};

export default Login;
