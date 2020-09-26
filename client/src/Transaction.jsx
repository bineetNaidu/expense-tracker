import React, { useContext } from "react";
import { GlobalContext } from "./context/Global.context";

export const Transaction = ({ amount, id, text }) => {
  // HOOKS && CONTEXT
  const { deleteTranction } = useContext(GlobalContext);

  // FUNCTIONS
  const sign = amount < 0 ? "-" : "+";
  const handleDelete = () => deleteTranction(id);

  return (
    <li className={amount < 0 ? "minus" : "plus"}>
      {text}{" "}
      <span>
        {sign}${Math.abs(amount)}
      </span>
      <button className="delete-btn" onClick={handleDelete}>
        x
      </button>
    </li>
  );
};
