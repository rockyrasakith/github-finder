//This will be the Reducer File. It's good practice to put it inside the context folder
import React from "react";

const githubReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
        return {
            ...state,
            users: action.payload,
            loading: false,
        }
    case "SET_LOADING":
        return {
            ...state,
            loading: true,
        }
    default:
      return state;
  }
};

export default githubReducer;
