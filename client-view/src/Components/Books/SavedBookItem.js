import React, { useState, useEffect, useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CollectionButton from "../Articles/researchArticles/CollectionButton";
import IconButton from "@material-ui/core/IconButton";
import clsx from "clsx";
import Spinner from "../Spinner";
import CollectionsContext from "../../context/Collections/CollectionsContext";

import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Collapse from "@material-ui/core/Collapse";

import BookRating from "./BookRating";

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

export default function MediaControlCard({ bookItem, id, bookId }) {
  const classes = useStyles();
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);
  const [searchLoading, setSearchLoading] = useState(false);

  const collectionsContext = useContext(CollectionsContext);
  const { deleteSavedBook } = collectionsContext;

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={`${classes.cover}`}
        image={bookItem.image[0]}
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
              <div id='title-book-saved-heading'>
                {bookItem.title[0]}
                <Typography variant='subtitle2' color='textSecondary'>
                  {bookItem.author[0]}
                </Typography>
              </div>
              <div>
                {" "}
                <i
                  class='material-icons touch-click prefix'
                  onClick={() => {
                    deleteSavedBook(bookId);
                  }}
                >
                  delete
                </i>
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
                rating={bookItem.average_rating}
                count={bookItem.count}
              />
            </Typography>
            <Typography variant='subtitle2' color='textSecondary'>
              <a
                href='#'
                onClick={() =>
                  window.open(
                    `https://www.goodreads.com/buy_buttons/12/follow?book_id=${bookItem.id}`
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
                    `https://www.goodreads.com/book/show/${bookItem.id}`
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
                {bookItem.details}
              </Typography>
            </CardContent>
          </Collapse>
        </CardContent>
      </div>
    </Card>
  );
}
