import LoginWindow from './components/login/LoginWindow.component'
import React from 'react';

import '98.css';
import CustomThemeProvider from '../src/styles/CustomThemeProvider';
import theme from '../src/styles/theme';
export default function Root() {
  return (
    <CustomThemeProvider theme={theme}>
      <LoginWindow></LoginWindow>
    </CustomThemeProvider>
  );
}