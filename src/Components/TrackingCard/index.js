import './TrackingCard.css';
import React from 'react';
import { TrackingContext } from '../../Context/TrackingContext';
import { Card, CardContent, CardMedia } from '@mui/material';

export function TrackingCard({ id, title, text, url, index, status }) {
  const { trackingState, draggedItemId, setDraggedItemId, setTrackingState } =
    React.useContext(TrackingContext);

  const itemDrop = (event) => {
    setDraggedItemId(id);
    event.dataTransfer.setData('text/plain', id);
  };

  const onDragOver = () => {
    if (draggedItemId !== id) {
      const element = trackingState.filter((item) => item.id === draggedItemId);
      let items = trackingState.filter((item) => item.id !== draggedItemId);
      items.splice(index, 0, element[0]);
      setTrackingState(items);
    }
  };

  return (
    <Card
      className='tracking-card-container'
      elevation={0}
      draggable
      onDragStart={itemDrop}
      onDragOver={onDragOver}>
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
