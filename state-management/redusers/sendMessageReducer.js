import {
  sendMessage_Type,
  sendMessage_To,
  sendMessage_Domain,
  sendMessage_Body,
  sendMessage_Subject,
  sendMessage_Mode,
  sendMessage_To_All,
  sendMessage_To_Handi,
  sendMessage_To_FromeFile,
  sendMessage_Attachment,
  sendMessage_To_Mode,
  set_Alert,
  has_Error,
  step,
} from "../actions/actionTypes";

const initialstate = {
  sendMessageType: "", //"Email","SMS"
  sendMessageTo: [],
  sendMessageTo_handi: [],
  sendMessageTo_fromFile: [],
  sendMessageTo_All: true,
  sendMessageDomain: [],
  sendMessageBody: "",
  sendMessageSubject: "",
  sendMessageMode: "domain", //"domain","add"
  sendMessageAttachment: "",
  sendMessageTo_Mode: "handi", //"handi","file"
  step: 0,
  alert: {
    subject: null,
    messageBody: null,
    attachment: null,
    clipboard: null,
    textField: null,
    mobileNumber: null,
    messageState: null,
  },
  hasError: true,
};
export default function sendMessageReducer(
  state = initialstate,
  { payload, type }
) {
  switch (type) {
    case sendMessage_Type:
      return {
        ...state,
        sendMessageType: payload,
      };
    case sendMessage_To:
      return {
        ...state,
        sendMessageTo: payload,
      };
    case sendMessage_To_All:
      return {
        ...state,
        sendMessageTo_All: payload,
      };
    case sendMessage_To_Handi:
      // let v = state.sendMessageTo_handi;

      return {
        ...state,
        //sendMessageTo_handi: [...v, ...payload],
        sendMessageTo_handi: payload,
      };
    case sendMessage_To_FromeFile:
      return {
        ...state,
        sendMessageTo_fromFile: payload,
      };
    case sendMessage_Domain:
      return {
        ...state,
        sendMessageDomain: payload,
      };
    case sendMessage_Body:
      return {
        ...state,
        sendMessageBody: payload,
      };
    case sendMessage_Subject:
      return {
        ...state,
        sendMessageSubject: payload,
      };
    case sendMessage_Mode:
      return {
        ...state,
        sendMessageMode: payload,
      };
    case sendMessage_Attachment:
      return {
        ...state,
        sendMessageAttachment: payload,
      };
    case sendMessage_To_Mode:
      return {
        ...state,
        sendMessageTo_Mode: payload,
      };
    case set_Alert:
      return {
        ...state,
        alert: payload,
      };
    case has_Error:
      return {
        ...state,
        hasError: payload,
      };
    case step:
      return {
        ...state,
        step: payload,
      };
    default:
      return state;
  }
}
