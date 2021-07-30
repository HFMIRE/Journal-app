import React, { useState } from "react";
import UserDetailForm from "./UserDetailForm";

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
        console.log(token);
        localStorage.setItem("token", token);
        localStorage.setItem("userid", userid);
      } else {
        console.log("err");
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
        goto="/dashboard"
      />
    </div>
  );
};

export default Login;
