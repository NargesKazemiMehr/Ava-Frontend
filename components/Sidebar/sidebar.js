/* eslint-disable eqeqeq */
import React from "react";
import "./sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "./listItem";
import * as types from "../../state-management/actions/actionTypes";
import onClickOutside from "react-onclickoutside";

function Sidebar() {
    const dispatch = useDispatch();
  const sidebarData = useSelector(
    (state) => state.UserInfoReducer?.sidebarData
  );
  const clickOutside = useSelector(
    (state) => state.UserInfoReducer?.clickOutside
  );
  Sidebar.handleClickOutside = () => {
    dispatch({
      type: types.set_OpenSidebar,
      payload: !clickOutside,
    });
  };
  let data = [];
    data = sidebarData || [];
  const openSidebar = useSelector(
    (state) => state.UserInfoReducer?.openSidebar
  );
  return (
    <>
      <div
        className="sidenav navbar-dark "
        style={openSidebar ? { width: "290px" } : { width: "0px" }}
      >
        <ul className="d-inline">
          {data?.length > 0 &&
            data?.map((item, index) => {
              let children = data
                .filter((x) => x.parentOperationId == item.operationId)
                .filter((c) => c.operationEnName != item.operationEnName);
              if (item.parentOperationId == item.operationId) {
                return (
                  <ListItem
                    key={item.operationId}
                    item={item}
                    children={children}
                  />
                );
              }
            })}
        </ul>
      </div>
    </>
  );
}

const clickOutsideConfig = {
  outsideClickIgnoreClass: "humberger",
  handleClickOutside: () => Sidebar.handleClickOutside,
};

export default onClickOutside(Sidebar, clickOutsideConfig);
