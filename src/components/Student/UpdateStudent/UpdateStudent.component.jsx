import React, { useState } from 'react';
import StudentList from './../StudentList/StudentList.component';
import Container from '@material-ui/core/Container';
import UpdateDialog from './UpdateDialog/UpdateDialog.component';


const UpdateStudent = () => {
  const [dialogOpen, setDialogOpen] = useState(false);
  const [currentStudent, setCurrentStudent] = useState({});
  const handelEdit = (data) => {
    console.log(data);
    setCurrentStudent(data);
    setDialogOpen(true);
  };
  const handelCloseEdit = () => {
    setCurrentStudent({
      firstName: '',
      secondName: '',
      departmentName: '',
      jointYear: '',
      gender: '',
      rollNumber: '',
      dateOfBirth: '',
      password: '',
    });
    setDialogOpen(false);
  };

  return (
    <Container maxWidth="md">
      <h1 style={{ textAlign: 'left', margin: '10px 0px 0px' }}>
        Update Student
      </h1>
      <StudentList
        buttonColor="secondary"
        buttonText="EDIT"
        handelClickEvent={handelEdit}
      />
      <UpdateDialog
        open={dialogOpen}
        handleClose={() => handelCloseEdit()}
        data={currentStudent}
        setDialogOpen={setDialogOpen}
      />
    </Container>
  );
};

export default UpdateStudent;
