import React from "react";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { Button } from "@material-ui/core";
import { ReactComponent as Logo } from "../svg/Logo.svg";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "200px",
  },
}));
const DeleteUser = () => {
  const classes = useStyles();
  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");
  let history = useHistory();
  async function getDeleteUser() {
    const requestOption = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`/users/${userid}`, requestOption);
    if (response.ok) {
      localStorage.removeItem("userid");
      localStorage.removeItem("token");
      history.push("/login");
    } else {
      console.log("err");
    }
  }

  return (
    <div>
      <div className="logo">
        <Link to={"/getallentries"} style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
      </div>
      <div className={classes.root}>
        <Typography variant="body1" color="textSecondary" component="p">
          Are you sure that you want to delete this user?
        </Typography>
        <Link to={"/getallentries"} style={{ textDecoration: "none" }}>
          <Button>Cancel </Button>
        </Link>
        <Button onClick={getDeleteUser}>Delete </Button>
      </div>
    </div>
  );
};

export default DeleteUser;
