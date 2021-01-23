import React, { useEffect, useState } from 'react';
import './App.css';
import Home from './components/home/Home.component';
import SignIn from './components/login/login.component';
import cookie from 'js-cookie';
import { createMuiTheme, ThemeProvider } from '@material-ui/core';
import { setLogin, setLoader, adminId } from './context/context';
import Axios from 'axios';
import { BoxLoading } from 'react-loadingg';
function App() {
  const [IsLoggedIn, setIsLoggedIn] = useState();
  const [showLoader, setShowLoader] = useState(false);
  const [studentID, setAdminID] = useState({});

  useEffect(() => {
    (async () => {
      if (cookie.get('admin-token')) {
        setShowLoader(true);
        const res = await Axios.get(
          'https://grievance-app-backend.herokuapp.com/auth',
          {
            headers: {
              token: cookie.get('admin-token'),
            },
          }
        );
        setShowLoader(false);
        if (res.status === 200) {
          setAdminID({ ...admin, id: res.data.id });
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
  let admin = { id: studentID.id, setID: setAdminID };

  return (
    <ThemeProvider theme={theme}>
      <setLogin.Provider value={setIsLoggedIn}>
        <setLoader.Provider value={setShowLoader}>
          <adminId.Provider value={admin}>
            <div className="App">
              {IsLoggedIn ? <Home /> : <SignIn />}
              {showLoader && (
                <BoxLoading
                  color="#3a42bb"
                  size="large"
                  style={{ position: 'fixed', margin: 'auto', inset: '0px' }}
                />
              )}
              {/* margin: auto; position: absolute; inset: 0px; */}
            </div>
          </adminId.Provider>
        </setLoader.Provider>
      </setLogin.Provider>
    </ThemeProvider>
  );
}

export default App;
