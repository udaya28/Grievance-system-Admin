import React, { useState, useContext } from 'react';
import StudentList from './../StudentList/StudentList.component';
import Container from '@material-ui/core/Container';
import UpdateDialog from './UpdateDialog/UpdateDialog.component';
import {
  refreshStudentDetailsContext,
  setLoader,
} from './../../../context/context';
import Axios from 'axios';
import cookie from 'js-cookie';
import Snackbar from '@material-ui/core/Snackbar';



const UpdateStudent = () => {
  const [dialogOpen, setDialogOpen] = useState(false)
  const [currentStudent, setCurrentStudent] = useState({})
  const handelEdit = (data) => {
    console.log(data);
    setCurrentStudent(data)
    setDialogOpen(true)
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
      <UpdateDialog open={dialogOpen} handleClose={()=>setDialogOpen(false)} data={currentStudent} />
    </Container>
  );
};

export default UpdateStudent;
