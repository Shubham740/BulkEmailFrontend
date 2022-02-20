import React from 'react'
import { Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core"
import { useState } from "react";

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { Link } from 'react-router-dom';
import styles from './DrawerScreenStyles';


const DrawerScreen = (props) => {
    const [state, setState] = React.useState(props.isNavigatorOpen);

    const isDraweropen = () => {
        if (state == true || props.isNavigatorOpen == true) {
            return true;
        }
        else {
            return false;
        }
    }

    const closeDrawer = () => () => {
        console.log("drawer clicked")
        props.drawerCallback(false)
    };

    const list = () => (
        <div
            style={{ width: '400px' }}
            role="presentation"
        >
            <List>
                <ListItem button key={"Add Group"}
            
                    component={Link} to={"/addGroup"}
                    onClick={() => {
                        props.drawerCallback(false)
                    }}
                >
                    <ListItemIcon
                        
                    >{<GroupAddIcon />
                    }</ListItemIcon>
                    <ListItemText primary={'Add Group'} />
                </ListItem>

                <ListItem button key={"Add Email"}
                    component={Link} to={"/addEmail"}

                    onClick={() => {
                        props.drawerCallback(false)
                    }}
                >
                    <ListItemIcon>{<GroupAddIcon />
                    }</ListItemIcon>
                    <ListItemText primary={"Add Email"} />
                </ListItem>

                <ListItem button key={"Send Email"}
                 component={Link} to={"/sendEmail"}
                    onClick={() => {
                        props.drawerCallback(false)
                    }}>
                    <ListItemIcon>{<GroupAddIcon />
                    }</ListItemIcon>
                    <ListItemText primary={"Add Email"} />
                </ListItem>


            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div>
            <Drawer open={isDraweropen()} onClose={closeDrawer()}>
                {list("left")}
            </Drawer>
        </div>
    );
}

export default DrawerScreen;