import React, { useContext } from 'react';
import {
  allComplaintsContext,
  studentDetailsContext,
} from './../../context/context';
import Container from '@material-ui/core/Container';
import {getComplaintsDetails} from './dashboard'
const Dashboard = () => {
  const allComplaints = useContext(allComplaintsContext);
  const studentDetails = useContext(studentDetailsContext);
  let complaintsDetails = getComplaintsDetails(allComplaints)
  console.log(complaintsDetails)
  return (
    <Container maxWidth='md'>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore quod doloribus iure quo explicabo qui inventore assumenda nostrum quasi iste. Aperiam, labore totam excepturi facilis at laboriosam distinctio recusandae sit.</p>
      <h1>coming soon</h1>
    </Container>
  );
};

export default Dashboard;
