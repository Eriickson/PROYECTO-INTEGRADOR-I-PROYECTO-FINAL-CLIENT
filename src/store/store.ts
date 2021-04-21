import { createStore, applyMiddleware, compose, Store } from "redux";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { createLogger } from "redux-logger";
import { RootReducer, RootStore } from "./reducers";
import { AppActions } from "./types";

let composeEnhancers;
const logger = createLogger({
  predicate: () => process.env.NODE_ENV === "development" && typeof window !== "undefined",
});

if (process.env.NODE_ENV === "development") {
  // eslint-disable-next-line
  composeEnhancers = (typeof window !== "undefined" && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
} else {
  composeEnhancers = compose;
}

export const store: Store = createStore(
  RootReducer,
  composeEnhancers(applyMiddleware(thunk as ThunkMiddleware<RootStore, AppActions>, logger)),
);
