import React, { useState, useEffect } from "react";
import http from "../services/httpService";
import apiUrl from "../constants/api/APIUtils";
import Styles from "../styles/Home.module.css";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import ReactTable from "../components/ReactTable";
import { Label } from "reactstrap";
import { CRUDMode } from "../constants/CRUDMode";

import { TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Modal } from "../components/Modal";
import { Toast } from "../components/Toast";
import DraftEditor from "../components/Editor/DraftEditor";
import draftToHtml from "draftjs-to-html";
import * as types from "../state-management/actions/actionTypes";
import ProgressBar from "../components/Progressbar";

// import { BootstrapButton, ColorButton, Button } from "../components/Botton";

export const Step3 = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState();
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState("");
  const [progress, setProgress] = useState(0);

  const {
    sendMessageMode,
    sendMessageTo,
    sendMessageTo_All,
    sendMessageTo_handi,
    sendMessageTo_fromFile,
    sendMessageDomain,
    sendMessageSubject,
    sendMessageBody,
    sendMessageType,
    sendMessageAttachment,
    sendMessageTo_Mode,
  } = useSelector((state) => state.SendMessageReducer);
  const dispatch = useDispatch();
  const { apiKey } = useSelector(
    (state) => state.UserInfoReducer,
    shallowEqual
  );
  useEffect(() => {
    dispatch({
      type: types.step,
      payload: 3,
    });
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, [open]);

  const SendEmail = () => {
    setShowModal(false);

    let formData = new FormData();

    sendMessageMode === "domain" && sendMessageTo.length > 0
      ? sendMessageTo.map((x) => {
          return formData.append("To", x.email);
        })
      : (sendMessageTo.length = 0
          ? formData.append("To", 0)
          : sendMessageMode === "add" &&
            sendMessageTo_Mode === "handi" &&
            sendMessageTo_handi.length > 0
          ? sendMessageTo_handi.map((x) => {
              return formData.append("To", x.email);
            })
          : sendMessageMode === "add" &&
            sendMessageTo_Mode === "file" &&
            sendMessageTo_fromFile.length > 0 &&
            sendMessageTo_fromFile.map((x) => {
              return formData.append("To", x.email);
            }));
    sendMessageMode === "domain" && sendMessageDomain.length > 0
      ? sendMessageDomain.map((x) => {
          return formData.append("Domain", parseInt(x.domainId));
        })
      : formData.append("Domain", 0);

    formData.append("Subject", sendMessageSubject);
    formData.append(
      "Body",
      draftToHtml(
        sendMessageBody,
        {
          trigger: "#",
          separator: " ",
        },
        true
      )
    );
    sendMessageAttachment !== "" &&
      sendMessageAttachment?.map((x) => {
        formData.append("Attachments", x);
      });

    http
      .post(`${apiUrl.SendEmail}`, formData, {
        headers: { "X-Token": apiKey, "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("step3", res);
        setOpen(true);
        setAlert("success");
        dispatch({
          type: types.set_Alert,
          payload: { ...alert, messageState: "success" },
        });
      })
      .catch((err) => {
        console.log("error-Step3", err.response);
        setOpen(true);
        setAlert("error");
        dispatch({
          type: types.set_Alert,
          payload: { ...alert, messageState: "error" },
        });
      });
  };
  const SendSms = () => {
    setShowModal(false);
    let formData = new FormData();
    console.log(
      "sendMessageMode",
      sendMessageMode,
      "sendMessageTo",
      sendMessageTo.length,
      sendMessageTo_fromFile.length,
      sendMessageTo_handi.length
    );
    sendMessageMode === "domain" && sendMessageTo.length > 0
      ? sendMessageTo.map((x) => {
          return formData.append("To", x.userName);
        })
      : sendMessageMode === "domain" && sendMessageTo.length === 0
      ? formData.append("To", 0)
      : sendMessageMode === "add" &&
        sendMessageTo_Mode === "handi" &&
        sendMessageTo_handi.length > 0
      ? sendMessageTo_handi.map((x) => {
          return formData.append("To", x.mobile);
        })
      : sendMessageMode === "add" &&
        sendMessageTo_Mode === "file" &&
        sendMessageTo_fromFile.length > 0 &&
        sendMessageTo_fromFile.map((x) => {
          return formData.append("To", x.mobile);
        });
    sendMessageMode === "domain" && sendMessageDomain.length > 0
      ? sendMessageDomain.map((x) => {
          return formData.append("Domain", parseInt(x.domainId));
        })
      : formData.append("Domain", 0);

    formData.append("Body", sendMessageSubject);

    http
      .post(`${apiUrl.SendSms}`, formData, {
        headers: { "X-Token": apiKey, "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        console.log("step3", res);
        setOpen(true);
        setAlert("success");
        dispatch({
          type: types.set_Alert,
          payload: { ...alert, messageState: "success" },
        });
      })
      .catch((err) => {
        console.log("error-Step3", err.response);
        setOpen(true);
        setAlert("error");
        dispatch({
          type: types.set_Alert,
          payload: { ...alert, messageState: "error" },
        });
      });
  };

  let columns = [];
  if (sendMessageType === "SMS") {
    if (sendMessageMode === "add") {
      columns = [
        {
          Header: "موبايل",
          accessor: "mobile",
          width: "80px",
        },
      ];
    } else {
      columns = [
        {
          Header: "دامنه",
          accessor: "desc",
          width: "100px",
        },
        {
          Header: "شماره پرسنلي",
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
      ];
    }
  } else {
    columns = [
      {
        Header: "ايميل",
        accessor: "email",
        width: "150px",
      },
    ];
  }

  const handleCancel = () => {
    navigate("/");
  };
  const handleDialog = () => {
    sendMessageType === "Email" ? SendEmail() : SendSms();
  };
  useEffect(() => {
    dispatch({
      type: types.has_Error,
      payload: true,
    });
  }, []);
  return (
    <>
      <div className={Styles.container}>
        <div className=" col-12 col-md-12 crud_frm_card card ">
          {showModal && (
            <Modal
              setShowModal={setShowModal}
              crudMode={CRUDMode.dialog}
              handleDialog={handleDialog}
            >
              <span>آيا از ارسال پيام اطمينان داريد؟</span>
            </Modal>
          )}
          <div>
            <div className={Styles.users}>
              <div style={{ flex: 1 }} className="ml-5">
                {sendMessageType === "Email" ? (
                  <>
                    <div className="flex justify-center">
                      <Label
                        style={{
                          padding: "20px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        موضوع:{" "}
                      </Label>

                      <TextField
                        className="my-3 w-100  border border-gray-300 text-gray-900  rounded-sm focus:ring-blue-500 focus:border-blue-500 block  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500}}"
                        value={sendMessageSubject}
                        // style={{
                        //   fontSize: "1.1rem",
                        //   margin: "15px",
                        //   display: "inline",
                        // }}
                        disabled
                        size="small"
                        sx={{
                          "& .MuiInputBase-input.Mui-disabled": {
                            WebkitTextFillColor: "#6c686a",
                            fontSize: "16px",
                          },
                          backgroundColor: "white !important",
                          background:
                            "linear-gradient(rgba(198, 227, 246, 0.2),rgba(172, 207, 230, 0.5))",
                        }}
                      />
                    </div>
                    <div className="flex justify-center">
                      <Label
                        style={{
                          padding: "19px",
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        متن پيام:{" "}
                      </Label>
                      <DraftEditor
                        handleBodyChange={(e) => {}}
                        readOnly={true}
                      />
                    </div>
                  </>
                ) : sendMessageType === "SMS" ? (
                  <div className="flex justify-center">
                    <Label
                      style={{
                        padding: "22px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      متن پيام:{" "}
                    </Label>
                    <TextField
                      className="my-3 w-100  border border-gray-300 text-gray-900  rounded-sm focus:ring-blue-500 focus:border-blue-500 block  dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500}}"
                      value={sendMessageSubject}
                      // style={{
                      //   fontSize: "1.1rem",
                      //   margin: "15px",
                      //   display: "inline",
                      // }}
                      disabled
                      multiline
                      rows={10}
                      size="small"
                      sx={{
                        "& .MuiInputBase-input.Mui-disabled": {
                          WebkitTextFillColor: "#6c686a",
                          fontSize: "16px",
                        },

                        backgroundColor: "white !important",

                        // background:
                        //   "linear-gradient(rgba(198, 227, 246, 0.2),rgba(172, 207, 230, 0.5))",
                      }}
                    />
                  </div>
                ) : (
                  ""
                )}
                {sendMessageAttachment.length > 0 && (
                  <div className="flex justify-center">
                    <Label
                      style={{
                        padding: "22px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {" "}
                      ضمائم :
                    </Label>
                    <div
                      className="bg-white w-100 p-3 my-3"
                      style={{
                        border: "1px solid #c8ccd0",
                        maxHeight: "200px",
                        overflowY: "scroll",
                      }}
                    >
                      <ul dir="ltr">
                        {sendMessageAttachment &&
                          sendMessageAttachment?.map((file) => (
                            <li className="list-none" key={file.path}>
                              {file.path} -- {file.size} bytes
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
              <div style={{ flex: 1 }} className="mr-5 ">
                {sendMessageMode === "domain" && sendMessageTo.length > 0 ? (
                  <ReactTable
                    setRowSelection={false}
                    showPagination={true}
                    showCheckbox={false}
                    columns={columns}
                    data={sendMessageTo.map((d) => d)}
                    totalCount={sendMessageTo.length}
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
                ) : sendMessageMode === "domain" &&
                  sendMessageDomain.length > 0 ? (
                  <div>
                    ارسال پيام به كليه پرسنل{" "}
                    {sendMessageDomain.map((x) => x.desc + " , ")}
                  </div>
                ) : (
                  sendMessageMode === "domain" &&
                  sendMessageTo_All && (
                    <div>
                      ارسال پيام به كليه پرسنل اعم از گروه صنعتي و شركت هاي
                      تابعه
                    </div>
                  )
                )}
                {sendMessageMode === "add" &&
                  (sendMessageTo_fromFile.length > 0 ||
                    sendMessageTo_handi.length > 0) && (
                    <ReactTable
                      setRowSelection={false}
                      showPagination={true}
                      showCheckbox={false}
                      columns={columns}
                      data={
                        sendMessageTo_Mode === "handi" &&
                        sendMessageTo_handi.length > 0
                          ? sendMessageTo_handi.map((d) => d)
                          : sendMessageTo_Mode === "file" &&
                            sendMessageTo_fromFile.length > 0 &&
                            sendMessageTo_fromFile.map((d) => d)
                      }
                      totalCount={
                        sendMessageTo_Mode === "handi" &&
                        sendMessageTo_handi.length > 0
                          ? sendMessageTo_fromFile.length
                          : sendMessageTo_Mode === "file" &&
                            sendMessageTo_fromFile.length > 0 &&
                            sendMessageTo_handi.length
                      }
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
                  )}
              </div>
            </div>
            <div className="flex justify-center ">
              <Stack spacing={3} direction="row">
                <Button
                  variant="contained"
                  onClick={
                    () => setShowModal(true)
                    //() => (sendMessageType === "Email" ? SendEmail() : SendSms())
                  }
                  sx={{ m: 1 }}
                  disabled={
                    // sendMessageTo.length > 0 ||
                    // sendMessageTo_fromFile.length > 0 ||
                    // sendMessageTo_handi.length > 0 ||
                    // sendMessageTo_All
                    //   ? false
                    //   : true
                    false
                  }
                >
                  ارسال پيام
                </Button>
                {/* <Button variant="outlined" onClick={handleCancel}>
                لغو
              </Button> */}
              </Stack>
              <Toast open={open} setOpen={setOpen} message={alert} />
            </div>
          </div>
          {!showModal && open && <ProgressBar />}
        </div>
      </div>
    </>
  );
};
