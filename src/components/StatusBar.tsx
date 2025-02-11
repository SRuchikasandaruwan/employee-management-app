import React from 'react';
import { StatusBar, Platform } from 'react-native';

const AppStatusBar = () => {
  return (
    <StatusBar
    barStyle={'dark-content'}
    //   barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      backgroundColor="#FFFFFF" // Set your preferred background color
    //   translucent={false} // Set to true if you want to make it transparent
    />
  );
};

export default AppStatusBar;
