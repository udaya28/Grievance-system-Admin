import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MoveToInboxIcon from '@material-ui/icons/MoveToInbox';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import SchoolIcon from '@material-ui/icons/School';
import AssessmentIcon from '@material-ui/icons/Assessment';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import UpdateIcon from '@material-ui/icons/Update';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
const DrawerItems = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [openDropDown, setOpenDropDown] = useState(true);
  return (
    <div style={{ width: '250px' }}>
      <List>
        <ListItem
          button
          selected={selectedIndex === 0}
          onClick={() => setSelectedIndex(0)}
        >
          <ListItemIcon>
            <MoveToInboxIcon />
          </ListItemIcon>
          <ListItemText primary="Complaints" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 1}
          onClick={() => setSelectedIndex(1)}
        >
          <ListItemIcon>
            <AssessmentIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem
          button
          selected={selectedIndex === 2}
          onClick={() => {
            setSelectedIndex(2);
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
            <ListItem
              button
              selected={selectedIndex === 3}
              onClick={() => setSelectedIndex(3)}
            >
              <ListItemIcon>
                <GroupAddIcon />
              </ListItemIcon>
              <ListItemText primary="Create" />
            </ListItem>
            <ListItem
              button
              selected={selectedIndex === 4}
              onClick={() => setSelectedIndex(4)}
            >
              <ListItemIcon>
                <UpdateIcon />
              </ListItemIcon>
              <ListItemText primary="Update" />
            </ListItem>
            <ListItem
              button
              selected={selectedIndex === 5}
              onClick={() => setSelectedIndex(5)}
            >
              <ListItemIcon>
                <DeleteForeverIcon />
              </ListItemIcon>
              <ListItemText primary="Delete" />
            </ListItem>
          </List>
        </Collapse>
        <ListItem
          button
          selected={selectedIndex === 6}
          onClick={() => setSelectedIndex(6)}
        >
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>
      </List>
    </div>
  );
};

export default DrawerItems;
