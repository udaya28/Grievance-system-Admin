import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AlertDialog from './../../../AlertDialog/AlertDialog.component';
import UpdateForm from './UpdateForm/UpdateForm.component';
const UpdateDialog = ({ open, handleClose, data }) => {
  const { innerWidth: width } = window;
  const [openDialogConfirm, setOpenDialogConfirm] = useState(false);
  const [ValidationState, setValidationState] = useState(false);
  const [studentData, setStudentData] = useState({});
  const [disabledState, setDisabledState] = useState({});
  const {
    firstName,
    secondName,
    departmentName,
    jointYear,
    gender,
    rollNumber,
    dateOfBirth,
    password,
  } = data;

  useEffect(() => {
    setStudentData({
      firstName,
      secondName,
      departmentName,
      jointYear,
      gender,
      rollNumber,
      dateOfBirth: dateOfBirth.split('-').reverse().join('-'),
      password,
    });
    setDisabledState({
      firstName: true,
      secondName: true,
      departmentName: true,
      jointYear: true,
      gender: true,
      rollNumber: true,
      dateOfBirth: true,
      password: true,
    });
    return () => {
      setValidationState(false);
      setDisabledState({
        firstName: true,
        secondName: true,
        departmentName: true,
        jointYear: true,
        gender: true,
        rollNumber: true,
        dateOfBirth: true,
        password: true,
      });
    };
  }, [data]);

  const getChangedData = () => {
    let changedData = {};
    const keys = Object.keys(disabledState);
    keys.forEach((key) => {
      if (!disabledState[key]) {
        changedData[key] = studentData[key];
      }
    });
    return changedData;
  };

  const handleSubmit = () => {
    setValidationState(true);
    let changedData = getChangedData();
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
    ];
    if (
      arrData.every((data) => data !== '') &&
      firstName.length >= 3 &&
      (password.length >= 3 || disabledState.password) &&
      Object.keys(changedData).length > 0
    ) {
      setOpenDialogConfirm(true);
    }
  };

  const handleConfirmUpdate = () => {
    let changedData = getChangedData()
    console.log(changedData, data);
    console.log('confirm update');
  };
  return (
    <div>
      <Dialog
        open={open}
        onClose={() => handleClose()}
        maxWidth="md"
        fullWidth={true}
        fullScreen={width <= 600 && true}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle>Update Details</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <UpdateForm
              studentData={studentData}
              setStudentData={setStudentData}
              ValidationState={ValidationState}
              setValidationState={setValidationState}
              disabledState={disabledState}
              setDisabledState={setDisabledState}
            />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary" onClick={() => handleSubmit()}>
            <b>Update</b>
          </Button>
          <Button color="secondary" onClick={() => handleClose()}>
            <b>Close</b>
          </Button>
        </DialogActions>
      </Dialog>
      <AlertDialog
        SetOpen={openDialogConfirm}
        handleClose={() => setOpenDialogConfirm(false)}
        content="Are you sure to Update the student"
        confirmButtonColorSecondary={true}
        handleConfirm={handleConfirmUpdate}
      />
    </div>
  );
};

export default UpdateDialog;
