import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ThoughtScreen from './ThoughtScreen';
import AutomaticThoughtScreen from './AutomaticThoughtScreen';

export default createStackNavigator(
  {
    'THOUGHT_SCREEN': ThoughtScreen,
    'AUTOMATIC_THOUGHT_SCREEN': AutomaticThoughtScreen,
  },
  {
    initialRouteName: 'THOUGHT_SCREEN',
  }
);
