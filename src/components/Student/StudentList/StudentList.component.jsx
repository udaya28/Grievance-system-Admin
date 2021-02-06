import React, { useContext, useState, useEffect } from 'react';
import './StudentList.styles.css';
import {
  studentDetailsContext,
  refreshStudentDetailsContext,
} from './../../../context/context';
import getFilteredStudentDetails from './StudentAccordion/StudentFilter';
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

const StudentList = ({ buttonText,handelClickEvent }) => {
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
  const classes = useStyles();
  const studentDetails = useContext(studentDetailsContext);
  const refreshStudentDetails = useContext(refreshStudentDetailsContext);
  const [filteredData, setFilteredData] = useState([]);
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterData, setFilterData] = useState({
    searchString: '',
    departmentName: 'ALL',
    jointYear: 'ALL',
  });
  const { searchString, departmentName, jointYear } = filterData;
  useEffect(() => {
    setFilteredData(getFilteredStudentDetails(studentDetails,filterData));
    return () => {};
  }, [studentDetails,filterData]);
  const handleMenuClose = () => {
    setMenuOpen(false);
    setAnchorEl(null);
  };
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    setMenuOpen(true);
  };

  const handleInput = (event) => {
    setFilterData({ ...filterData, [event.target.name]: event.target.value });
  };
  return (
    <div container style={{ margin: '15px 0px' }}>
      <AppBar position="sticky" className="student-details-bar" size="">
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item xs={9} sm={4}>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  name="searchString"
                  value={searchString}
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                  onInput={handleInput}
                  inputProps={{ 'aria-label': 'search' }}
                />
              </div>
            </Grid>
            <Grid item xs={3} className="hide">
              <FormControl color="primary" className="form-component">
                <TextField
                  size="small"
                  color="primary"
                  select
                  label="Department"
                  variant="standard"
                  margin="none"
                  name="departmentName"
                  className="test"
                  value={departmentName}
                  onChange={handleInput}
                  style={{ textAlign: 'center' }}
                >
                  <MenuItem value="ALL">ALL</MenuItem>
                  <MenuItem value="CSE">CSE</MenuItem>
                  <MenuItem value="IT">IT</MenuItem>
                  <MenuItem value="ECE">ECE</MenuItem>
                  <MenuItem value="MEC">MEC</MenuItem>
                  <MenuItem value="EEE">EEE</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            <Grid item xs={3} className="hide">
              <FormControl color="primary" className="form-component">
                <TextField
                  size="small"
                  color="primary"
                  select
                  label="Academic Year"
                  variant="standard"
                  margin="none"
                  name="jointYear"
                  style={{ textAlign: 'center' }}
                  className="test"
                  value={jointYear}
                  onChange={handleInput}
                  // error={ValidationState && studentData.departmentName === ''}
                >
                  <MenuItem value="ALL">ALL</MenuItem>
                  <MenuItem value="2017">2017 - 2021</MenuItem>
                  <MenuItem value="2018">2018 - 2022</MenuItem>
                  <MenuItem value="2019">2019 - 2023</MenuItem>
                  <MenuItem value="2020">2020 - 2024</MenuItem>
                  <MenuItem value="2021">2021 - 2025</MenuItem>
                </TextField>
              </FormControl>
            </Grid>
            <Grid item xs={1} className="icon-hide">
              <IconButton onClick={handleClick}>
                <SortIcon style={{ color: 'white' }} />
              </IconButton>
              <Menu
                id="fade-menu"
                keepMounted
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={handleMenuClose}
                getContentAnchorEl={null}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ horizontal: 'center' }}
              >
                <MenuItem style={{ width: '150px' }}>
                  <FormControl color="primary" className="form-component">
                    <TextField
                      size="small"
                      color="primary"
                      select
                      label="Department"
                      variant="standard"
                      margin="none"
                      name="departmentName"
                      style={{ textAlign: 'center' }}
                      value={departmentName}
                      onChange={handleInput}
                    >
                      <MenuItem value="ALL">ALL</MenuItem>
                      <MenuItem value="CSE">CSE</MenuItem>
                      <MenuItem value="IT">IT</MenuItem>
                      <MenuItem value="ECE">ECE</MenuItem>
                      <MenuItem value="MEC">MEC</MenuItem>
                      <MenuItem value="EEE">EEE</MenuItem>
                    </TextField>
                  </FormControl>
                </MenuItem>
                <MenuItem>
                  <FormControl color="primary" className="form-component">
                    <TextField
                      size="small"
                      color="primary"
                      select
                      label="Academic Year"
                      variant="standard"
                      margin="none"
                      name="jointYear"
                      style={{ textAlign: 'center' }}
                      value={jointYear}
                      onChange={handleInput}
                    >
                      <MenuItem value="ALL">ALL</MenuItem>
                      <MenuItem value="2017">2017 - 2021</MenuItem>
                      <MenuItem value="2018">2018 - 2022</MenuItem>
                      <MenuItem value="2019">2019 - 2023</MenuItem>
                      <MenuItem value="2020">2020 - 2024</MenuItem>
                      <MenuItem value="2021">2021 - 2025</MenuItem>
                    </TextField>
                  </FormControl>
                </MenuItem>
              </Menu>
            </Grid>
            <Grid item xs={1}>
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
        <div>{
          filteredData.length === 0 && <p style={{margin:'20vh auto'}}>No match found</p>
          }
          {filteredData.length !== 0 && filteredData.map((data) => (
            <StudentAccordion
              data={data}
              key={data._id}
              buttonText={buttonText}
              handelClickEvent={handelClickEvent}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentList;
