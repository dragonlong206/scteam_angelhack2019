import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";

import reducers from "../reducers";

const loggerMiddleware = createLogger({ level: "info", collapsed: true });

// createStore : enhancer
const enhancer = applyMiddleware(thunkMiddleware, loggerMiddleware);

export default function configureStore(initialState) {
  return createStore(reducers, initialState, enhancer);
}
