import React, { useState } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
const DrawerItems = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div style={{width:'250px'}}>
      <List>
        <ListItem button selected={selectedIndex === 0} onClick={()=>setSelectedIndex(0)}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Complaints" />
        </ListItem>
        <ListItem button selected={selectedIndex === 1} onClick={()=>setSelectedIndex(1)}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Complaints" />
        </ListItem>
        <ListItem button selected={selectedIndex === 2} onClick={()=>setSelectedIndex(2)}>
          <ListItemIcon>
            <AssignmentIcon />
          </ListItemIcon>
          <ListItemText primary="Complaints" />
        </ListItem>
      </List>
    </div>
  );
};

export default DrawerItems;
