import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware, { END } from "redux-saga";
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

// Import reducer/index.js as root reducer, it's where we're combining all our reducer files
import rootReducer from "../reducers";
import initialState from "./initialState";
import sagas from "../sagas";

// Configure Redux Store

export default () => {
  
  // Build the middleware for intercepting and dispatching navigation actions
  const sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware];
  let store;
  if (process.env.NODE_ENV === "development") {
    //Add redux-logger middleware
    if (typeof window !== "undefined" && window.document) {
      middleware.push(createLogger({ collapsed: true }));
    }
    store = createStore(
      rootReducer,
      initialState,
      composeWithDevTools(applyMiddleware(...middleware))
    );
  } else {
    // In production
    store = createStore(
      rootReducer,
      initialState,
      compose(applyMiddleware(...middleware))
    );
  }
  // Configure redux-saga
  store.runSaga = sagaMiddleware.run;
  store.runSaga(sagas);
  store.close = () => store.dispatch(END);

  return { store };
};
