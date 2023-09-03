import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {};

function reducer(state, { type, payload }) {
  switch (type) {
    case "USER_FULLNAME":
      return {
        ...state,
        userFullName: payload,
      };
    case "USER_NAME":
      return {
        ...state,
        userName: payload,
      };
    case "USER_ID":
      return {
        ...state,
        userId: payload,
      };
    case "API_KEY":
      return {
        ...state,
        apiKey: payload,
      };

    default:
      return state;
  }
}
export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
