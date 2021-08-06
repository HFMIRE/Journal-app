import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300,
  },
}));

const UserDetailForm = ({
  title,
  handleSubmit,
  password,
  setPassword,
  username,
  setUsername,
}) => {
  const classes = useStyles();
  return (
    <div className="userform">
      <h1>{title}</h1>
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <TextField
          htmlFor="username"
          id="standard-username-input"
          label="Username"
          style={{ margin: 8 }}
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="current-username"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          htmlFor="password"
          id="standard-password-input"
          label="Password"
          style={{ margin: 8 }}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
          fullWidth
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Button type="submit"> Submit</Button>
      </form>
    </div>
  );
};

export default UserDetailForm;
