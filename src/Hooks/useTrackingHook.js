import React from 'react';

export function useTrackingHook(initialState) {
  const status = [
    { title: 'Todo', value: 0, color: '#FF5B6F' },
    { title: 'On Progress', value: 1, color: '#7C5BFF' },
    { title: 'Completed', value: 2, color: '#5BE2FF' },
  ];

  const [trackingState, setTrackingState] = React.useState(initialState);

  const [draggedItemId, setDraggedItemId] = React.useState(0);

  return {
    status,
    trackingState,
    draggedItemId,
    setDraggedItemId,
    setTrackingState,
  };
}
