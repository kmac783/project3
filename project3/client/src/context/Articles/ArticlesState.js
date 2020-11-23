import React, { useReducer, useEffect } from "react";
import axios from "axios";
import ArticlesContext from "./ArticlesContext";
import ArticlesReducer from "./ArticlesReducer";

import {
  GET_NEWS_ARTICLES,
  ARTICLES_ERROR,
  GET_RESEARCH_ARTICLES,
} from "../types";

const ArticlesState = (props) => {
  const initialState = {
    newsArticles: null,
    researchArticles: null,
    error: null,
    loading: true,
  };
  const [state, dispatch] = useReducer(ArticlesReducer, initialState);

  // Get Articles
  const getNewsArticles = async (query) => {
    const url = `https://cors-anywhere.herokuapp.com/https://gnews.io/api/v4/search?q=${query}&lang=en&token=${process.env.REACT_APP_NEWS_API_KEY}`;
    try {
      const res = await axios.get(url);
      dispatch({
        type: GET_NEWS_ARTICLES,
        payload: res.data.articles,
      });
    } catch (err) {
      dispatch({ type: ARTICLES_ERROR });
    }
  };

  const getResearchArticles = async (query) => {
    const url = `https://cors-anywhere.herokuapp.com/https://core.ac.uk:443/api-v2/articles/search/${query}?page=1&pageSize=100&metadata=true&fulltext=true&citations=true&similar=false&duplicate=false&urls=true&faithfulMetadata=false&apiKey=${process.env.REACT_APP_RESEARCH_API_KEY}`;
    try {
      const res = await axios.get(url);
      //let articles = res.data.data;

      dispatch({
        type: GET_RESEARCH_ARTICLES,
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({ type: ARTICLES_ERROR });
    }
  };

  return (
    <ArticlesContext.Provider
      value={{
        newsArticles: state.newsArticles,
        researchArticles: state.researchArticles,
        getNewsArticles,
        getResearchArticles,
      }}
    >
      {props.children}
    </ArticlesContext.Provider>
  );
};

export default ArticlesState;
