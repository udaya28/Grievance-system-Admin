import React, { useContext, useState } from 'react';
import './StudentList.styles.css';
import {
  studentDetailsContext,
  refreshStudentDetailsContext,
} from './../../../context/context';
import StudentAccordion from './StudentAccordion/StudentAccordion.component';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import SortIcon from '@material-ui/icons/Sort';
import FormControl from '@material-ui/core/FormControl';

const StudentList = ({ buttonText, buttonColor }) => {
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
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      width: '16ch',
    },
  }));
  const studentDetails = useContext(studentDetailsContext);
  const refreshStudentDetails = useContext(refreshStudentDetailsContext);
  console.log(studentDetails);
  const classes = useStyles();
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const handleMenuClose = () => {
    setMenuOpen(false);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div container style={{ margin: '15px 0px' }}>
      <AppBar position="sticky" className="student-details-bar" size="">
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={4}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Grid>
            <Grid item xs={3}>
              <FormControl
                color="primary"
                className="form-component"
                style={{ color: 'white', width: '100%' }}
              >
                <TextField
                  size="small"
                  color="secondary"
                  select
                  label="Department"
                  variant="outlined"
                  name="departmentName"
                  // value={studentData.departmentName}
                  // onChange={handleInput}
                  // style={{ textAlign: 'left'}}
                  // error={ValidationState && studentData.departmentName === ''}
                >
                  <MenuItem value="CSE">CSE</MenuItem>
                  <MenuItem value="IT">IT</MenuItem>
                  <MenuItem value="ECE">ECE</MenuItem>
                  <MenuItem value="MEC">MEC</MenuItem>
                  <MenuItem value="EEE">EEE</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            <Grid item xs={3}>
              <FormControl
                color="primary"
                className="form-component"
                style={{ color: 'white', width: '100%' }}
              >
                <TextField
                  size="small"
                  color="secondary"
                  select
                  label="Department"
                  variant="standard"
                  name="departmentName"
                  // value={studentData.departmentName}
                  // onChange={handleInput}
                  // style={{ textAlign: 'left'}}
                  // error={ValidationState && studentData.departmentName === ''}
                >
                  <MenuItem value="CSE">CSE</MenuItem>
                  <MenuItem value="IT">IT</MenuItem>
                  <MenuItem value="ECE">ECE</MenuItem>
                  <MenuItem value="MEC">MEC</MenuItem>
                  <MenuItem value="EEE">EEE</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            {/* <Grid item xs={0}>
                  
            </Grid > */}
            <Grid item xs={2}>
              <IconButton onClick={handleClick}>
                <SortIcon style={{ color: 'white' }} />
              </IconButton>
              <Menu
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={menuOpen}
                onClose={handleMenuClose}
              >
                <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              </Menu>
              <IconButton onClick={() => refreshStudentDetails()}>
                <AutorenewIcon style={{ color: 'white' }} />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          style={{ padding: '10px 16px', width: 'auto' }}
        >
          <Grid item>
            <b className="mon">Roll.no</b>
          </Grid>
          <Grid item style={{ marginRight: '30px' }}>
            <b className="mon">Name</b>
          </Grid>
          <Grid item>
            <p> </p>
          </Grid>
        </Grid>
      </AppBar>

      <div>
        <div>
          {studentDetails.map((data) => (
            <StudentAccordion
              data={data}
              key={data._id}
              buttonText={buttonText}
              buttonColor={buttonColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentList;
