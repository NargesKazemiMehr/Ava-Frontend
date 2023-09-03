import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { faAngleDown, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import SubMenu from "./subMenu";
import * as types from "../../state-management/actions/actionTypes";

const ListItem = ({ item, children }) => {
  const [childData, setChildData] = useState([]);
  const [faAngle, setFaAngle] = useState(false);
  const [openSubmenu, setOpenSubMenu] = useState(false);

  const dispatch = useDispatch();

  const showSubmenu = useSelector(
    (state) => state.UserInfoReducer?.showSubmenu
  );
  useEffect(() => {
    return setChildData(children);
  }, []);
  const handleliClick = (children) => {
    setFaAngle(!faAngle);
    dispatch({
      type: types.set_ShowSubMenu,
      payload: true,
    });
    setOpenSubMenu(!openSubmenu);
  };
  return (
    <>
      <li className=" menu-li-link" onClick={() => handleliClick(children)}>
        {item.operationFaName}
        {childData.length > 0 ? (
          <FontAwesomeIcon icon={faAngle ? faAngleDown : faAngleLeft} />
        ) : (
          false
        )}
      </li>
      <ul
        dir="rtl"
        className={
          showSubmenu && openSubmenu
            ? "border border-light w-100 ps-3 bg-opacity-50 collapse.show  d-block" //bg-light
            : "d-none"
        }
      >
        <SubMenu data={childData} />
      </ul>
    </>
  );
};

export default ListItem;
