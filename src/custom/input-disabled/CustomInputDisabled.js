import { TextField } from "@material-ui/core";
import styles from "./CustomInputDisabledStyles";

const CustomInputDisabled = (props) => {
  return (
    <div>
      <TextField
        label={props.label}
        style={{ ...styles.textBox, ...props.customStyle }}
        type={props.type == undefined ? "email" : props.type}
        {...props}
      />
    </div>
  );
};
export default CustomInputDisabled;
