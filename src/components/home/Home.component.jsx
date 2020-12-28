import { Grid} from '@material-ui/core';
import { React } from 'react';
import Header from '../Header/Header.component';
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <Grid container direction="column">
      <Header/>
      <div style={{height:'100vh'}}>dsfhkj</div>
      <Footer/>
    </Grid>
  );
};

export default Home;
