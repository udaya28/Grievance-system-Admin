import React, { useState } from 'react';
import ComplaintCard from './ComplaintCard/ComplaintCard.component';
import Grid from '@material-ui/core/Grid';
import FeedDialog from './FeedDialog/FeedDialog.component';
const Feed = ({ allComplaints }) => {
  const [openFeedDialog, setOpenFeedDialog] = useState(false);
  const [feedDialogData, setFeedDialogData] = useState({});
  const handleClose = () => {
    setOpenFeedDialog(false);
  };
  const handleClickOpen = (data, time) => {
    data.timeStr = time;
    setFeedDialogData(data);
    setOpenFeedDialog(true);
  };
  return (
    <>
      <Grid container spacing={1} style={{ padding: '10px 5px 30px 5px' }}>
        {/* <p>{JSON.stringify(allComplaints).split(',').join(' ')}</p> */}

        {allComplaints.map((data, index) => (
          <ComplaintCard data={data} key={index} handleClickOpen={handleClickOpen} />
        ))}
      </Grid>
      <FeedDialog
        handleClose={handleClose}
        open={openFeedDialog}
        data={feedDialogData}
        // key={}
      />
    </>
  );
};

export default Feed;
