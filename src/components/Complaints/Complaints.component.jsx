import React, { useState, useContext, useEffect } from 'react';
import ComplaintBar from './ComplaintBar/ComplaintBar.component';
import FilterDrawer from './Drawer/Drawer.component';
import Feed from './Feed/Feed.component';
import './Complaints.styles.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { allComplaintsContext } from '../../context/context';
import getFilteredComplaints from './complainFilters';
const Complaints = () => {
  const allComplaints = useContext(allComplaintsContext);
  const [filteredComplaints, setFilteredComplaints] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const [filters, setFilters] = useState({
    status: 'all',
    category: 'all',
    departmentName: 'all',
    jointYear: 'all',
    year: 'all',
    month: 'all',
    gender: 'all',
    searchString: '',
  });
  useEffect(() => {
    setFilteredComplaints(getFilteredComplaints(allComplaints, filters));
    return () => {};
  }, [filters, allComplaints]);
  return (
    <Grid container className="complaint-container">
      <Grid item className="feed-container">
        <Grid container direction="column">
          <ComplaintBar
            setOpenFilter={setOpenFilter}
            filters={filters}
            setFilters={setFilters}
          />
          <Container maxWidth="md">
            <Feed complaints={filteredComplaints} />
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
