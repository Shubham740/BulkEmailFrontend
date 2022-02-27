import { Input, TextField, InputProps } from "@material-ui/core";
import styles from "./CustomInputStyles";

const CustomInput = (props) => {
  return (
    <TextField
      variant="outlined"
      label={props.label}
      style={{ ...styles.textBox, ...props.customStyle }}
      type={props.type == undefined ? "email" : props.type}
      {...props}
      InputProps={{ classes: { underline: styles.underline } }}
    />
  );
};

export default CustomInput;
