import React, { useContext } from "react";
import BooksContext from "../../context/Books/BooksContext";
import BookItem from "./BookItem";
function AuthorResults() {
  const booksContext = useContext(BooksContext);
  const { author_search } = booksContext;
  return (
    <div>
      <p>Search Results</p>
      <div class='news-container'>
        <div class='books-div'>
          {author_search ? (
            author_search.map((item, index) => {
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
export default AuthorResults;
