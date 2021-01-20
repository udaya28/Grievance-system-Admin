import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SortIcon from '@material-ui/icons/Sort';
// import Divider from '@material-ui/core/Divider';
const FilterItems = () => {
  return (
    <div>
     
      <List>
        <ListItem
          button
          // selected={selectedIndex === 0}
          // onClick={() => handelClick(0)}
        >
          <ListItemIcon>
            <SortIcon/>
          </ListItemIcon>
          <ListItemText primary="Filters" />
        </ListItem>
      </List>
      {/* <Divider /> */}
    </div>
  );
};

export default FilterItems;
