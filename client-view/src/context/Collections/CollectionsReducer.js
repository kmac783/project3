import {
  ADD_RESEARCH_ARTICLE,
  GET_SAVED_RESEARCH_ARTICLES,
  RESEARCH_ARTICLES_ERROR,
  ADD_NEWS_ARTICLE,
  GET_SAVED_NEWS_ARTICLES,
  ADD_BOOKS,
  GET_SAVED_BOOKS,
  CLEAR_ERRORS,
  SAVE_BOOKS_ERROR,
  SAVE_RESEARCH_ERROR,
  SAVE_NEWS_ERROR,
  BOOKS_ERROR,
  DELETE_ERROR,
  FILTER_SAVED_BOOKS,
  CLEAR_FILTERED_BOOKS,
  FILTER_SAVED_NEWS_ARTICLES,
  FILTER_SAVED_RESEARCH_ARTICLES,
  CLEAR_FILTERED_NEWS_ARTICLES,
  CLEAR_FILTERED_RESEARCH_ARTICLES,
  DELETE_SAVED_BOOK,
  DELETE_SAVED_NEWS_ARTICLE,
  DELETE_SAVED_RESEARCH_ARTICLE,
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

    case DELETE_SAVED_BOOK:
      return {
        ...state,
        savedBooks: state.savedBooks.filter(
          (book) => book._id !== action.payload
        ),
        loading: false,
      };

    case DELETE_SAVED_NEWS_ARTICLE:
      return {
        ...state,
        savedNewsArticles: state.savedNewsArticles.filter(
          (article) => article._id !== action.payload
        ),
        loading: false,
      };

    case DELETE_SAVED_RESEARCH_ARTICLE:
      return {
        ...state,
        savedResearchArticles: state.savedResearchArticles.filter(
          (article) => article._id !== action.payload
        ),
        loading: false,
      };
    case SAVE_NEWS_ERROR:
      return {
        ...state,
        newsArticleSaveError: action.payload,
      };
    case SAVE_RESEARCH_ERROR:
      return {
        ...state,
        researchArticleSaveError: action.payload,
      };
    case SAVE_BOOKS_ERROR:
      return {
        ...state,
        bookSaveError: action.payload,
      };

    case RESEARCH_ARTICLES_ERROR:
    case DELETE_ERROR:
    case BOOKS_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    case FILTER_SAVED_BOOKS:
      return {
        ...state,
        filteredSavedBooks: state.savedBooks.filter((book) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return book.bookItem.title[0].match(regex);
        }),
      };
    case CLEAR_FILTERED_BOOKS:
      return {
        ...state,
        filteredSavedBooks: null,
      };

    case FILTER_SAVED_RESEARCH_ARTICLES:
      return {
        ...state,
        filteredSavedResearchArticles: state.savedResearchArticles.filter(
          (article) => {
            const regex = new RegExp(`${action.payload}`, "gi");
            return article.researchArticle.title.match(regex);
          }
        ),
      };
    case CLEAR_FILTERED_RESEARCH_ARTICLES:
      return {
        ...state,
        filteredSavedResearchArticles: null,
      };

    case FILTER_SAVED_NEWS_ARTICLES:
      return {
        ...state,
        filteredSavedNewsArticles: state.savedNewsArticles.filter((article) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return article.newsArticle.title.match(regex);
        }),
      };
    case CLEAR_FILTERED_NEWS_ARTICLES:
      return {
        ...state,
        filteredSavedNewsArticles: null,
      };
    case CLEAR_ERRORS:
      return {
        ...state,
        error: null,
        bookSaveError: null,
        newsArticleSaveError: null,
        researchArticleSaveError: null,
      };
    default:
      return state;
  }
};
