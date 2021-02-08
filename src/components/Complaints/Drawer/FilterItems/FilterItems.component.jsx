import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SortIcon from '@material-ui/icons/Sort';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

import './FilterItems.styles.css';
// import Divider from '@material-ui/core/Divider';
const FilterItems = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <List style={{ maxHeight: '100vh', overflow: 'auto' }}>
        <ListItem button>
          <ListItemIcon>
            <SortIcon />
          </ListItemIcon>
          <ListItemText primary="Filters" />
        </ListItem>
        <ListItem>
          <TextField
            select
            label="Complaint"
            variant="filled"
            name="status"
            className="filter-form-element"
            size="small"
            value={filters.status}
            onChange={handleChange}
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
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="unseen">Unseen</MenuItem>
            <MenuItem value="replayed">Responded</MenuItem>
          </TextField>
        </ListItem>
        <ListItem>
          <TextField
            select
            label="Category"
            variant="filled"
            name="category"
            size="small"
            className="filter-form-element"
            value={filters.category}
            onChange={handleChange}
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
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="hostel">Hostel</MenuItem>
            <MenuItem value="college">College</MenuItem>
          </TextField>
        </ListItem>
        <ListItem>
          <TextField
            select
            label="Department"
            variant="filled"
            name="departmentName"
            size="small"
            className="filter-form-element"
            value={filters.departmentName}
            onChange={handleChange}
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
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="CSE">CSE</MenuItem>
            <MenuItem value="IT">IT</MenuItem>
            <MenuItem value="ECE">ECE</MenuItem>
            <MenuItem value="MEC">MEC</MenuItem>
            <MenuItem value="EEE">EEE</MenuItem>
          </TextField>
        </ListItem>
        <ListItem>
          <TextField
            select
            label="Academic Year"
            variant="filled"
            name="jointYear"
            size="small"
            className="filter-form-element"
            value={filters.jointYear}
            onChange={handleChange}
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
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="2017">2017 - 2021</MenuItem>
            <MenuItem value="2018">2018 - 2022</MenuItem>
            <MenuItem value="2019">2019 - 2023</MenuItem>
            <MenuItem value="2020">2020 - 2024</MenuItem>
            <MenuItem value="2021">2021 - 2025</MenuItem>
          </TextField>
        </ListItem>
        <ListItem>
          <TextField
            select
            label="Year"
            variant="filled"
            name="year"
            size="small"
            className="filter-form-element"
            value={filters.year}
            onChange={handleChange}
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
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="2020">2020</MenuItem>
            <MenuItem value="2021">2021</MenuItem>
          </TextField>
        </ListItem>
        <ListItem>
          <TextField
            select
            label="Month"
            variant="filled"
            name="month"
            size="small"
            className="filter-form-element"
            value={filters.month}
            onChange={handleChange}
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
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="Jan">January</MenuItem>
            <MenuItem value="Feb">February</MenuItem>
            <MenuItem value="Mar">March</MenuItem>
            <MenuItem value="Apr">April</MenuItem>
            <MenuItem value="May">May</MenuItem>
            <MenuItem value="Jun">June</MenuItem>
            <MenuItem value="Jul">July</MenuItem>
            <MenuItem value="Aug">August</MenuItem>
            <MenuItem value="Sep">September</MenuItem>
            <MenuItem value="Oct">October</MenuItem>
            <MenuItem value="Nov">November</MenuItem>
            <MenuItem value="Dec">December</MenuItem>
          </TextField>
        </ListItem>
        <ListItem>
          <TextField
            select
            label="Gender"
            variant="filled"
            name="gender"
            size="small"
            className="filter-form-element"
            value={filters.gender}
            onChange={handleChange}
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
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
          </TextField>
        </ListItem>
        <ListItem>
          <div style={{ height: '80px', width: '100%' }}></div>
        </ListItem>
      </List>
      {/* <Divider /> */}
    </div>
  );
};

export default FilterItems;
