import React from "react";
import { useSelector } from "react-redux";

const IncomeExpenses = () => {
  const transactions = useSelector((state) => state.transactions);

  const income = transactions
    .filter((item) => {
      return item.amount > 0;
    })
    .reduce((exp, item) => (exp += item.amount), 0);

  const expense = transactions
    .filter((item) => {
      return item.amount < 0;
    })
    .reduce((exp, item) => (exp += item.amount) * -1, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <span>Income</span>
        <div className="money-plus">${income}</div>
      </div>
      <div>
        <span>Expsense</span>
        <div className="money-minus">$-{expense}</div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
