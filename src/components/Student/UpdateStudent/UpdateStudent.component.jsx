import React, { useState, useContext } from 'react';
import StudentList from './../StudentList/StudentList.component'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
const UpdateStudent = () => {
  return (
    <Container maxWidth="md">
      <h1 style={{ textAlign: 'left', margin: '10px 0px 0px' }}>Update Student</h1>
      <StudentList buttonColor='secondary' buttonText='EDIT'/>
    </Container>
  );
};
 
export default UpdateStudent;
