import React, { createContext, useReducer } from "react";
import reducer from "./Global.reducer";

// INITIAL STATE
const initialState = {
  transactions: [],
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const deleteTranction = (id) =>
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });

  const addTransaction = (newTansac) =>
    dispatch({
      type: "ADD_TRANSACTION",
      payload: newTansac,
    });

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTranction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
