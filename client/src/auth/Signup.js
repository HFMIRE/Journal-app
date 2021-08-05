import React, { useState } from "react";
import UserDetailForm from "./UserDetailForm";
import { ReactComponent as Messy } from "../svg/Messy.svg";
import { ReactComponent as Go } from "../svg/Go.svg";
import { Link } from "react-router-dom";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    const requestOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    };
    const response = await fetch("/users", requestOption);
    if (response.ok) {
      console.log("working ");
    } else {
      console.log("err");
    }
  }
  return (
    <div>
      <UserDetailForm
        title="Signup"
        handleSubmit={handleSubmit}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
        goto="/login"
      />
      <Link to={"/login"}>
        <Go />
      </Link>
      <Messy />
    </div>
  );
};

export default Signup;
