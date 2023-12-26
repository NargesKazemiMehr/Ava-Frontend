import React, { useEffect, useState } from "react";
import Styles from "../styles/Home.module.css";
import { useDispatch, useSelector } from "react-redux";
import { sendMessageActions, stepAction } from "../state-management/actions";
import { Dropzone, DraftEditor, TextFieldCustom } from "../components";
import { MESSAGE_TYPES } from "../constants";

export const Step1 = () => {
  const [characterCount, setCharacterCount] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const sendMessageState = useSelector((state) => state.SendMessageReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(stepAction(1));
  }, [dispatch]);

  const handleSubjectChange = (event) => {
    dispatch(sendMessageActions.setSubject(event.target.value));
  };

  const handleSmsBodyChange = (event) => {
    const newCharacterCount = event.target.value;
    setCharacterCount(newCharacterCount);

    const length = newCharacterCount.length;
    if (length > 69 * pageCount) {
      setPageCount(pageCount + 1);
    }

    dispatch(sendMessageActions.setSubject(newCharacterCount));
  };

  const renderEmailInput = () => (
    <>
      <span className="mb-0"> موضوع </span>
      <TextFieldCustom
        value={sendMessageState.sendMessageSubject}
        onChange={handleSubjectChange}
        hasError={sendMessageState.hasError}
      />
      <span className="mb-0"> متن ايميل </span>
      <div className={`${Styles.editor} my-3`}>
        <DraftEditor handleBodyChange={handleSubjectChange} readOnly={false} />
        <Dropzone accept="image/*,audio/*,video/*" />
      </div>
    </>
  );

  const renderSmsInput = () => (
    <>
      <span>متن پيامك </span>
      <TextFieldCustom
        value={sendMessageState.sendMessageSubject}
        onChange={handleSmsBodyChange}
        hasError={sendMessageState.hasError}
        multiline
        rows={10}
      />
      <span className="text-left">
        {characterCount.length} / {pageCount}
      </span>
    </>
  );

  return (
    <div className={Styles.container}>
      <div className="col-12 col-md-12 crud_frm_card card">
        {sendMessageState.sendMessageType === MESSAGE_TYPES.EMAIL && renderEmailInput()}
        {sendMessageState.sendMessageType === MESSAGE_TYPES.SMS && renderSmsInput()}
      </div>
    </div>
  );
};
