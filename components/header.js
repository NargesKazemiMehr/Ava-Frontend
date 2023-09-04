import logo from "../assets/img/logo.jpg";
import Avalogo from "../assets/img/AvaLogo-V02.jpg";

import * as types from "../state-management/actions/actionTypes";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { stubTrue } from "lodash";
import SvgIcons from "../assets/img/SvgIcons2";

const Header = () => {
  const userFullName = useSelector(
    (state) => state.UserInfoReducer?.userFullName
  );
  let userName = userFullName;

  const { openSidebar, currentUnitName } = useSelector(
    (state) => state.UserInfoReducer,
    shallowEqual
  );
  const dispatch = useDispatch();

  function openNav() {
    dispatch({
      type: types.set_OpenSidebar,
      payload: !openSidebar,
    });
  }
  return (
    <>
      <div className=" navbarcolor navbarheader headercontent flex-row ">
        {stubTrue && (
          <div className="humberger">
            <span
              style={{
                fontSize: "30px",
                cursor: "pointer",
              }}
            >
              <SvgIcons name="Menu" onClick={openNav} />
            </span>
          </div>
        )}
        <div>
          <img src={Avalogo} alt="logo" className="logoHeader"></img>
        </div>
        <div className="textholder">
          <div className="logotext">آوا</div>
          <div className="logosubtext">
            سامانه انتشار پيام {"-"} نگارش {process.env.REACT_APP_VERSION}
          </div>
        </div>

        <div className=" flex-row ">
          <div className="userData gap-3 flex-row align-center">
            <div className="flex-row al-center imageWrap">
              <SvgIcons name="User" className={"h-100"} />
              {/* <FaUserCircle className="mb-1" style={{ fontSize: "40px" }} /> */}
            </div>
            <div className="flex-row al-center">
              <div className="userName flex-col">
                <span style={{ textAlign: "right" }}>{userName}</span>
              </div>
            </div>
            <div>
              <img src={logo} alt="logo" className="logoHeader"></img>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
