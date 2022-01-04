import './TrackingSection.css';
import React from 'react';
import { TrackingContext } from '../../Context/TrackingContext';
import { IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

export function TrackingSection({ title, color, listValue, children }) {
  const { setTrackingState } = React.useContext(TrackingContext);
  const colorHightLight = { color };

  const onDropItem = (event) => {
    const id = event.dataTransfer.getData('text/plain');

    setTrackingState((state) => {
      const list = [...state];
      const index = state.findIndex((e) => e.id === id);
      list[index].status = listValue;
      return list;
    });
  };

  return (
    <div onDragOver={(e) => e.preventDefault()} onDrop={onDropItem}>
      <div className='tracking-section'>
        <h3 className='tracking-section__title'>
          {title}{' '}
          <span style={colorHightLight}>
            ({React.Children.count(children)})
          </span>
        </h3>
        <IconButton className='tracking-section__icon'>
          <AddIcon fontSize='inherit' />
        </IconButton>
      </div>
      <div className='tracking-section__content'>{children}</div>
    </div>
  );
}
