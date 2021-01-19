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
        // style={{width:'100px'}}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <DrawerItems/>
      </Drawer>
      <Drawer
            // container={}
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

// const drawerWidth = 240;

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//   },
//   drawer: {

//     [theme.breakpoints.up('sm')]: {
//       // width: drawerWidth,
//       // marginRight: drawerWidth,
//       flexShrink: 0,
//     },
//   },
//   appBar: {
//     [theme.breakpoints.up('sm')]: {
//       width: `calc(100% - ${drawerWidth}px)`,
//       marginRight: drawerWidth,
//     },
//   },
//   menuButton: {
//     marginLeft: theme.spacing(2),
//     [theme.breakpoints.up('sm')]: {
//       display: 'none',
//     },
//   },
//   // necessary for content to be below app bar
//   toolbar: theme.mixins.toolbar,
//   drawerPaper: {
//     width: drawerWidth,
//   },
//   content: {
//     flexGrow: 1,
//     padding: theme.spacing(3),
//     [theme.breakpoints.up('sm')]: {
//       marginRight: drawerWidth,
//     },

//   },
// }));
