import React, { useEffect, useState } from "react";
import Styles from "../styles/Home.module.css";
import ReactTable from "../components/ReactTable";
import RadioGroup from "@mui/material/RadioGroup";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import Tooltip from "@material-ui/core/Tooltip";
import { FaPhoneSquareAlt, FaEnvelopeSquare } from "react-icons/fa";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  Box,
  Checkbox,
  InputAdornment,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Tab,
  Tabs,
  TextField,
} from "@mui/material";
import http from "../services/httpService";
import apiUrl from "../constants/api/APIUtils";
import * as types from "../state-management/actions/actionTypes";
import { Input } from "reactstrap";
import SvgIcons from "../assets/img/SvgIcons2";
import { Loading } from "../components/Loading";
import { TabPanel } from "../components/TabPanel";
import { Row } from "react-bootstrap";
import { ReactSkeleton, Skeleton } from "../components/ReactSkeleton";
import { Toast } from "../components/Toast";

let rowCountFromFile = 0;
let rowCountHandi = 0;

export const Step2 = () => {
  const [data, setData] = useState([]);
  const [domain, setDomain] = useState([
    // { domainId: 0, name: "All", desc: "همه" },
  ]);
  const [selected, setSelected] = useState();
  const [list, setList] = React.useState([]);
  const [listHandi, setListHandi] = React.useState([]);
  const [listFile, setListFile] = React.useState([]);
  const [mobile, setmobile] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [checked, setChecked] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [value, setValue] = React.useState(0);
  const [mode, setMode] = React.useState(0);

  const {
    sendMessageType,
    sendMessageMode,
    sendMessageTo,
    sendMessageTo_All,
    sendMessageTo_handi,
    sendMessageTo_fromFile,
    sendMessageDomain,
    sendMessageTo_Mode,
  } = useSelector((state) => state.SendMessageReducer);
  const dispatch = useDispatch();
  const { apiKey } = useSelector(
    (state) => state.UserInfoReducer,
    shallowEqual
  );
  const getAllData = () => {
    http
      .get(`${apiUrl.GetAllGateUser}`, {
        headers: { "X-Token": apiKey },
        params: { Mode: sendMessageType },
      })
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((e) => console.log("error getAllData", e));
  };

  const getData = () => {
    checked.length > 0 &&
      http
        .post(
          `${apiUrl.GetUserGate}`,
          checked.map(function (item) {
            return item["domainId"];
          }),
          {
            headers: { "X-Token": apiKey },
            params: { Mode: sendMessageType },
          }
        )
        .then((res) => {
          setData(res.data);
          setLoading(false);
        })
        .catch((e) => console.log("error getData", e.response));
  };

  const getDomains = () => {
    http
      .get(`${apiUrl.GetAllDomain}`, {
        headers: { "X-Token": apiKey },
      })
      .then((res) => {
        setDomain([...domain, ...res.data.domains]);
      })
      .catch((e) => console.log("error getDomains", e.response));
  };

  useEffect(() => {
    dispatch({
      type: types.sendMessage_To_FromeFile,
      payload: listFile,
    });
  }, [listFile]);

  useEffect(() => {
    if (sendMessageTo.length > 0) {
      setList(sendMessageTo);
    }
    if (sendMessageTo_handi.length > 0) {
      setListHandi(sendMessageTo_handi);
    }
    if (sendMessageTo_fromFile.length > 0) {
      setListFile(sendMessageTo_fromFile);
    }
    if (sendMessageDomain.length > 0) {
      setChecked(sendMessageDomain);
      getData();
      getDomains();
    } else {
      dispatch({
        type: types.sendMessage_To_All,
        payload: true,
      });
    }
    if (sendMessageMode === "domain") {
      setMode(0);
    } else setMode(1);
    if (sendMessageTo_Mode === "handi") {
      setValue(0);
    } else setValue(1);
  }, []);

  // React.useMemo(() => setData(TableData), []);

  const handleSendMessageToHandi = () => {
    if (
      sendMessageType === "SMS" &&
      !listHandi?.some((item) => item.mobile === mobile)
    ) {
      if (validateMobile(mobile)) {
        if (!listHandi?.some((item) => item.mobile === mobile)) {
          const newarray = {
            domainID: rowCountHandi++,
            email: "",
            firstName: "",
            gender: 1,
            lastName: "",
            mobile: mobile,
            nationalCode: "",
            sendToEmail: true,
            status: 1,
            tel: "",
            userId: rowCountHandi,
            userName: "",
          };
          setListHandi((prevState) => [...prevState, newarray]);

          setmobile("");
          setError("");
        } else {
          setError("موبايل تكراري است");
        }
      } else {
        setError("موبايل نادرست است");
      }
    } else if (sendMessageType === "Email") {
      if (validateEmail(email)) {
        if (!listHandi?.some((item) => item.email === email)) {
          const newarray = {
            domainID: rowCountHandi++,
            email: email,
            firstName: "",
            gender: 1,
            lastName: "",
            mobile: "",
            nationalCode: "",
            sendToEmail: true,
            status: 1,
            tel: "",
            userId: rowCountHandi,
            userName: "",
          };

          setListHandi((prevState) => [...prevState, newarray]);

          setEmail("");
          setError("");
        } else {
          setError("ايميل تكراري است");
        }
      } else {
        setError("ايميل نادرست است");
      }
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const validateMobile = (mobile) => {
    return String(mobile).match(
      /^(0|\+98)?([ ]|-|[()]){0,2}9[1|2|3|4]([ ]|-|[()]){0,2}(?:[0-9]([ ]|-|[()]){0,2}){8}$/
    );
  };
  const columns =
    sendMessageType === "Email"
      ? [

          {
            Header: "x",
            accessor: "userName",
            imgAccessor: "imgUrl",
            emailAccessor: "email",
            width: "80px",
          },
          {
            Header: "نام",
            accessor: "firstName",
            width: "100px",
          },
          {
            Header: "نام خانوادگي",
            accessor: "lastName",
            width: "150px",
          },
          sendMessageType === "Email" && {
            Header: "ايميل",
            accessor: "email",
            width: "150px",
          },
        ]
      : [
          
          {
            Header: "نام",
            accessor: "firstName",
            width: "100px",
          },
          {
            Header: "نام خانوادگي",
            accessor: "lastName",
            width: "150px",
          },
        ];
  const handleCheck = (e) => {
    dispatch({
      type: types.sendMessage_Mode,
      payload: e.target.value,
    });
  };

  const handleCheckboxDomain = (value, index1, e) => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];
  
    if (!newChecked.some((item) => item.name === value["name"])) {
      newChecked.push(value);
    } else {
      newChecked.splice(
        checked.findIndex((item) => item.name === value["name"]),
        1
      );
    }

    // if (!checked.some((item, index) => checked.indexOf(value) === index)) {
    setChecked(newChecked);
  };
  const handleCheckBoxAll = (e) => {
    dispatch({
      type: types.sendMessage_To_All,
      payload: e.target.checked,
    });
    setChecked([]);
    if (!e.target.checked) {
      getDomains();
      getAllData();
    } else {
      setDomain([]);
      setData([]);
    }
  };

  const handleChangeHandi = (e) => {
    if (sendMessageType === "SMS") {
      if (e.target.value.length < 12 && validateMobile(e.target.value)) {
        setmobile(e.target.value);
      } else setError("شماره وارد شده اشتباه است");
    } else {
      if (e.target.value.length >= 0 && validateEmail())
        setEmail(e.target.value);
      else setError("ايميل وارد شده اشتباه است");
    }
  };

  const handleDeleteHandi = (e) => {
    setListHandi(listHandi.filter((a) => a.domainID !== e));
  };
  const handleDeleteListFile = (e) => {
    setListFile(listFile.filter((a) => a.domainID !== e));
    rowCountHandi = listFile.length;
  };
  const handlePaste = (e) => {
    setError("");

    handleErase();
    navigator.clipboard
      .readText()
      .then((text) => {
        if (text !== "text") {
          
          var team = text.trim().replaceAll("\r", "").split("\n");

          if (
            sendMessageType === "Email" &&
            team.some((item, index) => yy.indexOf(item) === index)
          ) {
        

            team.filter((item, index) => yy.indexOf(item) === index).forEach(
              (item) => {
                const newarray = {
                  domainID: rowCountFromFile++,
                  email: item,
                  firstName: "",
                  gender: 1,
                  lastName: "",
                  mobile: "",
                  nationalCode: "",
                  sendToEmail: true,
                  status: 1,
                  tel: "",
                  userId: "",
                  userName: "",
                };
                setListFile((prevState) => [...prevState, newarray]);
              }
            );
          } else if (
            sendMessageType === "SMS" &&
            team.some((item, index) => yy.indexOf(item) === index)
          ) {
            team.filter((item, index) => yy.indexOf(item) === index).forEach(
              (item) => {
                const newarray = {
                  domainID: rowCountFromFile++,
                  email: "",
                  firstName: "",
                  gender: 1,
                  lastName: "",
                  mobile: item,
                  nationalCode: "",
                  sendToEmail: true,
                  status: 1,
                  tel: "",
                  userId: "",
                  userName: "",
                };
                setListFile((prevState) => [...prevState, newarray]);
              }
            );
          }
        } else setError("نادرست است");
      })
      .catch((err) => {
        console.error("Failed to read clipboard contents: ", err);
      });

  };
  const handleErase = (e) => {
    rowCountFromFile = 0;
    setListFile([]);
  };

  const handleChangeListFromFile = (e) => {
    if (e.target.value === "") {
      setListFile();
    }
  };
  const handlekeydownFromFile = (e) => {
    if (e.target.value.match(/\n/)) {
      console.log("sflsjk");
    }
  };
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const handleChangeHandiMode = (event, newValue) => {
    setValue(newValue);
    if (newValue === 0) {
      dispatch({
        type: types.sendMessage_To_Mode,
        payload: "handi",
      });
    } else {
      dispatch({
        type: types.sendMessage_To_Mode,
        payload: "file",
      });
    }
  };
  const handleChangeMode = (event, newValue) => {
    setMode(newValue);
    if (newValue === 0) {
      dispatch({
        type: types.sendMessage_Mode,
        payload: "domain",
      });
    } else {
      dispatch({
        type: types.sendMessage_Mode,
        payload: "add",
      });
    }
  };
  return (
    <>
      <div className={Styles.container}>
        <div className={` col-12 col-md-12 crud_frm_card card `}>
          <Box
            sx={{
              borderBottom: 1,
              borderColor: "divider",
            }}
          >
            <Tabs
              initialSelectedIndex={sendMessageMode === "domain" ? 0 : 1}
              value={mode}
              onChange={handleChangeMode}
              aria-label="basic tabs example"
              sx={{
                left: "1531.14px !important",
              }}
            >
              <Tab
                label="انتخاب بر اساس دامنه"
                {...a11yProps(0)}
                sx={{ fontSize: "15px !important" }}
              />
              <Tab
                label="افزودن مخاطبان بصورت دستي"
                {...a11yProps(1)}
                sx={{ fontSize: "15px !important" }}
              />
            </Tabs>
          </Box>
          <TabPanel value={mode} index={0}>
            <div className={` bg-white ${Styles.users}`}>
              <div style={{ flex: 1 }}>
                <List
                  dense
                  sx={{
                    width: "100%",
                    maxWidth: 360,
                    maxHeight: 472,
                    overflowX: "hidden",
                    bgcolor: "background.paper",
                    direction: "ltr",
                    position: "relative",
                  }}
                >
                  <ListItem
                    secondaryAction={
                      <Checkbox
                        edge="end"
                        onChange={(e) => handleCheckBoxAll(e)}
                        checked={sendMessageTo_All}
                        inputProps={{
                          "aria-labelledby": `checkbox-list-secondary-label-0`,
                        }}
                        // defaultChecked
                        disablePadding
                      />
                    }
                    sx={{
                      paddingRight: 0,
                    }}
                  >
                    <ListItemButton>
                      <ListItemText
                        id={`checkbox-list-secondary-label-0`}
                        primary="كليه پرسنل گروه و تابعه"
                        sx={{
                          textAlign: "right",
                        }}
                      />
                    </ListItemButton>
                  </ListItem>

                  {!sendMessageTo_All && loading ? (
                    <Loading />
                  ) : (
                    domain.map((value, index) => {
                      const labelId = `checkbox-list-secondary-label-${value.domainId}`;

                      return (
                        <ListItem
                          key={index}
                          secondaryAction={
                            <Checkbox
                              edge="end"
                              onChange={(e) =>
                                handleCheckboxDomain(value, index, e)
                              }
                              id={"domain" + value.domainId}
                              checked={
                                checked.findIndex(
                                  (item) => item.domainId === value.domainId
                                ) >= 0
                                // checked.indexOf(value) !== -1
                              }
                              inputProps={{ "aria-labelledby": labelId }}
                              defaultChecked={checked.indexOf(value) !== -1}
                            />
                          }
                          disablePadding
                        >
                          <ListItemButton>
                            <ListItemText
                              id={labelId}
                              primary={value.desc}
                              sx={{ textAlign: "right" }}
                            />
                          </ListItemButton>
                        </ListItem>
                      );
                    })
                  )}
                </List>
              </div>
              <div style={{ flex: 3 }} className="mr-2 ml-2 ">
                {!sendMessageTo_All && loading ? (
                  <ReactSkeleton />
                ) : domain.length > 0 && data.length > 0 ? (
                  <ReactTable
                    setRowSelection={checked.length > 0 ? true : false}
                    // enableRowSelection={checked.length > 0 ? true : false}
                    showPagination={true}
                    showCheckbox={checked.length > 0 ? true : false}
                    columns={columns}
                    data={data != null ? data : []}
                    totalCount={data.length}
                    getRowProps={(row) => {
                      if (typeof row !== "undefined") {
                        return {
                          onClick: (e, handleOriginal) => {
                            // setDisableLoginPass(false);
                            // setCurrentRow(row.original);
                            setSelected(row.index);
                            if (handleOriginal) {
                              handleOriginal();
                            }
                          },
                          style: {
                            background:
                              row.index === selected ? "#00afec" : "white",
                            color: row.index === selected ? "white" : "black",
                          },
                        };
                      }
                    }}
                  ></ReactTable>
                ) : !sendMessageTo_All && checked.length > 0 ? (
                  <div style={{ marginTop: "3rem" }}>
                   دامنه منتخب يافت نشد               </div>
                ) : (
                  <div style={{ marginTop: "3rem" }}>
           
                  </div>
                )}
              </div>
            </div>
          </TabPanel>
          <TabPanel value={mode} index={1}>
            <div className={Styles.users}>
              <Box
                sx={{
                  flexGrow: 1,
                  bgcolor: "background.paper",
                  display: "flex",
                  width: "100%",
                  height: "100%",
                }}
              >
                <Tabs
                  orientation="vertical"
                  value={value}
                  onChange={handleChangeHandiMode}
                  aria-label="Vertical tabs example"
                >
                  <Tab
                    label="درج دستي"
                    {...a11yProps(0)}
                    sx={{ fontSize: "13px !important" }}
                  />
                  <Tab
                    label="درج از فايل"
                    {...a11yProps(1)}
                    sx={{ fontSize: "13px !important" }}
                  />
                </Tabs>
                {console.log("درج شماره موبايل")}
                <TabPanel value={value} index={0}>
                  <div className={Styles.userList__richtext}>
                    <div
                      className="flex flex-col m-4 align-content-center gap-5"
                      style={{ width: "200px" }}
                    >
                      <TextField
                        error={error.lenght > 0 && true}
                        autoFocus
                        id="input-with-icon-textfield"
                        label={
                          sendMessageType === "SMS"
                            ? "درج شماره موبايل"
                            : "درج پست الكترونيكي"
                        }
                        helperText={
                          error
  
                        }
                        type={sendMessageType === "SMS" ? "number" : "text"}
                        sx={{ direction: "ltr", width: "100%" }}
                        value={sendMessageType === "SMS" ? mobile : email}
                        onChange={(e) => {
                          handleChangeHandi(e);
                        }}
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              {sendMessageType === "SMS" ? (
                                <FaPhoneSquareAlt />
                              ) : (
                                <FaEnvelopeSquare />
                              )}
                            </InputAdornment>
                          ),
                        }}
                        variant="standard"
                      />
                      <Tooltip
                        title="افزودن به لیست مخاطبین"
                        placement="bottom"
                      >
                        <button
                          className="btn d-flex align-middle btn-secondary  justify-content-center d-grid gap-1 "
                          style={{
                            height: "35px",
                            "align-items": "center",
                          }}
                          onClick={handleSendMessageToHandi}
                        >
                          <SvgIcons name="Add" className="mr-2 " />
                          افزودن به لیست
                        </button>
                      </Tooltip>
                    </div>
                    <div>
                      <div
                        className=" m-4 border border-muted text-left bg-light"
                        style={{
                          height: "229px",
                          overflowY: "auto",
                          overflowX: "hidden",
                          width: "500px",
                        }}
                      >
                        {listHandi.length > 0 &&
                          listHandi.map((item) => (
                            <div
                              className="row p-2 border-bottom"
                              style={{ "align-items": "center" }}
                            >
                              <div className="col-9">
                                {sendMessageType === "SMS"
                                  ? item.mobile
                                  : item.email}
                              </div>
                              <div className="col-2">
                                <Tooltip
                                  title="حذف از لیست مخاطبین"
                                  placement="bottom"
                                >
                                  <button
                                    onClick={(e) =>
                                      handleDeleteHandi(item.domainID)
                                    }
                                  >
                                    <SvgIcons
                                      name="Delete"
                                      className=" justify-center"
                                      //onClick={handleDelete(item.domainID)}
                                    />
                                  </button>
                                </Tooltip>
                              </div>
                            </div>
                          ))}
                      </div>
                      <Row style={{ display: "block", textAlign: "center" }}>
                        تعداد کل ردیف ها : <strong>{listHandi.length}</strong>
                      </Row>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                  <div className={Styles.userList__richtext}>
                    <div
                      className="flex flex-col m-4 align-content-center gap-5"
                      style={{}}
                    >
                      <Tooltip title="درج" placement="bottom">
                        <button
                          className="btn d-flex btn-secondary  justify-content-center  "
                          style={{
                            height: "35px",
                            width: "200px",
                            "align-items": "center",
                          }}
                          onClick={(e) => handlePaste(e)}
                        >
                          <SvgIcons name="Action" className="" />
                          درج
                        </button>
                      </Tooltip>
                      <Tooltip title="پاك كردن ليست" placement="bottom">
                        <button
                          className="btn d-flex btn-secondary  justify-content-center "
                          style={{
                            height: "35px",
                            width: "200px",
                            "align-items": "center",
                          }}
                          onClick={(e) => handleErase(e)}
                        >
                          <SvgIcons name="Erase" className="" />
                          پاك كردن
                        </button>
                      </Tooltip>
                    </div>
                    <div>
                      <div
                        className=" m-4 border border-muted text-left bg-light"
                        style={{
                          height: "229px",
                          overflowY: "auto",
                          overflowX: "hidden",
                          width: "500px",
                        }}
                      >
                        {listFile?.length > 0 &&
                          listFile.map((item) => (
                            <div
                              className="row p-2 border-bottom"
                              style={{ "align-items": "center" }}
                            >
                              <div className="col-9">
                                {sendMessageType === "SMS"
                                  ? item.mobile
                                  : item.email}
                              </div>
                              <div className="col-2">
                                <Tooltip
                                  title="حذف از لیست مخاطبین"
                                  placement="bottom"
                                >
                                  <button
                                    onClick={(e) =>
                                      handleDeleteListFile(item.domainID)
                                    }
                                  >
                                    <SvgIcons
                                      name="Delete"
                                      className=" justify-center"
                                      //onClick={handleDelete(item.domainID)}
                                    />
                                  </button>
                                </Tooltip>
                              </div>
                            </div>
                          ))}
                      </div>
                      <Row style={{ display: "block", textAlign: "center" }}>
                        تعداد کل ردیف ها : <strong>{listFile.length}</strong>
                      </Row>
                    </div>
                  </div>
                </TabPanel>
              </Box>
            </div>
          </TabPanel>
        </div>
      </div>
    </>
  );
};
