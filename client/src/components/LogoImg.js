import React from "react";
import { ReactComponent as Logo } from "../svg/Logo.svg";
import { Link } from "react-router-dom";
const LogoImg = () => {
  return (
    <div className="logo">
      <Link to={"/getallentries"} style={{ textDecoration: "none" }}>
        <Logo />
      </Link>
    </div>
  );
};

export default LogoImg;
