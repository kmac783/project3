import React, { useReducer } from "react";
import axios from "axios";
import VideosContext from "./VideosContext";
import VideosReducer from "./VideosReducer";

import { VIDEOS_ERROR, GET_VIDEOS } from "../types";

const VideosState = (props) => {
  const initialState = {
    videos: null,
    error: null,
    loading: true,
  };
  const [state, dispatch] = useReducer(VideosReducer, initialState);

  const getVideos = async (query) => {
    const url = `https://cors-anywhere.herokuapp.com/https://youtube.googleapis.com/youtube/v3/search?q=${query}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
    try {
      const res = await axios.get(url);

      dispatch({
        type: GET_VIDEOS,
        payload: res.data.items,
      });
    } catch (err) {
      dispatch({ type: VIDEOS_ERROR });
    }
  };

  return (
    <VideosContext.Provider
      value={{
        videos: state.videos,
        getVideos,
        loading: state.loading,
        error: state.error,
      }}
    >
      {props.children}
    </VideosContext.Provider>
  );
};

export default VideosState;
