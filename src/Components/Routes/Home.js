import Balance from "../Expenses/Balance";
import IncomeExpenses from "../Expenses/IncomeExpenses";
import History from "../Expenses/History";
import AddingForm from "../Expenses/AddingExpenses";

const Home = () => {
  return (
    <div className="container">
      <h2>Expense Tracker</h2>
      <div className="balance">
        <Balance />
      </div>
      <div className="results">
        <IncomeExpenses />
      </div>
      <History />
      <AddingForm />
    </div>
  );
};

export default Home;
