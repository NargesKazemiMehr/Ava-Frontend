import * as React from "react";
import Styles from "../styles/Home.module.css";

import http from "../services/httpService";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../state-management/actions/actionTypes";
import apiUrl from "../constants/api/APIUtils";

export default function Main() {
  const state = useSelector((state) => state.UserInfoReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    try {
      http
        .get(`${apiUrl.GetUserPermissions}`, {
          headers: { "X-Token": state.apiKey },
          params: { unitId: 1111 },
        })
        .then((userResponse) => {
          if (userResponse.status === 200) {
            dispatch({
              type: types.get_CurrentUnitName,
              payload: userResponse?.data[0]?.name,
            });
            dispatch({
              type: types.set_SidebarData,
              payload: userResponse?.data,
            });
            dispatch({
              type: types.get_CurrentUnit,
              payload: userResponse?.data[0]?.systemUnitId,
            });
          }
        });
    } catch (error) {
      console.log("Error", error);
    }
  }, []);

  return <div className={Styles.container}></div>;
}
