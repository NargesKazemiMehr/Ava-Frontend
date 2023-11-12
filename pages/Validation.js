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
  const usid = searchParams.get("usid");
  const ssid = searchParams.get("ssid");

  // const { state, dispatch } = React.useContext(UserContext);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    if (userSessionId && systemSessionId) {
      Http.get(`${apiUrl.CheckValidation}`, {
        params: {
          softwareId: systemCode,
          userUnit: userunit,
          ssid: ssid,
          ssid: ssid,
        },
      })
        .then((response) => {
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
