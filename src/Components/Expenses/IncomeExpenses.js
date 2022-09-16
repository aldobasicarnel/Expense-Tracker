import React from "react";

const IncomeExpenses = () => {
  return (
    <div className="inc-exp-container">
      <div>
        <span>Income</span>
        <div className="money-plus">$0.00</div>
      </div>
      <div>
        <span>Expsense</span>
        <div className="money-minus">$0.00</div>
      </div>
    </div>
  );
};

export default IncomeExpenses;
