import { createStore } from "redux";

const transactions = [
  { id: "1", text: "Laptop", amount: 1199 },
  { id: "2", text: "Phone", amount: -556 },
];

console.log(transactions.map((item) => item.id));

const transactionReducer = (state = { transactions }, action) => {
  if (action.type === "DELETE") {
    return {
      ...state,
      transactions: state.transactions.filter(
        (transaction) => transaction.id !== action.payload
      ),
    };
  }

  return state;
};

const store = createStore(transactionReducer);

export default store;
