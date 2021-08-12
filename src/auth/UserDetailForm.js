import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { ReactComponent as Logo } from "../svg/Logo.svg";
import { Link } from "react-router-dom";
import { ReactComponent as Messy } from "../svg/Messy.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
    gap: "20px",
  },
  avatar: {
    margin: theme.spacing(1),
    width: "50px",
    height: "50px",
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
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
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image}>
        <div className="logo">
          <Link to={"/"} style={{ textDecoration: "none" }}>
            <Logo />
          </Link>
        </div>
        <Messy style={{ marginTop: "50px", padding: "20px" }} />
      </Grid>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={3} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon color="primary" />
          </Avatar>

          <Typography component="h1" variant="h4">
            {title}
          </Typography>
          <form
            className={classes.form}
            noValidate
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="username"
              autoComplete="email"
              autoFocus
              htmlFor="username"
              id="standard-username-input"
              label="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item>
                <Link to={"/"} style={{ textDecoration: "none" }}>
                  <Typography
                    component="body1"
                    variant="body1"
                    style={{ color: "#7EA78C" }}
                  >
                    Don't have an account? Sign Up
                  </Typography>
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default UserDetailForm;
