import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as types from "../../state-management/actions/actionTypes";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleLeft } from "@fortawesome/free-solid-svg-icons";

const SubMenu2 = ({ item }) => {
  const [childData, setChildData] = useState([]);
  const [faAngle, setFaAngle] = useState(false);
  const [openSubmenu, setOpenSubMenu] = useState(false);

  const sidebarData = useSelector(
    (state) => state.UserInfoReducer?.sidebarData
  );
  const showSubmenu = useSelector(
    (state) => state.UserInfoReducer?.showSubmenu
  );
  const dispatch = useDispatch();
  const handleliClick = (item) => {
    let fliteredData = sidebarData.filter(
      (c) => c.parentOperationId === item.operationId
    );

    setChildData(fliteredData);
    setFaAngle(!faAngle);

    dispatch({
      type: types.set_ShowSubMenu,
      payload: true,
    });
    setOpenSubMenu(!openSubmenu);
  };

  const handleCloseNav = () => {
    dispatch({
      type: types.set_OpenSidebar,
      payload: false,
    });
  };
  return (
    <>
      <li className=" menu-li ">
        <Link className="menu-li-link " onClick={() => handleliClick(item)}>
          {item.operationFaName}
          <FontAwesomeIcon icon={faAngle ? faAngleDown : faAngleLeft} />)
        </Link>
      </li>
      <div
        dir="rtl"
        className={
          showSubmenu && openSubmenu ? "collapse.show d-block" : "d-none"
        }
      >
        <ul className=" ps-2 ">
          {childData.map((item, i) => {
            return item.actionName === "--" ? (
              <li key={item.operationEnName} className="dropdown-divider"></li>
            ) : (
              <li key={i}>
                <Link
                  className=" submenu-li-link ms-2"
                  to={item.operationEnName}
                  onClick={() => handleCloseNav()}
                >
                  {item.operationFaName}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default SubMenu2;
