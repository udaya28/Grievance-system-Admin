import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/home/Home.component';
import SignIn from './components/login/login.component';
import cookie from 'js-cookie';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { setLogin, setLoader, studentId } from './context/context';
import Axios from 'axios';
import { BoxLoading } from 'react-loadingg';
// Axios.defaults.withCredentials = true;
function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState();
  const [showLoader, setShowLoader] = useState(false);
  const [studentID, setStudentID] = useState({});

  useEffect(() => {
    (async () => {
      // console.log(cookie.get('token'));
      if (cookie.get('token')) {
        setShowLoader(true);
        const res = await Axios.get(
          'https://grievance-app-backend.herokuapp.com/auth',
          {
            headers: {
              token: cookie.get('token'),
            },
          }
        );
        setShowLoader(false);
        if (res.status === 200) {
          setStudentID({ ...student, id: res.data.id });
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      } else {
        //logout
        setIsLoggedIn(false);
      }
    })();
  }, []);

  const theme = createMuiTheme({
    palette: {
      type: 'light',

      primary: {
        main: '#3a42bb',
      },
    },
  });
  let student = { id: studentID.id, setID: setStudentID };
  // console.log(student)
  // console.log(studentID)

  return (
    <ThemeProvider theme={theme}>
      <setLogin.Provider value={setIsLoggedIn}>
        <setLoader.Provider value={setShowLoader}>
          <studentId.Provider value={student}>
            <div className="App">
              {IsLoggedIn ? <Home /> : <SignIn />}
              {showLoader && <BoxLoading color="#3a42bb" size="large" />}
            </div>
          </studentId.Provider>
        </setLoader.Provider>
      </setLogin.Provider>
    </ThemeProvider>
  );
}

export default App;
