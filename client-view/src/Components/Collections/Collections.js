import React, { useEffect, useContext } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import CollectionsContext from "../../context/Collections/CollectionsContext";
import SavedResearchArticles from "../Articles/researchArticles/SavedResearchArticles";
import SavedNewsArticles from "../Articles/newsArticles/SavedNewsArticles";
import Spinner from "../Spinner";
import SavedBookItem from "../Books/SavedBookItem";
import BooksFilter from "./BooksFilter";
import ResearchArticlesFilter from "./ResearchArticlesFilter";
import NewsArticlesFilter from "./NewsArticlesFilter";
import AuthContext from "../../context/Auth/AuthContext";

const Collections = () => {
  const authContext = useContext(AuthContext);
  const { loadUser } = authContext;

  useEffect(() => {
    loadUser();
  }, []);
  const collectionsContext = useContext(CollectionsContext);

  const {
    getSavedResearchArticles,
    savedResearchArticles,
    getSavedNewsArticles,
    savedNewsArticles,
    savedBooks,
    getSavedBooks,
    loading,
    filteredSavedBooks,
  } = collectionsContext;
  useEffect(() => {
    var elems = document.querySelectorAll(".tabs");
    var instance = M.Tabs.init(elems);
  }, []);

  useEffect(() => {
    getSavedResearchArticles();
  }, []);
  useEffect(() => {
    getSavedNewsArticles();
  }, []);
  useEffect(() => {
    getSavedBooks();
  }, []);

  console.log(savedResearchArticles);
  console.log(savedNewsArticles);
  console.log(savedBooks);
  return (
    <div>
      <div className='row container'>
        <div className='col s12'>
          <ul className='tabs purple lighten-5 z-depth-2'>
            <li className='tab col s4'>
              <a href='#test1' className='active'>
                Books
              </a>
            </li>
            <li className='tab col s4'>
              <a href='#test2'>News Articles</a>
            </li>
            <li className='tab col s4'>
              <a href='#test3'>Research Articles</a>
            </li>
          </ul>
        </div>
        <div id='test1' className='col s12 test1'>
          <BooksFilter />

          {savedBooks !== null && !loading ? (
            filteredSavedBooks !== null ? (
              filteredSavedBooks.map((savedBook, index) => (
                <SavedBookItem
                  bookItem={savedBook.bookItem}
                  bookId={savedBook._id}
                  id={index}
                />
              ))
            ) : (
              savedBooks.map((savedBook, index) => (
                <SavedBookItem
                  bookItem={savedBook.bookItem}
                  bookId={savedBook._id}
                  id={index}
                />
              ))
            )
          ) : (
            <Spinner />
          )}
        </div>
        <div id='test2' className='col s12'>
          <NewsArticlesFilter />
          {loading && <Spinner />}
          {!loading && savedNewsArticles && <SavedNewsArticles type='saved' />}
        </div>
        <div id='test3' className='col s12'>
          <ResearchArticlesFilter />
          {loading && <Spinner />}
          {!loading && savedResearchArticles && (
            <SavedResearchArticles type='saved' />
          )}
        </div>
      </div>
    </div>
  );
};

export default Collections;
