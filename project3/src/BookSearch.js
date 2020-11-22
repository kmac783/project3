import React, { useRef, useState, useContext, useEffect } from "react";
import BooksContext from "./context/Books/BooksContext";
import ArticlesContext from "./context/Articles/ArticlesContext";
// import ArticlesResults from "./Components/ArticlesResults.js";
import TitleResults from "./TitleResults";
export const BookSearch = () => {
  const [inputSwitch, setInputSwitch] = useState("off"); //on is articles
  const [searchKeyword, setSearchKeyword] = useState("");
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

  const onSearchChange = (e) => {
    e.preventDefault();
    setSearchKeyword(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();
    //TODO Add Form Validation for Radio Boxes
    //If we change anything with this form this value will need to be fixed

    let userOption = e.target.querySelector("input[name='group1']:checked")
      .value;
    if (inputSwitch === "off") {
      if (userOption === "searchTitle") {
        getBooksByTitle(searchKeyword);
      } else if (userOption === "searchAuthor") {
        getBooksByAuthor(searchKeyword);
      }
    } else {
      if (userOption === "searchNews") {
        getNewsArticles(searchKeyword);
        console.log(newsArticles);
      } else if (userOption === "searchResearch") {
        getResearchArticles(searchKeyword);
      }
    }
  };

  const onBookSwitchToggle = (e) => {
    e.target.value === "off" ? setInputSwitch("on") : setInputSwitch("off");
  };

  return (
    <div class="container">
      <div class="search-container">
        <form
          onSubmit={(e) => {
            onFormSubmit(e);
          }}
        >
          <div class="switch ">
            <label>
              Books
              <input
                type="checkbox"
                value={inputSwitch}
                onChange={(e) => {
                  onBookSwitchToggle(e);
                }}
              />
              <span class="lever"></span>
              Articles
            </label>
          </div>
          <div class="input-field search-box">
            <input
              value={searchKeyword}
              onChange={(e) => {
                onSearchChange(e);
              }}
              id="search"
              type="search"
            />
            <button type="submit" class="btn small blue">
              Search
            </button>
          </div>
          <div class="book-radio">
            <p>
              <label>
                <input
                  value={inputSwitch === "off" ? "searchTitle" : "searchNews"}
                  name="group1"
                  type="radio"
                  // checked
                />
                <span id="radio-text1">
                  {inputSwitch === "off"
                    ? "Search by Title"
                    : "Search News Articles"}
                </span>
              </label>
            </p>
            <p>
              <label>
                <input
                  value={
                    inputSwitch === "off" ? "searchAuthor" : "searchResearch"
                  }
                  name="group1"
                  // checked
                  type="radio"
                />
                <span id="radio-text2">
                  {inputSwitch === "off"
                    ? "Search by Author"
                    : "Search Research Articles"}
                </span>
              </label>
            </p>
          </div>
        </form>
      </div>
      <div>
        <p>Search Results</p>
        {newsArticles ? (
          newsArticles.map((item) => {
            return (
              <div class="row">
                <div class="col s12 m7">
                  <div class="card-small">
                    <div class="card-image">
                      <img src="https://via.placeholder.com/200" />
                      <span class="card-title"></span>
                    </div>
                    <div class="card-content">
                      <p>{item.title}</p>
                    </div>
                    <div class="card-action">
                      <a href="{item.source.url}">
                        Link to {item.source.name}{" "}
                      </a>
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

      {/* <div>
        <p>Search Page</p>
        {title_search ? (
          title_search.map((item) => {
            console.log(item.best_book);
            return (
              //TODO: Should we default to one radio button checked or make an error for if user runs search without a radio button checked?
              <div>
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
      </div> */}

      {/* <div>
        <p>Search Page</p>
        {title_search ? (
          title_search.map((item) => {
            console.log(item.best_book);
            return (
              //TODO: Should we default to one radio button checked or make an error for if user runs search without a radio button checked?
              <div>
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
      </div> */}
    </div>
  );
};

export default BookSearch;
