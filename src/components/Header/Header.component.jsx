import { AppBar, Grid, IconButton, Toolbar } from '@material-ui/core';
import { React } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import './Header.styles.css'
const Header = () => {
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
            <IconButton>
              <MenuIcon className="white" />
            </IconButton>
          </Grid>
          <Grid item>
            <h3 className="mon">VCET</h3>
          </Grid>
          <Grid item>
            <Grid container direction="row" alignItems="center">
              <Button endIcon={<ExitToAppIcon className="white" />}>
                <h4 className="mon white">
                  Sign Out
                </h4>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
