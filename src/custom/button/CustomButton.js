import { Button } from "@material-ui/core";
import styles from './CustomButtonStyles'

const CustomButton = (props) => {


    return (
        <Button
            style={props.isSecondary == undefined ? { ...styles.buttonPrimary, ...props.customStyle } : { ...styles.buttonSecondary, ...props.customStyle }}
            {...props}
        >
            {props.title}
        </Button>
    )

}

export default CustomButton;
