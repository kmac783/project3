import React, { useContext } from "react";
import ArticlesContext from "../context/Articles/ArticlesContext";

function ArticlesResults() {
  const articlesContext = useContext(ArticlesContext);
  const { newsArticles } = articlesContext;
  return (
    <div>
      <p>Search Results</p>
      <div class='news-container'>
        <div class='news-articles'>
          {newsArticles ? (
            newsArticles.map((item) => {
              return (
                <div class='col s12 m7'>
                  <h2 class='header'></h2>
                  <div class='card horizontal'>
                    <div class='card-image'>
                      <img src={item.image} />
                    </div>
                    <div class='card-stacked'>
                      <div class='card-content'>
                        <p>{item.title}</p>
                      </div>
                      <div class='card-action'>
                        <a href={item.source.url}>
                          Link to {item.source.name}{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No Articles</p>
          )}
        </div>
        <div class='video-articles'></div>
      </div>
    </div>
  );
}
export default ArticlesResults;
