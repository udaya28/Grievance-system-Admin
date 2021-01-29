import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionActions from '@material-ui/core/AccordionActions';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
const StudentAccordion = ({data}) => {
    console.log(data)
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
          
        <b>{data.rollNumber} - {data.firstName}</b>
     
      </AccordionSummary>
      <Divider/>
      <AccordionDetails>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </p>
      </AccordionDetails>
      <Divider/>
      <AccordionActions>
            <Button>EDIT</Button>
      </AccordionActions>
    </Accordion>
  );
};

export default StudentAccordion;
