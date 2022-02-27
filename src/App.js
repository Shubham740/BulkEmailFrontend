import { Drawer } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import IMAGES from './assets/Images';
import DrawerScreen from './custom/drawer/DrawerScreen';
import PrivateRoutes from './routes/PrivateRoutes';
import AddEmailScreen from './screens/addEmailId/AddEmailScreen';
import AddGroupScreen from './screens/addGroup/AddGroupSceen';
import ChangePasswordScreen from './screens/changePassword/ChangePasswordScreen';
import Dashboard from './screens/dashboard/Dashboard';
import LoginScreen from './screens/Login/LoginScreen'
import OtpVerifyScreen from './screens/otpVerifyScreen/OtpVerifyScreen';
import SendEmailScreen from './screens/sendEmail/SendEmailScreen';
import ShowGroupScreen from './screens/showGroup/ShowGroupScreen';
import SignupScreen from './screens/signup/SignupScreen';
import styles from './styles'

const App = ()=>{
  return(
    <div style={styles.parentBackground}>
      <Dashboard/>
      <Switch>

              <Route exact path='/' component={LoginScreen} />
              <Route exact path='/signup' component={SignupScreen} />
              <Route exact path='/changePassword' component={ChangePasswordScreen} />
              <Route exact path='/otpVerify' component={OtpVerifyScreen} />
              <PrivateRoutes exact path='/addGroup' component={AddGroupScreen} />
              <PrivateRoutes exact path='/addEmail' component={AddEmailScreen} />
              <PrivateRoutes exact path='/sendEmail' component={SendEmailScreen} />
              <PrivateRoutes exact path='/showGroup' component={ShowGroupScreen} />
          </Switch>
      </div>
  )
}

export default App;