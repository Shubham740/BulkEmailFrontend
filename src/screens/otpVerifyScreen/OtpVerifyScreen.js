import { Card } from "@material-ui/core";
import CustomLogo from "../../custom/logo/CustomLogo";
import styles from "./OtpVerifyStyles";
import OtpInput from 'react-otp-input';
import { useState } from "react";
import CustomButton from "../../custom/button/CustomButton";

const OtpVerifyScreen = () => {

        const [otp,setOtp] = useState("");

        const handleChange = (otp) => setOtp(otp);

    return (
        <div style={styles.container}>
            <Card style={styles.cardStyle}>
                <CustomLogo title={"Otp Verify"} />
                <div style={styles.subView}>
                    <p style={styles.otpMessage}>Please enter the One-Time Password to verify the account </p>
                    <p style={styles.oneTimeMessage}>A One-Time Password has been sent to abc@gmail.com </p>

                    <OtpInput
                        value={otp}
                        onChange={handleChange}
                        numInputs={4}
                        separator={<span style={styles.seperatorStyle}></span>}
                        containerStyle={styles.containerStyle}
                        inputStyle={styles.containerInputStyle}
                    />
                    <CustomButton title={"Validate"}
                    customStyle={styles.customButtonStyle}
                    />
                    <p style={{...styles.otpMessage,marginTop:'18px'}}>Resend One-Time Password</p>
                    <p style={styles.oneTimeMessage}>Entered a wrong number?</p>

                </div>
            </Card>
        </div>
    )
}


export default OtpVerifyScreen;
