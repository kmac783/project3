import React, { useReducer, useContext } from "react";
import CollectionsContext from "./CollectionsContext";
import CollectionsReducer from "./CollectionsReducer";
import axios from "axios";
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
  REMOVE_BOOK,
  BOOKS_ERROR,
} from "../types";

const CollectionsState = (props) => {
  const initialState = {
    savedResearchArticles: [],
    savedBooks: [],
    savedNewsArticles: [],
    loading: true,
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

      dispatch({
        type: ADD_RESEARCH_ARTICLE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SAVE_ERROR,
        payload: err,
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

      dispatch({
        type: ADD_NEWS_ARTICLE,
        payload: res.data,
      });
    } catch (err) {
      dispatch({
        type: SAVE_ERROR,
        payload: err,
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
    } catch (err) {
      dispatch({
        type: SAVE_ERROR,
        payload: err,
      });
    }
  };

  return (
    <CollectionsContext.Provider
      value={{
        savedResearchArticles: state.savedResearchArticles,
        savedNewsArticles: state.savedNewsArticles,
        savedBooks: state.savedBooks,
        loading: state.loading,
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
