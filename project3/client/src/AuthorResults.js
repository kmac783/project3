import React, { useContext } from "react";
import BooksContext from "./context/Books/BooksContext";

function AuthorResults() {
  const booksContext = useContext(BooksContext);
  const { author_search } = booksContext;
  return (
    <div>
      <p>Search Results</p>
      <div class='news-container'>
        <div class='news-articles'>
          {author_search ? (
            author_search.map((item) => {
              console.log(item)
              return (
                <div class='col s12 m7'>
                  <h2 class='header'></h2>
                  <div class='card horizontal'>
                    <div class='card-image'>
                    <img src={item.best_book[0].image_url} />
                    </div>
                    <div class='card-stacked'>
                      <div class='card-content'>
                        <p>{item.best_book[0].author[0].name}</p>
                        <p>Best Book: {item.best_book[0].title}</p>
                      </div>
                      <div class='card-action'>
                        {/* <a href={item.source.url}>
                          Link to {item.source.name}{" "}
                        </a> */}
                        Average Rating: {item.average_rating}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>No Articles</p>
          )}
        </div>
        <div class='video-articles'></div>
      </div>
    </div>
  );
}
export default AuthorResults;
