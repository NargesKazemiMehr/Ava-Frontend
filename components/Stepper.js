import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import Steppers from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Styles from "../styles/Home.module.css";
import { Step1 } from "../pages/Step1";
import { Step2 } from "../pages/Step2";
import { Step3 } from "../pages/Step3";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../state-management/actions/actionTypes";
import SvgIcons from "../assets/img/SvgIcons2";

const steps = [
  "وارد كردن پيام",
  //   "تعيين روش ارسال پيام",
  "تعيين ليست كاربران",
  "ارسال پيام",
];

export default function Stepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const {
    sendMessageType,
    sendMessageMode,
    sendMessageTo_All,
    sendMessageTo_Mode,
    sendMessageTo_handi,
    sendMessageTo_fromFile,
    sendMessageDomain,
    hasError,
    alert,
    sendMessageBody,
    sendMessageSubject,
    step,
  } = useSelector((state) => state.SendMessageReducer);
  const dispatch = useDispatch();
  const isStepOptional = (step) => {
    return step === 10;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    if (!hasError) {
      let newSkipped = skipped;
      if (isStepSkipped(activeStep)) {
        newSkipped = new Set(newSkipped.values());
        newSkipped.delete(activeStep);
      }
      if (activeStep === steps.length - 2) {
      }
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
      setSkipped(newSkipped);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    ///start of reset states
    dispatch({
      type: types.sendMessage_To,
      payload: [],
    });
    dispatch({
      type: types.sendMessage_Domain,
      payload: [],
    });
    dispatch({
      type: types.sendMessage_Body,
      payload: "",
    });
    dispatch({
      type: types.sendMessage_Subject,
      payload: "",
    });
    dispatch({
      type: types.sendMessage_Mode,
      payload: "domain",
    });
    dispatch({
      type: types.sendMessage_To_All,
      payload: true,
    });
    dispatch({
      type: types.sendMessage_To_Handi,
      payload: [],
    });
    dispatch({
      type: types.sendMessage_To_FromeFile,
      payload: [],
    });
    dispatch({
      type: types.sendMessage_Attachment,
      payload: "",
    });
    dispatch({
      type: types.sendMessage_To_Mode,
      payload: "handi",
    });
    dispatch({
      type: types.set_Alert,
      payload: {},
    });

    dispatch({
      type: types.has_Error,
      payload: true,
    });

    ///end of reset states
  };
  const changeSteps = (activeStep) => {
    switch (activeStep + 1) {
      case 1:
        return <Step1 />;
      case 2:
        return <Step2 />;
      case 3:
        return <Step3 />;

      default:
    }
  };

  useEffect(() => {
    if (step === 1) {
      if (
        sendMessageType === "Email" &&
        sendMessageSubject?.length > 0 &&
        sendMessageBody?.blocks !== undefined &&
        sendMessageBody?.blocks[0]?.text?.length > 0
      ) {
        console.log("0");

        dispatch({
          type: types.has_Error,
          payload: false,
        });
      } else if (sendMessageType === "SMS" && sendMessageSubject?.length > 0) {
        console.log("00");

        dispatch({
          type: types.has_Error,
          payload: false,
        });
      }
    } else if (step === 2) {
      if (sendMessageMode === "domain" && sendMessageTo_All) {
        console.log("1");
        dispatch({
          type: types.has_Error,
          payload: false,
        });
      } else if (
        sendMessageMode === "add" &&
        sendMessageTo_Mode === "handi" &&
        sendMessageTo_handi.length > 0
      ) {
        console.log("2");

        dispatch({
          type: types.has_Error,
          payload: false,
        });
      } else if (
        sendMessageMode === "add" &&
        sendMessageTo_Mode === "file" &&
        sendMessageTo_fromFile.length > 0
      ) {
        console.log("3");

        dispatch({
          type: types.has_Error,
          payload: false,
        });
      } else if (
        sendMessageMode === "domain" &&
        !sendMessageTo_All &&
        sendMessageDomain.length > 0
      ) {
        console.log("4");

        dispatch({
          type: types.has_Error,
          payload: false,
        });
      } else {
        console.log("7");

        dispatch({
          type: types.has_Error,
          payload: true,
        });
      }
    } else if (step === 3) {
      if (alert.messageState === "success") {
        console.log("5");

        dispatch({
          type: types.has_Error,
          payload: false,
        });
      } else if (alert.messageState === "error") {
        console.log("6");

        dispatch({
          type: types.has_Error,
          payload: true,
        });
      }
    }
  }, [
    sendMessageType,
    sendMessageMode,
    sendMessageTo_Mode,
    sendMessageDomain,
    sendMessageTo_fromFile,
    sendMessageTo_handi,
    alert,
    sendMessageBody,
    sendMessageSubject,
    step,
  ]);
  return (
    <>
      <div className={`${Styles.container} MuiButtonBase-root`}>
        <Box sx={{ width: "100%" }}>
          <Steppers activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps = {};
              const labelProps = {};
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography component={"span"} variant="caption">
                    اختياري
                  </Typography>
                );
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false;
              }
              return (
                <Step key={label} {...stepProps}>
                  <StepLabel {...labelProps}>{label} </StepLabel>
                </Step>
              );
            })}
          </Steppers>
          {activeStep === steps.length ? (
            <React.Fragment>
              {alert.messageState === "success" ? (
                <Typography
                  component={"div"}
                  sx={{
                    mt: 10,
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "18px !important",
                    gap: 2,
                    alignItems: "center",
                    color: "#198754 !important",
                  }}
                >
                  <SvgIcons
                    name="Ok"
                    className=" justify-center"
                    //onClick={handleDelete(item.domainID)}
                  />
                  ارسال پيام با موفقيت انجام شد
                </Typography>
              ) : (
                <Typography
                  component={"div"}
                  sx={{
                    mt: 10,
                    display: "flex",
                    justifyContent: "center",
                    fontSize: "18px !important",
                    gap: 2,
                    alignItems: "center",
                    color: "#dc3545 !important",
                  }}
                >
                  <SvgIcons
                    name="Cancle"
                    className=" justify-center"
                    //onClick={handleDelete(item.domainID)}
                  />
                  ارسال پيام با خطا مواجه شد
                </Typography>
              )}
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Box sx={{ flex: "1 1 auto" }} />
                <Button onClick={handleReset}>
                  <SvgIcons
                    name="Cycle"
                    className=" justify-center"
                    //onClick={handleDelete(item.domainID)}
                  />
                  بازگشت به مرحله اول
                </Button>
              </Box>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Typography component={"span"} sx={{ mt: 2, mb: 1 }}>
                {changeSteps(activeStep)}
              </Typography>
              <Box sx={{ display: "flex", flexDirection: "row" }}>
                <Button
                  color="inherit"
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  sx={{ mr: 1 }}
                  className=""
                >
                  مرحله قبل{" "}
                  <SvgIcons
                    name="Right"
                    className=" justify-center "
                    //onClick={handleDelete(item.domainID)}
                  />
                </Button>
                <Box sx={{ flex: "1 1 auto" }} />
                {isStepOptional(activeStep) && (
                  <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                    لغو
                  </Button>
                )}

                <Button onClick={handleNext} disabled={hasError}>
                  <SvgIcons
                    name="Left"
                    className=" justify-center"
                    //onClick={handleDelete(item.domainID)}
                  />
                  {activeStep === steps.length - 1 ? "اتمام" : "مرحله بعد"}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Box>
      </div>
    </>
  );
}
