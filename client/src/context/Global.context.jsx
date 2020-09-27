import React, { createContext, useReducer } from "react";
import Axios from "axios";
import reducer from "./Global.reducer";

// INITIAL STATE
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Provider
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // ACTIONS
  const getTransactions = async () => {
    try {
      const res = await (await Axios.get("/api/v1/transactions")).data;
      dispatch({ type: "GET_TRANSACTIONS", payload: res.data });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  };

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
        getTransactions,
        error: state.error,
        loading: state.loading,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
