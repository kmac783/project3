import React, { useContext } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import CollectionButton from "../researchArticles/CollectionButton";
import CollectionsContext from "../../../context/Collections/CollectionsContext";

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
    width: 250,
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
}));

export default function NewsArticlesItem({ item, id, type, articleId }) {
  const collectionsContext = useContext(CollectionsContext);
  const { deleteSavedNewsArticle } = collectionsContext;
  const classes = useStyles();
  const theme = useTheme();
  let date = new Date(item.publishedAt);
  let year = date.getFullYear().toString();
  let month = date.getMonth().toString();
  let day = date.getDay().toString();
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={item.image}
        title='Live from space album cover'
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
              <a href={item.url}>{item.title}</a>
              {type === "all" ? (
                <div id='card-icon'>
                  <CollectionButton
                    article={item}
                    id={id}
                    type={"News Articles"}
                  />
                </div>
              ) : (
                <i
                  class='material-icons right touch-click'
                  onClick={() => {
                    deleteSavedNewsArticle(articleId);
                  }}
                >
                  delete
                </i>
              )}
            </div>
          </Typography>

          <Typography variant='subtitle2' color='textSecondary'>
            {item.source.name}
          </Typography>
          <Typography variant='subtitle2' color='textSecondary'>
            {`${month}/${day}/${year}`}
          </Typography>
          <div class='space'></div>
          <div>
            <Typography variant='subtitle2' color='textSecondary'>
              Details: {item.description}{" "}
              <a href='#' onClick={() => window.open(item.url)}>
                Read Article
              </a>
            </Typography>
          </div>
        </CardContent>
      </div>
    </Card>
  );
}
