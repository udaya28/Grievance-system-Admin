import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { makeStyles } from '@material-ui/core';
const FilterDrawer = () => {
  const useStyles = makeStyles((theme) => ({
    drawerPaper: {
      marginTop: '64px', //56
      marginBottom: '64px',
      [theme.breakpoints.up('md')]: {
        marginTop: '64px',
      },
      height: '100%',
      width:'260px'
    },
  }));
  const classes = useStyles();

  return (
    <div style={{ height: '100px', width: '200px',}}>
      <Drawer
        open
        anchor="right"
        variant="permanent"
        style={{width:'100px'}}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quae
        dolorum! Animi magnam ex laboriosam praesentium laudantium ab commodi
        deleniti. Dolores, reprehenderit voluptates nobis facilis quod porro
        adipisci sit tenetur. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Architecto magni corrupti, quibusdam possimus assumenda laborum
        doloremque. Odit error facere autem temporibus eos. Aperiam placeat
        reprehenderit nostrum architecto repellendus debitis harum? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Natus necessitatibus
        temporibus soluta veniam! Doloribus modi molestiae sit impedit! Et velit
        numquam itaque, mollitia cumque debitis quidem magni earum nam id!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, quae
        dolorum! Animi magnam ex laboriosam praesentium laudantium ab commodi
        deleniti. Dolores, reprehenderit voluptates nobis facilis quod porro
        adipisci sit tenetur. Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Architecto magni corrupti, quibusdam possimus assumenda laborum
        doloremque. Odit error facere autem temporibus eos. Aperiam placeat
        reprehenderit nostrum architecto repellendus debitis harum? Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Natus necessitatibus
        temporibus soluta veniam! Doloribus modi molestiae sit impedit! Et velit
        numquam itaque, mollitia cumque debitis quidem magni earum nam id!
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
