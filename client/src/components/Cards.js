import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link } from "react-router-dom";
import Moment from "react-moment";
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 550,
    marginTop: "50px",
  },

  marginTop: "60px",
}));

const Cards = ({ name, description, index, date }) => {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.root}>
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {name}
            </Typography>
            <Typography variant="body1" color="textSecondary" component="p">
              {description}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              <Moment format="DD-MM-YYYY HH:mm">{date}</Moment>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Link to={`/editentry/${index}`} style={{ textDecoration: "none" }}>
            <Button size="small" color="primary">
              Edit
            </Button>
          </Link>
          <Link to={`/deleteentry/${index}`} style={{ textDecoration: "none" }}>
            <Button size="small" color="primary">
              Delete
            </Button>
          </Link>
        </CardActions>
      </Card>
    </div>
  );
};

export default Cards;
