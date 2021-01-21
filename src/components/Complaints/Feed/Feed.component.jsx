import React from 'react';
import ComplaintCard from './ComplaintCard/ComplaintCard.component';
import Grid from '@material-ui/core/Grid';
const Feed = ({ allComplaints }) => {
  const test = [
    {
      category: 'college',
      complaint: 'second official complaint from web site ',
      createdAt: '2020-12-19T14:30:08.972Z',
      departmentName: 'CSE',
      gender: 'male',
      jointYear: 2019,
      response: '',
      status: 'unseen',
      studentId: '5fd6f2bac6d1fa27dc5cea11',
      timeStamp: 'Sat Dec 19 2020 20:00:06 GMT+0530 (India Standard Time)',
      title: 'second complain',
      updatedAt: '2020-12-19T14:30:08.972Z',
      __v: 0,
      _id: '5fde0e70d7b2140017784c5c',
    },
  ];
  return (
    <Grid container spacing={1} style={{ padding: '10px 5px 30px 5px' }}>
      {/* <p>{JSON.stringify(allComplaints).split(',').join(' ')}</p> */}
      
        {allComplaints.map((data)=><ComplaintCard data={data}/>)}
      
    </Grid>
  );
};

export default Feed;
