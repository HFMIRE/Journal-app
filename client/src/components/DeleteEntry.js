import React, { useState, useEffect } from "react";
import Typography from "@material-ui/core/Typography";
import { Link, useLocation } from "react-router-dom";

const DeleteEntry = ({ name, description }) => {
  const [nameRes, setNameRes] = useState();
  const [descriptionRes, setDescriptionRes] = useState();
  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");
  let location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);
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
      console.log(data);
      const nameData = data.name;
      const descriptionData = data.description;
      console.log(nameData);
      console.log(descriptionData);
      setNameRes(nameData);
      setDescriptionRes(descriptionData);
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
    };
    const response = await fetch(
      `/users/${userid}/entries/${path}`,
      requestOption
    );
    if (response.ok) {
      console.log("The delete fucntion works ");
    } else {
      console.log("err");
    }
  }

  return (
    <div>
      <Typography gutterBottom variant="h5" component="h2">
        {nameRes}
      </Typography>
      <Typography variant="body1" color="textSecondary" component="p">
        {descriptionRes}
      </Typography>
      <Typography variant="body1" color="textSecondary" component="p">
        Are you sure that you want to delete this entry?
      </Typography>
      <button onClick={getDeleteData}>Delete </button>
      <Link to={"/getallentries"}>
        <button>Go to All Entry </button>
      </Link>
    </div>
  );
};

export default DeleteEntry;
