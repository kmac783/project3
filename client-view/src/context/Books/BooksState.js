import React, { useReducer } from "react";
import axios from "axios";
import BooksContext from "./BooksContext";
import BooksReducer from "./BooksReducer";

import { BOOKS_ERROR, GET_BOOKS_BY_AUTHOR, GET_BOOKS_BY_TITLE } from "../types";

var parseString = require("xml2js").parseString;
const BooksState = (props) => {
  const initialState = {
    title_search: null,
    author_search: null,
    error: null,
    loading: true,
  };
  const [state, dispatch] = useReducer(BooksReducer, initialState);

  // Get Books
  const getBooksByTitle = async (title) => {
    const url = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?q=${title}&key=${process.env.REACT_APP_GOODREADS_API_KEY}&search=title`;
    try {
      const res = await axios.get(url);
      parseString(res.data, function (err, result) {
        dispatch({
          type: GET_BOOKS_BY_TITLE,
          payload: result.GoodreadsResponse.search[0].results[0].work,
        });
      });
    } catch (err) {
      dispatch({ type: BOOKS_ERROR });
    }
  };

  const getBooksByAuthor = async (author) => {
    const url = `https://cors-anywhere.herokuapp.com/https://www.goodreads.com/search/index.xml?q=${author}&key=${process.env.REACT_APP_GOODREADS_API_KEY}&search=author`;
    try {
      const res = await axios.get(url);
      parseString(res.data, function (err, result) {
        dispatch({
          type: GET_BOOKS_BY_AUTHOR,
          payload: result.GoodreadsResponse.search[0].results[0].work,
        });
      });
    } catch (err) {
      dispatch({ type: BOOKS_ERROR });
    }
  };
  return (
    <BooksContext.Provider
      value={{
        title_search: state.title_search,
        author_search: state.author_search,
        loading: state.loading,
        error: state.error,
        getBooksByTitle,
        getBooksByAuthor,
      }}
    >
      {props.children}
    </BooksContext.Provider>
  );
};

export default BooksState;
