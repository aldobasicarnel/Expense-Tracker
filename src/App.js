import "./App.css";
import Header from "./Components//Header/Header";
import Balance from "./Components/Expenses/Balance";
import IncomeExpenses from "./Components/Expenses/IncomeExpenses";
import History from "./Components/Expenses/History";
import AddingForm from "./Components/Expenses/AddingExpenses";
function App() {
  return (
    <div>
      <Header />
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
    </div>
  );
}

export default App;
