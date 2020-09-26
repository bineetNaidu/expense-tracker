import React, { useContext } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "./context/Global.context";

function TransactionList() {
  // CONTEXTs && HOOKS
  const { transactions } = useContext(GlobalContext);
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} {...transaction} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
