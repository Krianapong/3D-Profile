import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Link } from 'react-router-dom'; // Import Link from React Router

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  link: {
    textDecoration: 'none',
    color: 'inherit',
  },
}));

const NavigationBar: React.FC = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Your Logo/Brand
          </Typography>
          <Button component={Link} to="/" className={classes.link}>Home</Button>
          <Button component={Link} to="/about" className={classes.link}>About</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavigationBar;
