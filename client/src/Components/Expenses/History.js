import React from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { useEffect } from "react";

const History = () => {
  const transactions = useSelector((state) => state.transactions);
  const dispatch = useDispatch();

  async function handlerDelete(id) {
    try {
      await axios.delete(`/api/transactions/${id}`);
      dispatch({ type: "DELETE", payload: id });
    } catch (err) {
      console.log(err);
    }
  }

  async function getTransactions() {
    try {
      const res = await axios.get("/api/transactions");

      dispatch({ type: "GET_TRANSACTIONS", payload: res.data.data });
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getTransactions();
  }, []);

  return (
    <>
      <h3>History:</h3>
      <ul className="list">
        {transactions.map((item) => (
          <li key={item._id} className={item.amount < 0 ? "minus" : "plus"}>
            <span>{item.text}</span>
            <span>
              {item.amount < 0 ? "-" : "+"}${Math.abs(item.amount)}
            </span>
            <button
              onClick={() => handlerDelete(item._id)}
              className="delete-btn"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default History;
