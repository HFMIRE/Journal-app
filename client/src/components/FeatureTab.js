import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const FeatureTab = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Link to={"/addentry"}>
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Link>
      <Link to={"/editentry"}>
        <Fab color="secondary" aria-label="edit">
          <EditIcon />
        </Fab>
      </Link>
      <Link to={"/deleteentry"}>
        <Fab>
          <DeleteIcon />
        </Fab>
      </Link>
    </div>
  );
};

export default FeatureTab;
