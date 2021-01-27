import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
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
  const handleInput = (e) => {
    setStudentData({...studentData,[e.target.name]:e.target.value})
  };
  const handleFormSubmit = () =>{
    console.log(studentData)
  }
  return (
    <Container maxWidth="md">
      <h1 style={{ textAlign: 'left', margin: '10px 0px 0px' }}>
        Create Student
      </h1>
      <FormGroup className="form-group1">
        <Grid container>
          <Grid items xs={12} sm={6}>
            <FormControl className="form-component">
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                name="firstName"
                value={studentData.firstName}
                onInput={handleInput}
                // error={ValidationState && title === ''}
              />
            </FormControl>
          </Grid>
          <Grid items xs={12} sm={6}>
            <FormControl className="form-component">
              <TextField
                id="outlined-basic"
                label="Second Name"
                variant="outlined"
                name="secondName"
                value={studentData.secondName}
                onInput={handleInput}
                // error={ValidationState && title === ''}
              />
            </FormControl>
          </Grid>

          <Grid items xs={12} sm={6}>
            <FormControl className="form-component">
              <TextField
                id="outlined-basic"
                label="Roll Number"
                variant="outlined"
                name="rollNumber"
                value={studentData.rollNumber}
                onInput={handleInput}
                // error={ValidationState && title === ''}
              />
            </FormControl>
          </Grid>
          <Grid items xs={12} sm={6}>
            <FormControl className="form-component">
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                name="password"
                value={studentData.password}
                onInput={handleInput}
                // error={ValidationState && title === ''}
              />
            </FormControl>
          </Grid>

          <Grid items xs={12} sm={6}>
            <FormControl className="form-component">
              <TextField
                id="outlined-basic"
                label="Department Name"
                variant="outlined"
                name="departmentName"
                value={studentData.departmentName}
                onInput={handleInput}
                // error={ValidationState && title === ''}
              />
            </FormControl>
          </Grid>
          <Grid items xs={12} sm={6}>
            <FormControl className="form-component">
              <TextField
                id="outlined-basic"
                label="Joint Year"
                variant="outlined"
                name="jointYear"
                value={studentData.jointYear}
                onInput={handleInput}
                // error={ValidationState && title === ''}
              />
            </FormControl>
          </Grid>

          <Grid items xs={12} sm={6}>
            <FormControl className="form-component">
              <TextField
                id="outlined-basic"
                label="Gender"
                variant="outlined"
                name="gender"
                value={studentData.gender}
                onInput={handleInput}
                // error={ValidationState && title === ''}
              />
            </FormControl>
          </Grid>
          <Grid items xs={12} sm={6}>
            <FormControl className="form-component">
              <TextField
                id="outlined-basic"
                label="Date of Birth"
                helperText="DD-MM-YYYY"
                variant="outlined"
                name="dateOfBirth"
                value={studentData.dateOfBirth}
                onInput={handleInput}
                // error={ValidationState && title === ''}
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
