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

const EmailSection = ({ sendMessageSubject, sendMessageAttachment }) => {
  // Email section JSX
  // ...
};

const SmsSection = ({ sendMessageSubject }) => {
  // SMS section JSX
  // ...
};

const MessageTable = ({ sendMessageMode, sendMessageTo, sendMessageDomain, sendMessageTo_All, columns, selected }) => {
  // Table JSX
  // ...
};

const useSendMessage = (apiKey, dispatch) => {
  const sendEmail = async (formData) => {
    // Email sending logic
  };

  const sendSms = async (formData) => {
    // SMS sending logic
  };

  return { sendEmail, sendSms };
};
  
const { sendEmail, sendSms } = useSendMessage(apiKey, dispatch);

  const handleDialog = async () => {
    setShowModal(false);
    try {
      const formData = createFormData(); // Create a separate function to handle form data creation
      if (sendMessageType === "Email") {
        await sendEmail(formData);
      } else {
        await sendSms(formData);
      }
      setAlert("success");
      // Dispatch success action
    } catch (error) {
      setAlert("error");
      // Dispatch error action
    } finally {
      setOpen(true);
    }
  };

  return (
    <>
      <div className={Styles.container}>
        {/* Modal and other components */}
        {sendMessageType === "Email" ? (
          <EmailSection sendMessageSubject={sendMessageSubject} sendMessageAttachment={sendMessageAttachment} />
        ) : (
          <SmsSection sendMessageSubject={sendMessageSubject} />
        )}
        <MessageTable
          sendMessageMode={sendMessageMode}
          sendMessageTo={sendMessageTo}
          sendMessageDomain={sendMessageDomain}
          sendMessageTo_All={sendMessageTo_All}
          columns={columns}
          selected={selected}
        />
        {/* Rest of the JSX */}
      </div>
    </>
  );
};
