import React, { useState } from 'react';
import StudentList from './../StudentList/StudentList.component';
import Container from '@material-ui/core/Container';
import AlertDialog from './../../AlertDialog/AlertDialog.component';
const DeleteStudent = () => {
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handelDelete = (data) => {
    setDialogOpen(true);
    console.log(data);
  };

  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <Container maxWidth="md">
      <h1 style={{ textAlign: 'left', margin: '10px 0px 0px' }}>
        Delete Student
      </h1>
      <StudentList handelDelete={handelDelete} buttonText="DELETE" />
      <AlertDialog SetOpen={dialogOpen} handleClose={handleDialogClose} confirmButtonColorSecondary={true} title="Confirm" content={`Are you sure to delete Udaya M (19CSR118) of CES of Academic year 2019-2023 once deleted you can not retrieve the data`}/>
    </Container>
  );
};

export default DeleteStudent;
