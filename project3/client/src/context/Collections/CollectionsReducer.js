import {
  ADD_RESEARCH_ARTICLE,
  REMOVE_RESEARCH_ARTICLE,
  SAVE_ERROR,
  GET_SAVED_RESEARCH_ARTICLES,
  RESEARCH_ARTICLES_ERROR,
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

    case SAVE_ERROR:
    case RESEARCH_ARTICLES_ERROR:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
