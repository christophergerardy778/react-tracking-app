import React from 'react';
import { useTrackingHook } from '../Hooks/useTrackingHook';

const TrackingContext = React.createContext();

function TrackingProvider({ children }) {
  const {
    status,
    trackingState,
    draggedItemId,
    setDraggedItemId,
    setTrackingState,
  } = useTrackingHook([
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

  return (
    <TrackingContext.Provider
      value={{
        status,
        trackingState,
        draggedItemId,
        setDraggedItemId,
        setTrackingState,
      }}>
      {children}
    </TrackingContext.Provider>
  );
}

export { TrackingContext, TrackingProvider };
