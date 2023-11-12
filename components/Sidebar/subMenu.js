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
