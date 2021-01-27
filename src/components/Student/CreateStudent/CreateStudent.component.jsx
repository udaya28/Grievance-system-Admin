import React from 'react';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Grid from '@material-ui/core/Grid';
import MenuItem from '@material-ui/core/MenuItem';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import './createStudent.styles.css';
import Container from '@material-ui/core/Container';
const CreateStudent = () => {
  return (
    <Container maxWidth="md">
      <h1 style={{textAlign:"left",margin:"10px 0px 0px"}}>Create Student</h1>
      <FormGroup className="form-group1">
        <Grid container>
          <Grid items xs={12} sm={6}>
            <FormControl className="form-component">
              <TextField
                id="outlined-basic"
                label="First Name"
                variant="outlined"
                // value={title}
                // onInput={handleTitle}
                // error={ValidationState && title === ''}
              />
            </FormControl>
          </Grid>
          <Grid items xs={12} sm={6}>
            <FormControl className="form-component">
              <TextField
                id="outlined-basic"
                label="Second Name"
                variant="outlined"
                // value={title}
                // onInput={handleTitle}
                // error={ValidationState && title === ''}
              />
            </FormControl>
          </Grid>

          <Grid items xs={12} sm={6}>
            <FormControl className="form-component">
              <TextField
                id="outlined-basic"
                label="Roll Number"
                variant="outlined"
                // value={title}
                // onInput={handleTitle}
                // error={ValidationState && title === ''}
              />
            </FormControl>
          </Grid>
          <Grid items xs={12} sm={6}>
            <FormControl className="form-component">
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                // value={title}
                // onInput={handleTitle}
                // error={ValidationState && title === ''}
              />
            </FormControl>
          </Grid>

          <Grid items xs={12} sm={6}>
            <FormControl className="form-component">
              <TextField
                id="outlined-basic"
                label="Department Name"
                variant="outlined"
                // value={title}
                // onInput={handleTitle}
                // error={ValidationState && title === ''}
              />
            </FormControl>
          </Grid>
          <Grid items xs={12} sm={6}>
            <FormControl className="form-component">
              <TextField
                id="outlined-basic"
                label="Joint Year"
                variant="outlined"
                // value={title}
                // onInput={handleTitle}
                // error={ValidationState && title === ''}
              />
            </FormControl>
          </Grid>

          <Grid items xs={12} sm={6}>
            <FormControl className="form-component">
              <TextField
                id="outlined-basic"
                label="Gender"
                variant="outlined"
                // value={title}
                // onInput={handleTitle}
                // error={ValidationState && title === ''}
              />
            </FormControl>
          </Grid>
          <Grid items xs={12} sm={6}>
            <FormControl className="form-component">
              <TextField
                id="outlined-basic"
                label="Date of Birth"
                helperText="Date in DD-MM-YYYY"
                variant="outlined"
                // value={title}
                // onInput={handleTitle}
                // error={ValidationState && title === ''}
              />
            </FormControl>
          </Grid>
          <Grid container justify="flex-end">
          <Button
            variant="contained"
            color="primary"
            endIcon={<SendIcon />}
            // onClick={handleFormSubmit}
          >
            Create
          </Button>
        </Grid>
        </Grid>
      </FormGroup>
    </Container>
  );
};

export default CreateStudent;
