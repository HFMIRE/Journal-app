import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import LockIcon from "@material-ui/icons/Lock";
import LogoImg from "./LogoImg";
import DeleteIcon from "@material-ui/icons/Delete";
import SecurityIcon from "@material-ui/icons/Security";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
    padding: "30px",
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FeatureTab() {
  const classes = useStyles();

  return (
    <>
      <LogoImg />
      <div className={classes.root}>
        <Link to={"/addentry"} style={{ textDecoration: "none" }}>
          <Fab color="primary" aria-label="add" variant="extended">
            <AddIcon className={classes.extendedIcon} />
            Add
          </Fab>
        </Link>
        <Link to={"/deleteuser"} style={{ textDecoration: "none" }}>
          <Fab variant="extended" color="secondary">
            <DeleteIcon className={classes.extendedIcon} />
            Delete User
          </Fab>
        </Link>
        <Link to={"/security"} style={{ textDecoration: "none" }}>
          <Fab variant="extended" color="primary">
            <SecurityIcon className={classes.extendedIcon} />
            Security
          </Fab>
        </Link>
        <Link to={"/logout"} style={{ textDecoration: "none" }}>
          <Fab variant="extended" color="secondary">
            <LockIcon className={classes.extendedIcon} />
            Logout
          </Fab>
        </Link>
      </div>
    </>
  );
}
