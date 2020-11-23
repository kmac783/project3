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
} from "../types";

const CollectionsState = (props) => {
  const initialState = {
    savedResearchArticles: [],
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

  return (
    <CollectionsContext.Provider
      value={{
        savedResearchArticles: state.savedResearchArticles,
        loading: state.loading,
        addResearchArticle,
        getSavedResearchArticles,
      }}
    >
      {props.children}
    </CollectionsContext.Provider>
  );
};

export default CollectionsState;
