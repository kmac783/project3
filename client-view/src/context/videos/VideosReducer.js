import { GET_VIDEOS } from "../types";

export default (state, action) => {
  switch (action.type) {
    case GET_VIDEOS:
      return {
        ...state,
        videos: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};
