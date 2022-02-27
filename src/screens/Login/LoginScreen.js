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
import { useDispatch } from 'react-redux'
import { setEmailId } from '../../redux/actions/LoginAction';
import CustomSnackbar from '../../custom/snackbar/CustomSnackbar';

const LoginScreen = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [isLoading,setIsLoading] = useState(false)
    const [message, setMessage] = useState("")

    useEffect(()=>{
        if(isLogin()){
            history.push('/dashboard')
       }
    },[])


    const callLoginApi =()=>{
        setIsLoading(true)
        const body = {email:'abc@mailinator.com', password:'user@123'}
        AuthService.login(body).then(response=>{
            setIsLoading(false)
            setMessage("Login Successfully")
            setTimeout(()=>{
                dispatch(setEmailId("abc@mailinator.com"))
                console.log("response=>>",response)
                history.push('/dashboard')
            },2000)
        })
    }

    
   
    return (
        <div style={styles.container}>
            <CustomSnackbar message={message} />
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
                    callLoginApi()                            
}}
/>
            </Card>


        </div>
    )
}

export default LoginScreen;
