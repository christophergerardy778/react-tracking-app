import './TrackingSection.css';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';
import React from 'react';

export function TrackingSection({
  title,
  color,
  listValue,
  setList,
  children,
}) {
  const colorHightLight = { color };

  const onDropItem = (event) => {
    const id = event.dataTransfer.getData('text/plain');

    setList((state) => {
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
