import React, { useState, useContext } from 'react';
import StudentList from './../StudentList/StudentList.component';
import Container from '@material-ui/core/Container';
import AlertDialog from './../../AlertDialog/AlertDialog.component';
import {
  refreshStudentDetailsContext,
  setLoader,
} from './../../../context/context';
import Axios from 'axios';
import cookie from 'js-cookie';
import Snackbar from '@material-ui/core/Snackbar';

const DeleteStudent = () => {
  const refreshStudentDetails = useContext(refreshStudentDetailsContext);
  const setShowLoader = useContext(setLoader);
  const [currentStudent, setCurrentStudent] = useState({});
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogContent, setDialogContent] = useState('');
  const [openSnackBar, setOpenSnackBar] = useState({
    open: false,
    message: '',
  });
  const handleDialogClose = () => {
    setDialogOpen(false);
  };

  const handelDelete = (data) => {
    setDialogContent(
      `Are you sure to delete ${data.firstName} ${data.secondName} (${
        data.rollNumber
      }) of ${data.departmentName} of Academic year ${data.jointYear}-${
        data.jointYear + 4
      }. Once deleted you can not retrieve the student data. The complaints made by the student will not be deleted.`
    );
    setDialogOpen(true);
    setCurrentStudent(data);
    // console.log(data);
  };

  const handelConfirmDelete = async () => {
    try {
      setDialogOpen(false);
      setShowLoader(true)
      const res = await Axios.delete(
        `https://grievance-app-backend.herokuapp.com/admin/studentDetails/${currentStudent._id}`,
        {
          headers: {
            token: cookie.get('admin-token'),
          },
        }
      );
      if(res.status === 204){
        setOpenSnackBar({
          open: true,
          message: 'Student has been deleted successfully',
        });
        refreshStudentDetails();
      }else{
        setShowLoader(false)
        setOpenSnackBar({
          open: true,
          message: 'Failed to delete Student',
        });
        refreshStudentDetails();
      }
    } catch (error) {
      console.log(error);
      setShowLoader(false)
        setOpenSnackBar({
          open: true,
          message: 'Failed to delete Student',
        });
        refreshStudentDetails();
    }
    
    
    
  };

  return (
    <Container maxWidth="md">
      <h1 style={{ textAlign: 'left', margin: '10px 0px 0px' }}>
        Delete Student
      </h1>
      <StudentList handelDelete={handelDelete} buttonText="DELETE" />
      <AlertDialog
        SetOpen={dialogOpen}
        handleClose={handleDialogClose}
        confirmButtonColorSecondary={true}
        title="Confirm"
        content={dialogContent}
        handleConfirm={handelConfirmDelete}
      />
      <Snackbar
        open={openSnackBar.open}
        autoHideDuration={6000}
        onClose={() => setOpenSnackBar({ open: false, message: '' })}
        message={openSnackBar.message}
      />
    </Container>
  );
};

// content={`Are you sure to delete Udaya M (19CSR118) of CES of Academic year 2019-2023 once deleted you can not retrieve the student data. The complaints made by the student will not be deleted.`}

export default DeleteStudent;
