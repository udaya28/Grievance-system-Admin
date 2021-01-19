import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import './ComplaintBar.styles.css';
import { IconButton, Toolbar, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
const ComplaintBar = () => {
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
          // onClick={}
          // className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default ComplaintBar;
