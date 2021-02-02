import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
const DetailsTable = ({ data }) => {
  const {
    category,
    title,
    complaint,
    response,
    departmentName,
    gender,
    jointYear,
    timeStr
  } = data;
  const details = [
    ['Category', category],
    ['Department',departmentName],
    ['Gender',gender],
    ['Academic Year',`${jointYear} - ${jointYear + 4}`],
    ['Time Stamp',timeStr],
    ['Title',title],
    ['Complaint',complaint],
  ];
  if(response){
      details.push(['Response',response])
  }
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

export default DetailsTable;
