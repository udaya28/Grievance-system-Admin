import { Grid } from '@material-ui/core';
import { React } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Header from '../Header/Header.component';
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <Router>
      <Grid container direction="column">
        <Header />
        <div style={{ height: '100vh' }}>dsfhkj</div>
        <Footer />
      </Grid>
    </Router>
  );
};

export default Home;
