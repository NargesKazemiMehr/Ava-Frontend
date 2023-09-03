import { combineReducers } from "redux";

import userInfoReducer from "./userInfoReducer";
import sendMessageReducer from "./sendMessageReducer";

export default combineReducers({
  UserInfoReducer: userInfoReducer,
  SendMessageReducer: sendMessageReducer,
});
