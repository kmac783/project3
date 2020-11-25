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
              const dataItem = {
                items: {},
              };
              dataItem.items.id = item.best_book[0].id[0]._;
              dataItem.items.image = item.best_book[0].image_url;
              dataItem.items.title = item.best_book[0].title;
              dataItem.items.author = item.best_book[0].author[0].name;
              dataItem.items.average_rating = item.average_rating[0];
              dataItem.items.count = item.ratings_count[0]._;
              return <BookItem dataItem={dataItem} id={index} />;
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
