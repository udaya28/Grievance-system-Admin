import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import './ComplaintBar.styles.css';
import { IconButton, Toolbar, Typography } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
const ComplaintBar = ({ setOpenFilter}) => {
 
  return (
    <AppBar position="sticky" className="feed-bar" >
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" noWrap>
          Complaints
        </Typography>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={()=>setOpenFilter(true)}
          className="filter-button"
        >
          <SortIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default ComplaintBar;
