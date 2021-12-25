import './TrackingSection.css';
import AddIcon from '@mui/icons-material/Add';
import { IconButton } from '@mui/material';

export function TrackingSection({ title, color, children }) {
  const trackingElementDroped = () => console.log('wow');

  const colorHightLight = { color };

  return (
    <div onDrop={trackingElementDroped}>
      <div className='tracking-section'>
        <h3 className='tracking-section__title'>
          {title} <span style={colorHightLight}>(5)</span>
        </h3>
        <IconButton className='tracking-section__icon'>
          <AddIcon fontSize='inherit' />
        </IconButton>
      </div>
      <div className='tracking-section__content'>{children}</div>
    </div>
  );
}
