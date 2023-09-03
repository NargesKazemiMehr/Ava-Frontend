/* eslint-disable eqeqeq */
import React from "react";
import "./sidebar.css";
import { useSelector, useDispatch } from "react-redux";
import ListItem from "./listItem";
import * as types from "../../state-management/actions/actionTypes";
import onClickOutside from "react-onclickoutside";

function Sidebar() {
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
  if (document.URL.includes(".sec")) {
    data = [
      {
        operationId: 3588,
        operationFaName: "ارسال پيام",
        operationEnName: "Send Message",
        parentOperationId: 3588,
        menuAction: "/SendMessage",
        oId: null,
        sortOrderPriority: 1,
      },
      {
        operationId: 3590,
        operationFaName: "پيامك",
        operationEnName: "SMS",
        parentOperationId: 3588,
        menuAction: "/SMS",
        oId: null,
        sortOrderPriority: 1,
      },
      {
        operationId: 6311,
        operationFaName: "ايميل",
        operationEnName: "Email",
        parentOperationId: 3588,
        menuAction: "/Email",
        oId: null,
        sortOrderPriority: 2,
      },
      {
        operationId: 6846,
        operationFaName: "پيام رسان سروش",
        operationEnName: "Soroush",
        parentOperationId: 3588,
        menuAction: "/Soroush",
        oId: null,
        sortOrderPriority: 3,
      },
    ];
  } else {
    data = sidebarData || [];
  }

  const openSidebar = useSelector(
    (state) => state.UserInfoReducer?.openSidebar
  );

  const dispatch = useDispatch();

  return (
    <>
      {console.log("sidebarData", sidebarData)}
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
