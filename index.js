import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import "./styles/Custom.css";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./state-management/store";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        {/* using redux */}
        <PersistGate loading={null} persistor={persistor}>
          {/* using redux */}
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
