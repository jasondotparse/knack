import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ThoughtScreen from './ThoughtScreen';
import AutomaticThoughtScreen from './AutomaticThoughtScreen';
import DistortionScreen from './DistortionScreen';
import ChallengeScreen from './ChallengeScreen';
import AlternativeScreen from './AlternativeScreen';
import FeelingScreen from './FeelingScreen';

export default createStackNavigator(
  {
    'THOUGHT_SCREEN': ThoughtScreen,
    'AUTOMATIC_THOUGHT_SCREEN': AutomaticThoughtScreen,
    'DISTORTION_SCREEN': DistortionScreen,
    'CHALLENGE_SCREEN': ChallengeScreen,
    'ALTERNATIVE_SCREEN': AlternativeScreen,
    'FEELING_SCREEN': FeelingScreen
  },
  {
    initialRouteName: 'THOUGHT_SCREEN',
  }
);
