import React, { useContext } from "react";
import ArticlesContext from "../../../context//Articles/ArticlesContext";
import CollectionsContext from "../../../context/Collections/CollectionsContext";

import Videos from "../../Videos/Videos";
import NewsArticlesItem from "./NewsArticlesItem";
function NewsArticlesResults(props) {
  const articlesContext = useContext(ArticlesContext);
  const collectionsContext = useContext(CollectionsContext);

  const { savedNewsArticles } = collectionsContext;
  const { newsArticles } = articlesContext;

  const displayAll = newsArticles ? (
    newsArticles.map((item, index) => {
      return <NewsArticlesItem item={item} id={index} type={props.type} />;
    })
  ) : (
    <p>No Articles</p>
  );

  const displaySaved = savedNewsArticles ? (
    savedNewsArticles.map((item, index) => {
      return (
        <NewsArticlesItem
          item={item.newsArticle}
          id={index}
          type={props.type}
        />
      );
    })
  ) : (
    <p>No Saved Articles</p>
  );

  return (
    <div>
      {props.type === "all" ? (
        <div class='news-container'>
          <div className='news-articles'>{displayAll}</div>
          <div className='video-articles'>
            <h6>Videos related to this search</h6>
            {newsArticles && <Videos />}
          </div>
        </div>
      ) : (
        displaySaved
      )}
    </div>
  );
}

export default NewsArticlesResults;
