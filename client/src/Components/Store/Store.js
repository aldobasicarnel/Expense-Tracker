import { createStore } from "redux";

const transactions = [];

const transactionReducer = (state = { transactions }, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return { ...state, transactions: action.payload };
    case "DELETE":
      return {
        ...state,
        transactions: state.transactions.filter(
          (item) => item._id !== action.payload
        ),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [...state.transactions, action.payload],
      };
    default:
      return state;
  }
};

const store = createStore(transactionReducer);

const transactionSubscriber = () => {
  store.getState();
};
store.subscribe(transactionSubscriber);

export default store;
