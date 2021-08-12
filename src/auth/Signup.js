import React, { useState } from "react";
import UserDetailForm from "./UserDetailForm";
import { useHistory } from "react-router-dom";
const Signup = () => {
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
      const response = await fetch("/users", requestOption);
      if (response.ok) {
        history.push("/login");
      } else {
        console.log("err");
      }
    } else {
      console.log("Username & Password needs to be longer than 4 character");
    }
  }
  return (
    <div className="signup">
      <UserDetailForm
        title="Signup"
        handleSubmit={handleSubmit}
        username={username}
        setUsername={setUsername}
        password={password}
        setPassword={setPassword}
      />
    </div>
  );
};

export default Signup;
