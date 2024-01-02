import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { MuiTheme } from './cssTheme/MuiTheme.ts';
import { ThemeProvider } from '@mui/material';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
// import './index.css'
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// import './util/html/glass';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={MuiTheme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
