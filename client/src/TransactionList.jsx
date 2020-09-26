import React from "react";

function TransactionList() {
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {/* {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))} */}

        <li className="plus">
          Books <span>$45</span>
          <button className="delete-btn">x</button>
        </li>
      </ul>
    </>
  );
}

export default TransactionList;
