import React from "react";
import { View, Keyboard } from "react-native";
import theme from "../theme";
import { ActionButton } from "../ui";
import ScreenProps from "../ScreenProps";
import haptic from "../haptic";
import * as Haptic from "expo-haptics";
import { Platform } from "@unimodules/core";

export const TAB_BAR_HEIGHT = 76;

export default class extends React.Component<ScreenProps> {
  private keyboardDidShowListener: any;
  private keyboardDidHideListener: any;

  state = {
    hidden: false,
  };

  _keyboardDidShow = () => {
    if (Platform.OS === "android") {
      this.setState({
        hidden: true,
      });
    }
  };

  _keyboardDidHide = () => {
    if (Platform.OS === "android") {
      this.setState({
        hidden: false,
      });
    }
  };

  componentDidMount() {
    this.keyboardDidShowListener = Keyboard.addListener(
      "keyboardDidShow",
      this._keyboardDidShow
    );
    this.keyboardDidHideListener = Keyboard.addListener(
      "keyboardDidHide",
      this._keyboardDidHide
    );
  }

  componentWillUnmount() {
    this.keyboardDidShowListener.remove();
    this.keyboardDidHideListener.remove();
  }

  render() {
    const { navigation } = this.props;

    const index = navigation.state.index;
    const tab = navigation.state.routes[index].key;

    // Hide if we're just hidden from the keyboard
    if (this.state.hidden) {
      return null;
    }

    return (
      <View
        style={{
          backgroundColor: "white",
          height: TAB_BAR_HEIGHT,
          borderTopColor: theme.lightGray,
          borderTopWidth: 1,
          paddingBottom: 24,

          paddingTop: 12,
          flexDirection: "row",
          justifyContent: "space-between",
          zIndex: 100,
          position: "relative",
        }}
      >
        <ActionButton
          title="Settings"
          width={100}
          fillColor={tab === 'SETTING_SCREEN' ? theme.lightBlue : "white"}
          textColor={
            tab === 'SETTING_SCREEN' ? theme.darkBlue : theme.veryLightText
          }
          style={{
            marginHorizontal: 4,
            padding: 0,
            borderWidth: 0,
            borderBottomWidth: 0,
          }}
          onPress={() => {
            haptic.impact(Haptic.ImpactFeedbackStyle.Light);
            navigation.navigate('SETTING_SCREEN');
          }}
        />
        <ActionButton
          title="Thoughts"
          width={100}
          fillColor={tab === 'MAIN_SCREEN' ? theme.lightBlue : "white"}
          textColor={tab === 'MAIN_SCREEN' ? theme.darkBlue : theme.veryLightText}
          style={{
            marginHorizontal: 4,
            padding: 0,
            borderWidth: 0,
            borderBottomWidth: 0,
          }}
          onPress={() => {
            haptic.impact(Haptic.ImpactFeedbackStyle.Light);
            navigation.navigate('MAIN_SCREEN');
          }}
        />
        <ActionButton
          title="Learn"
          width={100}
          fillColor={tab === 'MAIN_SCREEN' ? theme.lightBlue : "white"}
          textColor={
            tab === 'MAIN_SCREEN' ? theme.darkBlue : theme.veryLightText
          }
          style={{
            marginHorizontal: 4,
            padding: 0,
            borderWidth: 0,
            borderBottomWidth: 0,
          }}
          onPress={() => {
            haptic.impact(Haptic.ImpactFeedbackStyle.Light);
            navigation.navigate('MAIN_SCREEN');
          }}
        />
      </View>
    );
  }
}
