import React, { useState, useContext } from 'react';
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
import AlertDialog from '../../../AlertDialog/AlertDialog.component';
import Axios from 'axios';
import cookie from 'js-cookie';
import Snackbar from '@material-ui/core/Snackbar';
import { setLoader,refreshComplaintsContext } from './../../../../context/context';
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
  const { innerWidth: width } = window;
  const [response, setResponse] = useState('');
  const [validationState, setValidationState] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const setShowLoader = useContext(setLoader);
  const refreshComplaints = useContext(refreshComplaintsContext);
  const handleResponse = (e) => {
    setResponse(e.target.value);
  };
  const handleSubmit = () => {
    setValidationState(true);
    if (response !== '') {
      setOpenDialog(true);
    }
  };
  const confirmSubmit = async () => {
    console.log(response);
    console.log(data._id);
    if (response !== '') {
      setOpenDialog(false);
      setResponse('');
      handleClose();
      try {
        setShowLoader(true);
        const res = await Axios.patch(
          'https://grievance-app-backend.herokuapp.com/admin/complaint',
          {
            data: {
              id: {
                _id: data._id,
              },
              data: { response: response },
            },
          },
          {
            headers: {
              token: cookie.get('admin-token'),
            },
          }
        );
        if (res.status === 200) {
          setShowLoader(false);
          console.log('posted');
          setOpenSnackBar(true);
          refreshComplaints();
        } else {
          setShowLoader(false);
          console.log('failed to post');
        }
        setValidationState(false);
      } catch (err) {
        console.log(err);
      }
    }
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
        <DialogTitle>
          <h1 className="dialogHeading" style={{ margin: '0px' }}>
            {data.title}
          </h1>
        </DialogTitle>
        <DialogContent dividers={true}>
          <DialogContentText>
            <h1 className="dialogHeading">Student Details</h1>
            <p>
              <b>
                Category&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                : &nbsp;
              </b>
              <i style={{ textTransform: 'capitalize' }}>{data.category}</i>
            </p>
            <p>
              <b>
                Department&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; : &nbsp;
              </b>
              <i>{data.departmentName}</i>
            </p>
            <p>
              <b>Academic Year &nbsp;: &nbsp;</b>
              <i>
                {data.jointYear} - {data.jointYear + 4}
              </i>
            </p>
            <p>
              <b>
                Gender
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                : &nbsp;
              </b>
              <i style={{ textTransform: 'capitalize' }}>{data.gender}</i>
            </p>
            <h1 className="dialogHeading">Complaint Details</h1>
            <h4 className="dialog-sub-heading">Title</h4>
            <p>{data.title}</p>
            <h4 className="dialog-sub-heading">Complaint</h4>
            <p style={{ textAlign: 'justify' }}>{data.complaint}</p>
            {data.response !== ''
              ? [
                  <h4 className="dialog-sub-heading">Response</h4>,
                  <p style={{ textAlign: 'justify' }}>{data.response}</p>,
                ]
              : [
                  <h4 className="dialog-sub-heading">Response</h4>,
                  <FormGroup className="form-group">
                    <FormControl style={{ width: '100%', margin: '10px 0px' }}>
                      <TextField
                        id="outlined-basic"
                        label="Make Response"
                        variant="outlined"
                        multiline
                        rows={8}
                        helperText="Make Response for the Complaint"
                        onInput={handleResponse}
                        error={validationState && response === ''}
                        value={response}
                      />
                    </FormControl>
                    <Grid container justify="flex-end">
                      <Button
                        variant="contained"
                        color="primary"
                        endIcon={<SendIcon />}
                        onClick={() => handleSubmit()}
                      >
                        Send
                      </Button>
                    </Grid>
                  </FormGroup>,
                ]}
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
                textTransform: 'uppercase',
              }}
              className={`${statusClass}-col`}
            >
              {data.status}
            </p>
            <p style={{ fontSize: 'small' }} className="time-stamp">
              {data.timeStr}
            </p>
          </div>

          <Button
            onClick={() => {
              setValidationState(false);
              setResponse('');
              handleClose();
            }}
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <AlertDialog
        SetOpen={openDialog}
        handleClose={() => setOpenDialog(false)}
        title="Confirm"
        content="Once submitted you can't change or re-post your response"
        handleConfirm={confirmSubmit}
        confirmButtonColorSecondary={false}
      />
      <Snackbar
        open={openSnackBar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackBar(false)}
        message="Posted Response successfully"
      />
    </div>
  );
};

export default FeedDialog;
