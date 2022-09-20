import { createStore } from "redux";

const transactions = [];

const transactionReducer = (state = { transactions }, action) => {
  switch (action.type) {
    case "DELETE":
      return {
        ...state,
        transactions: state.transactions.filter((item) => {
          if (item.id !== action.payload) {
            return item;
          }
        }),
      };
    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
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
