import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tab, Tabs, Box, Checkbox, TextField } from "@mui/material";
import { FaPhoneSquareAlt, FaEnvelopeSquare } from "react-icons/fa";

import Styles from "../styles/Home.module.css";
import { ReactTable, Loading, TabPanel, TooltipButton } from "../components";
import { validateEmail, validateMobile } from "../utils/validation";
import { fetchData, postData } from "../utils/http";
import { actionTypes, apiUrl } from "../constants";
import { useDomainData } from "../hooks/useDomainData";

export const Step2 = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [data, setData] = useState([]);
  const { sendMessageType } = useSelector((state) => state.SendMessageReducer);
  const dispatch = useDispatch();
  const { domains, loading, fetchDomains } = useDomainData();

  useEffect(() => {
    fetchDomains();
  }, [fetchDomains]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  // ... Other functions and useEffects ...

  return (
    <>
      <div className={Styles.container}>
        <div className="crud_frm_card card">
          <Box borderBottom={1} borderColor="divider">
            <Tabs value={selectedTab} onChange={handleTabChange} aria-label="basic tabs example">
              {/* Tab labels here */}
            </Tabs>
          </Box>
          <TabPanel value={selectedTab} index={0}>
            {/* TabPanel content here */}
          </TabPanel>
          <TabPanel value={selectedTab} index={1}>
            {/* TabPanel content here */}
          </TabPanel>
        </div>
      </div>
    </>
  );
};

// Other smaller components 
