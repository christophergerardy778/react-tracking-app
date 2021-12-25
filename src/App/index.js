import { Container, Grid } from '@mui/material';
import { TrackingCard } from '../Components/TrackingCard';
import { TrackingSection } from '../Components/TrackingSection';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Container>
        <Grid container spacing={4}>
          <Grid item md={4}>
            <TrackingSection title='Todo' color='#FF5B6F'>
              <TrackingCard
                title='Go to shopping at 9:00 pm'
                text='Mom need a new washmachine for christmas'
              />
              <TrackingCard
                title='Go to shopping at 9:00 pm'
                text='Mom need a new washmachine for christmas'
              />
            </TrackingSection>
          </Grid>
          <Grid item md={4}>
            <TrackingSection title='On Process' color='#7C5BFF'>
              <TrackingCard
                title='Go to cinema and invite Mark'
                text='My friend Mark we need to go to cinema cause he loves super heroe movies like spiderman'
                url='https://blog.tubikstudio.com/wp-content/uploads/2021/02/creative-workspaces-illustrations-tubikarts-3-1024x768.jpg'
              />
            </TrackingSection>
          </Grid>
          <Grid item md={4}>
            <TrackingSection title='Completed' color='#5BE2FF'>
              <TrackingCard
                title='Merry Christmas'
                text='Im Christopher and I´m a Web Developer i wish u have a Great day'
              />
            </TrackingSection>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
