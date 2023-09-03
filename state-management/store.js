import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";
// import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./redusers/rootReducer";

const persistConfig = {
  key: "root",
  storage: storageSession,
  whitelist: ["UserInfoReducer"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer); // create a persisted reducer

const store = createStore(
  persistedReducer
  // composeWithDevTools(applyMiddleware(thunk))
);

const persistor = persistStore(store); // used to create the persisted store, persistor will be used in the next step

export { store, persistor };
