import React, { useRef, useState, useContext, useEffect } from "react";
import BooksContext from "./context/Books/BooksContext";
import ArticlesContext from "./context/Articles/ArticlesContext";

export const TitleResults = () => {
  const booksContext = useContext(BooksContext);
  const articlesContext = useContext(ArticlesContext);
  const {
    title_search,
    getBooksByTitle,
    getBooksByAuthor,
    author_search,
  } = booksContext;
  const {
    getResearchArticles,
    newsArticles,
    getNewsArticles,
    researchArticles,
  } = articlesContext;
  return (
    <div>
      <p>Search Page</p>
      {title_search ? (
        title_search.map((item, index) => {
          console.log(item.best_book);
          return (
            //TODO: Should we default to one radio button checked or make an error for if user runs search without a radio button checked?
            <div id={index}>
              <p>
                Title: {item.best_book[0].title}
                Author: {item.best_book[0].author[0].name}
                <img src={item.best_book[0].image_url} />
              </p>
            </div>
          );
        })
      ) : (
        <p>No Books</p>
      )}
    </div>
  );
};

export default TitleResults;
