import './TrackingCard.css';
import { Card, CardContent, CardMedia } from '@mui/material';

export function TrackingCard({ title, text, url }) {
  return (
    <Card className='tracking-card-container' elevation={0} draggable>
      {url && (
        <CardMedia component='img' image={url} height={150} draggable={false} />
      )}
      <CardContent>
        <h3 className='tracking-card__title'>{title}</h3>
        <p className='tracking-card__text'>{text}</p>
      </CardContent>
    </Card>
  );
}
