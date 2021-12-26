import { Container, Grid } from '@mui/material';
import React from 'react';
import { TrackingCard } from '../Components/TrackingCard';
import { TrackingSection } from '../Components/TrackingSection';
import './App.css';

function App() {
  const status = [
    { title: 'Todo', value: 0, color: '#FF5B6F' },
    { title: 'On Progress', value: 1, color: '#7C5BFF' },
    { title: 'Completed', value: 2, color: '#5BE2FF' },
  ];

  const [trackingItems, setTrackingItems] = React.useState([
    {
      id: '19',
      title: 'Card Pending #1',
      text: 'please move me to on progress',
      position: 1,
      status: 0,
      url: 'https://data.designervn.net/2021/03/13341_8cf8baff2f213572b3a3109f9c1880e2.jpg',
    },
    {
      id: '5',
      title: 'Card Pending #2',
      text: 'please move me to on progress #2',
      position: 2,
      status: 0,
    },

    {
      id: '21',
      title: 'Card on progress #1',
      text: 'please move me to completed',
      position: 1,
      status: 1,
    },
    {
      id: '20',
      title: 'Card on progress #2',
      text: 'please move me to on progress',
      position: 2,
      status: 1,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwh9bbwVhLlBVEooxALNVRII1rr80Ks4dGkA&usqp=CAU',
    },
    {
      id: '60',
      title: 'Card completed #1',
      text: 'please move me to todo',
      position: 1,
      status: 2,
      url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX8JiI740iRl_Y68znZcb24zhXJsEufMSxORtyxZx-33i7rD6sx8aJRcoFRufWwjbqQEU&usqp=CAU',
    },
  ]);

  const filterByStatus = (status) => {
    return trackingItems
      .filter((item) => item.status === status)
      .map((item, index) => (
        <TrackingCard
          id={item.id}
          key={index}
          title={item.title}
          text={item.title}
          url={item.url}
        />
      ));
  };

  return (
    <div className='App'>
      <Container>
        <Grid container spacing={4}>
          {status.map((item, index) => (
            <Grid item md={4} key={index}>
              <TrackingSection
                listValue={item.value}
                title={item.title}
                color={item.color}
                setList={setTrackingItems}>
                {filterByStatus(item.value)}
              </TrackingSection>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
