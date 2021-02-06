import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AlertDialog from './../../../AlertDialog/AlertDialog.component';
const UpdateDialog = ({ open, handleClose, data }) => {
  const { innerWidth: width } = window;
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus eius numquam quo maxime adipisci consequatur, dolore,
            commodi sapiente molestias vitae nisi nobis possimus! Beatae numquam
            vitae deserunt nostrum consequuntur molestiae! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptatum, dolorem unde deleniti
            ad aperiam cupiditate magni officia, accusantium recusandae
            architecto voluptas illo blanditiis incidunt perspiciatis reiciendis
            velit harum delectus facilis.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color="primary">
            <b>Update</b>
          </Button>
          <Button color="secondary" onClick={()=>handleClose()}>
            <b>Close</b>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateDialog;
