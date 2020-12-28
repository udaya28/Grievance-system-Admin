import React, { useState, useContext } from 'react';
import Axios from 'axios';
import cookies from 'js-cookie';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import { setLogin, setLoader, adminId } from '../../context/context';
import './login.styles.css';
// import ImageHeader from '../imageHeader/ImageHeader';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  paper: {
    margin: theme.spacing(5, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    justify: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignIn = () => {
  const [UserName, setUserName] = useState('');
  const [Password, setPassword] = useState('');
  const [ValidationState, setValidationState] = useState(false);
  const [IsValid, setIsValid] = useState(true);
  const classes = useStyles();
  const setIsLoggedIn = useContext(setLogin);
  const setShowLoader = useContext(setLoader);
  const admin = useContext(adminId);

  const handleSignIn = async () => {
    // console.log(UserName, Password);
    setValidationState(true);
    if (Password !== '' && UserName !== '') {
      try {
        setShowLoader(true);
        const res = await Axios.post(
          'https://grievance-app-backend.herokuapp.com/admin/login',
          {
            data: { userName: UserName, password: Password },
          }
        );
        setShowLoader(false);
        // console.log(res);
        if (res.status === 200) {
          admin.setID({ ...admin, id: res.data.id });
          // console.log(res.data);
          let date = 1 / 48; //30 min
          cookies.set('admin-token', res.data.token, {
            expires: date,
          });
          setIsLoggedIn(true);
        }
      } catch (err) {
        console.log(err);
        if (err.response) {
          console.log(err.response);
          if (err.response.status === 401) {
            setIsValid(false);
            setTimeout(() => setIsValid(true), 5000);
            setShowLoader(false);
          }
        }
      }
    }
  };

  const handleUserName = (e) => {
    Password === '' && UserName === '' && setValidationState(false);
    setUserName(e.target.value);
  };
  const handlePassword = (e) => {
    Password === '' && UserName === '' && setValidationState(false);
    setPassword(e.target.value);
  };

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={12} sm={8} md={5} className="login-box" component={Paper}>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h6">
            Sign in
          </Typography>
          <FormControl className={classes.form} validate="true">
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Roll Number"
              name="email"
              autoComplete="email"
              onInput={handleUserName}
              value={UserName}
              error={ValidationState && !UserName}
              helperText={
                ValidationState &&
                !UserName &&
                'User name field is required'
              }
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onInput={handlePassword}
              value={Password}
              error={ValidationState && !Password}
              helperText={
                ValidationState && !Password && 'Password field is required'
              }
              autoComplete="current-password"
            />
            {!IsValid && (
              <Typography color="error" variant="caption" align="left">
                UserName or Password is Invalid
              </Typography>
            )}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={handleSignIn}
            >
              Sign In
            </Button>
          </FormControl>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignIn;
