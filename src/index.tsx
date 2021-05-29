import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from '@material-ui/styles';
import GeneralTheme from './GeneralTheme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={GeneralTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
