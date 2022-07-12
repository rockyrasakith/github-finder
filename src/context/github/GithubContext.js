//This example will show how to set up reducers for managing app state.
import { createContext, useReducer } from "react";

//STEP 1: Import the reducer from the context folder
import githubReducer from "./GithubReducer";

//This hook creates the context, that will use the provider component in the return statement.
const GithubContext = createContext();

//The following function is the "provider" function and it should be exported.
export const GithubProvider = ({ children }) => {
  /* STEP 2: Create an Initial State. This concept is similar to setting values with useState hook, 
  but instead this is how to do it with a reducer. */
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  //STEP 3: useReducer hook! Dispatch function dispatches an action to my reducer at GithubReducer.js
  const [state, dispatch] = useReducer(githubReducer, initialState);

  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
