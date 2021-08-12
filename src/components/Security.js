import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../svg/Logo.svg";
import { ReactComponent as Question } from "../svg/Question.svg";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
    marginTop: "50px",
  },
  paper: {
    margin: theme.spacing(10, 12),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px",
    gap: "20px",
    maxWidth: " 800px",
  },
}));
const Security = () => {
  const classes = useStyles();
  return (
    <>
      <div className="logo">
        <Link to={"/"} style={{ textDecoration: "none" }}>
          <Logo />
        </Link>
      </div>

      <div className={classes.root}>
        <div className={classes.image}>
          <Question />
        </div>
        <div className={classes.paper}>
          <Typography variant="h4" component="h2">
            What Security does Vent have in place?
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            By using proven technology, like Bcrypt and JWT Token, we can make
            sure that security is top priority of Vent.
          </Typography>
          <Typography variant="h4" component="h2">
            How does Vent secure your password?
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            The password is secured by using a plugin called Bcrypt which hash
            your password by turning it into a unrecogisable characters. This
            insures that every user gets a different password regardless. Also,
            it helps us protect your password incase of a sercurity
            vulnerability.
          </Typography>
          <Typography variant="h4" component="h2">
            How do we make sure you are correct user?
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            The system that we to authorise your access to the vent dashboard is
            by using a JWT Token which expire after it use. For every tool that
            we have ensure that we verify the user trying to access it. With the
            JWT work is that Vent verify by using the a secret in combination
            with the request, if it doesnt match, you are logout.
          </Typography>
          <Link
            to={"/getallentries"}
            style={{ textDecoration: "none", color: "#399375" }}
          >
            <Button>Go Back</Button>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Security;
