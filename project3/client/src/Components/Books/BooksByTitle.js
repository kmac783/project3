import React, { useContext } from "react";
import BooksContext from "../../context/Books/BooksContext";
import BookItem from "./BookItem";

function TitleResults() {
  const booksContext = useContext(BooksContext);
  const { title_search } = booksContext;
  console.log(title_search);
  return (
    <div>
      <p>Search Results</p>
      <div class='news-container'>
        <div class='books-div'>
          {title_search ? (
            title_search.map((item, index) => {
              return <BookItem item={item} id={index} />;
            })
          ) : (
            <p>No Articles</p>
          )}
        </div>
        <div class='show-articles'></div>
      </div>
    </div>
  );
}
export default TitleResults;
