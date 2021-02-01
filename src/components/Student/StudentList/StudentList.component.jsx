import React, { useContext } from 'react';
import './StudentList.styles.css';
import {
  studentDetailsContext,
  refreshStudentDetailsContext,
} from './../../../context/context';
import StudentAccordion from './StudentAccordion/StudentAccordion.component';
import AutorenewIcon from '@material-ui/icons/Autorenew';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
const StudentList = ({ buttonText, buttonColor }) => {
  const studentDetails = useContext(studentDetailsContext);
  const refreshStudentDetails = useContext(refreshStudentDetailsContext);
  console.log(studentDetails);
  return (
    <div container style={{ margin: '15px 0px' }}>
      <AppBar position="sticky" style={{ top: '64px' }}>
        <Toolbar>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <p>Div</p>
            </Grid>
            <Grid item>
              <IconButton onClick={() => refreshStudentDetails()}>
                <AutorenewIcon style={{ color: 'white' }} />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
        <Grid
          container
          justify="space-between"
          alignItems="center"
          style={{ padding: '10px 16px', width: 'auto' }}
        >
          <Grid item>
            <b className="mon">Roll.no</b>
          </Grid>
          <Grid item style={{ marginRight: '30px' }}>
            <b className="mon">Name</b>
          </Grid>
          <Grid item>
            <p> </p>
          </Grid>
        </Grid>
      </AppBar>

      <div>
        <div>
          {studentDetails.map((data) => (
            <StudentAccordion
              data={data}
              key={data._id}
              buttonText={buttonText}
              buttonColor={buttonColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default StudentList;
