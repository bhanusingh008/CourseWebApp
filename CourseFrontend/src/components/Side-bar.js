import React from "react";
import Home from "./Home";
import { ListGroup, ListGroupItem} from "reactstrap";
import { Link } from "react-router-dom";
import ListItemButton from '@mui/material/ListItemButton';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const SideBar=()=>{
    return(
        <div>
        <Sidebar className="side-bar">
        <Menu
         menuItemStyles={{
         button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
         },
        }}
        >
        <MenuItem component={<Link to="/" />}>Home</MenuItem>
        <MenuItem component={<Link to="/add-course" />}> Add Course</MenuItem>
        <MenuItem component={<Link to="/view-courses" />}>View Course</MenuItem>
        <MenuItem component={<Link to="/about" />}>About</MenuItem>
        <MenuItem component={<Link to="/contact-me" />}>Contact Me</MenuItem>
        </Menu>
        </Sidebar>
        </div>
    )
}

export default SideBar;