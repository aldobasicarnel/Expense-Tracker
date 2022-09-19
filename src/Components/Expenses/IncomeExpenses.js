import React from "react";
import { useSelector } from "react-redux";

const IncomeExpenses = () => {
  const transactions = useSelector((state) => state.transactions);

  const income = transactions
    .filter((item) => {
      return item.amount > 0;
    })
    .reduce((exp, item) => (exp += item.amount));

  const expense = transactions
    .filter((item) => {
      return item.amount < 0;
    })
    .reduce((exp, item) => (exp += item.amount) * -1);

  return (
    <div className="inc-exp-container">
      <div>
        <span>Income</span>
        <div className="money-plus">${income.amount}</div>
      </div>
      <div>
        <span>Expsense</span>
        <div className="money-minus">${expense.amount}</div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
