import React from "react";
import Header from "./Header";
import Balance from "./Balance";
import IncomeExpense from "./IncomeExpense";
import TransactionList from "./TransactionList";
import AddTransaction from "./AddTransaction";

// STATICS
import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransactionList />
        <AddTransaction />
      </div>
    </div>
  );
}

export default App;
