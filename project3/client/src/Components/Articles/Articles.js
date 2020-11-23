import React, { useContext } from "react";
import ArticlesContext from "../../context/Articles/ArticlesContext";
import ResearchArticles from "./researchArticles/ResearchArticles";
import NewsArticles from "./newsArticles/NewsArticlesResults";
const Articles = () => {
  const articlesContext = useContext(ArticlesContext);

  const { searchType } = articlesContext;

  return (
    <div>
      {searchType === "searchNews" && <NewsArticles />}
      {searchType === "searchResearch" && <ResearchArticles type={"all"} />}
    </div>
  );
};

export default Articles;
