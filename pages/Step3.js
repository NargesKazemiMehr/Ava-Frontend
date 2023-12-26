import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import http from '../services/httpService';
import apiUrl from '../constants/api/APIUtils';
import Styles from '../styles/Home.module.css';
import ReactTable from '../components/ReactTable';
import { CRUDMode } from '../constants/CRUDMode';
import * as types from '../state-management/actions/actionTypes';
import { EmailSection, SmsSection, MessageTable, useSendMessage } from '../components'; // Assuming these are exported from components

export const Step3 = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    // ... all required states from Redux ...
  } = useSelector((state) => state.SendMessageReducer, shallowEqual);
  
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState(null);
  const [alert, setAlert] = useState('');
  const [open, setOpen] = useState(false);

  const { sendEmail, sendSms } = useSendMessage(apiKey, dispatch);

  // ... rest of the component logic, including handleDialog and createFormData ...

  return (
    <>
      <div className={Styles.container}>
        {/* Modal and other components */}
        {sendMessageType === 'Email' ? (
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
