import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import orange from '@material-ui/core/colors/orange';
import amber from '@material-ui/core/colors/amber';

const theme = createMuiTheme({
  palette: {
    primary: orange,
    secondary: amber,
  },  
});

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <App />
    </ThemeProvider>
, document.getElementById('root'));