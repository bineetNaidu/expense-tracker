import React, { useContext } from "react";
import { GlobalContext, numberWithCommas } from "./context/Global.context";

const Balance = () => {
  // CONTEXTs && HOOKS
  const { transactions } = useContext(GlobalContext);

  // FUNCTIONS
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="balance">${numberWithCommas(total)}</h1>
    </>
  );
};

export default Balance;
