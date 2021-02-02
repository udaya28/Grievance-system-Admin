import React from 'react';
import StudentList from './../StudentList/StudentList.component';
import Container from '@material-ui/core/Container';
const DeleteStudent = () => {
  return (
    <Container maxWidth="md">
      <h1 style={{ textAlign: 'left', margin: '10px 0px 0px' }}>
        Delete Student
      </h1>
      <StudentList buttonColor="secondary" buttonText="DELETE" />
    </Container>
  );
};

export default DeleteStudent;
