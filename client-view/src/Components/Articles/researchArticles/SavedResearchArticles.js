import React, { useContext } from "react";
import CollectionsContext from "../../../context/Collections/CollectionsContext";
import ResearchItem from "./ResearchItem";
const SavedResearchArticles = (props) => {
  const collectionsContext = useContext(CollectionsContext);

  const {
    filteredSavedResearchArticles,
    savedResearchArticles,
  } = collectionsContext;

  const displaySaved =
    filteredSavedResearchArticles !== null && savedResearchArticles !== null
      ? filteredSavedResearchArticles.map((article, index) => {
          return (
            <ResearchItem
              article={article.researchArticle}
              articleId={article._id}
              id={index}
              type={props.type}
            />
          );
        })
      : savedResearchArticles.map((article, index) => {
          return (
            <ResearchItem
              article={article.researchArticle}
              articleId={article._id}
              id={index}
              type={props.type}
            />
          );
        });

  return (
    <div>
      <div className='container-fluid'>{displaySaved}</div>
    </div>
  );
};

export default SavedResearchArticles;
