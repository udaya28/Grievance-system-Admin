import React from 'react';
import './ComplaintCard.styles.css';
import Grid from '@material-ui/core/Grid';

const ComplaintCard = ({ data, handleClickOpen }) => {
  console.log(data);
  const { title, timeStamp, status } = data;
  let statusClass;
  if (status === 'seen') {
    statusClass = 'yellow';
  } else if (status === 'unseen') {
    statusClass = 'red';
  } else if (status === 'replayed') {
    statusClass = 'green';
  } else {
    statusClass = '';
  }

  const getDate = (date) => {
    let arr = date.split(' ').slice(1, 5);
    let timeArr = arr[3].split(':').map((str) => parseInt(str));
    let AMPMstr = 'AM';
    let hour = timeArr[0];
    let min = timeArr[1];
    let day = arr.slice(0, 3);
    let dayStr = day.join(' ');
    if (timeArr[0] > 12) {
      AMPMstr = 'PM';
      hour %= 12;
    }
    let time = `${hour > 9 ? hour : '0' + hour}:${
      min > 9 ? min : '0' + min
    } ${AMPMstr}`;
    // console.log(dayStr + ' ' + time)
    return `${dayStr + ' ' + time}`;
  };

  return (
    <Grid item sm={12} md={6} style={{ width: '100%', height: '100%' }} >
      <div
        onClick={() => {
          handleClickOpen(data, getDate(timeStamp));
        }}
      >
        <Grid container className={`activity-container + ${statusClass}`}>
          <Grid item>
            <h1 className="activity-title">{title}</h1>
          </Grid>
          <Grid
            container
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item xs={6}>
              <p className="time-stamp">{getDate(timeStamp)}</p>
            </Grid>
            <Grid item xs={6}>
              <p className="activity-status">{status}</p>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Grid>
  );
};

export default ComplaintCard;
