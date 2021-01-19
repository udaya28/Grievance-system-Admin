import React,{useState} from 'react';
import ComplaintBar from './ComplaintBar/ComplaintBar.component';
import FilterDrawer from './Drawer/Drawer.component';
import Feed from './Feed/Feed.component';
import './Complaints.styles.css';
import Grid from '@material-ui/core/Grid';

const Complaints = () => {
  const [openFilter, setOpenFilter] = useState(false)
  return (
    <Grid container className="complaint-container">
      <Grid item className="feed-container">
        <Grid container direction="column">
          <ComplaintBar setOpenFilter={setOpenFilter} />
          <Feed />
        </Grid>
      </Grid>
      <Grid item>
        <FilterDrawer setOpenFilter={setOpenFilter} openFilter={openFilter} />
      </Grid>
    </Grid>
  );
};

export default Complaints;
