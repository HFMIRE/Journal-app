import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import { makeStyles } from "@material-ui/core/styles";
import FeatureTab from "./FeatureTab";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.primary.light,
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
  return (
    <div className={classes.root}>
      <FeatureTab />
      <Grid container>
        {entry &&
          entry.length >= 0 &&
          entry.map((note, index) => {
            return (
              <Grid item key={index} xs={12} md={6} lg={4}>
                <Cards
                  index={note.id}
                  name={note.name}
                  description={note.description}
                  date={note.createdAt}
                />
              </Grid>
            );
          })}
      </Grid>
    </div>
  );
};

export default GetAllEntry;
