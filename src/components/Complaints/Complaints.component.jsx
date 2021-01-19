import React from 'react';
import ComplaintBar from './ComplaintBar/ComplaintBar.component';
import FilterDrawer from './Drawer/Drawer.component';
import Feed from './Feed/Feed.component';
import './Complaints.styles.css';
import Grid from '@material-ui/core/Grid';
// import { makeStyles, useTheme } from '@material-ui/core/styles';

const Complaints = () => {
  // const classes = useStyles();
  return (
    <Grid container className="complaint-container">
      <Grid item className="feed-container">
        <Grid container direction="column">
          {/* <h1>hgfgjh</h1> */}
          <ComplaintBar />
          <Feed />
        </Grid>
        {/* <h1>Complaints</h1> */}
      </Grid>
      <Grid item>
        <FilterDrawer />
      </Grid>
    </Grid>
  );
};

export default Complaints;
