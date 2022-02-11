import React from 'react';
import {ThemeProvider} from 'styled-components';
import theme from './styles/theme';
import Routes from './routes';
import AppProvider from './AppProviders';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppProvider>
        <Routes />
      </AppProvider>
    </ThemeProvider>
  );
};

export default App;
