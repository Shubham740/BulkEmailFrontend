import { Card } from '@material-ui/core';
import { useState } from 'react';
import CustomButton from '../../custom/button/CustomButton';
import CustomInput from '../../custom/input/CustomInput';
import CustomLogo from '../../custom/logo/CustomLogo';
import AuthService from '../../services/AuthService';
import STRINGS from '../../utils/Strings';
import { styles } from './LoginScreenStyles'


const LoginScreen = () => {

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    return (
        <div style={styles.container}>
            <Card style={styles.cardStyle}>
                <CustomLogo title={STRINGS.LOGIN} />
                <CustomInput
                    label={STRINGS.PLEASE_ENTER_EMAIL_ID}
                        value = {email}

                        onChange={(event)=>{
                            setEmail(event.target.value)
                    }}
               />
                <CustomInput
                    customStyle={{ marginTop: '30px' }}
                    label={STRINGS.PLEASE_ENTER_PASSWORD}
                    type={"password"}
                    value = {password}
                    onChange={(event)=>{
                            setPassword(event.target.value)
                    }}
                />
                <CustomButton title={STRINGS.LOGIN}
                    customStyle={styles.customButtonStyle}
                        onClick ={()=>{
                                const body = {email:'abc@mailinator.com', password:'user@123'}
                                AuthService.login(body).then(response=>{
                                    console.log("login Response=>>>", response)
                                })
}}
/>
            </Card>


        </div>
    )
}

export default LoginScreen;
