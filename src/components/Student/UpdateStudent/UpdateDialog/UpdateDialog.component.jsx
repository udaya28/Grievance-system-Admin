import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AlertDialog from './../../../AlertDialog/AlertDialog.component';
import UpdateForm from './UpdateForm/UpdateForm.component'
const UpdateDialog = ({ open, handleClose, data }) => {
  const { innerWidth: width } = window;
  const [openDialogConfirm, setOpenDialogConfirm] = useState(false);
  const handleSubmit = () => {
    setOpenDialogConfirm(true);
  };
  const handleConfirmUpdate = () => {
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
            <UpdateForm/>
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


// InputProps={{
//     endAdornment: (
//       <InputAdornment position="start">
//         <AccountCircle color="primary" />
//       </InputAdornment>
//     ),
//   }}