import { AppBar, Grid, IconButton, Toolbar } from '@material-ui/core';
import { React, useState, useContext } from 'react';
import { setLogin } from '../../context/context';
import './Header.styles.css';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import AlertDialog from './../Dialog/Dialog.component';
import cookies from 'js-cookie';
import Drawer from '@material-ui/core/Drawer';
import DrawerItems from './DrawerItems/DrawerItems.component';
import { makeStyles } from '@material-ui/core';

const Header = () => {
  //logout
  const setIsLoggedIn = useContext(setLogin);
  const signOut = () => {
    handleOpenDialog();
  };
  const doneSignOut = () => {
    cookies.remove('token');
    setIsLoggedIn(false);
  };
  //dialog
  const [OpenDialog, setOpenDialog] = useState(false);
  const handleOpenDialog = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  //drawer
  const [openDrawer, setOpenDrawer] = useState(false);
  const useStyles = makeStyles((theme) => ({
    drawerPaper: {
      marginTop: '56px', //56
      [theme.breakpoints.up('md')]: {
        marginTop: '64px',
      },
      height: 'auto',
    },
  }));
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item>
            <IconButton onClick={() => setOpenDrawer(true)}>
              <MenuIcon className="white" />
            </IconButton>
          </Grid>
          <Grid item>
            <h3 className="mon heading">VCET</h3>
          </Grid>
          <Grid item>
            <Grid container direction="row" alignItems="center">
              <Button
                endIcon={<ExitToAppIcon className="white" />}
                onClick={signOut}
              >
                <h5 className="mon white">Logout</h5>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
      <AlertDialog
        SetOpen={OpenDialog}
        handleClose={handleCloseDialog}
        title="Confirm"
        content="Are you sure you want to logout?"
        handleConfirm={doneSignOut}
        confirmButtonColorSecondary={true}
      />
      <Drawer
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <DrawerItems />
      </Drawer>
    </AppBar>
  );
};

export default Header;
