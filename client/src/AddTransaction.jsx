import React from "react";
import useFormState from "./hooks/useFormState";

const AddTransaction = () => {
  // HOOKS && CONTEXT
  const [text, setText, resetText] = useFormState("");
  const [amount, setAmount, resetAmount] = useFormState("");
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
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
            $14
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
