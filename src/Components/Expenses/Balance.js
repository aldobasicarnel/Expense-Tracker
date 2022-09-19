import React from "react";
import { useSelector } from "react-redux";
const Balance = () => {
  const transactions = useSelector((state) => state.transactions);

  const totalAmount = transactions.reduce(
    (exp, item) => (exp += item.amount),
    0
  );

  return (
    <div>
      <span>Your Balance:</span>
      <span>${totalAmount}</span>
    </div>
  );
};

export default Balance;
