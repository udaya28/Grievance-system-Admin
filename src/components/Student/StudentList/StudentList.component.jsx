import React from 'react';
import './StudentList.styles.css';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const StudentList = () => {
  return (
    <div container style={{ margin: '15px 0px' }}>
      <AppBar position="sticky" style={{top:"64px"}}>
        <Toolbar>search</Toolbar>
      </AppBar>

      <div>
        <div style={{height:"200vh"}}> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis culpa obcaecati quod totam, necessitatibus voluptatem voluptatum consequatur tempore veniam quasi. Quisquam aliquid temporibus eaque amet id, nesciunt possimus saepe minima!</div>
      </div>
    </div>
  );
};

export default StudentList;
