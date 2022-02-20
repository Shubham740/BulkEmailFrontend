import React from 'react'
import { Button, Divider, Drawer, IconButton, List, ListItem, ListItemIcon, ListItemText, makeStyles } from "@material-ui/core"
import { useState } from "react";

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { Link } from 'react-router-dom';
import styles from './DrawerScreenStyles';
import COLORS from '../../utils/Colors';


const DrawerScreen = (props) => {
    const [state, setState] = React.useState(props.isNavigatorOpen);
    const [selectedIndex, setSelectedIndex] = useState(-1)
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
                    selected={selectedIndex === 0}
                    component={Link} to={"/addGroup"}
                    onClick={() => {
                        setSelectedIndex(0)
                        props.drawerCallback(false)
                    }}
                >
                    <ListItemIcon

                    >{<GroupAddIcon
                        style={selectedIndex == 0 ? { color: COLORS.PRIMARY } : { color: COLORS.GREY }}
                    />
                        }</ListItemIcon>
                    <ListItemText primary={'Add Group'} style={selectedIndex == 0 ? { color: COLORS.PRIMARY } : { color: COLORS.GREY }} />
                </ListItem>

                <ListItem button key={"Add Email"}
                    component={Link} to={"/addEmail"}

                    onClick={() => {
                        setSelectedIndex(1)
                        props.drawerCallback(false)
                    }}
                >
                    <ListItemIcon style={selectedIndex == 1 ? { color: COLORS.PRIMARY } : { color: COLORS.GREY }}>{<GroupAddIcon />
                    }</ListItemIcon>
                    <ListItemText primary={"Add Email"} style={selectedIndex == 1 ? { color: COLORS.PRIMARY } : { color: COLORS.GREY }} />
                </ListItem>

                <ListItem button key={"Send Email"}
                    component={Link} to={"/sendEmail"}
                    onClick={() => {
                        setSelectedIndex(2);
                        props.drawerCallback(false)
                    }}>
                    <ListItemIcon style={selectedIndex == 2 ? { color: COLORS.PRIMARY } : { color: COLORS.GREY }}>{<GroupAddIcon />
                    }</ListItemIcon>
                    <ListItemText primary={"Send Email"} style={selectedIndex == 2 ? { color: COLORS.PRIMARY } : { color: COLORS.GREY }} />
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