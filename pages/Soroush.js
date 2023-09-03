import * as React from "react";
import Stepper from "../components/Stepper";
import Styles from "../styles/Home.module.css";
import { useSelector } from "react-redux";

export default function Soroush() {
  const { sendMessageType } = useSelector((state) => state.SendMessageReducer);

  return (
    <>
      {sendMessageType === "SMS" && (
        <div className={Styles.container}>
          <Stepper />
        </div>
      )}
    </>
  );
}
