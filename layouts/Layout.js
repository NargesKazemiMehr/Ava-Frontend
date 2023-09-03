import React from "react";
import { Routes, Route } from "react-router-dom";
import Validation from "../pages/Validation";
import SMS from "../pages/SMS";
import Email from "../pages/Email";
import Soroush from "../pages/Soroush";
import { useSelector } from "react-redux";
import Header from "../components/header";
import Sidebar from "../components/Sidebar/sidebar";
import Main from "../pages/Main";
import { ReactBreadcrumb } from "../components/ReactBreadcrumb";

export default function Layout() {
  const { sendMessageType } = useSelector((state) => state.SendMessageReducer);
  const sidebarData = useSelector(
    (state) => state.UserInfoReducer?.sidebarData
  );
  return (
    <>
      <Header />
      <Sidebar data={sidebarData} />

      <ReactBreadcrumb pro={sendMessageType} />

      <Routes>
        <Route index element={<Main />} />
        <Route path="/Main" element={<Main />} />
        <Route path="/validation" element={<Validation />} />
        <Route path="/SMS" element={<SMS />} />
        <Route path="/Email" element={<Email />} />
        <Route path="/Soroush" element={<Soroush />} />
      </Routes>
    </>
  );
}
