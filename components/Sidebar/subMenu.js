import { Link } from "react-router-dom";
import "./sidebar.css";
import * as types from "../../state-management/actions/actionTypes";
import { useSelector, useDispatch } from "react-redux";
import React from "react";
import { Breadcrumb } from "react-bootstrap";

const SubMenu = ({ data }) => {
  const dispatch = useDispatch();

  const handleCloseNav = (e) => {
    dispatch({
      type: types.set_OpenSidebar,
      payload: false,
    });
    dispatch({
      type: types.sendMessage_Type,
      payload: e,
    });
    ///start of reset states
    dispatch({
      type: types.sendMessage_To,
      payload: [],
    });
    dispatch({
      type: types.sendMessage_Domain,
      payload: [],
    });
    dispatch({
      type: types.sendMessage_Body,
      payload: "",
    });
    dispatch({
      type: types.sendMessage_Subject,
      payload: "",
    });
    dispatch({
      type: types.sendMessage_Mode,
      payload: "domain",
    });
    dispatch({
      type: types.sendMessage_To_All,
      payload: true,
    });
    dispatch({
      type: types.sendMessage_To_Handi,
      payload: [],
    });
    dispatch({
      type: types.sendMessage_To_FromeFile,
      payload: [],
    });
    dispatch({
      type: types.sendMessage_Attachment,
      payload: "",
    });
    dispatch({
      type: types.sendMessage_To_Mode,
      payload: "handi",
    });
    dispatch({
      type: types.set_Alert,
      payload: {},
    });
    dispatch({
      type: types.has_Error,
      payload: true,
    });
    ///end of reset states
  };

  const sidebarData = useSelector(
    (state) => state.UserInfoReducer?.sidebarData
  );

  let alldata = sidebarData || [];

  return (
    <>
      {data.map((item, i) => {
        return item.actionName === "--" ? (
          <li key={i} className="dropdown-divider"></li>
        ) : alldata.some((c) => c.parentOperationId === item.operationId) &&
          item.actionName == "-" ? (
          true
        ) : (
          //    (
          //   <SubMenu2 key={item.actionName} item={item} />
          // )
          <li key={item.operationEnName}>
            <Link
              className=" submenu-li-link"
              to={item.operationEnName}
              onClick={() => handleCloseNav(item.operationEnName)}
            >
              {item.operationFaName}
            </Link>
          </li>
        );
      })}
    </>
  );
};

export default SubMenu;
