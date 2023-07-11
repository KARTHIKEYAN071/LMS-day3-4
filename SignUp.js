import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Grid, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import "./signup.css"
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme();

export const SignUp = () => {
  
  return (
    <ThemeProvider theme={theme}>
      
      <div className='main' >
      </div>
        <div className='form'>
      <Container className='container' component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 0,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor:'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate  sx={{ mt: 3 }}>
          <form >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '4px solid blue!important',
                    },
                  },
                }}
                  name="firstName"
                  required
                  fullWidth
                  label="First Name"
                  type="text"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '4px solid blue!important',
                    },
                  },
                }}
                  required
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  type="text"
                />
              </Grid>
                  <Grid item xs={12}>
                    <TextField
                    InputProps={{
                      sx: {
                        '&:focus-within fieldset, &:focus-visible fieldset': {
                          border: '4px solid blue!important',
                        },
                      },
                    }}
                      required
                      fullWidth
                      name="Roll No"
                      label="Roll No"
                      type="number"
                    />
                    </Grid>
                  <Grid item xs={12}>
                    <TextField
                    InputProps={{
                      sx: {
                        '&:focus-within fieldset, &:focus-visible fieldset': {
                          border: '4px solid blue!important',
                        },
                      },
                    }}
                      required
                      fullWidth
                      name="Date of Birth"
                      label="Date of Birth"
                      type="text"
                    />
                    </Grid>
              <Grid item xs={12}>
                <TextField
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '4px solid blue!important',
                    },
                  },
                }}
                  required
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '4px solid blue!important',
                    },
                  },
                }}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '4px solid blue!important',
                    },
                  },
                }}
                  required
                  fullWidth
                  name="conform password"
                  label="Conform Password"
                  type="password"
                  />
              </Grid>
              <Grid item xs={12}>
                <TextField
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '4px solid blue!important',
                    },
                  },
                }}
                  required
                  fullWidth
                  name="Gender"
                  label="Gender"
                  type="text"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                InputProps={{
                  sx: {
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                      border: '4px solid blue!important',
                    },
                  },
                }}
                  required
                  fullWidth
                  name="phone no"
                  label="Phone No"
                  type="tel"
                  
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="Accept Terms and Conditions."/>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/"><button>Already have an account? Login</button></Link>
              </Grid>
            </Grid>
      </form>
          </Box>
        </Box>
        
      </Container>
      </div>
      
    </ThemeProvider>
  );
       
}

export default SignUp;