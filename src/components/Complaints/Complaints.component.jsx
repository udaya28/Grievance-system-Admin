import React, { useState, useContext, useEffect } from 'react';
import ComplaintBar from './ComplaintBar/ComplaintBar.component';
import FilterDrawer from './Drawer/Drawer.component';
import Feed from './Feed/Feed.component';
import './Complaints.styles.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { allComplaintsContext } from '../../context/context';
const Complaints = () => {
  const [openFilter, setOpenFilter] = useState(false);
  const [filters, setFilters] = useState({
    status: 'all',
    category: 'all',
    departmentName: 'all',
    jointYear: 'all',
    year: 'all',
    month: 'all',
    gender: 'all',
  });
  useEffect(() => {
    console.log(filters);
    return () => {};
  }, [filters]);
  const allComplaints = useContext(allComplaintsContext);
  return (
    <Grid container className="complaint-container">
      <Grid item className="feed-container">
        <Grid container direction="column">
          <ComplaintBar setOpenFilter={setOpenFilter} />
          <Container maxWidth="md">
            <Feed allComplaints={allComplaints} />
          </Container>
        </Grid>
      </Grid>
      <Grid item>
        <FilterDrawer
          setOpenFilter={setOpenFilter}
          openFilter={openFilter}
          filters={filters}
          setFilters={setFilters}
        />
      </Grid>
    </Grid>
  );
};

export default Complaints;
