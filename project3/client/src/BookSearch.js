import React, { useRef, useState, useContext, useEffect } from "react";
import BooksContext from "./context/Books/BooksContext";
import ArticlesContext from "./context/Articles/ArticlesContext";
import AuthContext from "./context/Auth/AuthContext";
import Spinner from "./Components/Spinner";
// import ArticlesResults from "./Components/ArticlesResults.js";
import TitleResults from "./TitleResults";
import ResearchArticles from "./ResearchArticles";

import ArticlesResults from "./Components/ArticlesResults";
export const BookSearch = () => {
  const [inputSwitch, setInputSwitch] = useState("off"); //on is articles
  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchLoading, setSearchLoading] = useState(false);

  const booksContext = useContext(BooksContext);
  const authContext = useContext(AuthContext);
  const articlesContext = useContext(ArticlesContext);

  const { isAuthenticated, loadUser } = authContext;
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

  useEffect(() => {
    loadUser();
  }, []);

  const onSearchChange = (e) => {
    e.preventDefault();
    setSearchKeyword(e.target.value);
  };

  const onFormSubmit = async (e) => {
    setSearchLoading(true);
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
        setSearchLoading(false);
        console.log(newsArticles);
      } else if (userOption === "searchResearch") {
        await getResearchArticles(searchKeyword);
        setSearchLoading(false);
      }
    }
    //  setSearchLoading(false);
  };
  console.log(researchArticles);
  const onBookSwitchToggle = (e) => {
    e.target.value === "off" ? setInputSwitch("on") : setInputSwitch("off");
  };

  return (
    <div className="container">
      <div className="search-container">
        <form
          onSubmit={(e) => {
            onFormSubmit(e);
          }}
        >
          <div className="switch ">
            <label>
              Books
              <input
                type="checkbox"
                value={inputSwitch}
                onChange={(e) => {
                  onBookSwitchToggle(e);
                }}
              />
              <span className="lever"></span>
              Articles
            </label>
          </div>
          <div className="input-field search-box">
            <input
              value={searchKeyword}
              onChange={(e) => {
                onSearchChange(e);
              }}
              id="search"
              type="text"
            />
            <button type="submit" className="btn small blue">
              Search
            </button>
          </div>
          <div className="book-radio">
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
        {searchLoading && <Spinner />}
        {!searchLoading && researchArticles && <ResearchArticles type="all" />}
        {!searchLoading && newsArticles && <ArticlesResults />}
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
