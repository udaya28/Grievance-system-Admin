import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
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

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
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
            <h1 className="dialogHeading">Complaint Made</h1>
            <p style={{ textAlign: 'justify' }}>{data.complaint}</p>

            {data.response !== ''
              ? [
                  <h1 className="dialogHeading">Response</h1>,
                  <p style={{ textAlign: 'justify' }}>{data.complaint}</p>,
                ]
              : null}
            {/* [<h1 className="dialogHeading">No response received from committee </h1>] */}
            <p
              style={{
                textAlign: 'left',
                fontSize: 'small',
                margin: '15px 0px 0px',
                fontWeight: 'bolder',
              }}
              className={`${statusClass}-col`}
            >
              {data.status} by committee
            </p>
          </DialogContentText>
        </DialogContent>
        <DialogActions className="action">
          <p style={{ fontSize: 'small' }} className="time-stamp">
            {data.timeStr}
          </p>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default FeedDialog;
