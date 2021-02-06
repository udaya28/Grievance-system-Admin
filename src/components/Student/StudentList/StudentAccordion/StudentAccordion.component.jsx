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
const StudentAccordion = ({ data , buttonText, buttonColor,handelDelete }) => {
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
            <p style={{ textTransform: 'capitalize' }}>{data.rollNumber}</p>
          </Grid>
          <Grid item>
            <p style={{ textTransform: 'capitalize' }}>
              {data.firstName} {data.secondName}
            </p>
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
        <Button color={'secondary'} onClick={()=>handelDelete(data)} ><b>{buttonText}</b></Button>
      </AccordionActions>
    </Accordion>
  );
};

export default StudentAccordion;



