import * as types from "../actions/actionTypes";

const initialState = {
  sidebarData: [],
  currentUnit: null,
  mainUnit: null,
  currentUnitName: null,
  userFullName: null,
  currentUserId: null,
  currentUserName: null,
  apiKey: null,
  refreshApp: false,
  showChangeUnit: false,
  environment: null,
  versionType: 1,
  actionType: 1,
  valueVersion: 1,
  openSidebar: false,
  clickOutside: true,
  loadingSidbar: true,
  softwareUsers: [],
  softwareUnits: [],
  reviewSoftwareIdentificationData: [],
  fromWindowsGate: true,
  actor: [],
  confirmer: [],
  pageSize: 10,
};

export default function UserInfoReducer(
  state = initialState,
  { payload, type }
) {
  switch (type) {
    case types.get_CurrentUnit:
      return {
        ...state,
        currentUnit: payload,
      };
    case types.set_ReviewSoftwareIdentificationData:
      return {
        ...state,
        reviewSoftwareIdentificationData: payload,
      };
    case types.get_MainUnit:
      return {
        ...state,
        mainUnit: payload,
      };
    case types.get_CurrentUnitName:
      return {
        ...state,
        currentUnitName: payload,
      };
    case types.get_Environment:
      return {
        ...state,
        environment: payload,
      };
    case types.set_ClickOutside:
      return {
        ...state,
        clickOutside: payload,
      };
    case types.get_SoftwareUsers:
      return {
        ...state,
        softwareUsers: payload,
      };
    case types.set_FromWindowsGate:
      return {
        ...state,
        fromWindowsGate: payload,
      };

    case types.get_SoftwareUnits:
      return {
        ...state,
        softwareUnits: payload,
      };
    case types.set_VersionType:
      return {
        ...state,
        versionType: payload,
      };

    case types.set_ValueVersion:
      return {
        ...state,
        valueVersion: payload,
      };
    case types.set_ActionType:
      return {
        ...state,
        actionType: payload,
      };
    case types.set_Actor:
      return {
        ...state,
        actor: payload,
      };
    case types.set_Confirmer:
      return {
        ...state,
        confirmer: payload,
      };
    case types.set_PageSize:
      return {
        ...state,
        pageSize: payload,
      };
    case types.set_OpenSidebar:
      return {
        ...state,
        openSidebar: payload,
      };

    case types.set_ShowSubMenu:
      return {
        ...state,
        showSubmenu: payload,
      };
    case types.get_UserFullName:
      return {
        ...state,
        userFullName: payload,
      };
    case types.get_CurrentUserId:
      return {
        ...state,
        currentUserId: payload,
      };
    case types.get_CurrentUserName:
      return {
        ...state,
        currentUserName: payload,
      };
    case types.set_SidebarData:
      return {
        ...state,
        sidebarData: payload,
      };
    case types.get_ApiKey:
      return {
        ...state,
        apiKey: payload,
      };
    case types.set_ShowChangeUnit:
      return {
        ...state,
        showChangeUnit: payload,
      };

    default:
      break;
  }
  return state;
}
