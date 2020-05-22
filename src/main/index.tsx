import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ThoughtScreen from './ThoughtScreen';

export default createStackNavigator(
  {
    'THOUGHT_SCREEN': ThoughtScreen,
  },
  {
    initialRouteName: 'THOUGHT_SCREEN',
  }
);
