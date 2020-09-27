import React, { useContext } from "react";
import { GlobalContext, numberWithCommas } from "./context/Global.context";

export const Transaction = ({ amount, _id, text }) => {
  // HOOKS && CONTEXT
  const { deleteTranction } = useContext(GlobalContext);

  // FUNCTIONS
  const sign = amount < 0 ? "-" : "+";
  const handleDelete = () => deleteTranction(_id);

  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      {text}{" "}
      <span>
        {sign}${numberWithCommas(Math.abs(amount))}
      </span>
      <button className="delete-btn" onClick={handleDelete}>
        x
      </button>
    </li>
  );
};
