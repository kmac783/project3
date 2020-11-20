import React, { useRef, useState, useContext, useEffect } from "react";
import BooksContext from "./context/Books/BooksContext";

export const BookSearch = () => {
  const [inputSwitch, setInputSwitch] = useState("off"); //on is articles
  const [searchKeyword, setSearchKeyword] = useState("");
  const booksContext = useContext(BooksContext);
  const { title_search, getBooksByAuthor } = booksContext;
  const onSearchChange = (e) => {
    setSearchKeyword(e.target.value);
  };
  const onBookSwitchToggle = (e) => {
    e.target.value === "off" ? setInputSwitch("on") : setInputSwitch("off");

    console.log(e.target.value);
  };
  return (
    <div class="container">
      <div class="search-container">
        <form>
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
            <button
              onClick={(e) => {
                e.preventDefault();
                getBooksByAuthor(searchKeyword);
                console.log(title_search);
                console.log(process.env);
              }}
              class="btn small blue"
            >
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
                  checked
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
