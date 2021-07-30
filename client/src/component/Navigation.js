import "../App.css";
import React from "react";
import { ReactComponent as Logo } from "../svg/Logo.svg";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navbar">
      <Link to={"/"}>
        <Logo />
      </Link>
      <div className="navbar-left">
        <Link to={"/signup"}>
          <h2>Signup</h2>
        </Link>
        <Link to={"/login"}>
          <h2>Login</h2>
        </Link>
        <Link to={"/"}>
          <h2>Security</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
