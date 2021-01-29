import React, { useState, useEffect, useContext } from 'react';
import { Grid } from '@material-ui/core';
import './Home.styles.css';
import Axios from 'axios';
import cookie from 'js-cookie';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Redirect,
} from 'react-router-dom';
import Header from '../Header/Header.component';
import Footer from '../Footer/Footer';
import Complaints from '../Complaints/Complaints.component';
import Dashboard from '../Dashboard/Dashboard.component';
import Profile from '../Profile/Profile.component';
import CreateStudent from '../Student/CreateStudent/CreateStudent.component';
import UpdateStudent from '../Student/UpdateStudent/UpdateStudent.component';
import DeleteStudent from '../Student/DeleteStudent/DeleteStudent.component';
import {
  allComplaintsContext,
  refreshComplaintsContext,
  setLoader,
  studentDetailsContext,
  refreshStudentDetailsContext,
} from '../../context/context';
const Home = () => {
  const [allComplaints, setAllComplaints] = useState([]);
  const [studentDetails, setStudentDetails] = useState([]);
  const setShowLoader = useContext(setLoader);
  useEffect(() => {
    refreshComplaints();
    refreshStudentDetails();
    return () => {};
  }, []);
  const refreshComplaints = async () => {
    setShowLoader(true);
    const complaint = await Axios.get(
      `https://grievance-app-backend.herokuapp.com/admin/complaint`,
      {
        headers: {
          token: cookie.get('admin-token'),
        },
      }
    );
    if (complaint.status === 200) {
      setAllComplaints(complaint.data.data.allComplaints);
      setShowLoader(false);
      console.log(complaint.data.data.allComplaints);
    } else {
      setShowLoader(false);
    }
  };
  const refreshStudentDetails = async () => {
    setShowLoader(true);
    const studentData = await Axios.get(
      `https://grievance-app-backend.herokuapp.com/admin/studentDetails`,
      {
        headers: {
          token: cookie.get('admin-token'),
        },
      }
    );
    if (studentData.status === 200) {
      setStudentDetails(studentData.data.data.Students);
      setShowLoader(false);
      // console.log(studentData.data.data.Students);
    } else {
      setShowLoader(false);
    }
  };
  return (
    <allComplaintsContext.Provider value={allComplaints}>
      <refreshComplaintsContext.Provider value={refreshComplaints}>
        <studentDetailsContext.Provider value={studentDetails}>
          <refreshStudentDetailsContext.Provider value={refreshStudentDetails}>
            <Router>
              <Grid container direction="column">
                <Header />
                <div
                  style={{ marginTop: '64px' }}
                  className="header-space"
                ></div>
                <Switch>
                  <Route exact path="/Grievance-system-Admin/create-student">
                    <CreateStudent />
                  </Route>
                  <Route exact path="/Grievance-system-Admin/update-student">
                    <UpdateStudent />
                  </Route>
                  <Route exact path="/Grievance-system-Admin/delete-student">
                    <DeleteStudent />
                  </Route>
                  <Route exact path="/Grievance-system-Admin/profile">
                    <Profile />
                  </Route>
                  <Route exact path="/Grievance-system-Admin/dashboard">
                    <Dashboard />
                  </Route>
                  {/* <Redirect
            exact
            from="/Grievance-system-Admin/"
            to="/Grievance-system-Admin/complaints"
          /> */}
                  {/* <Redirect
            exact
            from="/Grievance-system-Admin/"
            to="/Grievance-system-Admin/"
          />  */}
                  <Route path="/Grievance-system-Admin/">
                    <Complaints />
                  </Route>
                </Switch>
                {/* <div style={{ height: '50vh' }}></div> */}
                <Footer />
              </Grid>
            </Router>
          </refreshStudentDetailsContext.Provider>
        </studentDetailsContext.Provider>
      </refreshComplaintsContext.Provider>
    </allComplaintsContext.Provider>
  );
};

export default Home;
