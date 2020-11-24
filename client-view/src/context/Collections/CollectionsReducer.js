import {
  ADD_RESEARCH_ARTICLE,
  REMOVE_RESEARCH_ARTICLE,
  SAVE_ERROR,
  GET_SAVED_RESEARCH_ARTICLES,
  RESEARCH_ARTICLES_ERROR,
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

export default (state, action) => {
  switch (action.type) {
    case ADD_RESEARCH_ARTICLE:
      return {
        ...state,
        loading: false,
      };
    case GET_SAVED_RESEARCH_ARTICLES:
      return {
        ...state,
        savedResearchArticles: action.payload,
        loading: false,
      };

    case ADD_NEWS_ARTICLE:
      return {
        ...state,
        loading: false,
      };
    case GET_SAVED_NEWS_ARTICLES:
      return {
        ...state,
        savedNewsArticles: action.payload,
        loading: false,
      };

    case ADD_BOOKS:
      return {
        ...state,
        loading: false,
      };
    case GET_SAVED_BOOKS:
      return {
        ...state,
        savedBooks: action.payload,
        loading: false,
      };

    case SAVE_ERROR:
    case RESEARCH_ARTICLES_ERROR:
    case NEWS_ARTICLES_ERROR:
    case BOOKS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
