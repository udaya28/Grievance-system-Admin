import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SortIcon from '@material-ui/icons/Sort';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import './FilterItems.styles.css'
// import Divider from '@material-ui/core/Divider';
const FilterItems = () => {
  return (
    <div >
      <List style={{maxHeight:"100vh", overflow: 'auto'}}>
        <ListItem
          button
          // selected={selectedIndex === 0}
          // onClick={() => handelClick(0)}
          
        >
          <ListItemIcon>
            <SortIcon />
          </ListItemIcon>
          <ListItemText primary="Filters" />
        </ListItem>
        <ListItem>
          <TextField
            select
            label="complaint"
            variant="filled"
            name="complaintType"
            className="filter-form-element"
            SelectProps={{
              MenuProps: {
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
              },
            }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Unseen">Unseen</MenuItem>
            <MenuItem value="Responded">Responded</MenuItem>
          </TextField>
        </ListItem>
        <ListItem>
          <TextField
            select
            label="complaint"
            variant="filled"
            name="complaintType"
            
            className="filter-form-element"
            SelectProps={{
              MenuProps: {
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
              },
            }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Unseen">Unseen</MenuItem>
            <MenuItem value="Responded">Responded</MenuItem>
          </TextField>
        </ListItem>
        <ListItem>
          <TextField
            select
            label="complaint"
            variant="filled"
            name="complaintType"
            
            className="filter-form-element"
            SelectProps={{
              MenuProps: {
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
              },
            }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Unseen">Unseen</MenuItem>
            <MenuItem value="Responded">Responded</MenuItem>
          </TextField>
        </ListItem>
        <ListItem>
          <TextField
            select
            label="complaint"
            variant="filled"
            name="complaintType"
            
            className="filter-form-element"
            SelectProps={{
              MenuProps: {
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
              },
            }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Unseen">Unseen</MenuItem>
            <MenuItem value="Responded">Responded</MenuItem>
          </TextField>
        </ListItem>
        <ListItem>
          <TextField
            select
            label="complaint"
            variant="filled"
            name="complaintType"
            
            className="filter-form-element"
            SelectProps={{
              MenuProps: {
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
              },
            }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Unseen">Unseen</MenuItem>
            <MenuItem value="Responded">Responded</MenuItem>
          </TextField>
        </ListItem>
        <ListItem>
          <TextField
            select
            label="complaint"
            variant="filled"
            name="complaintType"
            
            className="filter-form-element"
            SelectProps={{
              MenuProps: {
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
              },
            }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Unseen">Unseen</MenuItem>
            <MenuItem value="Responded">Responded</MenuItem>
          </TextField>
        </ListItem>
        <ListItem>
          <TextField
            select
            label="complaint"
            variant="filled"
            name="complaintType"
            
            className="filter-form-element"
            SelectProps={{
              MenuProps: {
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
              },
            }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Unseen">Unseen</MenuItem>
            <MenuItem value="Responded">Responded</MenuItem>
          </TextField>
        </ListItem>
        <ListItem>
          <TextField
            select
            label="complaint"
            variant="filled"
            name="complaintType"
            
            className="filter-form-element"
            SelectProps={{
              MenuProps: {
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
              },
            }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Unseen">Unseen</MenuItem>
            <MenuItem value="Responded">Responded</MenuItem>
          </TextField>
        </ListItem>
        <ListItem>
          <TextField
            select
            label="complaint"
            variant="filled"
            name="complaintType"
            
            className="filter-form-element"
            SelectProps={{
              MenuProps: {
                anchorOrigin: {
                  vertical: 'bottom',
                  horizontal: 'left',
                },
                getContentAnchorEl: null,
              },
            }}
          >
            <MenuItem value="All">All</MenuItem>
            <MenuItem value="Unseen">Unseen</MenuItem>
            <MenuItem value="Responded">Responded</MenuItem>
          </TextField>
        </ListItem>
      </List>
      {/* <Divider /> */}
    </div>
  );
};

export default FilterItems;
