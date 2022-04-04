import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./rootreducer";

const initStore = () => {
  return createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...[thunk]))
  );
};

const store = initStore();

export default store;
