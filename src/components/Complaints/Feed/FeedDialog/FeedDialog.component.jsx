import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Grid from '@material-ui/core/Grid';
import SendIcon from '@material-ui/icons/Send';
import './FeedDialog.styles.css';
const FeedDialog = ({ open, handleClose, data }) => {
  let statusClass;
  if (data.status === 'seen') {
    statusClass = 'yellow1';
  } else if (data.status === 'unseen') {
    statusClass = 'red1';
  } else if (data.status === 'replayed') {
    statusClass = 'green1';
  } else {
    statusClass = '';
  }
  const { innerWidth: width, innerHeight: height } = window;
  console.log(width,height)
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth={true}
        fullScreen={width<=600 && true}
        scroll="paper"
        aria-labelledby="scroll-dialog-title"
        aria-describedby="scroll-dialog-description"
      >
        <DialogTitle id="scroll-dialog-title">
          <h1 className="dialogHeading" style={{ margin: '0px' }}>
            {data.title}
          </h1>
        </DialogTitle>
        <DialogContent dividers={true} className={statusClass}>
          <DialogContentText id="scroll-dialog-description">
            <h4 className="dialog-sub-heading">Complaint Made</h4>
            <p style={{ textAlign: 'justify' }}>{data.complaint}</p>
            <h4 className="dialog-sub-heading">Make Response</h4>
            <FormGroup className="form-group">
              <FormControl style={{ width: '100%',margin:"10px 0px" }}>
                <TextField
                  id="outlined-basic"
                  label="Response"
                  variant="outlined"
                  multiline
                  rows={8}
                  // value={data.complaint}
                />
              </FormControl>
              <Grid container justify="flex-end">
                <Button
                  variant="contained"
                  color="primary"
                  endIcon={<SendIcon />}
                  // onClick={handleFormSubmit}
                >
                  Send
                </Button>
              </Grid>
            </FormGroup>

            {data.response !== ''
              ? [
                  <h4>Response</h4>,
                  <p style={{ textAlign: 'justify' }}>{data.complaint}</p>,
                ]
              : null}
            {/* [<h1 className="dialogHeading">No response received from committee </h1>] */}
          </DialogContentText>
        </DialogContent>
        <DialogActions className="action">
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <p
              style={{
                textAlign: 'left',
                fontSize: 'small',
                margin: '0px 0px 0px 10px',
                fontWeight: 'bolder',
              }}
              className={`${statusClass}-col`}
            >
              {data.status}
            </p>
            <p style={{ fontSize: 'small' }} className="time-stamp">
              {data.timeStr}
            </p>
          </div>

          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FeedDialog;
