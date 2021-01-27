import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import './createStudent.styles.css';
import Container from '@material-ui/core/Container';
const CreateStudent = () => {
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
  const handleFormSubmit = () => {
    console.log(studentData);
    setValidationState(true);
    console.log(studentData);
    const {
      firstName,
      secondName,
      departmentName,
      jointYear,
      gender,
      rollNumber,
      dateOfBirth,
      password,
    } = studentData;
    const arrData = [
      firstName,
      secondName,
      departmentName,
      jointYear,
      gender,
      rollNumber,
      dateOfBirth,
      password,
    ];
    if (
      arrData.every((data) => data !== '') &&
      firstName.length >= 3 &&
      password.length >= 3
    ) {
      console.log('valid');
      
    }
  };
  return (
    <Container maxWidth="md">
      <h1 style={{ textAlign: 'left', margin: '10px 0px 0px' }}>
        Create Student
      </h1>
      <FormGroup className="form-group1">
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
          <Grid container justify="flex-end">
            <Button
              variant="contained"
              color="primary"
              endIcon={<SendIcon />}
              onClick={handleFormSubmit}
            >
              Create
            </Button>
          </Grid>
        </Grid>
      </FormGroup>
    </Container>
  );
};

export default CreateStudent;
