import React, { useContext } from "react";
import ArticlesContext from "../../../context/Articles/ArticlesContext";
import Videos from "../../Videos/Videos";
import ResearchItem from "./ResearchItem";
const ResearchArticles = (props) => {
  const articlesContext = useContext(ArticlesContext);

  const { researchArticles } = articlesContext;

  let filteredArticles =
    researchArticles !== null
      ? researchArticles.filter((article) => {
          return (
            article.authors &&
            article.description &&
            article.authors.length > 0 &&
            article.publisher &&
            article.fulltextUrls.length > 1 &&
            article.topics.length > 1
          );
        })
      : "";

  const displayAll = researchArticles ? (
    filteredArticles.map((article, index) => {
      return <ResearchItem article={article} id={index} type={props.type} />;
    })
  ) : (
    <p>No Articles</p>
  );

  return (
    <div>
      <div class='all-researchArticles'>
        <div className='reseach-articlesResult'>{displayAll}</div>
        <div className='relatedVideos'>
          <h6>Videos related to this search</h6>
          {researchArticles && <Videos />}
        </div>
      </div>
    </div>
  );
};

export default ResearchArticles;
