/* external imports */
import { Route, Routes } from 'react-router-dom';

/* internal components */
import App from '../../App';
function RouteConfig() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
  );
}

export default RouteConfig;
