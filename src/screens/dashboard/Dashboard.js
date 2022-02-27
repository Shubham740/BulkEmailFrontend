import { AppBar, CssBaseline, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DrawerScreen from '../../custom/drawer/DrawerScreen';
import styles from './DashboardStyles'
import MenuIcon from '@material-ui/icons/Menu';
import { useEffect, useState } from 'react';
import IMAGES from '../../assets/Images';
import ExitToAppIcon from '@material-ui/icons/ExitToAppSharp';
import { logout } from '../../utils/Utils';
import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'


const Dashboard = () => {
  const history = useHistory();

  
  const [isNavigatorOpen, setIsNavigatorOpen] = useState(false)

  const emailId = useSelector(state => state.LoginReducer.email)
  
  useEffect(()=>{
      console.log("emailId=>>>",emailId)
  },[emailId])

  return (<div >
    
    <AppBar position='static'>
      <div style={styles.parentView}>
        <CssBaseline />
        <MenuIcon
          style={styles.logo}
          onClick={() => {
            console.log("menu icon clicked")
            setIsNavigatorOpen(true)
          }}
        />
        <img src={IMAGES.LOGO} style={styles.logoImage} />
        <Typography variant="h4" style={styles.title}>
          Dashboard
        </Typography>
        <DrawerScreen
          isNavigatorOpen={isNavigatorOpen}
          drawerCallback={(value) => {
            setIsNavigatorOpen(value)
          }}
        />
        <div style={styles.navlinks}>
          <Link to="/addGroup" style={styles.link}>
            Add Group
          </Link>
          <Link to="/addEmail" style={styles.link}>
            Add Email
          </Link>
          <Link to="/addGroup" style={styles.link}>
            Send Email
          </Link>
          <div style={styles.signOut}>
            <ExitToAppIcon
              style={{ fontSize: '30px' }}
              onClick={(event) => {
                logout();
                window.location.href = '/';
              }}
            />

          </div>

        </div>

      </div>
    </AppBar>
  </div>)

}

export default Dashboard;