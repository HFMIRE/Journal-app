import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { ReactComponent as Go } from "../svg/Go.svg";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 200,
    },
  },
}));
const AddEntry = () => {
  const classes = useStyles();
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
            id="standard-full-width"
            label="Title"
            style={{ margin: 8 }}
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
        </div>
        <div>
          <TextField
            id="filled-multiline-flexible"
            label="Description"
            multiline
            value={description}
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

export default AddEntry;
