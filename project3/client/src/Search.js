import React, { useEffect, useContext } from "react";
import BooksContext from "./context/Books/BooksContext";
import ArticlesContext from "./context/Articles/ArticlesContext";
import VideosContext from "./context/videos/VideosContext";
import ResearchArticles from "./ResearchArticles";

const Search = () => {
  ///Call Context and reducer states
  const booksContext = useContext(BooksContext);
  const articlesContext = useContext(ArticlesContext);
  const videosContext = useContext(VideosContext);

  //// Extract Datafunctions from context
  const {
    title_search,
    getBooksByTitle,
    author_search,
    getBooksByAuthor,
  } = booksContext;

  const {
    newsArticles,
    getNewsArticles,
    researchArticles,
    getResearchArticles,
  } = articlesContext;

  const { videos, getVideos } = videosContext;
  //getResearchArticles("bitcoin");
  ///// Fire up context functions

  // useEffect(() => {
  //   getBooksByTitle("javascript");
  // }, []);

  // useEffect(() => {
  //getResearchArticles("bitcoin");
  // }, []);

  // useEffect(() => {
  //   getBooksByAuthor("Lisa Wingate");
  // }, []);

  // useEffect(() => {
  //getNewsArticles("bitcoin");
  // }, []);

  // useEffect(() => {
  //   getVideos("bitcoin");
  // }, []);

  ///////Sample Responses
  console.log("books search by title", title_search);
  console.log("books search by author", author_search);
  console.log("news articles", newsArticles, typeof newsArticles);
  console.log("research Articles", researchArticles);
  console.log("Videos", videos);

  return (
    <div className='container'>
      <p>Search Page</p>
    </div>
  );
};

export default Search;
