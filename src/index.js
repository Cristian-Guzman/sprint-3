import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { store } from './redux/store/store';
import AppRouter from './routers/AppRouter';
import { theme } from './styles/GlobalStyles';

import './styles/normalize.css'

ReactDOM.render(
    <ThemeProvider theme={theme}>
    <Provider store={store}>
      <AppRouter />
    </Provider>
    </ThemeProvider>,
  document.getElementById('root')
);

