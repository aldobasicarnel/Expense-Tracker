import { useState, React } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";

const AddingForm = () => {
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  async function onFormSubmit(e) {
    e.preventDefault();

    const newTransaction = {
      text,
      amount: +amount,
    };

    const config = { headers: { "Content-Type": "application/json" } };

    try {
      const res = await axios.post("/api/transactions", newTransaction, config);
      dispatch({ type: "ADD_TRANSACTION", payload: res.data.data });
    } catch (err) {
      console.log(err);
    }

    setText("");
    setAmount(0);
  }

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onFormSubmit}>
        <div className="form-control">
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Add your expense"
          />
        </div>
        <div className="form-control">
          <input
            type="number"
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
            placeholder="Add Amount"
          />
        </div>
        <button className="btn" onClick={onFormSubmit}>
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default AddingForm;
