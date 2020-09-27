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

  const deleteTranction = async (id) => {
    try {
      await Axios.delete(`/api/v1/transactions/${id}`);
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: id,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  };

  const addTransaction = async (newTansac) => {
    const config = {
      headers: {
        "Context-Type": "application/json",
      },
    };

    try {
      const res = await Axios.post("/api/v1/transactions", newTansac, config);
      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        payload: err.response.data.error,
      });
    }
  };
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

export const numberWithCommas = (x) =>
  x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
