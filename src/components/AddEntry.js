import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import LogoImg from "./LogoImg";
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 500,
    },
  },
}));
const AddEntry = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  let history = useHistory();

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
      const response = await fetch(`/users/${userid}/entries`, requestOption);
      if (response.ok) {
        console.log("data");
        history.push("/getallentries");
      } else {
        console.log("Post request failed ");
      }
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div>
      <LogoImg />
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
          <Button type="submit">Submit </Button>
        </form>
      </div>
    </div>
  );
};

export default AddEntry;
