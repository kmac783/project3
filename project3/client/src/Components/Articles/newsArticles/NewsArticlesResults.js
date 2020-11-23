import React, { useContext } from "react";
import ArticlesContext from "../../../context//Articles/ArticlesContext";
import Videos from "../../Videos/Videos";
import NewsArticlesItem from "./NewsArticlesItem";
function ArticlesResults() {
  const articlesContext = useContext(ArticlesContext);
  const { newsArticles } = articlesContext;
  return (
    <div>
      <div class='news-container'>
        <div class='news-articles'>
          {newsArticles ? (
            newsArticles.map((item, index) => {
              return <NewsArticlesItem item={item} id={index} />;
            })
          ) : (
            <p>No Articles</p>
          )}
        </div>
        <div class='video-articles'>
          <h6>Videos related to this search</h6>
          <Videos />
        </div>
      </div>
    </div>
  );
}
export default ArticlesResults;
