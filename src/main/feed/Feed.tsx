import React from "react";
import haptic from "../../haptic";
import * as Haptic from "expo-haptics";
import ExerciseList from "../exercises/ExerciseList";
import CheckupPrompt from "../CheckupPrompt";
import { userFollowedUpOnPrediction } from "../predictions/stats";
import * as flagstore from "../../flagstore";
import SurveyPrompt from "../survey/SurveyPrompt";
import {
  NavigationScreenProp,
  NavigationAction,
  NavigationState,
} from "react-navigation";
import { getNextCheckupDate, Checkup } from "../../checkups/checkupstore";
import dayjs from "dayjs";
import { passesDayFilter, passesFeatureFlag } from "../../featureflags";
import { getSortedExerciseGroups, ExerciseGroup } from "../exercises/exercises";
import { Prediction } from "../predictions/predictionstore";
import { getPredictionState } from "../predictions/results";
import followUpState from "../followups/followUpState";
import { SavedThought } from "../../thoughts";
import { FadesIn } from "../../animations";

export default class Feed extends React.Component<
  {
    navigation: NavigationScreenProp<NavigationState, NavigationAction>;
  },
  {
    shouldFadeIn: boolean;
    shouldPromptCheckup: boolean;
    groups: ExerciseGroup[];
    areExercisesLoaded: boolean;
  }
> {
  state = {
    shouldFadeIn: false,
    shouldPromptCheckup: false,
    groups: [],
    areExercisesLoaded: false,
  };

  componentDidMount() {
    this.loadExercises();
    this.loadShouldPromptCheckup();

    setTimeout(
      () =>
        this.setState({
          shouldFadeIn: true,
        }),
      150
    );
  }

  loadExercises = () => {
    getSortedExerciseGroups()
      .then(groups => {
        this.setState({ groups });
      })
      .catch(console.error)
      .finally(() => {
        this.setState({
          areExercisesLoaded: true,
        });
      });
  };

  loadShouldPromptCheckup = async () => {
    const date = await getNextCheckupDate();
    this.setState({
      shouldPromptCheckup: dayjs().isAfter(dayjs(date)),
    });
  };

  navigateToCheckupViewer = async (checkup: Checkup) => {
    // this.props.navigation.push('CHECKUP_SUMMARY_SCREEN', {
    //   checkup,
    // });
  };

  navigateToPredictionViewer = async (prediction: Prediction) => {
    if (getPredictionState(prediction) === "ready") {
      userFollowedUpOnPrediction(false);
      this.props.navigation.navigate('PREDICTION_FOLLOW_UP_SCREEN', {
        prediction,
      });
      return;
    }

    this.props.navigation.navigate('PREDICTION_SUMMARY_SCREEN', {
      prediction,
    });
  };

  navigateToSurveyScreen = async () => {
    await flagstore.setTrue("has-been-surveyed");
    this.props.navigation.navigate('SURVEY_SCREEN');
  };

  navigateToViewerWithThought = (thought: SavedThought) => {
    haptic.impact(Haptic.ImpactFeedbackStyle.Light);

    // Follow-ups
    if (followUpState(thought) === "ready") {
      this.props.navigation.navigate('FOLLOW_UP_NOTE_SCREEN', {
        thought,
      });
      return;
    }

    // Regular finished screen
    this.props.navigation.navigate('FINISHED_SCREEN', {
      thought,
    });
  };

  render() {
    return (
      <FadesIn pose={this.state.shouldFadeIn ? "visible" : "hidden"}>
        <ExerciseList
          groups={this.state.groups}
          historyButtonLabel={"alternative-thought"}
          navigateToThoughtViewer={this.navigateToViewerWithThought}
          navigateToCheckupViewer={this.navigateToCheckupViewer}
          navigateToPredictionViewer={this.navigateToPredictionViewer}
        />

        {this.state.shouldPromptCheckup && (
          <CheckupPrompt
            onPress={() => {
              this.props.navigation.navigate('CHECKUP_SCREEN');
              haptic.impact(Haptic.ImpactFeedbackStyle.Medium);
            }}
          />
        )}
      </FadesIn>
    );
  }
}
