import { useLocation } from 'react-router-dom';
import './ComingSoonPage.style.scss';

export const ComingSoonPage = () => {
  const { state } = useLocation();
  
  return (
    <div className='comingSoonPage'>
      <h1 style={{ backgroundColor: state }}>Coming Soon</h1>
    </div>
  );
};
