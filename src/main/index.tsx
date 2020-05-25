import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import ThoughtScreen from './ThoughtScreen';
import AutomaticThoughtScreen from './AutomaticThoughtScreen';
import DistortionScreen from './DistortionScreen';
import ChallengeScreen from './ChallengeScreen';
import AlternativeScreen from './AlternativeScreen';
import FeelingScreen from './FeelingScreen';
import FollowUpRequestScreen from './followups/FollowUpRequestScreen';
import FollowUpFeelingScreen from './followups/FollowUpFeelingScreen';
import FollowUpFeelingReviewScreen from './followups/FollowUpFeelingReviewScreen';
import FinishedScreen from './FinishedScreen';
import PredictionOnboardingScreen from "./predictions/PredictionOnboardingScreen";

export default createStackNavigator(
  {
    'THOUGHT_SCREEN': ThoughtScreen,
    'AUTOMATIC_THOUGHT_SCREEN': AutomaticThoughtScreen,
    'DISTORTION_SCREEN': DistortionScreen,
    'CHALLENGE_SCREEN': ChallengeScreen,
    'ALTERNATIVE_SCREEN': AlternativeScreen,
    'FEELING_SCREEN': FeelingScreen,
    'FOLLOW_UP_REQUEST_SCREEN': FollowUpRequestScreen,
    'FOLLOW_UP_FEELING_SCREEN': FollowUpFeelingScreen,
    'FOLLOW_UP_FEELING_REVIEW_SCREEN': FollowUpFeelingReviewScreen,
    'FINISHED_SCREEN': FinishedScreen,

    // predictions
    'PREDICTION_ONBOARDING_SCREEN': PredictionOnboardingScreen
  },
  {
    initialRouteName: 'THOUGHT_SCREEN',
  }
);
