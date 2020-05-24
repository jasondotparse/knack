import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ThoughtScreen from './ThoughtScreen';
import AutomaticThoughtScreen from './AutomaticThoughtScreen';
import DistortionScreen from './DistortionScreen';

export default createStackNavigator(
  {
    'THOUGHT_SCREEN': ThoughtScreen,
    'AUTOMATIC_THOUGHT_SCREEN': AutomaticThoughtScreen,
    'DISTORTION_SCREEN': DistortionScreen
  },
  {
    initialRouteName: 'THOUGHT_SCREEN',
  }
);
