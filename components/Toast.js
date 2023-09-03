import * as React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert, { AlertProps } from "@mui/material/Alert";

export const Toast = ({ setOpen, open, message }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert onClose={handleClose} severity={message} sx={{ width: "100%" }}>
        {message === "success"
          ? "ارسال پيام با موفقيت انجام شد!"
          : message === "error"
          ? "ارسال پيام با خطا مواجه گرديد!"
          : message === "warning"
          ? "اخطار"
          : "سيستم موقتا در دسترس نميباشد"}
      </Alert>
    </Snackbar>
  );
};
