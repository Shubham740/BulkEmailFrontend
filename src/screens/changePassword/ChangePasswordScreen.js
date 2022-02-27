import { Card } from "@material-ui/core";
import CustomButton from "../../custom/button/CustomButton";
import CustomInputDisabled from "../../custom/input-disabled/CustomInputDisabled";
import CustomInput from "../../custom/input/CustomInput";
import CustomLogo from "../../custom/logo/CustomLogo";

import styles from './ChangePasswordStyles'
const ChangePasswordScreen = () => {


    return (
        <div style={styles.container}>
            <Card style={styles.cardStyle}>
                <CustomLogo title={"Change Password"} />
                <CustomInputDisabled
                    variant="outlined"
                    label={"Email Id"}
                    value={"abc@gmail.com"}
                    disabled={true}
                />
                <CustomInput
                    label={"Please enter new Password"}
                    type={"password"}
                    onPaste={(e)=>{
                        e.preventDefault()
                        return false;
                      }} onCopy={(e)=>{
                        e.preventDefault()
                        return false;
                      }}
/>
                <CustomInput
                    label={"Please confirm new Password"}
                    type={"password"}
                    onPaste={(e)=>{
                        e.preventDefault()
                        return false;
                      }} onCopy={(e)=>{
                        e.preventDefault()
                        return false;
                      }}
                />
                <CustomButton title={"Apply"}
                    customStyle={styles.customButtonStyle}
                />

                <CustomButton title={"Cancel"}
                    customStyle={styles.customButtonStyle}
                    isSecondary={true}
                  
                />
            </Card>
        </div>
    )
}

export default ChangePasswordScreen;
