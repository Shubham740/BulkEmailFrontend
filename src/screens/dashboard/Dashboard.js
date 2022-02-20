import { AppBar, CssBaseline, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import DrawerScreen from '../../custom/drawer/DrawerScreen';
import styles from './DashboardStyles'
import MenuIcon from '@material-ui/icons/Menu';
import { useState } from 'react';

const Dashboard =()=>{

    const [isNavigatorOpen, setIsNavigatorOpen] = useState(false)

        return(<div >
           <AppBar position='static'>
               <div style={styles.parentView}>
               <CssBaseline/>
               <MenuIcon
               style={styles.logo}
                 onClick ={()=>{
                     console.log("menu icon clicked")
                    setIsNavigatorOpen(true)
                }}
               
               />
               <Typography variant="h4" style={styles.title}>
                Dashboard
                </Typography>
                <DrawerScreen
                    isNavigatorOpen ={isNavigatorOpen}
                    drawerCallback={(value)=>{
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
                   </div>
                   </div>
           </AppBar>
        </div>)

}

export default Dashboard;