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
import { setLogin, setLoader, studentId } from '../../context/context';
import './login.styles.css';
// import ImageHeader from '../imageHeader/ImageHeader';
const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
  },
  image: {
    backgroundImage:
      'url("https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80")',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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
  const [RollNumber, setRollNumber] = useState('');
  const [Password, setPassword] = useState('');
  const [ValidationState, setValidationState] = useState(false);
  const [IsValid, setIsValid] = useState(true);
  const classes = useStyles();
  const setIsLoggedIn = useContext(setLogin);
  const setShowLoader = useContext(setLoader);
  const student = useContext(studentId);

  const handleSignIn = async () => {
    console.log(RollNumber, Password);
    setValidationState(true);
    if (Password !== '' && RollNumber !== '') {
      try {
        setShowLoader(true);
        const res = await Axios.post(
          'https://grievance-app-backend.herokuapp.com/student/login',
          {
            data: { rollNumber: RollNumber, password: Password },
          }
        );
        setShowLoader(false);
        // console.log(res);
        if (res.status === 200) {
          student.setID({ ...student, id: res.data.id });
          // console.log(res.data);
          let date = 1 / 48; //30 min
          cookies.set('token', res.data.token, {
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

  const handleRollNumber = (e) => {
    Password === '' && RollNumber === '' && setValidationState(false);
    setRollNumber(e.target.value);
  };
  const handlePassword = (e) => {
    Password === '' && RollNumber === '' && setValidationState(false);
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
              onInput={handleRollNumber}
              value={RollNumber}
              error={ValidationState && !RollNumber}
              helperText={
                ValidationState &&
                !RollNumber &&
                'Roll number field is required'
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
                RollNumber or Password is Invalid
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
