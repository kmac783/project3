import React, { useContext } from "react";
import ArticlesContext from "../../../context//Articles/ArticlesContext";

import Videos from "../../Videos/Videos";
import NewsArticlesItem from "./NewsArticlesItem";
function NewsArticlesResults(props) {
  const articlesContext = useContext(ArticlesContext);

  const { newsArticles } = articlesContext;

  const displayAll = newsArticles ? (
    newsArticles.map((item, index) => {
      return <NewsArticlesItem item={item} id={index} type={props.type} />;
    })
  ) : (
    <p>No Articles</p>
  );

  return (
    <div>
      <div class='news-container'>
        <div className='news-articles'>{displayAll}</div>
        <div className='video-articles'>
          <h6>Videos related to this search</h6>
          {newsArticles && <Videos />}
        </div>
      </div>
    </div>
  );
}

export default NewsArticlesResults;
