import React from 'react';
import './StudentList.styles.css';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const StudentList = () => {
  return (
    <Grid container style={{ margin: '15px 0px' }}>
      <AppBar position="sticky">
        <Toolbar>search</Toolbar>
      </AppBar>

      <Grid item>
        <h1>cklj</h1>
      </Grid>
    </Grid>
  );
};

export default StudentList;
