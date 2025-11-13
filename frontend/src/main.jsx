import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';
// import { LanguageProvider } from "./contexts/LanguageContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        {/* <LanguageProvider> */}
        <AuthProvider>
          <App />
        </AuthProvider>
        {/* </LanguageProvider> */}
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);
