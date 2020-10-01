import React, { useContext, useEffect } from "react";
import { Transaction } from "./Transaction";
import { GlobalContext } from "./context/Global.context";

function TransactionList() {
  // CONTEXTs && HOOKS
  const { transactions, getTransactions } = useContext(GlobalContext);

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction._id} {...transaction} />
        ))}
      </ul>
    </>
  );
}

export default TransactionList;
