import React, { useState } from 'react';
import './UpdateForm.styles.css'
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import EditIcon from '@material-ui/icons/Edit';
const UpdateForm = () => {
  const [studentData, setStudentData] = useState({
    firstName: '',
    secondName: '',
    departmentName: '',
    jointYear: '',
    gender: '',
    rollNumber: '',
    dateOfBirth: '',
    password: '',
  });
  const [ValidationState, setValidationState] = useState(false);
  const handleInput = (e) => {
    setStudentData({ ...studentData, [e.target.name]: e.target.value });
  };
  return (
    <FormGroup>
      <Grid container>
        <Grid item xs={12} sm={6}>
          <FormControl className="form-component">
            <TextField
              label="First Name"
              variant="outlined"
              name="firstName"
              value={studentData.firstName}
              onInput={handleInput}
              helperText="Minimum of 3 characters length"
              error={ValidationState && studentData.firstName.length < 3}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start" style={{padding:"0px"}}>
                    <IconButton>
                      <EditIcon color="primary" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className="form-component">
            <TextField
              label="Second Name"
              variant="outlined"
              name="secondName"
              value={studentData.secondName}
              onInput={handleInput}
              error={ValidationState && studentData.secondName === ''}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl className="form-component">
            <TextField
              label="Roll Number"
              variant="outlined"
              name="rollNumber"
              value={studentData.rollNumber}
              onInput={handleInput}
              error={ValidationState && studentData.rollNumber === ''}
            />
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className="form-component">
            <TextField
              label="Password"
              variant="outlined"
              name="password"
              value={studentData.password}
              onInput={handleInput}
              helperText="Minimum of 3 characters length"
              error={ValidationState && studentData.password.length < 3}
            />
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl className="form-component">
            <TextField
              select
              label="Department Name"
              variant="outlined"
              name="departmentName"
              value={studentData.departmentName}
              onChange={handleInput}
              style={{ textAlign: 'left' }}
              error={ValidationState && studentData.departmentName === ''}
            >
              <MenuItem value="CSE">CSE</MenuItem>
              <MenuItem value="IT">IT</MenuItem>
              <MenuItem value="ECE">ECE</MenuItem>
              <MenuItem value="MEC">MEC</MenuItem>
              <MenuItem value="EEE">EEE</MenuItem>
            </TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className="form-component">
            <TextField
              select
              label="Joint Year"
              variant="outlined"
              name="jointYear"
              value={studentData.jointYear}
              onChange={handleInput}
              style={{ textAlign: 'left' }}
              error={ValidationState && studentData.jointYear === ''}
            >
              <MenuItem value="2017">2017</MenuItem>
              <MenuItem value="2018">2018</MenuItem>
              <MenuItem value="2019">2019</MenuItem>
              <MenuItem value="2020">2020</MenuItem>
              <MenuItem value="2021">2021</MenuItem>
            </TextField>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={6}>
          <FormControl className="form-component">
            <TextField
              select
              id="select"
              label="Gender"
              variant="outlined"
              name="gender"
              value={studentData.gender}
              onChange={handleInput}
              style={{ textAlign: 'left' }}
              error={ValidationState && studentData.gender === ''}
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </TextField>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl className="form-component">
            <TextField
              label="Date of Birth"
              type="date"
              helperText="DD-MM-YYYY"
              variant="outlined"
              name="dateOfBirth"
              InputLabelProps={{
                shrink: true,
              }}
              value={studentData.dateOfBirth}
              onInput={handleInput}
              error={ValidationState && studentData.dateOfBirth === ''}
            />
          </FormControl>
        </Grid>
      </Grid>
    </FormGroup>
  );
};

export default UpdateForm;
