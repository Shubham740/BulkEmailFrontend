import { Input, TextField } from "@material-ui/core"
import styles from "./CustomInputStyles";


const CustomInput = (props) => {

    return (
        <TextField
            label={props.label}
            style={{...styles.textBox,...props.customStyle}}
            type={props.type == undefined ? 'email' : props.type}
            {...props}

        />
    )
}

export default CustomInput;
