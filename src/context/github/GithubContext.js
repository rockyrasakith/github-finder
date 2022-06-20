//This example will show how to set up reducers for managing app state.
import { createContext, useReducer } from "react";

//STEP 1: Import the reducer from the context folder
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = process.env.REACT_APP_GITHUB_URL;
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

//The following function is the "provider" function and it should be exported.
export const GithubProvider = ({ children }) => {
  /* STEP 2: Create an Initial State. This concept is similar to setting values with useState hook, but instead
  this is how to do it with a reducer. */
  const initialState = {
    users: [],
    loading: false,
  };

  //STEP 3: useReducer hook! Dispatch function dispatches an action to my reducer at GithubReducer.js
  const [state, dispatch] = useReducer(githubReducer, initialState);

  //Get Initial Users (testing purposes)
  const fetchUsers = async () => {
    setLoading()
    //Call the API endpoint with a fetch request and save the response in a variable.
    const response = await fetch(`${GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    // Save the data from the response as JSON.
    const data = await response.json();

    //STEP 4: Dispatch that data so it can be passed into the githubReducer function.
    //This is how I use the dispatch function from the useReducer hook.
    //Dispatch literally sends this information to the githubReducer function on GithubReducer.js
    dispatch(
      { type: "GET_USERS", payload: data}
    );
  };

  //Set loading...
  const setLoading = () => dispatch({
    type: "SET_LOADING"
  })

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        fetchUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
