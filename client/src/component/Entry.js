import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));

const Entry = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  async function handleSubmit(e) {
    try {
      e.preventDefault();
      const token = localStorage.getItem("token");
      const requestOption = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ name, description }),
      };
      const userid = localStorage.getItem("userid");
      await fetch(`/users/${userid}/entries`, requestOption);
    } catch (err) {
      console.log(err);
    }
  }
  const classes = useStyles();
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <h1>Add new entry</h1>
        <Typography variant="h6" component="h6">
          Your name is
        </Typography>
        <TextField
          id="standard-name-input"
          label="name"
          type="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          autoComplete="current-name"
        />
        <Typography variant="h6" component="h6">
          and
        </Typography>
        <Typography variant="h6" component="h6">
          your description is
        </Typography>
        <TextField
          htmlFor="description"
          id="standard-description-input"
          label="description"
          type="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          autoComplete="current-description"
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default Entry;
