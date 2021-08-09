import { Button } from "@material-ui/core";
import React from "react";
import { Link, useHistory } from "react-router-dom";

const Logout = () => {
  let history = useHistory();
  function logout() {
    const removeUserId = localStorage.removeItem("userid");
    const removeToken = localStorage.removeItem("token");
    history.push("/");
    return [removeToken, removeUserId];
  }
  return (
    <div>
      <h1>Are sure that you want to logout?</h1>
      <Link to={"/getallentries"} style={{ textDecoration: "none" }}>
        <Button> No</Button>
      </Link>
      <Button onClick={logout()}> Yes</Button>
    </div>
  );
};

export default Logout;
