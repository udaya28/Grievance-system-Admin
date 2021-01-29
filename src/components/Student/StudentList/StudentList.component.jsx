import React, { useContext } from 'react';
import './StudentList.styles.css';
import {
  studentDetailsContext,
  refreshStudentDetailsContext,
} from './../../../context/context';
import StudentAccordion from './StudentAccordion/StudentAccordion.component'
import AutorenewIcon from '@material-ui/icons/Autorenew';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { FaceRounded } from '@material-ui/icons';
const StudentList = () => {
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
      </AppBar>

      <div>
        <div>
          {studentDetails.map((data)=><StudentAccordion data={data} />)}
        </div>
      </div>
    </div>
  );
};

export default StudentList;
