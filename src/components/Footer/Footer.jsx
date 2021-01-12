import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

const Footer = () => {
  return (
    <AppBar
      position="relative"
      style={{ top: 'auto', bottom: 0 }}
      color="primary"
    >
      <Grid container justify="space-between" style={{ padding: '10px 5px' }}>
        <Grid item sm={6} xs={12}>
          <Typography variant="caption">Copyright © 2021</Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Typography variant="caption">
            Developed By Udaya with ❤️
          </Typography>
          {/* Anonymous */}
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default Footer;
