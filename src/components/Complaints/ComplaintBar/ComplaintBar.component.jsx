import React,{useContext} from 'react';
import AppBar from '@material-ui/core/AppBar';
import './ComplaintBar.styles.css';
import { IconButton, Toolbar, Typography } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import {refreshComplaintsContext} from './../../../context/context'
const ComplaintBar = ({ setOpenFilter }) => {
  const refreshComplaints = useContext(refreshComplaintsContext);
  return (
    <AppBar position="sticky" className="feed-bar">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h6" noWrap>
          Complaints
        </Typography>
        <div style={{ display: 'flex',direction:'column' }}>
          <IconButton
          color="inherit"
          aria-label="refresh"
          edge="start"
          onClick={() => refreshComplaints()}
        >
          <AutorenewIcon />
        </IconButton>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={() => setOpenFilter(true)}
          style={{marginLeft:"8px"}}
          className="filter-button"
        >
          <SortIcon />
        </IconButton>
        </div>
        
      </Toolbar>
    </AppBar>
  );
};

export default ComplaintBar;
