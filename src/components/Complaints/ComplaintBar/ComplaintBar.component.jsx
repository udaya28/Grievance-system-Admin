import React, { useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import './ComplaintBar.styles.css';
import { IconButton, Toolbar } from '@material-ui/core';
import { fade, makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import InputBase from '@material-ui/core/InputBase';
import Grid from '@material-ui/core/Grid';
import SearchIcon from '@material-ui/icons/Search';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import { refreshComplaintsContext } from './../../../context/context';
const ComplaintBar = ({ setOpenFilter }) => {
  const refreshComplaints = useContext(refreshComplaintsContext);
  const useStyles = makeStyles((theme) => ({
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
    },

    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      width: '100%',
    },
  }));
  const classes = useStyles();
  return (
    <AppBar position="sticky" className="feed-bar">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={8} md={5}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                name="searchString"
                // value={searchString}
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                // onInput={handleInput}
                inputProps={{ 'aria-label': 'search' }}
              />
            </div>
          </Grid>
          <Grid item xs={4}>
            <div style={{ display: 'flex', direction: 'column',justifyContent:'flex-end' }}>
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
                style={{ marginLeft: '8px' }}
                className="filter-button"
              >
                <SortIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default ComplaintBar;
