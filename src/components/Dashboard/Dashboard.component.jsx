import React, { useContext } from 'react';
import {
  allComplaintsContext,
  studentDetailsContext,
} from './../../context/context';
const Dashboard = () => {
  const allComplaints = useContext(allComplaintsContext);
  const studentDetails = useContext(studentDetailsContext);
  return (
    <div>
      <p>{JSON.stringify(allComplaints)}</p>
      <p>{JSON.stringify(studentDetails)}</p>
    </div>
  );
};

export default Dashboard;
