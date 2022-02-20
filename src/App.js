import { Drawer } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import DrawerScreen from './custom/drawer/DrawerScreen';
import AddEmailScreen from './screens/addEmailId/AddEmailScreen';
import AddGroupScreen from './screens/addGroup/AddGroupSceen';
import Dashboard from './screens/dashboard/Dashboard';

import LoginScreen from './screens/Login/LoginScreen'
import SendEmailScreen from './screens/sendEmail/SendEmailScreen';
import SignupScreen from './screens/signup/SignupScreen';


const App = ()=>{
  return(
    <div>
      <Dashboard/>
      <Switch>
              <Route exact path='/' component={LoginScreen} />
              <Route exact path='/signup' component={SignupScreen} />
              <Route exact path='/addGroup' component={AddGroupScreen} />
              <Route exact path='/addEmail' component={AddEmailScreen} />
              <Route exact path='/sendEmail' component={SendEmailScreen} />
              <Route exact path='/drawer' component={DrawerScreen} />
              <Route exact path='/showGroup' component={DrawerScreen} />

   
          </Switch>
      </div>
  )
}

export default App;