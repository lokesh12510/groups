import React, { useEffect, useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearMessage } from "../redux/actions/Message.actions";

const Toast = ({ message, type, position = "bottom" }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    setOpen(true);
    setTimeout(() => {
      dispatch(clearMessage());
    }, 5000);
  }, [message, dispatch]);

  const [open, setOpen] = useState(true);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar
      open={open}
      autoHideDuration={60000}
      onClose={handleClose}
      anchorOrigin={{
        vertical: position,
        horizontal: "right",
      }}
      sx={{ bottom: { xs: 80, sm: 0 }, zIndex: 1201 }}
    >
      <Alert
        onClose={handleClose}
        severity={type}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Toast;
