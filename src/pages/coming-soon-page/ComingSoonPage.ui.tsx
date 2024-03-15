import { useLocation } from 'react-router-dom';

export const ComingSoonPage = () => {
  const { state } = useLocation();
  
  return (
    <div style={{ backgroundColor: state }}>
      <h1>Coming Soon</h1>
    </div>
  );
};
