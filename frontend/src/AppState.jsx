import React, { createContext, useReducer } from "react"; // Import createContext and useReducer

////////////////////////////
// INITIAL STATE
////////////////////////////

const initialState = {
  url: "http://frreactrailsbackend-ea61f9590f43.herokuapp.com"
};

////////////////////////////
// REDUCER
////////////////////////////
// action = {type: "", payload: ---}
const reducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//////////////////////////
// AppContext
//////////////////////////
const AppContext = React.createContext(null); // Corrected the method name to createContext

//////////////////////////
// AppState Component
//////////////////////////

export const AppState = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
};

////////////////////////
// useAppState hook
////////////////////////

export const useAppState = () => {
  return React.useContext(AppContext);
};
