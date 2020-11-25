import React, { useReducer, useContext } from "react";
import CollectionsContext from "./CollectionsContext";
import CollectionsReducer from "./CollectionsReducer";
import axios from "axios";
import M from "materialize-css/dist/js/materialize.min.js";

import {
  ADD_RESEARCH_ARTICLE,
  REMOVE_RESEARCH_ARTICLE,
  SAVE_ERROR,
  RESEARCH_ARTICLES_ERROR,
  GET_SAVED_RESEARCH_ARTICLES,
  ADD_NEWS_ARTICLE,
  GET_SAVED_NEWS_ARTICLES,
  NEWS_ARTICLES_ERROR,
  REMOVE_NEWS_ARTICLE,
  ADD_BOOKS,
  GET_SAVED_BOOKS,
  SAVE_BOOKS_ERROR,
  SAVE_NEWS_ERROR,
  SAVE_RESEARCH_ERROR,
  REMOVE_BOOK,
  CLEAR_ERRORS,
  DELETE_ERROR,
  FILTER_SAVED_BOOKS,
  CLEAR_FILTERED_BOOKS,
  FILTER_SAVED_NEWS_ARTICLES,
  FILTER_SAVED_RESEARCH_ARTICLES,
  CLEAR_FILTERED_NEWS_ARTICLES,
  CLEAR_FILTERED_RESEARCH_ARTICLES,
  BOOKS_ERROR,
  DELETE_SAVED_BOOK,
  DELETE_SAVED_NEWS_ARTICLE,
  DELETE_SAVED_RESEARCH_ARTICLE,
} from "../types";

const CollectionsState = (props) => {
  const initialState = {
    savedResearchArticles: null,
    savedBooks: null,
    filteredSavedBooks: null,
    filteredSavedNewsArticles: null,
    filteredSavedResearchArticles: null,
    savedNewsArticles: null,
    newsArticleSaveError: null,
    bookSaveError: null,
    researchArticleSaveError: null,
    loading: true,
    error: null,
  };

  const [state, dispatch] = useReducer(CollectionsReducer, initialState);

  const getSavedResearchArticles = async () => {
    try {
      const res = await axios.get("/api/research");
      dispatch({ type: GET_SAVED_RESEARCH_ARTICLES, payload: res.data });
    } catch (err) {
      dispatch({ type: RESEARCH_ARTICLES_ERROR });
    }
  };

  const addResearchArticle = async (article) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/research", article, config);
      M.toast({ html: "article saved!" });
      dispatch({
        type: ADD_RESEARCH_ARTICLE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SAVE_RESEARCH_ERROR,
        payload: err.response.data.msg,
      });
    }
  };

  const getSavedNewsArticles = async () => {
    try {
      const res = await axios.get("/api/news");
      dispatch({ type: GET_SAVED_NEWS_ARTICLES, payload: res.data });
    } catch (err) {
      dispatch({ type: NEWS_ARTICLES_ERROR });
    }
  };

  const addNewsArticle = async (article) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/news", article, config);
      M.toast({ html: "article saved!" });
      dispatch({
        type: ADD_NEWS_ARTICLE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SAVE_NEWS_ERROR,
        payload: err.response.data.msg,
      });
    }
  };

  const getSavedBooks = async () => {
    try {
      const res = await axios.get("/api/books");
      dispatch({ type: GET_SAVED_BOOKS, payload: res.data });
    } catch (err) {
      dispatch({ type: BOOKS_ERROR });
    }
  };

  const addBook = async (article) => {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("/api/books", article, config);

      dispatch({
        type: ADD_BOOKS,
        payload: res.data,
      });
      M.toast({ html: "book saved!" });
    } catch (err) {
      dispatch({
        type: SAVE_BOOKS_ERROR,
        payload: err.response.data.msg,
      });
    }
  };

  const filterSavedBooks = (text) => {
    dispatch({ type: FILTER_SAVED_BOOKS, payload: text });
  };

  const clearFilteredBooks = () => {
    dispatch({ type: CLEAR_FILTERED_BOOKS });
  };

  const filterSavedNewsArticles = (text) => {
    dispatch({ type: FILTER_SAVED_NEWS_ARTICLES, payload: text });
  };

  const clearFilteredNewsArticles = () => {
    dispatch({ type: CLEAR_FILTERED_NEWS_ARTICLES });
  };

  const filterSavedResearchArticles = (text) => {
    dispatch({ type: FILTER_SAVED_RESEARCH_ARTICLES, payload: text });
  };

  const clearFilteredResearchArticles = () => {
    dispatch({ type: CLEAR_FILTERED_RESEARCH_ARTICLES });
  };

  const deleteSavedResearchArticle = async (id) => {
    try {
      await axios.delete(`/api/research/${id}`);
      dispatch({ type: DELETE_SAVED_RESEARCH_ARTICLE, payload: id });
    } catch (err) {
      dispatch({ type: DELETE_ERROR });
    }
  };

  const deleteSavedNewsArticle = async (id) => {
    try {
      await axios.delete(`/api/news/${id}`);
      dispatch({ type: DELETE_SAVED_NEWS_ARTICLE, payload: id });
    } catch (err) {
      dispatch({ type: DELETE_ERROR });
    }
  };

  const deleteSavedBook = async (id) => {
    try {
      await axios.delete(`/api/books/${id}`);
      dispatch({ type: DELETE_SAVED_BOOK, payload: id });
    } catch (err) {
      dispatch({ type: DELETE_ERROR });
    }
  };

  const clearErrors = () => {
    dispatch({ type: CLEAR_ERRORS });
  };

  return (
    <CollectionsContext.Provider
      value={{
        savedResearchArticles: state.savedResearchArticles,
        savedNewsArticles: state.savedNewsArticles,
        savedBooks: state.savedBooks,
        filteredSavedBooks: state.filteredSavedBooks,
        filteredSavedNewsArticles: state.filteredSavedNewsArticles,
        filteredSavedResearchArticles: state.filteredSavedResearchArticles,
        clearFilteredBooks,
        clearErrors,
        newsArticleSaveError: state.newsArticleSaveError,
        researchArticleSaveError: state.researchArticleSaveError,
        bookSaveError: state.bookSaveError,
        deleteSavedBook,
        deleteSavedNewsArticle,
        deleteSavedResearchArticle,
        filterSavedNewsArticles,
        clearFilteredNewsArticles,
        filterSavedResearchArticles,
        clearFilteredResearchArticles,
        filterSavedBooks,
        loading: state.loading,
        error: state.error,
        addResearchArticle,
        addNewsArticle,
        addBook,
        getSavedResearchArticles,
        getSavedNewsArticles,
        getSavedBooks,
      }}
    >
      {props.children}
    </CollectionsContext.Provider>
  );
};

export default CollectionsState;
