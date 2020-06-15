import React, { useEffect, useState } from "react";
import ScreenProps from "../ScreenProps";
import { View, StatusBar } from "react-native";
import { getIsExistingUser, setIsExistingUser } from "../thoughtstore";
import { newThought, Thought } from "../thoughts";
import Constants from "expo-constants";
import theme from "../theme";
import { get } from "lodash";
import { userStartedPrediction } from "./predictions/stats";
import * as flagstore from "../flagstore";
import { addTagsToUser } from "../id";
import ExerciseButton from "./exercises/ExerciseButton";
import {
  NavigationScreenProp,
  NavigationAction,
  NavigationState, 
} from "react-navigation";
// @ts-ignore
import InvertibleScrollView from "react-native-invertible-scroll-view";
import Feed from "./feed/Feed";
import { passesFeatureFlag } from "../featureflags";
import cbt101 from "../articles/content/cbt101";

const ExerciseButtons = ({
  navigation,
  showDoThisFirstButton
}: {
  navigation: NavigationScreenProp<NavigationState, NavigationAction>;
  showDoThisFirstButton: boolean,
}) => {
  const [showProgression, setShowProgression] = useState(false);

  useEffect(() => {
    passesFeatureFlag("awareness-1", 3).then((passes: any) => {
      setShowProgression(!!passes);
    });
  });

  return (
    <View
      style={{
        backgroundColor: theme.offwhite,
        borderTopWidth: 1,
        borderColor: theme.lightGray,
        paddingTop: 12,
        paddingBottom: 24,
      }}
    >
      {showDoThisFirstButton && (      
        <ExerciseButton
          hasYourAttention={true}
          title="Do this first!"
          hint="Learn about CBT and how it can help you."
          featherIconName="book-open"
          onPress={() =>
            navigation.navigate('MARKDOWN_ARTICLE_SCREEN', {
              pages: cbt101.pages,
              title: cbt101.title,
              description: cbt101.description,
            })
          }
        />
      )}
      <ExerciseButton
        title="New Prediction"
        hint="Manage anxiety around upcoming events or tasks."
        featherIconName="cloud-drizzle"
        onPress={async () => {
          userStartedPrediction();

          if (
            !(await flagstore.get("has-seen-prediction-onboarding", "false"))
          ) {
            navigation.navigate('PREDICTION_ONBOARDING_SCREEN');
            flagstore.setTrue("has-seen-prediction-onboarding");
            return;
          }

          navigation.navigate('ASSUMPTION_SCREEN');
        }}
      />
      <ExerciseButton
        title="New Automatic Thought"
        hint="Challenge your in-the-moment automatic negative thoughts."
        featherIconName="message-square"
        onPress={() => navigation.navigate('AUTOMATIC_THOUGHT_SCREEN')}
      />
    </View>
  );
};

export default class MainScreen extends React.Component<
  ScreenProps,
  {
    thought?: Thought;
    showDoThisFirstButton: boolean
  }
> {
  static navigationOptions = {
    header: () => <></>,
  };

  constructor(props: any) {
    super(props);
    this.state = {
      thought: undefined,
      showDoThisFirstButton: false,
    };
  }

  componentDidMount() {
    
    getIsExistingUser().then((isExisting: boolean) => {
      if (!isExisting) {
        this.setState({ showDoThisFirstButton: true });
        setIsExistingUser();
      }
    });

    this.props.navigation.addListener("willFocus", args => {
      const thought = get(args, "action.params.thought", newThought());
      this.setState({
        thought,
      });
    });
  }

  render() {
    return (
      <View
        style={{
          paddingTop: Constants.statusBarHeight,
          backgroundColor: "white",
          flex: 1,
          justifyContent: "space-between",
        }}
      >
        <StatusBar barStyle="dark-content" hidden={false} />

        <InvertibleScrollView
          inverted
          style={{
            flex: 1,
          }}
        >
          <ExerciseButtons navigation={this.props.navigation} showDoThisFirstButton={this.state.showDoThisFirstButton}/>
          <Feed navigation={this.props.navigation} />
        </InvertibleScrollView>
      </View>
    );
  }
}
