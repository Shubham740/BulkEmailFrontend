import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LoginScreen from './screens/Login/LoginScreen'
import SignupScreen from './screens/signup/SignupScreen';


const App = ()=>{
  return(
    <div>
      <Switch>
              <Route exact path='/' component={LoginScreen} />
              <Route exact path='/signup' component={SignupScreen} />
          </Switch>
      </div>
  )
}

export default App;