import React, { useEffect, useState } from "react";
import Styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../state-management/actions/actionTypes";
import { Dropzone } from "../components/Dropzone";
import { TextField } from "@material-ui/core";
import DraftEditor from "../components/Editor/DraftEditor";

export const Step1 = () => {
  const [characterCount, setCharacterCount] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const {
    sendMessageType,
    sendMessageBody,
    sendMessageSubject,
    alert,
    hasError,
    sendMessageAttachment,
  } = useSelector((state) => state.SendMessageReducer);
  const dispatch = useDispatch();

  const handleBodyChange = (e) => {
    dispatch({
      type: types.sendMessage_Body,
      payload: e,
    });
  };
  const handleSubjectChange = (e) => {
    dispatch({
      type: types.sendMessage_Subject,
      payload: e.target.value,
    });
  };
  useEffect(() => {
    dispatch({
      type: types.step,
      payload: 1,
    });
  }, []);
  const handleChangeSms = (e) => {
    setCharacterCount(e.target.value);
    if (characterCount.length > 69 && pageCount === 1) {
      setPageCount(pageCount + 1);
    } else if (characterCount.length > 132 && pageCount === 2) {
      setPageCount(pageCount + 1);
    } else if (characterCount.length > 198 && pageCount > 2) {
      setPageCount(pageCount + 1);
    }
    dispatch({
      type: types.sendMessage_Subject,
      payload: e.target.value,
    });
  };

  return (
    <>
      <div className={Styles.container}>
        <div className=" col-12 col-md-12 crud_frm_card card">
          {sendMessageType === "Email" && (
            <>
              <span className="mb-0"> موضوع </span>
              <TextField
                error={hasError}
                //helperText={hasError}
                autoFocus
                sx={{ direction: "ltr", height: "2.1876em" }}
                className="my-3 w-96 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500}}"
                id="outlined-basic"
                variant="outlined"
                value={sendMessageSubject}
                onChange={handleSubjectChange}
                size="small"
                required
              />
              <span className="mb-0"> متن ايميل </span>
              <div className={Styles.editor + ` my-3`}>
                <DraftEditor
                  handleBodyChange={handleBodyChange}
                  readOnly={false}
                />
                <Dropzone
                  maxLength={20}
                  multiple={true}
                  maxFiles={4}
                  // getUploadParams={getUploadParams}
                  // onChangeStatus={handleChangeStatus}
                  //  onSubmit={handleSubmit}
                  accept="image/*,audio/*,video/*"
                />
              </div>
            </>
          )}

          {sendMessageType === "SMS" && (
            <>
              <span>متن پيامك </span>

              <TextField
                error={hasError}
                //helperText={hasError}
                autoFocus
                sx={{ direction: "ltr" }}
                className="my-3  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500}}"
                id="outlined-basic"
                variant="outlined"
                multiline
                rows={10}
                value={sendMessageSubject}
                onChange={handleChangeSms}
                size="small"
                required
              />
              <span className="text-left">
                {console.log("characterCount?.length", characterCount?.length)}
                {characterCount?.length} /{pageCount}
              </span>
            </>
          )}
        </div>
      </div>
    </>
  );
};
