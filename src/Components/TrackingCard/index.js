import './TrackingCard.css';
import { Card, CardContent, CardMedia } from '@mui/material';

export function TrackingCard({ id, title, text, url, removeFromList }) {
  const itemDrop = (event) => {
    event.dataTransfer.setData('text/plain', id);
  };

  return (
    <Card
      className='tracking-card-container'
      elevation={0}
      draggable
      onDragStart={itemDrop}
      onDragOver={() => console.log('estan sobre mi')}>
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
