/* 
1. HOW TO USE THE REDUCER! START WITH THE CONTEXT FILE. 
THINK OF CONTEXT AS THE EM DEPARTMENT. 
THIS WILL BE THE CENTER OF OPERATIONS, WHERE THE BOSS SITS
AND PLANS OUT THE FLOW OF WORK. THE CONTEXT ALSO HAS THE DISPATCH SOPS.

2. THINK OF THE REDUCER AS THE EM SERVICES. DISPATCH
CALLS THESE RESOURCES AND THEN THEY RESPOND TO THE LOCATION WHERE THEY ARE NEEDED
*/

import { createContext, useReducer } from "react";
import alertReducer from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const initialState = null;

  const [state, dispatch] = useReducer(alertReducer, initialState);

  //set an alert
  const setAlert = (msg, type) => {
    dispatch({
      type: "SET_ALERT",
      payload: { msg, type },
    });

    setTimeout(() => dispatch({ type: "REMOVE_ALERT" }), 3000);
  };

  return (
    <AlertContext.Provider value={{ alert: state, setAlert }}>
      {children}
    </AlertContext.Provider>
  );
};

export default AlertContext;
