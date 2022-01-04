import './App.css';
import React from 'react';
import { Container, Grid, Toolbar } from '@mui/material';
import { TrackingCard } from '../Components/TrackingCard';
import { TrackingContext } from '../Context/TrackingContext';
import { TrackingSection } from '../Components/TrackingSection';

export default function App() {
  const { trackingState, status } = React.useContext(TrackingContext);

  const filterByStatus = (status) => {
    return trackingState
      .filter((item) => item.status === status)
      .map((item, index) => (
        <TrackingCard
          id={item.id}
          index={index}
          key={index}
          title={item.title}
          text={item.title}
          url={item.url}
          status={item.status}
        />
      ));
  };

  const itemsBySectionRender = () => {
    return status.map((item, index) => (
      <Grid item md={4} key={index}>
        <TrackingSection
          listValue={item.value}
          title={item.title}
          color={item.color}>
          {filterByStatus(item.value)}
        </TrackingSection>
      </Grid>
    ));
  };

  return (
    <React.Fragment>
      <Toolbar>
        <Container>
          <h2>📃 Traking app</h2>
        </Container>
      </Toolbar>

      <Container>
        <Grid container spacing={4}>
          {itemsBySectionRender()}
        </Grid>
      </Container>
    </React.Fragment>
  );
}
