import React from "react";
import ArticlesContext from "./context/Articles/ArticlesContext";

function ArticlesResults() {
  return (
    <>
      {newsArticles ? (
        newsArticles.map((item) => {
          return <p>{item.title}</p>;
        })
      ) : (
        <p>No Articles</p>
      )}
    </>
  );
}

export default ArticlesResults;
