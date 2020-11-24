import React, { useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CollectionButton from "../Articles/researchArticles/CollectionButton";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import Spinner from "../Spinner";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import BookItem from "./BookRating";
import Collapse from "@material-ui/core/Collapse";

import BookRating from "./BookRating";
import getDescription from "./GetDescription";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 150,
    float: "right",
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
}));

export default function MediaControlCard({ item, id }) {
  const classes = useStyles();
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const [bookDescription, setBookDescription] = useState("");
  useEffect(() => {
    getDescription(item.best_book[0].id[0]._).then((res) => {
      setSearchLoading(true);
      setBookDescription(res);
      setSearchLoading(false);
    });
  }, []);

  if (document.querySelector("#open")) {
    document
      .querySelectorAll("#open")
      [id].addEventListener("click", function () {
        if (!expanded) {
          document.querySelectorAll("#img-book")[id].classList.add("hide");
        } else {
          document.querySelectorAll("#img-book")[id].classList.remove("hide");
        }
      });
  }
  let details =
    typeof bookDescription === "undefined"
      ? bookDescription
      : bookDescription.replace(/(<([^>]+)>)/gi, "");
  //   let date = new Date(item.publishedAt);
  //   let year = date.getFullYear().toString();
  //   let month = date.getMonth().toString();
  //   let day = date.getDay().toString();

  const dataItem = {
    items: item,
  };
  dataItem.items.details = details;

  return (
    <Card className={classes.root}>
      <CardMedia
        className={`${classes.cover}`}
        image={item.best_book[0].image_url}
        title='Live from space album cover'
        id='img-book'
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography
            component='subtitle1'
            variant='subtitle1'
            color='textPrimary'
          >
            <div class='news-heading'>
              {" "}
              <div>
                {item.best_book[0].title}
                <Typography variant='subtitle2' color='textSecondary'>
                  {item.best_book[0].author[0].name}
                </Typography>
              </div>
              <div>
                {" "}
                <CollectionButton
                  type={"Books"}
                  book={dataItem.items}
                  id={id}
                />
              </div>
            </div>
          </Typography>

          <Typography variant='subtitle2' color='textSecondary'>
            {/* {`${month}/${day}/${year}`} */}
          </Typography>
          <div>
            <Typography
              component='subtitle1'
              variant='subtitle1'
              color='Primary'
            >
              <BookRating
                rating={item.average_rating[0]}
                count={item.ratings_count[0]._}
              />
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              <a
                href='#'
                onClick={() =>
                  window.open(
                    `https://www.goodreads.com/buy_buttons/12/follow?book_id=${item.best_book[0].id[0]._}`
                  )
                }
              >
                Buy book from Amazon
              </a>
              {" | "}
              <a
                href='#'
                onClick={() =>
                  window.open(
                    `https://www.goodreads.com/book/show/${item.best_book[0].id[0]._}`
                  )
                }
              >
                View on goodreads
              </a>{" "}
            </Typography>
            {`${!expanded ? "Show" : "Hide"}`} Details
            <IconButton
              className={clsx(classes.expand, {
                [classes.expandOpen]: expanded,
              })}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
              id='open'
            >
              <ExpandMoreIcon />
            </IconButton>
          </div>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography
                variant='subtitle2'
                color='textSecondary'
                id='book-details'
              >
                {!searchLoading && <p>{details}</p>}
              </Typography>
            </CardContent>
          </Collapse>
        </CardContent>
      </div>
    </Card>
  );
}
