import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import PasswordGenerator from './Components/PasswordGenerator.jsx';
import './styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PasswordGenerator />
  </StrictMode>,
);
