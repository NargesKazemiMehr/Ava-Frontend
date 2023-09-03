import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Http from "../services/httpService";
import apiUrl from "../constants/api/APIUtils";
import * as types from "../state-management/actions/actionTypes";
import { useDispatch } from "react-redux";

export default function Validation() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const systemCode = process.env.React_APP_SYSTEMCODE;
  const userSessionId = searchParams.get("UserSessionId");
  const systemSessionId = searchParams.get("SystemSessionId");
  const token = searchParams.get("Token");
  const userunit = 214;
  // const { state, dispatch } = React.useContext(UserContext);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    if (userSessionId && systemSessionId) {
      Http.get(`${apiUrl.CheckValidation}`, {
        params: {
          softwareId: systemCode,
          userUnit: userunit,
          userSessionId: userSessionId,
          systemSessionId: systemSessionId,
        },
      })
        .then((response) => {
          //dispatch({ type: "SYSTEM_TOKEN", payload: res.data.token });
          //localStorage.setItem("token", JSON.stringify(res.data.token));
          dispatch({
            type: types.get_UserFullName,
            payload: response.data.fullName,
          });
          dispatch({
            type: types.get_CurrentUserName,
            payload: response.data.userName,
          });
          dispatch({
            type: types.get_CurrentUserId,
            payload: response.data.userId,
          });
          dispatch({
            type: types.get_ApiKey,
            payload: response.data.apiKey,
          });
          navigate("/main");
        })
        .catch((e) => console.log("error", e));
    } else {
      Http.get(`${apiUrl.GateLoad}/${token}`).then((res) => {
        console.log(res.data.message);
      });
    }
  }, []);
  return <></>;
}
