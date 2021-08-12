import "../App.css";
import React from "react";
import { ReactComponent as Logo } from "../svg/Logo.svg";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navbar">
      <Link to={"/"} style={{ textDecoration: "none" }}>
        <Logo />
      </Link>
      <div className="navbar-left">
        <Link to={"/login"} style={{ textDecoration: "none" }}>
          <h2>Login</h2>
        </Link>
        <Link to={"/security"} style={{ textDecoration: "none" }}>
          <h2>Security</h2>
        </Link>
        <Link to={"/logout"} style={{ textDecoration: "none" }}>
          <h2>Logout</h2>
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
