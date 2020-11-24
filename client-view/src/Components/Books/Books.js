import React, { useContext } from "react";
import ArticlesContext from "../../context/Articles/ArticlesContext";
import BooksByAuthor from "./BooksByAuthor";
import BooksByTitle from "./BooksByTitle";
const Books = () => {
  const articlesContext = useContext(ArticlesContext);

  const { searchType } = articlesContext;

  return (
    <div>
      {searchType === "searchTitle" && <BooksByTitle />}
      {searchType === "searchAuthor" && <BooksByAuthor />}
    </div>
  );
};

export default Books;
