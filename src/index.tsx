import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducer from "./modules";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import Loading from "./components/etc/Loading";
import createBrowserHistory from "history/createBrowserHistory";

export const history = createBrowserHistory();

const persistConfigure = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfigure, reducer);
const store = createStore(persistedReducer, applyMiddleware(logger, thunk));
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
