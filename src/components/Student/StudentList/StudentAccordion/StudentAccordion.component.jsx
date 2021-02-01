import React from 'react';
import StudentDetailsTable from './StudentDetailsTable/studentDetailsTable.component'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
const StudentAccordion = ({ data , buttonText, buttonColor }) => {
  // console.log(data);
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Grid container justify="space-between" alignItems="center">
          <Grid item>
            <b style={{ textTransform: 'capitalize' }}>{data.rollNumber}</b>
          </Grid>
          <Grid item>
            <b style={{ textTransform: 'capitalize' }}>
              {data.firstName} {data.secondName}
            </b>
          </Grid>
          <Grid item>
            <p> </p>
          </Grid>
        </Grid>
      </AccordionSummary>
      <Divider />
      <AccordionDetails>
        <StudentDetailsTable data={data}/>
      </AccordionDetails>
      <Divider />      
      <AccordionActions>
        <Button color={buttonColor} ><b>{buttonText}</b></Button>
      </AccordionActions>
    </Accordion>
  );
};

export default StudentAccordion;





        {/* <Grid container spacing={0}> */}
          {/* <Grid item xs={12}>
            <Grid container justify="space-around">
              <b>Roll Number</b>
              <p>{data.rollNumber}</p>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="space-around">
              <b>First Name</b>
              <p>{data.firstName}</p>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="space-around">
              <b>Second Name</b>
              <p>{data.secondName}</p>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="space-around">
              <b>Date of Birth</b>
              <p>{data.dateOfBirth}</p>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="space-around">
              <b>Department</b>
              <p>{data.departmentName}</p>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="space-around">
              <b>Gender</b>
              <p>{data.gender}</p>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container justify="space-around">
              <b>Joint Year</b>
              <p>{data.jointYear}</p>
              
            </Grid>
          </Grid> */}
        {/* </Grid> */}