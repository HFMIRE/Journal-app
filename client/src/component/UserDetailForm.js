import React from "react";
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

const UserDetailForm = ({
  title,
  handleSubmit,
  password,
  setPassword,
  username,
  setUsername,
  image,
  alt,
}) => {
  const classes = useStyles();
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <h1>{title}</h1>
        <Typography variant="h6" component="h6">
          Your name is
        </Typography>
        <TextField
          id="standard-username-input"
          label="username"
          type="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="current-username"
        />
        <Typography variant="h6" component="h6">
          and
        </Typography>
        <Typography variant="h6" component="h6">
          your password is
        </Typography>
        <TextField
          htmlFor="password"
          id="standard-password-input"
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          autoComplete="current-password"
        />
        <button>Register</button>
      </form>
    </div>
  );
};

export default UserDetailForm;
