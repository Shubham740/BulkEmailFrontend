import { Snackbar } from "@material-ui/core";
import { useEffect, useState } from "react";
import MuiAlert from "@material-ui/lab/Alert";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const CustomSnackbar = ({ message }) => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        setOpen(false);
      }, 2000);
    }
  }, [open]);

  useEffect(() => {
    if (message.length > 0) {
      setOpen(true);
    }
  }, [message]);

  return (
    <Snackbar open={open} message={message}>
      <Alert severity="success">{message}</Alert>
    </Snackbar>
  );
};
export default CustomSnackbar;
