import React from 'react';
import ComplaintBar from './ComplaintBar/ComplaintBar.component';
import FilterDrawer from './Drawer/Drawer.component';
import Feed from './Feed/Feed.component';
import './Complaints.styles.css';
// import { makeStyles, useTheme } from '@material-ui/core/styles';

const Complaints = () => {
  // const classes = useStyles();
  return (
    <div className="complaint-container">
      <div>
        <h1>Complaints</h1>
        <ComplaintBar />
        <Feed />
        
      </div>
      <div>
        <FilterDrawer />
      </div>
    </div>
  );
};

export default Complaints;
