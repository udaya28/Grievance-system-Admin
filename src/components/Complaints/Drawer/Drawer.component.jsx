import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import { makeStyles } from '@material-ui/core';
import DrawerItems from '../../Header/DrawerItems/DrawerItems.component'
const FilterDrawer = ({openFilter, setOpenFilter}) => {
  const useStyles = makeStyles((theme) => ({
    drawerPaper: {
      marginTop: '64px', //56
      marginBottom: '64px',
      [theme.breakpoints.up('sm')]: {
        // marginTop: '56px',
        display:'block',
      },
      display:'none',
      height: 'auto',
      width:'240px'
    },
    drawerPaper1: {
      marginTop: '64px', //56
      height: '100%',
      width:'240px',
      [theme.breakpoints.down('sm')]: {
        marginTop: '56px',
        // display:'block',
      }
    },
  }));
  const classes = useStyles();

  return (
    <div >
      <Drawer
        open
        anchor="right"
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <DrawerItems/>
      </Drawer>
      <Drawer
            variant="temporary"
            anchor={'right'}
            open={openFilter}
            onClose={()=>setOpenFilter(false)}
            classes={{
              paper: classes.drawerPaper1,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            <DrawerItems/>
          </Drawer>
    </div>
  );
};

export default FilterDrawer;
