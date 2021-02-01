import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const StudentDetailsTable = ({ data }) => {
  const {
    rollNumber,
    firstName,
    secondName,
    dateOfBirth,
    departmentName,
    gender,
    jointYear,
  } = data;
  const details = [
    ['Roll Number', rollNumber],
    ['First Name', firstName],
    ['Second Name',secondName],
    ['Date of Birth',dateOfBirth],
    ['Department',departmentName],
    ['Gender',gender],
    ['Joint Year',jointYear]
  ];
  return (
    <Table>
      <TableBody>
        {details.map((data) => (
          <TableRow>
            <TableCell size="small" style={{fontWeight:'bold'}}>{data[0]}</TableCell>
            <TableCell size="small" style={{ textTransform: 'capitalize' }}>{data[1]}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default StudentDetailsTable;
