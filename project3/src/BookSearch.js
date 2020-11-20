import React, { useRef, useState, useContext, useEffect } from "react";
import BooksContext from "./context/Books/BooksContext";
import ArticlesContext from "./context/Articles/ArticlesContext";
export const BookSearch = () => {
  const [inputSwitch, setInputSwitch] = useState("off"); //on is articles
  const [searchKeyword, setSearchKeyword] = useState("");
  const [radioOption, setRadioOption] = useState("searchTitle");
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
    getNewsArticles,
    newsArticles,
    researchArticles,
  } = articlesContext;

  const onSearchChange = (e) => {
    e.preventDefault();
    setSearchKeyword(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault();

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
      } else if (userOption === "searchResearch") {
        getResearchArticles(searchKeyword);
      }
    }
  };

  const onBookSwitchToggle = (e) => {
    e.target.value === "off" ? setInputSwitch("on") : setInputSwitch("off");

    console.log(e.target.value);
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
                  checked
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
    </div>
  );
};

export default BookSearch;
