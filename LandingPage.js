import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import MapContainer from './MapContainer';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  mapContainer: {
    width: '80%',
    height: '80%',
    border: '1px solid #ccc',
    borderRadius: theme.shape.borderRadius,
    overflow: 'hidden',
  },
}));

const LandingPage = () => {
  const classes = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.mapContainer}>
        <MapContainer />
      </div>
    </Container>
  );
};

export default LandingPage;
