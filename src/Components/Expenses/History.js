import React from "react";
import { useSelector, useDispatch } from "react-redux";

const History = () => {
  const transactions = useSelector((state) => state.transactions);

  const dispatch = useDispatch();
  const handlerDelete = (id) => {
    dispatch({ type: "DELETE", payload: id });
  };

  return (
    <>
      <h3>History:</h3>
      <ul className="list">
        {transactions.map((item) => (
          <li key={item.id} className={item.amount < 0 ? "minus" : "plus"}>
            <span>{item.text}</span>
            <span>
              {item.amount < 0 ? "-" : "+"}${Math.abs(item.amount)}
            </span>
            <button
              onClick={() => handlerDelete(item.id)}
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
