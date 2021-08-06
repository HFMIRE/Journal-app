import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { makeStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
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
const GetAllEntry = () => {
  const classes = useStyles();
  const [entry, setEntry] = useState();
  const [isLoading, setIsLoading] = useState(true);
  async function getAllEntriesData() {
    const userid = localStorage.getItem("userid");
    const token = localStorage.getItem("token");
    const requestOption = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(`/users/${userid}/entries`, requestOption);
    if (response.ok) {
      const data = await response.json();
      setIsLoading(false);
      setEntry(data);
    } else {
      console.log("err");
    }
  }
  useEffect(() => {
    getAllEntriesData();
  }, [isLoading]);
  console.log(entry);
  return (
    <div>
      <div className={classes.root}>
        <Link to={"/addentry"}>
          <Fab color="primary" aria-label="add">
            <AddIcon />
          </Fab>
        </Link>
      </div>
      {entry &&
        entry.length >= 0 &&
        entry.map((note, index) => {
          return (
            <Cards
              key={index}
              index={note.id}
              name={note.name}
              description={note.description}
            />
          );
        })}

      <Cards entryData={entry} />
    </div>
  );
};

export default GetAllEntry;
