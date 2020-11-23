import {
  GET_NEWS_ARTICLES,
  GET_RESEARCH_ARTICLES,
  ARTICLES_ERROR,
} from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_NEWS_ARTICLES:
      return {
        ...state,
        newsArticles: action.payload,
        loading: false,
      };

    case GET_RESEARCH_ARTICLES:
      return {
        ...state,
        researchArticles: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
