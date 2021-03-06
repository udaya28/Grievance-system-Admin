import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import SchoolIcon from '@material-ui/icons/School';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const DrawerItems = ({setOpenDrawer}) => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [openDropDown, setOpenDropDown] = useState(true);
  const handelClick = (index) =>{
    setSelectedIndex(index);
    setOpenDrawer(false)
  }
  return (
    <div style={{ width: '240px' }}>
      <List>
        <Link to="/Grievance-system-Admin/">
          <ListItem
            button
            selected={selectedIndex === 0}
            onClick={() => handelClick(0)}
          >
            <ListItemIcon>
              <MoveToInboxIcon />
            </ListItemIcon>
            <ListItemText primary="Complaints" />
          </ListItem>
        </Link>

        <Link to="/Grievance-system-Admin/dashboard">
          <ListItem
            button
            selected={selectedIndex === 1}
            onClick={() => handelClick(1)}
          >
            <ListItemIcon>
              <AssessmentIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
        </Link>

        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={() => {
            // handelClick(2);
            setOpenDropDown(!openDropDown);
          }}
        >
          <ListItemIcon>
            <SchoolIcon />
          </ListItemIcon>
          <ListItemText primary="Student" />
          {openDropDown ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={openDropDown} timeout="auto" unmountOnExit>
          <List component="div" disablePadding style={{ paddingLeft: '32px' }}>
            <Link to="/Grievance-system-Admin/create-student">
              <ListItem
                button
                selected={selectedIndex === 3}
                onClick={() => handelClick(3)}
              >
                <ListItemIcon>
                  <GroupAddIcon />
                </ListItemIcon>
                <ListItemText primary="Create" />
              </ListItem>
            </Link>
            <Link to="/Grievance-system-Admin/update-student">
              <ListItem
                button
                selected={selectedIndex === 4}
                onClick={() => handelClick(4)}
              >
                <ListItemIcon>
                  <UpdateIcon />
                </ListItemIcon>
                <ListItemText primary="Update" />
              </ListItem>
            </Link>

            <Link to="/Grievance-system-Admin/delete-student">
              <ListItem
                button
                selected={selectedIndex === 5}
                onClick={() => handelClick(5)}
              >
                <ListItemIcon>
                  <DeleteForeverIcon />
                </ListItemIcon>
                <ListItemText primary="Delete" />
              </ListItem>
            </Link>
          </List>
        </Collapse>
        {/* <Link to="/Grievance-system-Admin/profile">
          <ListItem
            button
            selected={selectedIndex === 6}
            onClick={() => handelClick(6)}
          >
            <ListItemIcon>
              <AccountBoxIcon />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
        </Link> */}
      </List>
    </div>
  );
};

export default DrawerItems;
