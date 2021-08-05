import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { ReactComponent as Go } from "../svg/Go.svg";
import { Link, useLocation } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));
const EditEntry = () => {
  const classes = useStyles();
  const [nameRes, setNameRes] = useState();
  const [descriptionRes, setDescriptionRes] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  let location = useLocation();
  const path = location.pathname.split("/")[2];
  console.log(path);

  const userid = localStorage.getItem("userid");
  const token = localStorage.getItem("token");
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
      setIsLoading(false);
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

  if (isLoading) {
    return <h1>Loading </h1>;
  }
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const requestOption = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, description }),
      };
      const userid = localStorage.getItem("userid");
      await fetch(`/users/${userid}/entries/${path}`, requestOption);
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="filled-multiline-flexible"
            label="Title"
            multiline
            defaultValue={nameRes}
            onChange={(e) => setName(e.target.value)}
            minRows={1}
            maxRows={5}
          />
        </div>
        <div>
          <TextField
            id="filled-multiline-flexible"
            label="Description"
            multiline
            defaultValue={descriptionRes}
            onChange={(e) => setDescription(e.target.value)}
            minRows={10}
            maxRows={24}
          />
        </div>
        <button>Submit </button>
      </form>
      <Link to={"/getallentries"}>
        <Go />
      </Link>
    </div>
  );
};

export default EditEntry;
