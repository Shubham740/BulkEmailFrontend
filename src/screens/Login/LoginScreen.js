import { Card } from '@material-ui/core';
import { useEffect, useState } from 'react';
import CustomButton from '../../custom/button/CustomButton';
import CustomInput from '../../custom/input/CustomInput';
import CustomLogo from '../../custom/logo/CustomLogo';
import AuthService from '../../services/AuthService';
import STRINGS from '../../utils/Strings';
import { styles } from './LoginScreenStyles'
import COLORS from '../../utils/Colors';
import CustomLoader from '../../custom/loader/CustomLoader';
import { useHistory } from "react-router-dom";
import { isLogin } from '../../utils/Utils';

const LoginScreen = () => {
    const history = useHistory();

    useEffect(()=>{
        if(isLogin()){
            history.push('/dashboard')
       }
    },[])

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isLoading,setIsLoading] = useState(false)
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
               <div style={{position: 'absolute', marginLeft:'200px'}}>
            <CustomLoader  isLoading ={isLoading}/>

               </div>
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
                            setIsLoading(true)
                                const body = {email:'abc@mailinator.com', password:'user@123'}
                                AuthService.login(body).then(response=>{
                                    setIsLoading(false)
                                    console.log("login Response=>>>", response)
                                })
}}
/>
            </Card>


        </div>
    )
}

export default LoginScreen;
