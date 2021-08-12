import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { useHistory, useLocation, Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import LogoImg from "./LogoImg";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "200px",
  },
}));
const DeleteEntry = ({ name, description }) => {
  const classes = useStyles();
  const [nameRes, setNameRes] = useState();
  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");
  let history = useHistory();
  let location = useLocation();
  const path = location.pathname.split("/")[2];
  async function getSpeficEntriesData() {
    const requestOption = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(
      `/users/${userid}/entries/${path}`,
      requestOption
    );
    if (response.ok) {
      const data = await response.json();
      const nameData = data.name;
      setNameRes(nameData);
    } else {
      console.log("err");
    }
  }
  useEffect(() => {
    getSpeficEntriesData();
  });

  async function getDeleteData() {
    const requestOption = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ path }),
    };
    const response = await fetch(
      `/users/${userid}/entries/${path}`,
      requestOption
    );
    if (response.ok) {
      history.push("/getallentries");
    } else {
      console.log("err");
    }
  }

  return (
    <div>
      <LogoImg />
      <div className={classes.root}>
        <Typography gutterBottom variant="h5" component="h2">
          {nameRes}
        </Typography>
        <Typography variant="body1" color="textSecondary" component="p">
          Are you sure that you want to delete this entry?
        </Typography>
        <Link to={"/getallentries"} style={{ textDecoration: "none" }}>
          <Button>Cancel </Button>
        </Link>
        <Button onClick={getDeleteData}>Delete </Button>
      </div>
    </div>
  );
};

export default DeleteEntry;
