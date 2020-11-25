import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { grey } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import CollectionButton from "./CollectionButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CollectionsContext from "../../../context/Collections/CollectionsContext";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
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
  avatar: {
    backgroundColor: grey[500],
  },
}));

const ResearchItem = ({ article, id, type, articleId }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  let description = article.description.match(/[^\s.!?]+[^.!?\r\n]+[.!?]*/g);
  const collectionsContext = useContext(CollectionsContext);
  const { deleteSavedResearchArticle } = collectionsContext;
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root} id='saved-card'>
      <CardHeader
        avatar={
          <Avatar aria-label='recipe' className={classes.avatar}>
            <i class='material-icons prefix'>description</i>
          </Avatar>
        }
        action={
          type === "all" ? (
            <CollectionButton
              article={article}
              id={id}
              type={"Research Articles"}
            />
          ) : (
            <i
              class='material-icons touch-click prefix'
              onClick={() => {
                deleteSavedResearchArticle(articleId);
              }}
            >
              delete
            </i>
          )
        }
        title={
          <Typography
            id='title'
            variant='subtitle1'
            color='textPrimary'
            component='strong'
          >
            {article.title}
          </Typography>
        }
        subheader={article.topics.map((topic, index) => {
          return (
            <div class='chip' id={index}>
              {topic}
            </div>
          );
        })}
      />
      {/* <CardMedia
        className={classes.media}
        image='/static/images/cards/paella.jpg'
        title='Paella dish'
      /> */}

      <CardContent>
        <div className='inner-research'>
          <div>
            <Typography
              variant='subtitle2'
              color='textPrimary'
              component='strong'
            >
              Authors:{" "}
              {article.authors.map((author, index) => {
                return <span id={index}>{author}</span>;
              })}{" "}
            </Typography>
          </div>
          <div>
            <Typography variant='subtitle2' color='textPrimary'>
              Publisher: {article.publisher && <span>{article.publisher}</span>}
            </Typography>
          </div>
          <div>
            <Typography variant='subtitle2' color='textPrimary'>
              Year: {article.year && <span>{article.year}</span>}
            </Typography>
          </div>
        </div>

        <Typography variant='body2' color='textSecondary' component='p'>
          {`${!expanded ? "Show" : "Hide"}`} Summary
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
        </Typography>
      </CardContent>
      <CardActions disableSpacing></CardActions>
      <Collapse in={expanded} timeout='auto' unmountOnExit>
        <CardContent>
          <Typography variant='body2' color='textSecondary' component='p'>
            {description.map((items, index) => {
              return <span id={index}>{items}</span>;
            })}
          </Typography>
          <div>
            <div className='space'></div>
            <Typography variant='subtitle2' color='textPrimary'>
              {article.fulltextIdentifier ? (
                <a
                  href='#'
                  onClick={() => window.open(article.fulltextIdentifier)}
                >
                  Download Article File (PDF)
                </a>
              ) : (
                <a
                  href='#'
                  onClick={() =>
                    window.open(`https://core.ac.uk/display/${article.id}`)
                  }
                >
                  View Article
                </a>
              )}
            </Typography>
          </div>
        </CardContent>
      </Collapse>
    </Card>
  );
};
export default ResearchItem;
