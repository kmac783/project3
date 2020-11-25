import React, { useContext } from "react";
import CollectionsContext from "../../../context/Collections/CollectionsContext";

import NewsArticlesItem from "./NewsArticlesItem";

function SavedNewsArticlesResults(props) {
  const collectionsContext = useContext(CollectionsContext);

  const { savedNewsArticles, filteredSavedNewsArticles } = collectionsContext;

  const displaySaved =
    filteredSavedNewsArticles !== null && savedNewsArticles !== null
      ? filteredSavedNewsArticles.map((item, index) => {
          return (
            <NewsArticlesItem
              item={item.newsArticle}
              id={index}
              articleId={item._id}
              type={props.type}
            />
          );
        })
      : savedNewsArticles.map((item, index) => {
          return (
            <NewsArticlesItem
              item={item.newsArticle}
              articleId={item._id}
              id={index}
              type={props.type}
            />
          );
        });

  return <div>{displaySaved}</div>;
}

export default SavedNewsArticlesResults;
