import React, { useContext } from "react";
import { GlobalContext } from "./context/Global.context";
import useFormState from "./hooks/useFormState";

const AddTransaction = () => {
  // HOOKS && CONTEXT
  const [text, setText, resetText] = useFormState("");
  const [amount, setAmount, resetAmount] = useFormState("");
  const { addTransaction } = useContext(GlobalContext);

  //  FUNCTIONS
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      text,
      amount: +amount,
    };
    addTransaction(newTransaction);
    resetText();
    resetAmount();
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={setText}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={setAmount}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};

export default AddTransaction;
