import {
  BOOKS_ERROR,
  GET_ARTICLES,
  GET_BOOKS_BY_AUTHOR,
  GET_BOOKS_BY_TITLE,
  GET_VIDEOS,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_BOOKS_BY_TITLE:
      return {
        ...state,
        title_search: action.payload,
        loading: false,
      };

    case GET_BOOKS_BY_AUTHOR:
      return {
        ...state,
        author_search: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
